const express = require('express')
const app = express()

const port=process.env.PORT || 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.get('/xd',(req,res) => {

res.send(req.query.out);
});

app.listen(port, () => console.log('Listening on ' + port)) 
