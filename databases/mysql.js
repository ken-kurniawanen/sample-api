var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : '[host]',
  user: '[user]',
  password: '[password]',
  database: '[database]',
  connectionLimit: 100,
  debug: false
});

//connection.connect();

exports.model = connection;