const puppeteer = require('puppeteer');
const settings = require('../settings.js');
let db = settings.db;
function checkBlacks(vb, printer){
    if(printer.model == "XEROX"){
        checkXEROX(vb, printer);
    } else {
        checkOTHER(vb, printer);
    }
}

async function checkXEROX(vb, printer) {
    let date = await data(printer);
    db.query("UPDATE black SET pages = ?, percentage = ?, drum = ?, date = ? WHERE printerID = ?", [vb[4].value, (Math.round((vb[1].value*100)/vb[0].value)), (Math.round((vb[3].value*100)/vb[2].value)), "non trovata", printer.ID]);
    
}

function checkOTHER(vb, printer) {
    db.query("UPDATE black SET percentage = ?, date = ? WHERE printerID = ?", [(Math.round((vb[1].value*100)/vb[0].value)), "non trovata", printer.ID]);
}

async function data(printer) {
    let browser =  await puppeteer.launch({
        headless: 'new',
        args: [ '--ignore-certificate-errors' ]
    });

    const page =  await browser.newPage();
    
    if(printer.model == "XEROX"){
        try {
            await page.goto('https://' + printer.ip + '/home/index.html#hashSupplies/hashHome');
        } catch {
            return "pagina non funzionante";
        }
    
        // attendere cartucce
        await page.waitForSelector('.xux-textOmittable-false');
        let blackDate =  await page.evaluate( () => {
            let black = document.querySelector('.xux-textOmittable-false').textContent;
            return black;
        });
        console.log(await blackDate);
        await browser.close();
        return(blackDate);
    }
    // } else {
    //     try {
    //         await page.goto('https://' + printer.ip + '???');
    //     } catch {
    //         return "pagina non funzionante";
    //     }
    
    //     // attendere cartucce
    //     let blackDate =  await page.evaluate( () => {
    //         return black = document.querySelector( '???' ).innerHTML
    //     });
    //     await browser.close();
    //     return(blackDate);
    // }    
}


module.exports = checkBlacks;