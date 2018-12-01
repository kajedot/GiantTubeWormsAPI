const express = require('express')
const app = express()

const port=process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/xd', (req, res) => {
	if req.query.opt1 === "xd"
		out += 'xDxDxD';
	if req.query.opt2 === "dx"
		out += 'dXdXdX';

res.send(out));
});

app.listen(port, () => console.log('Listening on ' + port)) 
