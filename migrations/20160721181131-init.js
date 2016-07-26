'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, cb) {
  db.createTable('users', {
    id: {
      type: 'serial',
      notNull: true,
      primaryKey: true
    },
    email: {
      type: 'string',
      notNull: true
    },
    passwordHash: {
      type: 'string',
      notNull: true
    }
  }, cb);
};

exports.down = function(db) {
  return null;
};
