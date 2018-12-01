const request = require('request');
const { NominatimJS } = require('nominatim-js');

class pos{
  constructor(a,b)
  {
    this.lon = a;
    this.lat = b;
  }
}

    var a,b, nodejs;
function adressToGeo(adress) {
    console.log('Searching for: ' + adress);
  var l ,x ;
      NominatimJS.search({
        q: adress
      }).then(results => {
      a = results[0].lon ;
       b = results[0].lat;       
      }).catch(error => {
        // error ocurred
      });
      setTimeout(() => {
        nodejs = new  pos(a,b);
        callback(nodejs);
      }, 1000);
};
function getpos()
{
  return nodejs;
}