const printers = require('./printerList');
const settings = require("./settings.js");

const below = settings.below;

function generateTxt(printers) {
    let textPrinters = "";

    const timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    textPrinters += "NextHub - Report Stampanti " + today.toLocaleDateString() + "\n\n";

    textPrinters += "PEWEX: \n";
    textPrinters += societyDivider("Pewex", printers);
    textPrinters += "\nELITE: \n";
    textPrinters += societyDivider("Elite", printers);

    console.log("File TXT Generato");
    return textPrinters;

}

function societyDivider(society, printers) {
    let tempText = "";
    let printerName = "";

    printers.forEach(prnt => {
        if(prnt[0].society == society) {
            let ye, ma, cy, bk;
            let tempYe, tempMa, tempCy, tempBk;

            if (prnt[0].model == "MFP" || prnt[0].model == "XEROX" || prnt[0].model == "P77") {
                printerName = prnt[0].name + " " + prnt[0].model;
            } else { printerName = prnt[0].name; }
            
            if (prnt[0].error == 1) {
                tempText += printerName + tabsCalculator(printerName) + "NON RAGGIUNGIBILE\n";
            } else {
                if (prnt[0].model != "XEROX" || prnt[0].model != "OTHER") {
                    console.log(prnt[0].model + " " + prnt[0].name);
                    if(prnt[1].pages != undefined) {
                        ye = prnt[1].pages;
                    } else {
                        console.log("ye null/undefined");
                    }
                    if(prnt[2].pages != undefined) {
                        ma = prnt[2].pages;
                    } else {
                        console.log("ma null/undefined");
                    }
                    if(prnt[3].pages != undefined) {
                        cy = prnt[3].pages;
                    } else {
                        console.log("cy null/undefined");
                    }
                    if(prnt[4].pages != undefined) {
                        bk = prnt[4].pages;
                    } else {
                        console.log("bk null/undefined");
                    }

                    if (ye <= below && prnt[1].stock < 1 && ye != null) {tempYe = true;}
                    if (ma <= below && prnt[2].stock < 1 && ma != null) {tempMa = true;}
                    if (cy <= below && prnt[3].stock < 1 && cy != null) {tempCy = true;}
                    if (bk <= below && prnt[4].stock < 1 && bk != null) {tempBk = true;}
                }
                if (prnt[0].model == "MFP") {
                    if(tempBk || tempCy || tempMa || tempYe){
                        tempText += printerName + tabsCalculator(printerName);
                        if (tempYe){tempText += "Giallo " + ye + " (" + prnt[1].percentage + "%) ";}
                        if (tempMa){tempText += "Magenta " + ma + " (" + prnt[2].percentage + "%) ";}
                        if (tempCy){tempText += "Ciano " + cy + " (" + prnt[3].percentage + "%) ";}
                        if (tempBk){tempText += "Nero " + bk + " (" + prnt[4].percentage + "%) ";}
                        tempText += "\n";
                    }
                } else if (prnt[0].model == "477" || prnt[0].model == "P77") {
                    if(tempBk || tempCy || tempMa || tempYe){
                        tempText += printerName + tabsCalculator(printerName);
                        if (tempYe){tempText += "Giallo " + ye + " ";}
                        if (tempMa){tempText += "Magenta " + ma + " ";}
                        if (tempCy){tempText += "Ciano " + cy + " ";}
                        if (tempBk){tempText += "Nero " + bk + " ";}
                        tempText += "\n";
                    }
                }
                if (prnt[0].model == "XEROX" || prnt[0].model == "OTHER"){
                    if (prnt[4].percentage < 50 && prnt[4].stock < 1 && prnt[4].percentage != null) {
                        tempText += printerName + tabsCalculator(printerName);
                        tempText += "Nero " + prnt[4].percentage + "% ";
                        tempText += "\n";
                    }
                }
            }

        }
    });
    return tempText;
}

function tabsCalculator(name){
    let tabsNumber = name.length;
    let tabs = "";
    switch (true) {
      case tabsNumber < 8:
        tabs = "\t\t\t";
        break;
      case tabsNumber < 16:
        tabs = "\t\t";
        break;
      case tabsNumber < 24:
        tabs = "\t";
        break;
      case tabsNumber < 32:
        tabs = " ";
        break;
      case tabsNumber > 32:
        tabs = " ";
        break;
    }
    return tabs;
  };

  
module.exports = generateTxt;