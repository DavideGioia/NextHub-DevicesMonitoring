var express = require('express');
const mysql = require("mysql2");
const settings = require('../settings.js');
const printerList = require("../printerList.js");
const generateTxt = require('../generateTxt.js')
const updateStock = require('../update/updateStock.js');
const updateDB = require('../update/updateDB'); 
const managePrinters = require('../managePrinters.js');
var router = express.Router();

let allPrinters = printerList();
updateDB();
setInterval(updateDB, settings.interval);

router.get('/', async function(req, res, next) {
    let allPrinters = await printerList();
    let textPrinters = await generateTxt(allPrinters);
    res.render('index', {printer: allPrinters, txt: textPrinters});    
})

router.post('/', async function(req, res, next) {
    updateStock(req);
    console
    res.redirect('/#device-' + req.body.printerName);
})

module.exports = router;
  