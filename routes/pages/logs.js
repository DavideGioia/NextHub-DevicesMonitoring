var express = require('express');
const mysql = require("mysql2");
const printerList = require("../printerList.js");
const generateTxt = require('../generateTxt.js')
const updateStock = require('../update/updateStock.js');
const updateDB = require('../update/updateDB'); 
const simpleGit = require('simple-git');
const settings = require('../settings.js');
let db = settings.db;

var router = express.Router();

router.get('/', async function(req, res, next) {
    const git = simpleGit();
    let allPrinters = await printerList();
    let textPrinters = await generateTxt(allPrinters);

    let logs = await db.promise().query("SELECT * FROM logs");

    // generate github commits
    const log = await git.log();
    const commit = log.all.map(commit => ({            
        hash: commit.hash,
        date: commit.date,
        message: commit.message,
        author: commit.author_name
    }));

    res.render('logs', {printer: allPrinters, txt: textPrinters, commits: commit, log: logs});    

})

router.post('/', async function(req, res, next) {
})

module.exports = router;
  