const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'database',
  user     : 'root',
  password : 'password',
  database : 'Reviews'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;