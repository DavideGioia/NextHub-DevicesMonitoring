const settings = require("./settings.js");
function dataConv(color, model) {
    let dayStr; let monthStr;
    let data = [date = "non trovata", bool = 0]
    let year = Math.floor(color / 10000);
    let month = Math.floor((color%10000)/100);
    let day = color % 100;
    if (model == "MFP") {
        dayStr = day; monthStr = month;
        if (dayStr < 10) {dayStr = "0" + dayStr};
        if (monthStr < 10) {monthStr = "0" + monthStr}
        if (year != 1970) {
            data[0] = dayStr + "/" + monthStr + "/" + year; 
            let date = new Date(year, month-1, day);
            if (date > Date.now() - (1000 * 60 * 60 * 24 * settings.daysBack)) {
                data[1] = 1;
            }
        }
    } else {
        dayStr = day; monthStr = month + 1;
        if (dayStr < 10) {dayStr = "0" + dayStr};
        if (monthStr < 10) {monthStr = "0" + monthStr}
        if (year != 1970) {
            data[0] = dayStr + "/" + monthStr + "/" + year; 
            let date = new Date(year, month, day);
            if (date > Date.now() - (1000 * 60 * 60 * 24 * settings.daysBack)) {
                data[1] = 1;
            }
            if (date <  Date.now() - (1000 * 60 * 60 * 24 * settings.veryOld)) {
                data[1] = 2;
            }

        }
    }

    return data;
}

module.exports = dataConv;