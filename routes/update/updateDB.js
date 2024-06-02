const snmp = require("net-snmp");
const settings = require('../settings.js');
const getOids = require('../oids.js');
const check477 = require('./update477.js');
const checkMFP = require('./updateMFP.js');
const checkBlacks = require('./updateBlacks.js');
let db = settings.db;


async function updateDB() {
    let printersOnline = 0;
    let printers = await db.promise().query('SELECT * FROM printer');
    let maxID = await db.promise().query('SELECT MAX(ID) AS maxid FROM printer');
    for (i = 0; i < maxID[0][0].maxid; i ++) {
        let printer = printers[0][i];
        let oids = getOids(printer);
        let session= snmp.createSession( printer.ip, "public" );
        session.get( oids, function (e,vb) {
            try {
                if(vb == undefined) {
                    db.query("UPDATE printer SET error = ? WHERE ID = ?", [1, printer.ID]); 
                } else {
                    db.query("UPDATE printer SET error = ? WHERE ID = ?", [0, printer.ID]);
                    printersOnline++;
                    // console.log(printersOnline);
                    check(vb, printer);
                }
            } catch (e) {
                db.query("UPDATE printer SET error = ? WHERE ID = ?", [1, printer.ID]);
                //session.trap ( snmp.TrapType.LinkDown, console.log("Trap error: "+e),[] );                
            }
        });
    }
    await console.log("Database aggiornato " + printersOnline);
}

function check(vb, printer) {
    switch (printer.model) {
        case "477":
            check477(vb, printer);
            break;
        case "P77":
            check477(vb, printer);
            break;
        case "MFP":
            checkMFP(vb, printer);
            break;
        case "XEROX":
            checkBlacks(vb, printer);
            break;
        case "OTHER":
            checkBlacks(vb, printer);
            break;
    }
}

module.exports = updateDB;