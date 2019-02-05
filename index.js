const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const initialData = {
  money: 50.,
  potions: 10
};

app.use( express.static('client/dist') );

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.emit('initialData', initialData);
});

http.listen(process.env.PORT || 3000);
