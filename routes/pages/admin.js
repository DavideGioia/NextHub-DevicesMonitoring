var express = require('express');
const mysql = require("mysql2");
const printerList = require("../printerList.js");
const generateTxt = require('../generateTxt.js')
const updateStock = require('../update/updateStock.js');
const updateDB = require('../update/updateDB'); 

var router = express.Router();


router.get('/', async function(req, res, next) {
    let allPrinters = await printerList();
    let textPrinters = await generateTxt(allPrinters);
    res.render('admin', {printer: allPrinters, txt: textPrinters});     
})

router.post('/', async function(req, res, next) {
})

module.exports = router;
  