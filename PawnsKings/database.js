const mysql = require('mysql2');

// Create a new connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '123', 
    database: 'pawns&kings' 
});

module.exports = connection;