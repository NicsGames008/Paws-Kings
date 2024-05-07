// Dependencies of the project
const express = require('express');
const connection = require('./database');
const lobby = require('./API/lobby');
const state = require('./API/state');
const movePiece = require('./API/piece');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
app.use(express.urlencoded());
// Middleware to parse JSON bodies
app.use(express.json());

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));
app.use('/lobby', lobby);
app.use('/state', state);
app.use('/piece', movePiece);


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
app.post('/createMatch11111111', (request, response) => {
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









// Endpoint that will insert to the database some player data





















app.put('/fillBoard', (request, response) => {
    // Get the data from the request
    var matchPlayerId = request.body.mpId;
    var color = 3;


    // if the vars are empty is gives an error message
    if (!matchPlayerId){
        response.send("Missing data!   matchPlayerId: " + matchPlayerId + " color: " + color);
        return;
    }


    //retrieves the color
    connection.execute('SELECT mp_pc_id FROM Match_Player WHERE mp_id = ?;',
    [matchPlayerId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //response.send(results[0].mp_pc_id + "");
            var colorSent = results[0].mp_pc_id;
            console.log("colore trovato " + colorSent);

            //now to fill the board with pieces.
            FillBoard(request, response, matchPlayerId, 1);
            response.send("schacchiera riepmita")
        }
    });


    //FillBoard(matchPlayerId, color);

});






















function IsTileOccupied(posToCheck, arrToCheck, arrReferenced){

    for(let i = 0; i < arrReferenced.length; i++){
        if(arrToCheck[posToCheck] === arrReferenced[i]){
            console.log("posizione:" + arrToCheck[posToCheck] + " == :" + arrReferenced[i] + "   indice:" + i);
            return true;
        }

    }
    return false;
}




function printBoard(board) {
    // let output = '';
    // for (let i = 0; i < board.length; i++) {
    //   output += '-----------------\n|';
    //   for (let j = 0; j < board[i].length; j++) {
    //     output += board[7-i][j] + '|';
    //   }
    //   output += '\n';
    // }
    // output += '-----------------';
    // console.log(output);

    let output = '';
    for (let i = 0; i < board.length; i++) {
        output += '-----------------\n|';
        for (let j = board[i].length - 1; j >= 0; j--) {
            output += board[i][j] + '|';
        }
        output += '\n';
    }
    output += '-----------------';
    console.log(output);

}


function TileField(request, response, chessboard){
    connection.execute('SELECT tile_x, tile_y, tile_id FROM Tile order by tile_x desc, tile_Y asc;',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("tChessboard un-retrievable");
                }else{
                    console.log("chessboard loaded");

                    //createChessBoard(request, response, results);
                    for(let i =0; i< results.length; i++){
                        chessboard[i] = results[i].tile_id;
                        console.log(chessboard[i]);
                    }
                    //response.send(results);
                    
                }
                
            }
                
            
        });
}





  app.put('/fillBoard1', (request, response) => {
    // Get the data from the request
    var matchPlayerId = request.body.mpId;
    var color = 3;


    // if the vars are empty is gives an error message
    if (!matchPlayerId){
        response.send("Missing data!   matchPlayerId: " + matchPlayerId + " color: " + color);
        return;
    }


    //retrieves the color
    connection.execute('SELECT mp_pc_id FROM Match_Player WHERE mp_id = ?;',
    [matchPlayerId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //response.send(results[0].mp_pc_id + "");
            var colorSent = results[0].mp_pc_id;
            //console.log("colore trovato " + colorSent);

            //now to fill the board with pieces.
            FillBoard1(request, response, matchPlayerId, colorSent);
            response.send("schacchiera riepmita")
        }
    });


    //FillBoard(matchPlayerId, color);

});

function FillBoard1(request, response, matchPlayerId, colorSent){   //function FillBoard(request, response, matchPlayerId, colorOpponent){

    var pieceId = 6;
    
    //fills the board for whites
    if(colorSent == 1){
        //looping and calling the function 16 times, incrementing the tileId and keeping the same pieceId apart for the king.
        for (let i = 1; i <= 16; i++) {

            console.log("i: " + i);

            if(i == 4){
                pieceId = 5;
            }

            AllocatingPieces1(matchPlayerId, i, pieceId)

            console.log("piece set in place white");
          }
    }else{ //fill the board for black
        for (let i = 49; i <= 64; i++) {

            if(i == 4){
                pieceId = 5;
            }

            AllocatingPieces1(matchPlayerId, i, pieceId)

            pieceId = 6;
            console.log("piece set in place black");
          } 
    }

    //response.send("Board FILLED!")

}

function AllocatingPieces1(matchPlayerId, tile, piece){

    connection.execute('INSERT INTO Match_Player_Piece (mpp_mp_id, mpp_tile_id, mpp_piece_id, mpp_ps_id) VALUE (?, ?, ?, 1);',
    [matchPlayerId, tile, piece],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //response.send("all pieces SET in place");
        }
    });

}




app.get('/getGameState1/:matchId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;
    var chessboard = [];
    //should check if player exist as ab actual player, retrieving his information

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT tile_x, tile_y, tile_id FROM Tile order by tile_x desc, tile_Y asc;',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("tChessboard un-retrievable");
                }else{
                    console.log("chessboard loaded");

                    //createChessBoard(request, response, results);
                    for(let i =0; i< results.length; i++){
                        chessboard[i] = results[i].tile_id;
                        console.log(chessboard[i] + " at index:" + i);
                    }

                    ObtainChessPiecesLocation(request, response, chessboard, matchId);
                    //response.send(results);
                    
                }
                
            }
                
            
        });
});

