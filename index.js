const express = require('express');
const app = express();

app.use( express.static('client/dist') );

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.listen(process.env.PORT || 8080);
