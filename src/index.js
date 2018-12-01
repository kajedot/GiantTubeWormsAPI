const express = require('express')
const app = express()

const port=process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/xd' (req, res) => res.send('xDxDxD'))

app.listen(port, () => console.log('Listening on ' + port)) 
