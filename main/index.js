const http = require('http');
const path = require('path');

const express = require('express');
const io = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname + '/public')));
app.get('/createTempJSON/:json', (req, res) => {
	const { json } = req.params;
	const id = Math.floor(Math.random() * 9999999999999999999)
	fs.writeFile(__dirname + `/public/json/${id}.json`, json, function (err) {
		if (err) {
			console.log('An error has occured')
		}
	})
	setTimeout(() => {
		fs.unlink(__dirname + `/public/json/${id}.json`, function (err) {
			if (err) {
				console.log('An error has occured')
			}
		})
	}, 300000);
})

app.get('/json/:json', (req, res) => {
	const { json } = req.params;
	res.send(`<pre>${fs.readFile(__dirname + `/public/json/${json}.json`)}</pre>`)
})

app.get('/', (req, res) => {res.sendFile(__dirname + "/public/index.html")})

const PORT = 3000;

server.listen(PORT, () => {
	console.log('Server running on port ' + PORT)
})
