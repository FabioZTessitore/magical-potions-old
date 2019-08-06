const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

const User = require('./app/models/user');

function authenticate(socket, data, callback) {
  var username = data.username;
  var password = data.password;

  User.findOne({ 'local.username': username }, function (err, user) {
    if (err || !user) return callback(new Error("User not found"));
    return callback(null, user.validPassword(password));
  });
}

function postAuthenticate(socket, data) {
  /*var username = data.username;

  db.findUser('User', {username:username}, function(err, user) {
    socket.client.user = user;
  });*/
 console.log('postAuthenticate()');
}

function disconnect(socket) {
  console.log(socket.id + ' disconnected');
}

require('socketio-auth')(io, {
  authenticate: authenticate,
  postAuthenticate: postAuthenticate,
  disconnect: disconnect,
  timeout: 30000  // 30 sec
});

const initialData = {
  money: 50.,
  potions: 10
};

mongoose.Promise = require('bluebird');

let configDB;

try {
  configDB = require('./config/database.js');
} catch(e) {
  configDB = { url: process.env.MONGODB_URI };
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
      newUser.createdAt = new Date();

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
