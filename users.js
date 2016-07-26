"use strict";

var db = require('./db');

var user =  {
  getAll: function(props) {
    return new Promise(function(resolve, reject) {
      db.query("SELECT * FROM users")
        .then(function(result) {
          resolve(result.rows);
        })
        .catch(reject);
    });
  },
  save: function(props) {
    return db.query('INSERT INTO users(email, "passwordHash") VALUES ($1, $2)',
      [props.email, props.password]);
  }
};

module.exports = user;
