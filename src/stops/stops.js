var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('data/stops.txt')
  });
  


const stopsURL = "https://www.wroclaw.pl/open-data/dataset/e3002397-f22b-4aa1-a7eb-bc70af83dba0/resource/003e5b6a-233d-4ad4-bac5-9bf96bc05ccc/download/slupkiwspolrzedne.csv"
const stopsFilePath = "temp.svc";
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
function getlistfull(parkinson)
{
stopslist.push(parkinson);
}
function get_stops(){
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
            }
        }
    }
    getlistfull(new stopinformation(ID,name,lon,lat,stopcode));
    
  });

 console.log(stopslist);
}



get_stops();
  /*
download(stopsURL).then(data => {
    fs.writeFileSync(stopsFilePath, data);

    csv()
    .fromFile(stopsFilePath)
    .then((jsonOBJ)=>{
        var name = 'Długość Geograficzna;Szerokość Geograficzna;ID Słupka;Typ Przystanku';
        jsonOBJ.forEach(element =>{
            var lon,lat,number,type,poss = 0;
            for(var i = 0;i <= element[name].length; i++)
            {
                if(element[name].charAt(i) == ';')
                {
                poss++;
                }else{
                switch(poss)
                {
                    case 0:
                    lat +=element[name].charAt(i);
                    break;
                    case 1:
                    lon +=element[name].charAt(i);
                    break;
                    case 2:
                    number +=element[name].charAt(i);
                    break;
                    case 3:
                    type+=element[name].charAt(i);
                    break;

                }}
                
            }
            lat = lat.replace('undefined','');
            lon = lon.replace('undefined','');
            number = number.replace('undefined','');
            type = type.replace('undefined','');

        });
        console.log(stopslist);
        
    });
});*/