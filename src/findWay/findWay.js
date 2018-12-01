var bicykles = require('circles/circles.js');
var stops = require('stops/stopsjson.js');

class pos{
    constructor(a,b)
    {
      this.lon = a;
      this.lat = b;
    }
  }
  
      var a,b, nodejs;
  function adressToGeo(adress,callback) {
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
          callback();
        }, 1000);
  };
  function getpos()
  {
    console.log(nodejs);
    return nodejs;
  }
  var aa,bb, nodejss;
  function adressToGeoo(adress,callback) {
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
          callback();
        }, 1000);
  };
  function getposs()
  {
    console.log(nodejs);
    return nodejs;
  }

  function howfar(where)
  {
      var c=closest(Math.sqrt((where.lon * where.lon) + (where.lat * where.lat)),stops.get_stops()) ,d = closest(Math.sqrt((where.lon * where.lon) + (where.lat * where.lat)),bicykles.givemebike());
  }

function pos(first, second)
{
    adressToGeo(first);
    var where = getpos();
     adressToGeo(second);
     var towhere = getposs();
     var howfar = where();
}





function closest (num, arr){
    curr = arr[0]
    arr.forEach(val => {
       if  (val )
        if ((abs(num - val)) < (abs(num - curr)))
            curr = val;
    return curr; 
    });
}