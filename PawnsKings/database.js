const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '20230876@23Dito', 
    database: 'p&k' 
});

module.exports = connection;