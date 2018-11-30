const request = require('request');
const { NominatimJS } = require('nominatim-js');

function position(lat,lon){
    this.lat = lat;
    this.lot = lot;
}

   
function adressToGeo(adress) {
    console.log('Searching for: ' + adress);
    NominatimJS.search({
        q: adress
      }).then(results => {
          console.log(results);
        var pos = new position();
          console.log(pos);

      }).catch(error => {
        // error ocurred
      }) 
}
adressToGeo('45 pradzynskiego wroclaw poland');
