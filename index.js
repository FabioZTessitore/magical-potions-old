const express = require('express');
const app = express();

app.use( express.static(__dirname + '/client') );

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(process.env.PORT || 8080);
