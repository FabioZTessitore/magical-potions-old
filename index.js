const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

const User = require('./app/models/user');

const initialData = {
  money: 50.,
  potions: 10
};

mongoose.Promise = require('bluebird');

let configDB;

try {
  configDB = require('./config/database.js');
} catch(e) {
  configDB = { url: process.env.MONGOLAB_URI };
}

mongoose.connect(configDB.url, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  http.listen(process.env.PORT || 3000);
});


app.use( express.static('client/dist') );

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('signup', function (data) {
    User.findOne({ 'local.email': data.email }, function (err, user) {
      if (err) {
        socket.emit('signupResponse', {
          success: false,
          message: err
        });

        return;
      }

      if (user) {
        socket.emit('signupResponse', {
          success: false,
          message: 'Email already in use'
        });

        return;
      }

      const newUser = new User();
      newUser.local.email = data.email;
      newUser.local.username = data.username;
      newUser.local.password = newUser.generateHash(data.password);
      newUser.role = 'user';

      newUser.save(function(err) {
        if (err) throw err;
      });

      socket.emit('signupResponse', {
        success: true
      });
    });
  });

  socket.emit('initialData', initialData);
});
