const settings = require('./settings.js');
let db = settings.db;


async function printerList() {
  let allPrinters = [];
  let maxID = await db.promise().query('SELECT MAX(ID) AS maxid FROM printer');
  for (i = 1; i < maxID[0][0].maxid + 1; i ++) {
    let printer = await db.promise().query("SELECT * FROM printer WHERE ID = " + i);
    let toner_black = await db.promise().query("SELECT * FROM black WHERE ID = " + i);
    let toner_cyan = await db.promise().query("SELECT * FROM cyan WHERE ID = " + i);
    let toner_yellow = await db.promise().query("SELECT * FROM yellow WHERE ID = " + i);
    let toner_magenta = await db.promise().query("SELECT * FROM magenta WHERE ID = " + i);
    let printer_toners = [printer[0][0], toner_yellow[0][0], toner_magenta[0][0], toner_cyan[0][0], toner_black[0][0]];
    allPrinters.push(printer_toners);
  }
  // console.log(allPrinters[0]);
  console.log("Lista stampanti generata");
  return allPrinters;
}

module.exports = printerList;