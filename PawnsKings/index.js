// Dependencies of the project
const express = require('express');
const mysql = require('mysql2');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
app.use(express.urlencoded());

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


// Listen on port for any requests made.
// Note: Only 1 program can be listening at a single port at any time. This means we can't execute this server two times in the same port...
app.listen(serverPort, () => {
    console.log('👌 Server is running at ' + serverPort);
});


// Endpoints

// Endpoint that will get all the players from the database
app.get('/getPlayers', (request, response) => {

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

// Endpoint that will get all the macths from the database
app.get('/getMatches', (request, response) => {

    // Executes the query to get all the matchs from the database, if it has an error, it will send the error message
    connection.execute('SELECT m.match_id, ms.ms_description AS match_state, pc1.pc_name AS player_color, p.player_name, ut.ut_name AS upgrade_tier FROM `Match` m INNER JOIN Match_State ms ON m.match_ms_id = ms.ms_id INNER JOIN Match_Player mp ON m.match_id = mp.mp_match_id INNER JOIN Player p ON mp.mp_player_id = p.player_id INNER JOIN Player_Color pc1 ON m.match_pc_id = pc1.pc_id INNER JOIN Player_Color pc2 ON mp.mp_pc_id = pc2.pc_id INNER JOIN Upgrade_Tier ut ON mp.mp_ut_id = ut.ut_id ORDER BY m.match_id;',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                response.send(results);
            }
        });
});




// Endpoint that will insert to the database some player data
app.post('/createMatch', (request, response) => {
    // Get the data from the request
    var p1 = request.body.p1;
    var p2 = request.body.p2;

    // if the vars are empty is gives an error message
    if (!p1 || !p2){
        response.send("Missing data!");
        return;
    }

    // Executes the query to create a new match, if it has an error, it will send the error message
    connection.execute('insert into `Match` (match_ms_id, match_pc_id) values(1, 1);',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                // Get the id of the last inserted match
                var matchId = results.insertId;

                // Insert players data into the `Match_Player` table
                insertMatchPlayer(request, response, p1, p2, matchId)
            }
        });
});

// fuction that will insert the match player to the database
function insertMatchPlayer(request, response, p1, p2, matchId) {
    connection.execute('INSERT INTO Match_Player (mp_match_id, mp_player_id, mp_ut_id, mp_pc_id) VALUES (?, ?, 1, 1);',
    [matchId, p1],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            // Insert player 2 data into the `Match_Player` table
            connection.execute('INSERT INTO Match_Player (mp_match_id, mp_player_id, mp_ut_id, mp_pc_id) VALUES (?, ?, 1, 2);',
                [matchId, p2],
                function (err, results, fields) {
                    if (err) {
                        response.send(err);
                    } else {
                        response.send("Match created successfully!");
                    }
                });
        }
    });
}

