const csv = require('csvtojson');
const fs = require('fs');
const download = require('download');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('data/stops.txt')
  });
  


const stopsURL = "https://www.wroclaw.pl/open-data/dataset/e3002397-f22b-4aa1-a7eb-bc70af83dba0/resource/003e5b6a-233d-4ad4-bac5-9bf96bc05ccc/download/slupkiwspolrzedne.csv"
const stopsFilePath = "temp.svc";
class stopinformation{
    constructor(ID,name,lon,lat){
        this.lon = lon;
        this.lat=lat;
        this.id =  ID;
        this.name = name;
    }
}
var stopslist = [];




lineReader.on('line', function (line) {
    var place = 0, ID,name,lon,lat;
    for(var i = 0; i <= line.length; i++)
    {
        if(line.charAt(i) == ',' || line.charAt(i) == '"')
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
                name+=line.charAt(i);
                break;
                case 2:
                lon+=line.charAt(1);
                break;
                case 3:
                lat+= line.charAt(i);
                break;
            }
            ID = ID.replace('undefined', '');
            name = name.replace('undefined', '');
            lon = lon.replace('undefined', '');
            lat = lat.replace('undefined', '');
            stopslist.push(ID,name,lon,lat);
        }
    }
    console.log(stopslist);
  });

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