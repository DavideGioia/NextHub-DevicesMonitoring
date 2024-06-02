const settings = require('./settings.js');
let db = settings.db;
let society = "Elite";
let name = "Acilia";
let model = "MFP";
let ip = "10.0.40.46";
let action = "insert";
let id;

function managePrinters() {
    if (action == "insert") {
        db.query(insertText());
        console.log("Stampante aggiunta");
    } else if (action == "remove") {
        db.query("DELETE FROM black WHERE printerID =" + id);
        db.query("DELETE FROM cyan WHERE printerID =" + id);
        db.query("DELETE FROM magenta WHERE printerID =" + id);
        db.query("DELETE FROM yellow WHERE printerID =" + id);
        db.query("DELETE FROM printer WHERE ID = " + id);
        console.log("Stampante rimossa");
    }
}

function insertText() {
    let inTxt;
    inTxt += "INSERT INTO printer(society, name, model, ip) VALUES('" + society +"','" + name + "','" + model + "','" + ip + "');";
    inTxt += "INSERT INTO black(printerID) SELECT (SELECT MAX(ID) FROM printer);";
    inTxt += "INSERT INTO cyan(printerID) SELECT (SELECT MAX(ID) FROM printer);";
    inTxt += "INSERT INTO magenta(printerID) SELECT (SELECT MAX(ID) FROM printer);";
    inTxt += "INSERT INTO yellow(printerID) SELECT (SELECT MAX(ID) FROM printer)"; 
    return inTxt;
}




module.exports = managePrinters;