var fs = require('fs');
const request = require('request');
const { NominatimJS } = require('nominatim-js');

var bicykles = require('../circles/circles.js');
var stops = require('../stops/stopsCount.js');

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
        aa = results[0].lon ;
         bb = results[0].lat;       
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
    console.log(nodejss);
    return nodejss;
  }

  function howfar(where)
  {
      var c=closest(where,stops.get_stops()) ,d = closest(bicykles.givemebike());
      if( c[0]<d[0])
      {
       return d[1];
      }
      return c[1];
  }

function poses(first, second)
{
     adressToGeo(first);
    var where = getpos();
     adressToGeo(second);
     var towhere = getposs();
     var howfarto = howfar(where);
     var howfarfrom = howfar(towhere);
     var lens = islen(howfarto[0]);
     var lans = islen(howfarto[1]);
     var lend = islen(howfarfrom[0]);
     var land = islen(howfarfrom[1]);
     var justgoaway = [];
     justgoaway.push(lens);
     justgoaway.push(lans);
     justgoaway.push(lend);
     justgoaway.push(land);
     return justgoaway;
}

poses("42 prądzyńskiego wrocław", "54 Podwale wrocław");



function closest (num, arr){
    var returntype = 800000;
    var i = 0, bo = -1;
    arr.forEach(element => {
        i++;
        var szer =islen(element['Szer. geograficzna'],element.lon);
        var wys =islen(element['Dˆ. geograficzna'],element.lat);
        if(returntype < Math.sqrt(Math.pow((num[0] - szer),2) + Math.pow((num[0] - wys),2)))
        {
        returntype =Math.sqrt(Math.pow((num[0] - szer),2) + Math.pow((num[0] - wys),2));
            bo = i ;
        }
    });
    return [returntype,arr[bo]];
}
function islen(element, drugielement)
{
 if(element == undefined)
{
    return drugielement;
}
return element;
}
