const settings = require('../settings.js');
let db = settings.db;

function updateStock(req) {
  let printer = req.body.printerName;
  let action = req.body.tonerAction;
  let toner = req.body.tonerSelection;
  if (action == "insert") {
      console.log("insert");
      db.query("UPDATE " + toner + " SET stock = stock + 1 WHERE printerID = " + printer);
  } else if (action == "remove") {
      db.query("UPDATE " + toner + " SET stock = stock - 1 WHERE printerID = " + printer + " AND stock > 0");
  }
}

module.exports = updateStock;
