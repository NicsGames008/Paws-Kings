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


















app.post('/move', (request, response) => {
    // Get the data from the request
    var startX = request.body.startX;
    var startY = request.body.startY;
    var endX = request.body.endX;
    var endY = request.body.endY;
    var playerId = request.body.playerId;
    var matchId = request.body.matchId;


    // if the vars are empty is gives an error message
    if (!startX || !startY || !endX || !endY ||!playerId || !matchId){
        response.send("Missing data!");
        return;
    }

    // Execute the query
    connection.execute(`SELECT ms.ms_description AS match_state FROM Match_Player mp INNER JOIN Match_State ms ON mp.mp_match_id = ? AND mp.mp_player_id = ? AND mp.mp_match_id = ms.ms_id; `,
    [matchId, playerId], 
    function (err, results, fields){
        if (err) {
            response.send(err);
        } else {
            if (results.length === 0) {
                // Player is not in the match
                response.send("Player is not in that match!");
            } else {
                const matchState = results[0].match_state;
                response.send({ matchState: matchState });
            }
        }
    });


    // if (isValidMove(startX, startY, endX, endY, pieceType))
    //     response.send("Move is valid!");
    // else
    //     response.send("Move is not valid!");

});





function isValidMove(startX, startY, endX, endY, pieceType) {
    // Validate if the positions are within the board boundaries
    if (startX < 1 || startX > 8 || startY < 1 || startY > 8 || endX < 1 || endX > 8 || endY < 1 || endY > 8) {
        return false;
    }

    // Validate if the start and end positions are the same
    if (startX === endX && startY === endY) {
        return false;
    }

    // Check if the move is valid based on the piece type
    switch (pieceType) {
        case 'Pawn':
            return isValidPawnMove(startX, startY, endX, endY);
        case 'Roock':
            return isValidRookMove(startX, startY, endX, endY);
        case 'Knight':
            return isValidKnightMove(startX, startY, endX, endY);
        case 'Bishop':
            return isValidBishopMove(startX, startY, endX, endY);
        case 'Queen':
            return isValidQueenMove(startX, startY, endX, endY);
        case 'King':
            return isValidKingMove(startX, startY, endX, endY);
        default:
            return false; // If the piece type is not recognized
    }
}

function isValidPawnMove(startX, startY, endX, endY) {
    // For white pawns
    if (startY == 2) { // Initial row for white pawns
        // Pawn moves one or two squares forward from its initial position
        if (startX === endX && (endY - startY === 1 || endY - startY === 2)) {
            return true;
        }
    } else { // For non-initial moves of white pawns
        // Pawn moves one square forward
        if (startX === endX && endY - startY === 1) {
            return true;
        }
    }
    // For black pawns
    if (startY == 7) { // Initial row for black pawns
        // Pawn moves one or two squares forward from its initial position
        if (startX === endX && (startY - endY === 1 || startY - endY === 2)) {
            return true;
        }
    } else { // For non-initial moves of black pawns
        // Pawn moves one square forward
        if (startX === endX && startY - endY === 1) {
            return true;
        }
    }

    // Pawn captures diagonally
    if (Math.abs(startX - endX) === 1 && Math.abs(startY - endY) === 1) {
        return true;
    }

    // If none of the conditions are met, the move is invalid
    return false;
}

function isValidRookMove(startX, startY, endX, endY) {
    // Rook moves along a rank (row) or file (column)
    if (startX === endX || startY === endY) {
        return true;
    }

    // If none of the conditions are met, the move is invalid
    return false;
}

function isValidKnightMove(startX, startY, endX, endY) {
    // Knight moves in an L shape: 2 squares in one direction and 1 square perpendicular to that direction
    const dx = Math.abs(startX - endX);
    const dy = Math.abs(startY - endY);
    
    // Check if the move is an L shape (2 squares in one direction and 1 square perpendicular)
    if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) {
        return true;
    }

    // If none of the conditions are met, the move is invalid
    return false;
}

function isValidBishopMove(startX, startY, endX, endY) {
    // Bishop moves along a diagonal
    // Check if the absolute difference between the start and end positions in x and y is the same
    if (Math.abs(startX - endX) === Math.abs(startY - endY)) {
        return true;
    }

    // If none of the conditions are met, the move is invalid
    return false;
}

function isValidQueenMove(startX, startY, endX, endY) {
    // Queen moves along a rank (row), file (column), or diagonal
    // Check if the move is valid for a rook or bishop
    if ((startX === endX || startY === endY) || (Math.abs(startX - endX) === Math.abs(startY - endY))) {
        return true;
    }

    // If none of the conditions are met, the move is invalid
    return false;
}

function isValidKingMove(startX, startY, endX, endY) {
    // King moves one square in any direction
    // Check if the absolute difference between start and end positions is at most 1 in both x and y
    if (Math.abs(startX - endX) <= 1 && Math.abs(startY - endY) <= 1) {
        return true;
    }

    // If none of the conditions are met, the move is invalid
    return false;
}


