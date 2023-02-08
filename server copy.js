const jsonServer = require('json-server')
const express = require('express');
const path = require('path');

// Express
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const Eport = process.env.PORT || 4200;

app.listen(Eport, () => {
  console.log(`Express Server is running on port ${Eport}`)
})

// Json-server
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const JSport = process.env.PORT || 3200

server.listen(JSport, () => {
    console.log(`JSON Server is running on port ${JSport}`)
})
