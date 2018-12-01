const csv = require('csvtojson');
const fs = require('fs');
const download = require('download');
var bodyParser = require("body-parser");

const stopsURL = "https://www.wroclaw.pl/open-data/dataset/e3002397-f22b-4aa1-a7eb-bc70af83dba0/resource/003e5b6a-233d-4ad4-bac5-9bf96bc05ccc/download/slupkiwspolrzedne.csv"
function givemebike(){
    var obj = JSON.parse((fs.readFileSync('circles.json', 'utf-8')));
    return obj;
}

