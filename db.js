"use strict";

var pg = require('pg');
var database = require('./database');

var pool =  new pg.Pool(database.dev);
module.exports = pool;
