const settings = require('./settings.js');
let db = settings.db;


async function printerList() {
  let allPrinters = [];
  let maxID;
  try {
    maxID = await db.promise().query('SELECT MAX(ID) AS maxid FROM printer');
  } catch (e) {
    console.error(e);
  }
  for (i = 1; i < maxID[0][0].maxid + 1; i ++) {
    let printer, toner_black, toner_cyan, toner_yellow, toner_magenta;
    try {
      printer = await db.promise().query("SELECT * FROM printer WHERE ID = " + i);
    } catch (e) {console.error(e) }
    try {
      toner_black = await db.promise().query("SELECT * FROM black WHERE ID = " + i);
    } catch (e) {console.error(e) }
    try {
      toner_cyan = await db.promise().query("SELECT * FROM cyan WHERE ID = " + i);
    } catch (e) {console.error(e) }
    try {
      toner_yellow = await db.promise().query("SELECT * FROM yellow WHERE ID = " + i);
    } catch (e) {console.error(e) }
    try {
      toner_magenta = await db.promise().query("SELECT * FROM magenta WHERE ID = " + i);
    } catch (e) {console.error(e) }

      printer_toners = [printer[0][0], toner_yellow[0][0], toner_magenta[0][0], toner_cyan[0][0], toner_black[0][0]];
      allPrinters.push(printer_toners);
  }
  // console.log(allPrinters[0]);
  console.log("Lista stampanti generata");
  return allPrinters;
}

module.exports = printerList;