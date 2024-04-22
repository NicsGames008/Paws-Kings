// Dependencies of the project
const express = require('express');
const mysql = require('mysql2');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();

// Create a new connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'tgpsi', 
    database: 'pawns&kings' 
});

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));

// Connect to database and check if it's working. Otherwise gives an error.
connection.connect((err) => {
    if (err){
        console.log("Error connection to DB: " + err);
        return;
    }
    console.log("Connected to database!");
})


app.use(express.urlencoded());

// Endpoints

// Endpoint that will get all the players from the database
app.get('/getPlayer', (request, response) => {

    // Executes the query to get all the players from the database, if it has an error, it will send the error message
    connection.execute('SELECT * FROM player',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                response.send(results);
            }
        });
});

// Endpoint that will insert to the database some player data
app.post('/createPlayer', (request, response) => {
    var playerName = request.body.playerName;

    if (!playerName){
        response.send("Missing data! 💩");
        return;
    }

    // The old fashion way (use execute instead. MAFALDA. execute!!!!!)
    //connection.query("INSERT INTO player (player_username) VALUES ('" + playerName + "')");

    // Check if the playerName already exists in the database
    connection.execute('SELECT * FROM player WHERE player_username = ?',
        [playerName],
        function (err, results, fields) {
            // Check if the results length is greater than 0
            if (results.length == 0){
                // If its 0 then we don't have any username with that name in the DB
                createAccount(request, response, playerName);
            }else{
                // If different of 0 (> 0), means we have a username with that name!
                response.send("Username already picked!");
            }
        });
});

// Aux. Function to create account. This is called after we validate that there is no playerName in the DB
function createAccount(request, response, playerName){
    // Execute the insert. The function defined here (third parameter) is called callback.
    // Callback gets executed after the insert gets executed (sucessfully or not!)
    connection.execute('INSERT INTO player (player_username) VALUES (?)',
        [playerName],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                response.send("Account created - " + playerName);
            }
        });
}

// Listen on port for any requests made.
// Note: Only 1 program can be listening at a single port at any time. This means we can't execute this server two times in the same port...
app.listen(serverPort, () => {
    console.log('👌 Server is running at ' + serverPort);
});