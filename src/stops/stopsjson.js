var fs = require('fs');


function get_stops()
{
    var obj = JSON.parse(fs.readFileSync('stops.json','utf8'));
    return obj;
}
