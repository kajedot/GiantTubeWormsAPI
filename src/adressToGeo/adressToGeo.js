const request = require('request');
const { NominatimJS } = require('nominatim-js');

class pos{
  constructor(a,b)
  {
    this.lon = a;
    this.lat = b;
  }
}

var c; 

function takeresult(results)
{
  c = new pos(results[0].lon,results[0].lat); 
  console.log(c);

}
    
function adressToGeo(adress) {
    console.log('Searching for: ' + adress);
 
    NominatimJS.search({
        q: adress
      }).then(results => {
        takeresult(results);
      }).catch(error => {
        // error ocurred
      });
      return c;
}

//adressToGeo("wroclaw 54 podwale");
