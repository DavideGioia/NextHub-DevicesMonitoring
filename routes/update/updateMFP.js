const puppeteer = require('puppeteer');
const dataConv = require('../dataConv.js');
const settings = require('../settings.js');
let db = settings.db;
async function checkMFP(vb, printer) {
    let bk, ye, ma, cy;
    let dates = await MFPData(printer);
    [ye, yeCh] = dataConv(dates.yellow, printer.model);
    [ma, maCh] = dataConv(dates.magenta, printer.model);
    [cy, cyCh] = dataConv(dates.cyan, printer.model);
    [bk, bkCh] = dataConv(dates.black, printer.model);

    let bkPerc = Math.round((vb[1].value*100)/vb[0].value);
    if (bkPerc < 0) {bkPerc = 0}
    let ylPerc = Math.round((vb[7].value*100)/vb[6].value);
    if (ylPerc < 0) {ylPerc = 0}
    let maPerc = Math.round((vb[5].value*100)/vb[4].value);
    if (maPerc < 0) {maPerc = 0}
    let cyPerc = Math.round((vb[3].value*100)/vb[2].value);
    if (cyPerc < 0) {cyPerc = 0}

    let bkPages = (Math.round((vb[1].value*86)/vb[0].value))*100;
    if (bkPages < 0) {bkPages = 0}
    let ylPages = (Math.round((vb[7].value*69)/vb[6].value))*100;
    if (ylPages < 0) {ylPages = 0}
    let maPages = (Math.round((vb[5].value*69)/vb[4].value))*100;
    if (maPages < 0) {maPages = 0}
    let cyPages = (Math.round((vb[3].value*69)/vb[2].value))*100;
    if (cyPages < 0) {cyPages = 0}


    

    db.query("UPDATE black SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [bkPages, bkPerc, bk, bkCh, printer.ID]);
    db.query("UPDATE yellow SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [ylPages, ylPerc, ye, yeCh, printer.ID]);
    db.query("UPDATE magenta SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [maPages, maPerc, ma, maCh, printer.ID]);
    db.query("UPDATE cyan SET pages = ?, percentage = ?, date = ?, changed = ? WHERE printerID = ?", [cyPages, cyPerc, cy, cyCh, printer.ID]);
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
        return "pagina non funzionante";
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

module.exports = checkMFP;