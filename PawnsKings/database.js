const mysql = require('mysql2');

// Create a new connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '20230876@23Dito', 
    database: 'p&k' 
});

module.exports = connection;