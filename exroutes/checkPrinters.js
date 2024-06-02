const snmp = require("net-snmp");
const settings = require('./settings.js');
const puppeteer = require('puppeteer');

const mysql = require("mysql2");

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Kulo123!',
    database: "nh_printchecker"
});
exports.printerList = checkPrinters();

async function checkPrinters() {
    let printerChecked = 0;
    var printers = await db.promise().query('SELECT * FROM printer');
    var maxID = await db.promise().query('SELECT MAX(ID) AS maxid FROM printer');
    for (i = 0; i < maxID[0][0].maxid; i ++) {
        let printer = printers[0][i];
        let oids = getOids(printer);
        let session= snmp.createSession( printer.ip, "public" );
        session.get( oids, function (e,vb) {
            try {
                db.query("UPDATE printer SET error = ? WHERE ID = ?", [0, printer.ID]);
                check(vb, printer);
                if(vb == undefined) {
                    db.query("UPDATE printer SET error = ? WHERE ID = ?", [1, printer.ID]); 
                }
                printerChecked++;
            } catch (e) {
                db.query("UPDATE printer SET error = ? WHERE ID = ?", [1, printer.ID]);
                printerChecked--;
                //console.log(printer.name + ": " + e);
                //session.trap ( snmp.TrapType.LinkDown, console.log("Trap error: "+e),[] );                
            }
        })
    }
    return (printers);
}
function check(vb, printer) {
    switch (printer.model) {
        case "477":
            check477(vb, printer);
            break;
        case "P77":
            check477(vb, printer);
            break;
        case "MFP":
            checkMFP(vb, printer);
            break;
        case "XEROX":
            checkXEROX(vb, printer);
            break;
        case "OTHER":
            checkOTHER(vb, printer);
            break;
    }
}

