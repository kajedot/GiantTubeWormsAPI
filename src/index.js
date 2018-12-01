const express = require('express')
const app = express()

const port=process.env.PORT || 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);
  res.send(obj);
})

app.get('/xd',(req,res) => {

res.send("Hello");
});

app.listen(port, () => console.log('Listening on ' + port)) 
