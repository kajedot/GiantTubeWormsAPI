var fs = require('fs');

//
//fs.readFile('stops.json', 'utf8', function (err, data) {
//	if (err) throw err;
//	obj = JSON.parse(data);
//	//console.log(JSON.parse(data));
//});
module.exports={
get_stops: function get_stops()
{
var obj = JSON.parse(fs.readFileSync('../stops/stops.json', 'utf8'));

return obj;
}
}