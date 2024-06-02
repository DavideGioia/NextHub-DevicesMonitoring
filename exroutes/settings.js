const mysql = require("mysql2");

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Kulo123!',
    database: "nh_printchecker"
});

async function test (req,res) {
    const printers = await db.promise().query('SELECT * FROM printer');
    const toners = await db.promise().query('SELECT * FROM black');
    //console.log(printers);
    //exports.ciao = printers[0];
    //console.log(printers[0])
    // let arrayOfObjects = [];
    // printers.forEach(elem => {
    //     arrayOfObjects.push({
    //         id: elem.ID,
    //         name: elem.name
    //     });
    // })
    // console.log(arrayOfObjects);
}
test();
//console.log(arrayOfObjects);