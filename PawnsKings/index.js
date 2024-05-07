// Dependencies of the project
const express = require('express');
// Create a new connection to the database
const connection = require('./database');
const signing = require('./API/signing');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
app.use(express.urlencoded());

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));
app.use('/signing', signing);

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

//EndPoint Update Piece

app.post('/upgradePiece',(request, response)=>{

    var startX = request.body.startX;
    var startY = request.body.startY;
    var playerId = request.body.playerId;
    var matchId = request.body.matchId;
    var cardId = request.body.cardId

    // If any of the info is missing
    if (!startX || !startY || !playerId|| !matchId|| !cardId){
        response.send("Missing Info!");
        return;
    }

// Validate if the positions are within the board boundaries
if (startX < 1 || startX > 8 || startY < 1 || startY > 8) {
    response.send("Invalid position!");
    return ;
}

connection.execute('SELECT ms_description AS match_state, pc1.pc_name AS player_color, pc2.pc_name AS color_playing FROM Match_Player mp INNER JOIN `Match_State` ms ON mp.mp_match_id = ? AND mp.mp_player_id = ? AND mp.mp_match_id = ms.ms_id INNER JOIN player_color pc1 ON mp.mp_pc_id = pc1.pc_id INNER JOIN `Match` m ON mp.mp_match_id = m.match_id INNER JOIN player_color pc2 ON m.match_pc_id = pc2.pc_id; ',
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
                const playerColor = results[0].player_color;
                const colorPlaying = results[0].color_playing;
                
                // Check if the match state is "On-going"
                if (matchState === "On-going") {

                    // Call the CheckIfPieceExists function with specified parameters
                    CheckIfPieceExists(request, response, startX, startY, matchId, function(piece){
                        CheckCardExist(request, response, cardId, playerId, matchId, function(validateCardExists){
                            CheckPromotenArea(request, response, playerColor, startX, startY, function(validadePromoten){ 
                                CheckUpgradeTier(request, response, matchId, cardId, function(validateUpgradeTier){
                                    // Once the callback function is called, send the result back in the response
                                    GetBoardState(request, response, matchId, function(boardState) {   
                                        console.log(piece);
                                        //check if the move is valid                
                                        if ((piece.pieceState == 'Alive' || piece.pieceState == 'Has not moved yet') && piece.playerID == playerId && piece.color_piece == colorPlaying && validateCardExists && validadePromoten && validateUpgradeTier && piece.pieceType == 'Pawn') {
                                            UpdatePieceType(request, response, cardId, startX, startY);
                                            UpdateCard(request, response, cardId);
                                            response.send ('promotiona Valid'); 
                                            
                                        } else // Send a response indicating that the move is not valid
                                        response.send("Piece is not valid!");                            
                                    });
                                });                                  
                            });
                        });
                    });
                }
                else {
                    response.send("Match is not on-going!");
                }
                
            }
        }
    });
});

function UpdatePieceType(request, response, cardId, startX, startY) {

    connection.execute('UPDATE match_player_piece mpp INNER JOIN tile t ON t.tile_id = mpp.mpp_tile_id SET mpp.mpp_piece_id = ? WHERE t.tile_x = ? AND t.tile_y = ?;',
    [cardId, startX, startY],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
    });
}

//Check's if the card exists in the players hand 

function CheckCardExist(request, response, cardId, playerId, matchId, callback) {

    connection.execute('SELECT mpc.mpc_ammount AS ammount from match_player_card mpc INNER JOIN match_player mp ON mp.mp_id = mpc.mpc_mp_id WHERE mpc.mpc_card_id = ? and mp.mp_player_id = ? AND mp.mp_match_id = ?;',
    [cardId, playerId, matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            if (results[0].ammount >= 1)
                callback(true);            
            else
                callback(false);
        }
    });
}

//check's if they in the promoten area

function CheckPromotenArea(request, response, playerColor, startX, startY, callback) {

    connection.execute('SELECT count(*) AS promotionTile FROM tile_promotion tp INNER JOIN tile t ON tp.tp_tile_id = t.tile_id INNER JOIN player_color pc ON pc.pc_id = tp.tp_pc_id WHERE (pc.pc_name = ? OR pc.pc_name = "Gray") AND t.tile_x = ? AND t.tile_y = ?;',
    [playerColor, startX, startY],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            if (results[0].promotionTile == 1)
                callback(true)            
            else
                callback(false)
        }
    });

}

function CheckUpgradeTier(request, response, matchId, cardId, callback){
    connection.execute('SELECT mp_ut_id AS upgradeTier FROM match_player WHERE mp_match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            if (results[0].upgradeTier >= cardId)
                callback(true)            
            else
                callback(false)
        }
    });
}

//check's if the piece actually exists

function CheckIfPieceExists(request, response, startX, startY, matchId, callback) {
    // Database query to select the piece name from the Match_Player_Piece table
    connection.execute('SELECT Piece.piece_name AS pieceType, ps.ps_description AS pieceState, Match_Player_Piece.mpp_mp_id AS playerID, pc.pc_name AS color_piece FROM Match_Player_Piece JOIN Piece ON Match_Player_Piece.mpp_piece_id = Piece.piece_id JOIN Tile ON Match_Player_Piece.mpp_tile_id = Tile.tile_id JOIN Match_Player ON Match_Player_Piece.mpp_mp_id = Match_Player.mp_id JOIN piece_state ps ON  Match_Player_Piece.mpp_ps_id = ps_id JOIN player_color pc ON Match_Player.mp_pc_id = pc.pc_id JOIN `Match` ON Match_Player.mp_match_id = `Match`.match_id WHERE Tile.tile_x = ? AND Tile.tile_y = ? AND `Match`.match_id = ?;',
        [startX, startY, matchId], // Array of values to replace placeholders in the query
        function (err, results, fields) {
            // Check if there was an error during the query execution
            if (err) { // If there was an error, send the error back in the response
                
                response.send(err);
            } else { // If the query was successful                        
                // Check if there are any results returned
                if (results.length > 0) {
                    // If there are results,send the type of piece
                    callback(results[0]);
                } else {
                    // If no results are found, call the callback function with false
                    callback(false);
                }
            }
        }
    );
}

// it get's board state :)

function GetBoardState(request, response, matchId, callback) {
    connection.execute('SELECT mp1.mp_player_id AS p1_id, mp2.mp_player_id AS p2_id FROM `Match` AS m JOIN Match_Player AS mp1 ON m.match_id = mp1.mp_match_id JOIN Match_Player AS mp2 ON m.match_id = mp2.mp_match_id WHERE m.match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        }
        else{
            connection.execute('SELECT t.tile_x AS x, t.tile_y AS y, pc.pc_name AS color, ps.ps_description AS piece_state, mpp.mpp_mp_id AS playerID FROM match_player_piece mpp INNER JOIN tile t ON t.tile_id =mpp.mpp_tile_id INNER JOIN match_player mp ON mp.mp_id = mpp.mpp_mp_id INNER JOIN player_color pc ON pc.pc_id = mp.mp_pc_id INNER JOIN piece_state ps ON mpp.mpp_ps_id = ps.ps_id WHERE mpp_mp_id = ? OR mpp_mp_id = ?;',
            [results[1].p1_id, results[1].p2_id]
            , function (err, results, fields) {
                if (err) {
                    response.send(err);
                } else {
                    callback(results);
                }
            });
        }
    });
}
//updates the value of the card after the update of the piece 

function UpdateCard(request, response, cardId) {

    connection.execute('UPDATE match_player_card SET mpc_ammount = mpc_ammount -1 WHERE mpc_card_id = ? ',
    [cardId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
    });
}