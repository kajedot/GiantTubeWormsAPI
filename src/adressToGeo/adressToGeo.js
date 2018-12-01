const request = require('request');
const { NominatimJS } = require('nominatim-js');

class pos{
  constructor(a,b)
  {
    this.lon = a;
    this.lat = b;
  }
}

    
function adressToGeo(adress) {
    console.log('Searching for: ' + adress);
  var l ,x ;
    NominatimJS.search({
        q: adress
      }).then(results => {
      l = results[0].lon ;
       x = results[0].lat;       
      }).catch(error => {
        // error ocurred
      });
      var c = new pos(l,x);
      return c;
}

console.log(adressToGeo("42 pradzynskiego wroclaw")); 