function check477(vb, printer) {
    if (printer.model == "477") {
        ye= (Math.round((vb[1].value*69)/vb[0].value))*100;
        ma= (Math.round((vb[3].value*69)/vb[2].value))*100;
        cy= (Math.round((vb[5].value*69)/vb[4].value))*100;
        bk= (Math.round((vb[7].value*100)/vb[6].value))*100;
    } else {
        ye= (Math.round((vb[1].value*160)/vb[0].value))*100;
        ma= (Math.round((vb[3].value*160)/vb[2].value))*100;
        cy= (Math.round((vb[5].value*160)/vb[4].value))*100;
        bk= (Math.round((vb[7].value*200)/vb[6].value))*100;
    }
    let [Ye, yeCh] = dataConv(vb[8].value, printer.model);
    let [Ma, maCh] = dataConv(vb[9].value, printer.model);
    let [Cy, cyCh] = dataConv(vb[10].value, printer.model);
    let [Bk, bkCh] = dataConv(vb[11].value, printer.model);
    
    db.query("UPDATE black SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [bk, (Math.round((vb[7].value*100)/vb[6].value)), Bk, bkCh, printer.ID]);
    db.query("UPDATE yellow SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [ye, (Math.round((vb[1].value*100)/vb[0].value)), Ye, yeCh, printer.ID]);
    db.query("UPDATE magenta SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [ma, (Math.round((vb[3].value*100)/vb[2].value)), Ma, maCh, printer.ID]);
    db.query("UPDATE cyan SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [cy,(Math.round((vb[5].value*100)/vb[4].value)), Cy, cyCh, printer.ID]);
    
}

async function checkMFP(vb, printer) {
    let bk, ye, ma, cy;
    let dates = await MFPData(printer);
    [ye, yeCh] = dataConv(dates.yellow, printer.model);
    [ma, maCh] = dataConv(dates.magenta, printer.model);
    [cy, cyCh] = dataConv(dates.cyan, printer.model);
    [bk, bkCh] = dataConv(dates.black, printer.model);

    db.query("UPDATE black SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [(Math.round((vb[1].value*86)/vb[0].value))*100, (Math.round((vb[1].value*100)/vb[0].value)), bk, bkCh, printer.ID]);
    db.query("UPDATE yellow SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [(Math.round((vb[7].value*69)/vb[6].value))*100, (Math.round((vb[7].value*100)/vb[6].value)), ye, yeCh, printer.ID]);
    db.query("UPDATE magenta SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [(Math.round((vb[5].value*69)/vb[4].value))*100, (Math.round((vb[5].value*100)/vb[4].value)), ma, maCh, printer.ID]);
    db.query("UPDATE cyan SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [(Math.round((vb[3].value*69)/vb[2].value))*100, (Math.round((vb[3].value*100)/vb[2].value)), cy, cyCh, printer.ID]);
}

function checkXEROX(vb, printer) {
    db.query("UPDATE black SET pages = ?, percentage = ?, drum = ?, date = ? WHERE printerID = ?", [vb[4].value, (Math.round((vb[1].value*100)/vb[0].value)), (Math.round((vb[3].value*100)/vb[2].value)), "inesistente", printer.ID]);
}

function checkOTHER(vb, printer) {
    db.query("UPDATE black SET percentage = ?, date = ? WHERE printerID = ?", [(Math.round((vb[1].value*100)/vb[0].value)), "inesistente", printer.ID]);
}

function dataConv(color, model) {
    let dayStr; let monthStr;
    let data = [date = "non trovata", bool = 0]
    let year = Math.floor(color / 10000);
    let month = Math.floor((color%10000)/100);
    let day = color % 100;
    if (model == "MFP") {
        dayStr = day; monthStr = month;
        if (dayStr < 10) {dayStr = "0" + dayStr};
        if (monthStr < 10) {monthStr = "0" + monthStr}
        if (year != 1970) {
            data[0] = dayStr + "/" + monthStr + "/" + year; 
            let date = new Date(year, month-1, day);
            if (date > Date.now() - (1000 * 60 * 60 * 24 * 10)) {
                data[1] = 1;
            }
        }
    } else {
        dayStr = day; monthStr = month + 1;
        if (dayStr < 10) {dayStr = "0" + dayStr};
        if (monthStr < 10) {monthStr = "0" + monthStr}
        if (year != 1970) {
            data[0] = dayStr + "/" + monthStr + "/" + year; 
            let date = new Date(year, month, day);
            if (date > Date.now() - (1000 * 60 * 60 * 24 * 10)) {
                data[1] = 1;
            }
        }
    }

    return data;
}

async function MFPData(printer) {
    
    let browser =  await puppeteer.launch({
        headless: 'new',
        args: [ '--ignore-certificate-errors' ]
    });

    const page =  await browser.newPage();
    

    // trova la pagina
    try {
        await page.goto('https://' + printer.ip + '/hp/device/InternalPages/Index?id=SuppliesStatus');
    } catch {
        console.log("pagina non funzionante");
    }

    // attendere cartucce
    let colorList =  await page.evaluate( () => {
        let colors = {
            "yellow" : document.querySelector( '#YellowCartridge1-FirstInstallDate' ).innerHTML,
            "magenta" : document.querySelector( '#MagentaCartridge1-FirstInstallDate' ).innerHTML,
            "cyan" : document.querySelector( '#CyanCartridge1-FirstInstallDate' ).innerHTML,
            "black" : document.querySelector( '#BlackCartridge1-FirstInstallDate' ).innerHTML,
        };
        return (colors);
    });
    await browser.close();
    return(colorList);    
}

function getOids(printer) {
    let oids;
    if (printer.model == "XEROX") {
        oids = [  "1.3.6.1.2.1.43.11.1.1.8.1.1","1.3.6.1.2.1.43.11.1.1.9.1.1",    // [0][1]   Xerox Bk
                "1.3.6.1.2.1.43.11.1.1.8.1.6","1.3.6.1.2.1.43.11.1.1.9.1.6",    // [2][3]   Xerox Fotoricettore              
                "1.3.6.1.2.1.43.11.1.1.9.1.1"];   
    } else if (printer.model == "OTHER") {
        oids = ["1.3.6.1.2.1.43.11.1.1.8.1.1","1.3.6.1.2.1.43.11.1.1.9.1.1"];
    } else {
        oids =    [ "1.3.6.1.2.1.43.11.1.1.8.1.1","1.3.6.1.2.1.43.11.1.1.9.1.1",    // [0][1]   477 Ye, MFP Bk, Others Bk 
                "1.3.6.1.2.1.43.11.1.1.8.1.2","1.3.6.1.2.1.43.11.1.1.9.1.2",    // [2][3]   477 Ma, MFP Cy
                "1.3.6.1.2.1.43.11.1.1.8.1.3","1.3.6.1.2.1.43.11.1.1.9.1.3",    // [4][5]   477 Cy, MFP Ma
                "1.3.6.1.2.1.43.11.1.1.8.1.4","1.3.6.1.2.1.43.11.1.1.9.1.4",    // [6][7]   477 Bk, MFP Ye
                "1.3.6.1.4.1.11.2.3.9.4.2.1.4.1.10.1.1.8.1.0",                  // [8]      477 Ye data
                "1.3.6.1.4.1.11.2.3.9.4.2.1.4.1.10.1.1.8.2.0",                  // [9]      477 Ma data
                "1.3.6.1.4.1.11.2.3.9.4.2.1.4.1.10.1.1.8.3.0",                  // [10]     477 Cy data
                "1.3.6.1.4.1.11.2.3.9.4.2.1.4.1.10.1.1.8.4.0",                  // [11]     477 Bk data
            ]
    }
    return oids;
}