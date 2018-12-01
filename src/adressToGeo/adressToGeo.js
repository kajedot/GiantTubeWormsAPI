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
 
    NominatimJS.search({
        q: adress
      }).then(results => {
        return pos(results[0].lon,results[0].lat);
      }).catch(error => {
        // error ocurred
      });
}


console.log(adressToGeo("42 pradzynskiego wroclaw")); 
