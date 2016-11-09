var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : '188.166.87.67',
  user: 'api62904',
  password: 'testTempPass2015',
  database: 'apiplug_temp_62904',
  connectionLimit: 100,
  debug: false
});

//connection.connect();

exports.model = connection;