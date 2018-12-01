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
      var c=closest(where,stops.get_stops()) ,d = closest(bicykles.givemebike());
      if( c[0]<d[0])
      {
       return d[1];
      }
      return c[1];
  }

function pos(first, second)
{
    adressToGeo(first);
    var where = getpos();
     adressToGeo(second);
     var towhere = getposs();
     var howfar = get();
    return ['len' = 51.025489,'lan' = 21.5748 ];
}





function closest (num, arr){
    var returntype = 800000;
    var i = 0, bo = -1;
    arr.forEach(element => {
        i++;
        var szer =islen(element['Szer. geograficzna'],element.lon);
        var wys =islen(element['Dˆ. geograficzna'],element.lat);
        if(returntype < Math.sqrt(Math.pow((num.len - szer),2) + Math.pow((num.lon - wys),2)))
        {
        returntype =Math.sqrt(Math.pow((num.len - szer),2) + Math.pow((num.lon - wys),2));
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