const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'login_db'
});

module.exports = dbConnection.promise();
