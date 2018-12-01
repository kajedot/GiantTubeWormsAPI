var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('data/stops.txt')
  });
  

  class stopinformation{
    constructor(ID,name,lon,lat,stopcode){
        this.lon = lon;
        this.lat=lat;
        this.id =  ID;
        this.name = name;
        this.stopcode = stopcode;
    }
}

var stopslist = [];
function value(stopslist)
{
    
    lineReader.on('line', function (line) {
       var place = 0, ID = '',name = '',lon='',lat='', stopcode= '';
       for(var i = 0; i != line.length; i++)
       {
           if(line.charAt(i) == ',')
           {
               place++;
           }else
           {
               switch(place)
               {
                   case 0:
                   ID += line.charAt(i);
                   break;
                   case 1:
                   stopcode+=line.charAt(i);
                   break;
                   case 2:
                   name+=line.charAt(i);
                   break;
                   case 3:
                   lon+=line.charAt(i);
                   break;
                   case 4:
                   lat+= line.charAt(i);
                   break;
                   default:
               }
               
           }
           
       }
       stopslist.push(new stopinformation(ID,name,lon,lat,stopcode));
       console.log(JSON.stringify(new stopinformation(ID,name,lon,lat,stopcode)) + ',');
     });
     

}

console.dir(value(stopslist));
console.dir(stopslist);
