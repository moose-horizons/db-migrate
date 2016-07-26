"use strict";

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  user.getAll()
      .then(function(users) {
        res.json(users);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
});

var user = require('./users');

user.save({email: 'moose', password: 'pass'})
    .then(function() {
      return user.getAll();
    })
    .then(function(result) {
      console.log(result);
    })
    .catch(console.log.bind(console, 'Error'));

var port = process.env.PORT || 3000 ;
app.listen(port, function() {
  console.log('Express started. Lisntening to', port);
});
