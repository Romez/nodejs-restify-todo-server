'use strict';

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    nickname: { type: 'string', unique: true},
    password: {type: 'char', length: 32},
    salt: {type: 'char', length: 10}
  }, callback);
};

exports.down = function (db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
