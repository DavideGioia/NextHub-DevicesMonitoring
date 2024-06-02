const dataConv = require('../dataConv.js');
const settings = require('../settings.js');
let db = settings.db;

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
module.exports = check477;