function ObtainChessPiecesLocation1(request, response, chessboard, matchId){
    connection.execute('select mpp_id, mpp_mp_id , mp_match_id , mpp_piece_id, mpp_tile_id , tile_x , tile_y from Match_player_piece inner join match_player on match_player.mp_id = match_player_piece.mpp_mp_id INNER JOIN Tile ON tile.tile_id = mpp_tile_id where mp_match_id = ? order by tile_x desc,  tile_y asc;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("there is no pieces on the board")
                }else{
                    console.log("pieces located");
                    //response.send(results.length + "");

                    CreateChessBoard(request, response, results, chessboard);

                }
                
            }
                
            
        });
}
















app.post('/movePiece', (request, response) => {
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

    // Validate if the positions are within the board boundaries
    if (startX < 1 || startX > 8 || startY < 1 || startY > 8 || endX < 1 || endX > 8 || endY < 1 || endY > 8) {
        response.send("Invalid position!");
        return ;
    }

    // Validate if the start and end positions are the same
    if (startX === endX && startY === endY) {
        response.send("Same position!");
        return ;
    }

    // Execute the query
    connection.execute(`SELECT ms.ms_description AS match_state FROM Match_Player mp INNER JOIN Match_State ms ON mp.mp_match_id = ? AND mp.mp_player_id = ? AND mp.mp_match_id = ms.ms_id; `,
    [matchId, playerId], 
    function (err, results, fields){
        if (err) {
            response.send(err);
        } else {
            // Check if the query returned no results
            if (results.length === 0) {
                // Player is not in the match
                response.send("Player is not in that match!");
            } else {

                // Extract the match state from the first row of the results
                const matchState = results[0].match_state;
                
                // Check if the match state is "On-going"
                if (matchState === "On-going") {
                    var pieceType ;

                    // Call the CheckIfPieceExists function with specified parameters
                    CheckIfPieceExists(request, response, startX, startY, matchId, function(result){
                        // Once the callback function is called, send the result back in the response
                        // Check if the move is valid by calling the isValidMove function
                        if (isValidMove(startX, startY, endX, endY, result)) {

                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //Updatethe piece position in the database
                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            var shard = "";

                            // Generate a random number between 0 and 1
                            const randomNumber = Math.random();

                            // Define the probability ranges
                            const range1 = 0.3; // 30%
                            const range2 = range1 + 0.3; // 30% + 30% = 60%
                            const range3 = range2 + 0.3; // 30% + 30% + 30% = 90%
                            const range4 = 1.0; // 100%

                            // Determine the random number category
                            if (randomNumber < range1) {
                                shard = 1; // 30% chance
                            } else if (randomNumber < range2) {
                                shard = 2; // 30% chance
                            } else if (randomNumber < range3) {
                                shard = 3; // 30% chance
                            } else {
                                shard = 4; // 10% chance
                            }
                            
                            connection.execute('SELECT mps.mps_shard_ammount, s.shard_ammount_needed FROM Match_Player_Shard mps JOIN Shard s ON mps.mps_shard_id = s.card_id JOIN Match_Player mp ON mps.mps_mp_id = mp.mp_id JOIN `Match` m ON mp.mp_match_id = m.match_id JOIN Player p ON mp.mp_player_id = p.player_id WHERE m.match_id = ? AND p.player_id = ? AND mps.mps_shard_id = ?;',
                            [matchId, playerId, shard],
                            function (err, results, fields) {
                                if (err) {
                                    response.send(err);
                                } else {
                                    var shardAmount = results[0].mps_shard_ammount;
                                    var shardNeeded = results[0].shard_ammount_needed;

                                    // Check if the shard amount is equal to the shard needed
                                    if(shardAmount++ === shardNeeded) {
                                        // Add a card and change the value of the shard to 0
                                        response.send("Add Card " + shard);
                                    }
                                    else{
                                        // Adds a shard 
                                        AddShard(request, response, shardAmount, matchId, playerId, shard);
                                    }
                                }
                            });
                        } else {
                            // Send a response indicating that the move is not valid
                            response.send("Move is not valid!");
                        }
                    });

                }
            }
        }

    });
});



// Function to check if a piece exists at a specified position in a match
function CheckIfPieceExists(request, response, startX, startY, matchId, callback) {
    // Database query to select the piece name from the Match_Player_Piece table
    connection.execute(
        'SELECT Piece.piece_name FROM Match_Player_Piece JOIN Match_Player ON Match_Player_Piece.mpp_mp_id = Match_Player.mp_id JOIN Piece ON Match_Player_Piece.mpp_piece_id = Piece.piece_id JOIN Tile ON Match_Player_Piece.mpp_tile_id = Tile.tile_id WHERE Match_Player.mp_match_id = ? AND Tile.tile_x = ? AND Tile.tile_y = ?;',
        [matchId, startX, startY], // Array of values to replace placeholders in the query
        function (err, results, fields) {
            // Check if there was an error during the query execution
            if (err) { // If there was an error, send the error back in the response
                
                response.send(err);
            } else { // If the query was successful                        
                // Check if there are any results returned
                if (results.length > 0) {
                    // If there are results,send the type of piece
                    callback(results[0].piece_name);
                } else {
                    // If no results are found, call the callback function with false
                    callback(false);
                }
            }
        }
    );
}

function AddShard(request, response, shardAmount, matchId, playerId, shard){

    connection.execute('UPDATE Match_Player_Shard SET mps_shard_ammount = ? WHERE mps_mp_id = ( SELECT mp.mp_id FROM Match_Player mp JOIN `Match` m ON mp.mp_match_id = m.match_id WHERE m.match_id = ? AND mp.mp_player_id = ?) AND mps_shard_id = ?;',
    [shardAmount++, matchId, playerId, shard],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            response.send("Shard added " + shard);
        }
    });
}



function isValidMove(startX, startY, endX, endY, pieceType) {

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