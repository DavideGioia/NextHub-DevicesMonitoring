var express = require('express');
var router = express.Router();
const settings = require('./settings.js');

const mysql = require("mysql");

let printers = settings.printers;
// TOGLIERE APPENA POSSIBILE IL GET SU /SPREAD
router.get('/', function(req, res, next) {
  let database = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: 'Kulo123!',
      database: "nh_printchecker"
  });
  
  database.connect((err) => {
      if (err) {
        console.log("Errore durante la connessione al database:", err);
      } else {
        console.log("Connessione stabilita al database");
      }
  });

  // printers.forEach( (company,i) => {
  //   company.forEach( (printer,n) => {
  //     if( i == 0){
  //       database.query("INSERT INTO printer(society, name, model, ip) VALUES('Elite','" + printer.name + "','" + printer.model + "','" + printer.ip + "')");
  //       database.query("INSERT INTO black(printerID) SELECT (SELECT MAX(ID) FROM printer)");
  //       database.query("INSERT INTO cyan(printerID) SELECT (SELECT MAX(ID) FROM printer)");
  //       database.query("INSERT INTO magenta(printerID) SELECT (SELECT MAX(ID) FROM printer)");
  //       database.query("INSERT INTO yellow(printerID) SELECT (SELECT MAX(ID) FROM printer)");
      
  //     } else {
  //       database.query("INSERT INTO printer(society, name, model, ip) VALUES('Pewex','" + printer.name + "','" + printer.model + "','" + printer.ip + "')");
  //       database.query("INSERT INTO black(printerID) SELECT (SELECT MAX(ID) FROM printer)");
  //       database.query("INSERT INTO cyan(printerID) SELECT (SELECT MAX(ID) FROM printer)");
  //       database.query("INSERT INTO magenta(printerID) SELECT (SELECT MAX(ID) FROM printer)");
  //       database.query("INSERT INTO yellow(printerID) SELECT (SELECT MAX(ID) FROM printer)");
         
  //     }

  //    });
  // });

  res.render('testdb', {n: "name", printer: "printer"});
});




module.exports = router;