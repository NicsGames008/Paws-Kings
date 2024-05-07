const mysql = require('mysql2');

// Create a new connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'tgpsi', 
    database: 'pawns&kings' 
});

module.exports = connection;