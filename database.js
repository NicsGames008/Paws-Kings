const mysql = require('mysql2');

// Create a new connection to the database
const connection = mysql.createConnection({

    //localhost:

    host: 'localhost',
    user: 'root', 
    password: 'tgpsi', 
    database: 'pawns&kings' 

    //online (filess)

    // host: 'ck8.h.filess.io',
    // user: 'pawnsnkings_thoughtup', 
    // port:' 3307',
    // password: 'sussybussy', 
    // database: 'pawnsnkings_thoughtup' 
});

module.exports = connection;