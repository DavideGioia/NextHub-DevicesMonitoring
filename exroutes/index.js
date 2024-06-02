// const fs = require('fs');
// const snmp = require("net-snmp");
var express = require('express');

const checkPrinters  = require("./checkPrinters.js");
const textPrinters  = require("./generateTxt.js");

const mysql = require("mysql2");

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Kulo123!',
    database: "nh_printchecker"
});

var router = express.Router();
// GET Homepage Website
router.get('/', async function(req, res, next) {
  var maxID = await db.promise().query('SELECT MAX(ID) AS maxid FROM printer');
  
  let allPrinters = [];
    for (i = 1; i < maxID[0][0].maxid; i ++) {
      let printer = await db.promise().query("SELECT * FROM printer WHERE ID = " + i);
      let toner_black = await db.promise().query("SELECT * FROM black WHERE ID = " + i);
      let toner_cyan = await db.promise().query("SELECT * FROM cyan WHERE ID = " + i);
      let toner_yellow = await db.promise().query("SELECT * FROM yellow WHERE ID = " + i);
      let toner_magenta = await db.promise().query("SELECT * FROM magenta WHERE ID = " + i);
      let printer_toners = [printer[0][0], toner_yellow[0][0], toner_magenta[0][0], toner_cyan[0][0], toner_black[0][0]];
      allPrinters.push(printer_toners);
    }
    

    let textPrinters = generateTxt(allPrinters, maxID[0][0].maxid);
  res.render('index', {printer: allPrinters, txt: textPrinters });

});

function generateTxt(printers, maxID) {
  let textPrinters = "";
  let below = 5000;
  textPrinters += "PEWEX: \n\n";
  printers.forEach(prnt => {
    let ye = prnt[1].pages;
    let ma = prnt[2].pages;
    let cy = prnt[3].pages;
    let bk = prnt[4].pages; 
    let tempYe, tempMa, tempCy, tempBk;
    if (prnt[0].society == "Pewex"){
      if (ye <= below && prnt[1].stock < 1 && ye != null) {tempYe = true;}
      if (ma <= below && prnt[2].stock < 1 && ma != null) {tempMa = true;}
      if (cy <= below && prnt[3].stock < 1 && cy != null) {tempCy = true;}
      if (bk <= below && prnt[4].stock < 1 && bk != null) {tempBk = true;}
      
      if (tempYe || tempMa || tempCy || tempBk){
        let tabs = tabsCalculator(prnt[0].name);
        textPrinters += prnt[0].name + tabs;
        if (tempYe){textPrinters += "Giallo " + ye + " ";}
        if (tempMa){textPrinters += "Magenta " + ma + " ";}
        if (tempCy){textPrinters += "Ciano " + cy + " ";}
        if (tempBk){textPrinters += "Nero " + bk + " ";}
        textPrinters += "\n";
      }
      
    }
  });
  textPrinters += "\nELITE: \n\n";
  printers.forEach(prnt => {
    let ye = prnt[1].pages;
    let ma = prnt[2].pages;
    let cy = prnt[3].pages;
    let bk = prnt[4].pages; 
    let tempYe, tempMa, tempCy, tempBk;
    if (prnt[0].society == "Elite"){
      if (ye <= below && prnt[1].stock < 1 && ye != null) {tempYe = true;}
      if (ma <= below && prnt[2].stock < 1 && ma != null) {tempMa = true;}
      if (cy <= below && prnt[3].stock < 1 && cy != null) {tempCy = true;}
      if (bk <= below && prnt[4].stock < 1 && bk != null) {tempBk = true;}
      
      if (tempYe || tempMa || tempCy || tempBk){
        let tabs = tabsCalculator(prnt[0].name);
        textPrinters += prnt[0].name + tabs;
        if (tempYe){textPrinters += "Giallo " + ye + " ";}
        if (tempMa){textPrinters += "Magenta " + ma + " ";}
        if (tempCy){textPrinters += "Ciano " + cy + " ";}
        if (tempBk){textPrinters += "Nero " + bk + " ";}
        textPrinters += "\n";
      }
      
    }
  });
  return (textPrinters);
}

function tabsCalculator(name){
  let tabsNumber = name.length;
  let tabs = "";
  switch (true) {
    case tabsNumber < 8:
      tabs = "\t\t\t\t";
      break;
    case tabsNumber < 16:
      tabs = "\t\t\t";
      break;
    case tabsNumber < 24:
      tabs = "\t\t";
      break;
    case tabsNumber < 32:
      tabs = "\t";
      break;
    case tabsNumber > 32:
      tabs = " ";
      break;
  }
  return tabs;
};

router.post('/', async function(req, res, next) {
  let printer = req.body.printerName;
  let action = req.body.tonerAction;
  let toner = req.body.tonerSelection;

  if (action == "insert") {
    db.query("UPDATE " + toner + " SET stock = stock + 1 WHERE printerID = " + printer);
  } else if (action == "remove") {
    db.query("UPDATE " + toner + " SET stock = stock - 1 WHERE printerID = " + printer + " AND stock > 0");
  }

  res.redirect('back');
  //res.render('index', {a: "foo"});
})

module.exports = router;