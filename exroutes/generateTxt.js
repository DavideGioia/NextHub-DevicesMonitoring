const settings = require('./settings.js');
const mysql = require("mysql2");

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Kulo123!',
    database: "nh_printchecker"
});
var maxID = db.query('SELECT MAX(ID) AS maxid FROM printer');

// exports.textPrinters = generateTxt(allPrinters, maxID[0][0].maxid);