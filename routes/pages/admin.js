var express = require('express');
const mysql = require("mysql2");
const printerList = require("../printerList.js");
const generateTxt = require('../generateTxt.js')
const updateStock = require('../update/updateStock.js');
const updateDB = require('../update/updateDB');
const simpleGit = require('simple-git');

var router = express.Router();


router.get('/', async function(req, res, next) {
    const git = simpleGit();
    let allPrinters = await printerList();
    let textPrinters = await generateTxt(allPrinters);

    // generate github commits
    const log = await git.log();
    const commit = log.all.map(commit => ({            
        hash: commit.hash,
        date: commit.date,
        message: commit.message,
        author: commit.author_name
    }));

    res.render('admin', {printer: allPrinters, txt: textPrinters, commits: commit});     
})

router.post('/', async function(req, res, next) {
})

module.exports = router;
  