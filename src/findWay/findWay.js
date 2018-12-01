var fs = require('fs');
const request = require('request');
const { NominatimJS } = require('nominatim-js');

var bicykles = require('../circles/circles.js');
var stops = require('../stops/stopsCount.js');
const bice = bicykles.givemebike();
const sto = stops.get_stops();
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
        }, 1000);
  };
  function getpos()
  {
    console.log(nodejs);
    return nodejs;
  }
  var aa,bb, nodejss;
  function adressToGeoo(adress) {
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
            }, 1000);
  };
  function getposs()
  {
    console.log(nodejss);
    return nodejss;
  }

  function howfar(where)
  {
      console.log(where);
      var c=closest(where,sto) ,d = closest(where,bice);
      console.log(c);
      console.log(d);
      if( c[0]<d[0])
      {
       return d[1];
      }
      return c[1];
  }

function poses(first, second)
{
         var justgoaway = [];
     adressToGeo(first);
     setTimeout( ()=>{
        var where= getpos();
        adressToGeo(second);
        setTimeout(() => {
            var towhere= getpos();
            var howfarto = howfar(where);
            var howfarfrom = howfar(towhere);
            setTimeout(()=>{
                console.log(howfarto);
                console.log(howfarfrom);
                justgoaway.push(howfarto);
                justgoaway.push(howfarfrom);
                console.log(justgoaway);
            },500)
         }, (2500));
     }, 1200)
     return justgoaway;
}


poses("42 pradzynskiego wroclaw", "54 podwale wroclaw");

function closest (num, arr){
    var returntype = 800000;
    var i = 0, bo = -1;
    arr.forEach(element => {
        i++;
        var szer =islen(element['Szer. geograficzna'],element.lon);
        var wys =islen(element['Dˆ. geograficzna'],element.lat);
        console.log(Math.sqrt((Math.pow((num[0] - szer),2) + Math.pow((num[0] - wys),2))));
        if(returntype > Math.sqrt((Math.pow((num[0] - szer),2) + Math.pow((num[0] - wys),2))))
        {
        returntype =Math.sqrt(Math.pow((num[0] - szer),2) + Math.pow((num[0] - wys),2));
            bo = i ;
        }
    });
    console.log([returntype,arr[bo]]);
    console.log(bo);
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
