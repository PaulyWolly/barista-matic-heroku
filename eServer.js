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

