const express = require('express');
const router = express.Router();
const connection = require('../database');


router.post('/move', (request, response) => {
    // Get the data from the request
    var startX = request.body.startX;
    var startY = request.body.startY;
    var endX = request.body.endX;
    var endY = request.body.endY;
    var playerId = request.session.playerID;
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
    connection.execute('SELECT ms.ms_description AS match_state, pc1.pc_name AS player_color, pc2.pc_name AS color_playing FROM Match_Player mp INNER JOIN Player_Color pc1 ON mp.mp_pc_id = pc1.pc_id INNER JOIN `Match` m ON mp.mp_match_id = m.match_id INNER JOIN Match_State ms ON ms.ms_id = m.match_ms_id INNER JOIN Player_Color pc2 ON m.match_pc_id = pc2.pc_id WHERE m.match_id = ? AND mp.mp_player_id = ?; ',
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
                        // Once the callback function is called, send the result back in the response
                        GetBoardState(request, response, matchId, function(boardState) {   
                            // Check if the move is valid by calling the IsValidMove function
                            //get the return value of the IsValidMove validation
                            var moveIsValide = IsValidMove(startX, startY, endX, endY, piece.pieceType, boardState)  
                            //check if the move is valid   
                            if (moveIsValide[0] && (piece.pieceState == 'Alive' || piece.pieceState == 'Has not moved yet') && piece.playerID == playerId && piece.color_piece == colorPlaying) {
                                //if its valid but has a pice on the way....
                                if(moveIsValide[1]){ //if there is an enemy on the way....
                                    // Check whether the piece on the target tile is an enemy or an ally.
                                    if (moveIsValide[1].color == playerColor) { // If it's an ally, send a message indicating so.
                                        response.send("Ally on the Tile " + moveIsValide[1].x + " " + moveIsValide[1].y);
                                    } else { // If it's an enemy, update piece location and enemy's state accordingly.
                                        if (moveIsValide[1].x == endX && moveIsValide[1].y == endY) { // If the enemy is captured:
                                            // Check if the pawn has reached the promotion rank, and if so, promote it.

                                            // Change the captured enemy's state and, if applicable, the match state.
                                            ChangePieceState(request, response, moveIsValide[1].x, moveIsValide[1].y, matchId, 2);
                                            if (moveIsValide[1].pieceType == 'King') {
                                                ChangeMatchState(request, response, startX, startY, endX, endY,matchId);
                                            } else {
                                                // Upgrade the tier, update the piece position, and notify about the move.
                                                ChangeUpgardeTier(request, response, matchId);
                                                UpdatePiecePositionWithShard(request, response, startX, startY, moveIsValide[1].x, moveIsValide[1].y, matchId, playerId, piece, "Move with an enemy on the way and finished on position " + moveIsValide[1].x + " " + moveIsValide[1].y);
                                            }
                                        } else { // If there's an enemy piece on the way but not captured, send a message indicating so.
                                            response.send("Enemy piece on the way" + moveIsValide[1].x + " " + moveIsValide[1].y);
                                        }
                                    }
                                }
                                else // if all check send a message saying so
                                    UpdatePiecePositionWithShard(request, response, startX, startY, endX, endY, matchId, playerId, piece,"Move without piece on the way")
                            } else // Send a response indicating that the move is not valid
                                response.send("Move is not valid!");                            
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

//EndPoint Update Piece
router.post('/promote',(request, response)=>{

    var startX = request.body.startX;
    var startY = request.body.startY;
    var playerId = request.session.playerID;
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

    connection.execute('SELECT ms.ms_description AS match_state, pc1.pc_name AS player_color, pc2.pc_name AS color_playing FROM Match_Player mp INNER JOIN Player_Color pc1 ON mp.mp_pc_id = pc1.pc_id INNER JOIN `Match` m ON mp.mp_match_id = m.match_id INNER JOIN Match_State ms ON ms.ms_id = m.match_ms_id INNER JOIN Player_Color pc2 ON m.match_pc_id = pc2.pc_id WHERE m.match_id = ? AND mp.mp_player_id = ?; ',
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
                            CheckCanPromote(request, response, matchId, playerId, function(canPromote){
                                CheckPromotenArea(request, response, playerColor, startX, startY, function(validadePromoten){ 
                                    CheckUpgradeTier(request, response, matchId, cardId, function(validateUpgradeTier){
                                        // Once the callback function is called, send the result back in the response
                                        GetBoardState(request, response, matchId, function(boardState) {   
                                            //check if the move is valid 
                                            if ((piece.pieceState == 'Alive' || piece.pieceState == 'Has not moved yet') && piece.playerID == playerId && piece.color_piece == colorPlaying && validateCardExists && validadePromoten && validateUpgradeTier && canPromote && piece.pieceType == 'Pawn') {
                                                UpdatePieceType(request, response, cardId, startX, startY, matchId);
                                                ChangePieceState(request, response, startX, startY, matchId, 3);
                                                UpdateCanPromoteState(request, response, matchId, playerId, 0);
                                                UpdateCard(request, response, cardId, playerId);
                                                response.send ('Promotion Valid'); 
                                                
                                            } else // Send a response indicating that the move is not valid
                                            response.send("Piece is not valid!");                            
                                        });
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

function RandomShardGenerator(){
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

    return shard
}

function UpdatePiecePositionWithShard(request, response, startX, startY, endX, endY, matchId, playerId, piece, text){
    
    ResetPieceState(request, response, matchId);

    //if the pawnn gewt to the last row it promotes to a random piece
    if ((endY == 8 && piece.color_piece == 'White') || (endY == 1 && piece.color_piece == 'Black')) {
        var promotionPiece = RandomShardGenerator();
        UpdatePieceType(request, response, promotionPiece, startX, startY, matchId);
    }

    //makes the pawn go get the state that he cant move 2 tile after 1st move
    if(piece.pieceState == 'Has not moved yet')
        ChangePieceState(request, response, startX, startY, matchId, 1);
    
    //Update the piece position in the DB
    ChangePieceLocation(request, response, startX, startY, endX, endY, matchId);
    
    UpdateCanPromoteState(request, response, matchId, playerId, 1);


    var shard = RandomShardGenerator();
   
    connection.execute('SELECT mps.mps_shard_ammount, s.shard_ammount_needed FROM Match_Player_Shard mps JOIN Shard s ON mps.mps_shard_id = s.card_id JOIN Match_Player mp ON mps.mps_mp_id = mp.mp_id JOIN `Match` m ON mp.mp_match_id = m.match_id JOIN Player p ON mp.mp_player_id = p.player_id WHERE m.match_id = ? AND p.player_id = ? AND mps.mps_shard_id = ?;',
    [matchId, playerId, shard],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            var shardAmount = results[0].mps_shard_ammount + 1;
            var shardNeeded = results[0].shard_ammount_needed;
            
            // Check if the shard amount is equal to the shard needed
            if(shardAmount === shardNeeded) {
                // Add a card and change the value of the shard to 0
                ChangeShard(request, response, "0", matchId, playerId, shard);
                AddCard(request, response, matchId, playerId, shard);
                response.send(text + " - CARD added " + shard);
            }
            else{
                // Adds a shard 
                ChangeShard(request, response, shardAmount, matchId, playerId, shard);
                response.send(text + " - SHARD added " + shard);
            }
            
            //Changes who's turn is 
            ChangeWhoIsPlaying(request, response, matchId);
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Promotion related functions

function CheckCanPromote(request, response, matchId, playerId, callback) {
    connection.execute('SELECT mp_canPromote AS canPromote FROM Match_Player mpp WHERE mp_match_id = ? AND mp_player_id = ?;',
    [matchId, playerId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
        else {
            if (results[0].canPromote == 1)
                callback(true);
            else if (results[0].canPromote == 0)
                callback(false);
            
        }
    });
}

function UpdateCanPromoteState(request, response, matchId, playerId, canPromote) {

    connection.execute('UPDATE Match_Player SET mp_canPromote = ? WHERE mp_match_id = ? AND mp_player_id = ?;',
    [canPromote, matchId, playerId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
        
    });
}

//check's if they in the promoten area
function CheckPromotenArea(request, response, playerColor, startX, startY, callback) {

    connection.execute('SELECT count(*) AS promotionTile FROM Tile_Promotion tp INNER JOIN Tile t ON tp.tp_tile_id = t.tile_id INNER JOIN Player_Color pc ON pc.pc_id = tp.tp_pc_id WHERE (pc.pc_name = ? OR pc.pc_name = "Gray") AND t.tile_x = ? AND t.tile_y = ?;',
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Board/Match functions

function CheckUpgradeTier(request, response, matchId, cardId, callback){
    connection.execute('SELECT mp_ut_id AS upgradeTier FROM Match_Player WHERE mp_match_id = ?;',
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

function ChangeUpgardeTier(request, response, matchId){
    connection.execute('SELECT ut.ut_name AS upgradeTier FROM Match_Player mp INNER JOIN Upgrade_Tier ut ON ut.ut_id = mp.mp_ut_id WHERE mp.mp_match_id = ?;',
    [matchId]
    , function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            if (results[0].upgradeTier != 'Queen'){
                connection.execute('UPDATE Match_Player SET mp_ut_id = mp_ut_id + 1 WHERE mp_match_id = ?;',
                [matchId]
                , function (err, resultsInsert, fields) {
                    if (err) {
                        response.send(err);
                    } 
                });
            }
        }
    });
}

function ChangeMatchState(request, response, startX, startY, endX, endY,matchId) {
    ChangePieceLocation(request, response, startX, startY, endX, endY)
    connection.execute('UPDATE `Match` SET match_ms_id = 2 WHERE match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
        else {
            response.send("King died");
        }
    });
}

function GetBoardState(request, response, matchId, callback) {
    connection.execute('SELECT mp1.mp_id AS p1_id, mp2.mp_id AS p2_id FROM `Match` AS m JOIN Match_Player AS mp1 ON m.match_id = mp1.mp_match_id JOIN Match_Player AS mp2 ON m.match_id = mp2.mp_match_id WHERE m.match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        }
        else{
            connection.execute('SELECT t.tile_x AS x, t.tile_y AS y, pc.pc_name AS color, ps.ps_description AS piece_state, mpp.mpp_mp_id AS playerID, p.piece_name AS pieceType FROM Match_Player_Piece mpp INNER JOIN Piece p ON p.piece_id = mpp.mpp_piece_id INNER JOIN Tile t ON t.tile_id = mpp.mpp_tile_id INNER JOIN Match_Player mp ON mp.mp_id = mpp.mpp_mp_id INNER JOIN Player_Color pc ON pc.pc_id = mp.mp_pc_id INNER JOIN Piece_State ps ON mpp.mpp_ps_id = ps.ps_id WHERE mpp_mp_id = ? OR mpp_mp_id = ?;',
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

function ChangeWhoIsPlaying(request, response, matchId){
    connection.execute('UPDATE `Match` m SET match_pc_id = CASE WHEN match_pc_id = 1 THEN 2  WHEN match_pc_id = 2 THEN 1 ELSE match_pc_id  END  WHERE m.match_id = ?;',
    [matchId],
    function (err, results, fields){
        if (err) {
            response.send(err);
        } 
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Piece related functions

// Function to check if a piece exists at a specified position in a match
function CheckIfPieceExists(request, response, startX, startY, matchId, callback) {
    // Database query to select the piece name from the Match_Player_Piece table
    connection.execute('SELECT Piece.piece_name AS pieceType, Piece_State.ps_description AS pieceState, Match_Player.mp_player_id AS playerID, Player_Color.pc_name AS color_piece FROM Match_Player_Piece JOIN Piece ON Match_Player_Piece.mpp_piece_id = Piece.piece_id JOIN Piece_State ON Match_Player_Piece.mpp_ps_id = Piece_State.ps_id JOIN Match_Player ON Match_Player_Piece.mpp_mp_id = Match_Player.mp_id JOIN Player_Color ON Match_Player.mp_pc_id = Player_Color.pc_id JOIN Tile ON Match_Player_Piece.mpp_tile_id = Tile.tile_id JOIN `Match` ON Match_Player.mp_match_id = `Match`.match_id WHERE Tile.tile_x = ? AND Tile.tile_y = ? AND `Match`.match_id = ?;',
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

function UpdatePieceType(request, response, cardId, startX, startY, matchId) {

    var mppId;

    connection.execute('SELECT mpp_id FROM match_player_piece INNER JOIN tile ON tile_id = mpp_tile_id INNER JOIN match_player ON mp_id = mpp_mp_id WHERE mp_match_id = ? AND (tile_x = ? AND tile_y = ?);',
    [matchId, startX, startY],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        }else{
            mppId = results[0].mpp_id;

            PromoteSaidPiece(request, response, cardId, mppId)
        }
    });


}

function PromoteSaidPiece(request, response, cardId, mppId){

    connection.execute('UPDATE Match_Player_Piece mpp SET mpp.mpp_piece_id = ? WHERE mpp_id = ? AND mpp.mpp_piece_id = 5;',
    [cardId, mppId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
    });
}
function ResetPieceState(request, response, matchId) {
    connection.execute('SELECT mpp.mpp_id AS pieceId FROM Match_Player_Piece mpp INNER JOIN Piece_State ps ON mpp.mpp_ps_id = ps.ps_id INNER JOIN Match_Player mp ON mpp.mpp_mp_id =  mp.mp_id WHERE ps.ps_description = "Unusable for this turn" AND mp.mp_match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
        else {
            if( results[0]){
                connection.execute('UPDATE Match_Player_Piece mpp INNER JOIN Match_Player mp ON mpp_mp_id = mp.mp_id SET mpp_ps_id = 1 WHERE mp.mp_match_id = ? AND mpp.mpp_id = ?;',
                [matchId, results[0].pieceId],
                function (err, results, fields) {
                    if (err) {
                        response.send(err);
                    } 
                });
            }
        }
    });
}

function ChangePieceState(request, response, endX, endY, matchId, state){
    connection.execute('UPDATE Match_Player_Piece INNER JOIN Tile t ON mpp_tile_id = tile_id INNER JOIN Match_Player mp ON mpp_mp_id = mp.mp_id SET mpp_ps_id = ? WHERE t.tile_x = ? AND t.tile_y = ? AND mp.mp_match_id = ? AND (mpp_ps_id = 1 OR mpp_ps_id = 4);',
    [state, endX, endY, matchId],
    function (err, results, fields){
        if (err) {
            response.send(err);
        } 
    });
}

function ChangePieceLocation(request, response, startX, startY, endX, endY, matchId){
    var mppId;

    connection.execute('SELECT mpp_id FROM match_player_piece INNER JOIN tile ON tile_id = mpp_tile_id INNER JOIN match_player ON mp_id = mpp_mp_id WHERE mp_match_id = ? AND (tile_x = ? AND tile_y = ?);',
    [matchId, startX, startY],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        }else{
            mppId = results[0].mpp_id;
            
            MovePiece(request, response, endX, endY, mppId)
        }
    });

}

function MovePiece(request, response, endX, endY, mppId){

    connection.execute('UPDATE Match_Player_Piece SET mpp_tile_id = ( SELECT tile_id FROM Tile WHERE tile_x = ? AND tile_y = ?) WHERE mpp_id = ?;',
    [endX, endY, mppId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Card/shard related functions

//Check's if the card exists in the players hand 
function CheckCardExist(request, response, cardId, playerId, matchId, callback) {

    connection.execute('SELECT mpc.mpc_ammount AS ammount FROM Match_Player_Card mpc INNER JOIN Match_Player mp ON mp.mp_id = mpc.mpc_mp_id WHERE mpc.mpc_card_id = ? AND mp.mp_player_id = ? AND mp.mp_match_id = ?;',
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

//updates the value of the card after the update of the piece 
function UpdateCard(request, response, cardId, playerId) {

    connection.execute('UPDATE Match_Player_Card mpc INNER JOIN Match_Player mp ON mp.mp_id = mpc.mpc_mp_id SET mpc.mpc_ammount = mpc.mpc_ammount -1 WHERE mpc.mpc_card_id = ? AND mp.mp_player_id = ?;',
    [cardId, playerId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
    });
}

function AddCard(request, response, matchId, playerId, shard){

    connection.execute('UPDATE Match_Player_Card AS mpc JOIN Card AS c ON mpc.mpc_card_id = c.card_id SET mpc.mpc_ammount = mpc.mpc_ammount + 1 WHERE mpc.mpc_mp_id = (SELECT mp.mp_id FROM Match_Player AS mp JOIN `Match` AS m ON mp.mp_match_id = m.match_id WHERE m.match_id = ? AND mp.mp_player_id = ?) AND mpc.mpc_card_id = ?;',
    [ matchId, playerId, shard],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
    });
}

function ChangeShard(request, response, shardAmount, matchId, playerId, shard){

    connection.execute('UPDATE Match_Player_Shard SET mps_shard_ammount = ? WHERE mps_mp_id = ( SELECT mp.mp_id FROM Match_Player mp JOIN `Match` m ON mp.mp_match_id = m.match_id WHERE m.match_id = ? AND mp.mp_player_id = ?) AND mps_shard_id = ?;',
    [shardAmount, matchId, playerId, shard],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } 
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Move validation functions

function IsValidMove(startX, startY, endX, endY, pieceType, piecesArray) {
    // Check if the move is valid based on the piece type
    switch (pieceType) {
        case 'Pawn':
            return IsValidPawnMove(startX, startY, endX, endY, piecesArray);
        case 'Roock':
            return IsValidRookMove(startX, startY, endX, endY, piecesArray);
        case 'Knight':
            return IsValidKnightMove(startX, startY, endX, endY, piecesArray);
        case 'Bishop':
            return IsValidBishopMove(startX, startY, endX, endY, piecesArray);
        case 'Queen':
            return IsValidQueenMove(startX, startY, endX, endY, piecesArray);
        case 'King':
            return IsValidKingMove(startX, startY, endX, endY, piecesArray);
        default:
            return false; // If the piece type is not recognized
    }
}

function IsValidPawnMove(startX, startY, endX, endY, piecesArray) {
    startX = Number(startX);
    startY = Number(startY);
    endX = Number(endX);
    endY = Number(endY);

    // Find the piece at the start position
    let pieceAtStart = null;
    for (let i = 0; i < piecesArray.length; i++) {
        if (piecesArray[i].x == startX && piecesArray[i].y == startY) {
            pieceAtStart = piecesArray[i];
            break;
        }
    }
    
    // Check if there is a piece at the start position
    if (!pieceAtStart) {
        console.log("No piece found at the start position.");
        return [false];
    }
    
    
    // Determine the direction of movement based on the piece's color
    const direction = pieceAtStart.color === 'White' ? 1 : -1;

    // Check if the move is forward by one square
    if (endX == startX && endY == startY + direction) {
        // Check if the target square is empty
        for (let i = 0; i < piecesArray.length; i++) {
            if (piecesArray[i].x == endX && piecesArray[i].y == endY && piecesArray[i].piece_state) {
                console.log("Invalid move. The target square is occupied.");
                return [true, piecesArray[i]];
            }
        }
        return [true];
    }
    
    
    // Check if the move is the initial two-step move   
    if (startX == endX && pieceAtStart.piece_state == 'Has not moved yet' && endY == startY + 2 * direction) {
        // Check if the intermediate square is empty
        for (let i = 0; i < piecesArray.length; i++) {
            if (piecesArray[i].x == startX && piecesArray[i].y == startY + direction && piecesArray[i].piece_state) {
                console.log("Invalid move. The intermediate square is occupied.");
                return [true, piecesArray[i]];
            }
        }
        return [true];
    }



    // Check if the move is capturing diagonally
    if ((endX == startX + 1 || endX == startX - 1) && endY == startY + direction) {
        // Check if there's an enemy piece on the target square
        for (let i = 0; i < piecesArray.length; i++) {
            if (piecesArray[i].x === endX && piecesArray[i].y === endY && piecesArray[i].color !== pieceAtStart.color && piecesArray[i].piece_state) {
                return [true, piecesArray[i]];
            }
        }
        console.log("Invalid move. No enemy piece to capture.");
        return [true, pieceAtStart];
    }

    // Invalid move for pawn
    console.log("Invalid move for pawn.");
    return [false];


}

function IsValidRookMove(startX, startY, endX, endY, piecesArray) {
    startX = Number(startX);
    startY = Number(startY);
    endX = Number(endX);
    endY = Number(endY);
    
    // Check if the move is along a rank or a file
    if (startX !== endX && startY !== endY) {
        console.log("Invalid move. Rook can only move along ranks or files.");
        return [false];
    }
    
    // Determine the direction of movement
    const directionX = (endX - startX) >= 0 ? 1 : -1;
    const directionY = (endY - startY) >= 0 ? 1 : -1;
    
    // Check if there are pieces obstructing the rook's path
    if (startX === endX) { // Moving along the same rank
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        for (let i = minY + 1; i <= maxY; i++) {
            if (i !== startY) { // Exclude start position from the check
                for (let piece of piecesArray) {
                    if (piece.x === startX && piece.y === i && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece obstructing the path
                    }
                }
            } else { // Check if the end position coincides with a piece
                for (let piece of piecesArray) {
                    if (piece.x === startX && piece.y === endY && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece occupies the end position
                    }
                }
            }
        }        
    } else { // Moving along the same file
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX); 
        
        for (let i = minX; i <= maxX; i++) {
            if (i !== startX) { // Exclude start position from the check
                for (let piece of piecesArray) {
                    if (piece.x === i && piece.y === startY && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece obstructing the path
                    }
                }
            } else { // Check if the end position coincides with a piece
                for (let piece of piecesArray) {
                    if (piece.x === endX && piece.y === startY && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece occupies the end position
                    }
                }
            }
        }
    }
    // No obstructing piece found, move is possible
    return [true];
}

function IsValidKnightMove(startX, startY, endX, endY, piecesArray) {
    // Check if the move is in an L-shape
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);
    if (!((deltaX === 1 && deltaY === 2) || (deltaX === 2 && deltaY === 1))) {
        console.log("Invalid move. Knight can only move in an L-shape.");
        return [false];
    }
    // Check if there is an enemy piece on the target tile
    for (let i = 0; i < piecesArray.length; i++) {
        if (piecesArray[i].x === Number(endX) && piecesArray[i].y === Number(endY) && piecesArray[i].piece_state) {
            return [true, piecesArray[i]]; // Enemy piece found on the target tile, move is possible
        }
    }

    // No enemy piece found on the target tile, move is possible
    return [true];
}

function IsValidBishopMove(startX, startY, endX, endY, piecesArray) {
    startX = Number(startX);
    startY = Number(startY);
    endX = Number(endX);
    endY = Number(endY);
    
    // Check if the move is along a diagonal
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);
    if (deltaX !== deltaY) {
        console.log("Invalid move. Bishop can only move along diagonals.");
        return [false];
    }
    
    // Determine the direction of movement
    const directionX = (endX - startX) >= 0 ? 1 : -1;
    const directionY = (endY - startY) >= 0 ? 1 : -1;
    
    // Check if there are pieces obstructing the bishop's path
    let currentX = startX;
    let currentY = startY;

    while (currentX !== endX || currentY !== endY) {
        // Move to the next tile along the diagonal path
        currentX += directionX;
        currentY += directionY;

        for (let piece of piecesArray) {
            if (piece.x === currentX && piece.y === currentY && piece.piece_state === "Alive") {
                return [true, piece]; // Obstructing piece found, return its position
            }
        }

        // Check if the current position is the end position
        if (currentX === endX && currentY === endY) {
            for (let piece of piecesArray) {
                if (piece.x === endX && piece.y === endY && piece.piece_state === "Alive") {
                    return [true, piece]; // Obstructing piece found, return its position
                }
            }
            break;
        }
    }

    
    // Check the end position for a piece
    for (let piece of piecesArray) {
        if (piece.x === endX && piece.y === endY && piece.piece_state === "Alive") {
            return [true, piece]; // Obstructing piece found, return its position
        }
    }
    // No obstructing piece found, move is possible
    return [true];
}

function IsValidQueenMove(startX, startY, endX, endY, piecesArray) {
    startX = Number(startX);
    startY = Number(startY);
    endX = Number(endX);
    endY = Number(endY);

    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    // Check if the move is along a rank or a file
    if (startX !== endX && startY !== endY) {
        // Check if the move is along a diagonal
        if (deltaX !== deltaY) {
            console.log("Invalid move. Queen can only move along ranks, files, or diagonals.");
            return [false];
        }
    }
    
    // Determine the direction of movement for rank and file
    const directionX_Rank = (endX - startX) >= 0 ? 1 : -1;
    const directionY_Rank = (endY - startY) >= 0 ? 1 : -1;
    
    // Check if there are pieces obstructing the rook's path
    if (startX === endX) { // Moving along the same rank
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        for (let i = minY + 1; i <= maxY; i++) {
            if (i !== startY) { // Exclude start position from the check
                for (let piece of piecesArray) {
                    if (piece.x === startX && piece.y === i && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece obstructing the path
                    }
                }
            } else { // Check if the end position coincides with a piece
                for (let piece of piecesArray) {
                    if (piece.x === startX && piece.y === endY && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece occupies the end position
                    }
                }
            }
        }        
    } else if(startY === endY) { // Moving along the same file
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX); 
        
        for (let i = minX; i <= maxX; i++) {
            if (i !== startX) { // Exclude start position from the check
                for (let piece of piecesArray) {
                    if (piece.x === i && piece.y === startY && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece obstructing the path
                    }
                }
            } else { // Check if the end position coincides with a piece
                for (let piece of piecesArray) {
                    if (piece.x === endX && piece.y === startY && piece.piece_state === "Alive") {
                        return [true, piece]; // Piece occupies the end position
                    }
                }
            }
        }
    }
    
    // Determine the direction of movement for diagonal
    const directionX_Diagonal = (endX - startX) >= 0 ? 1 : -1;
    const directionY_Diagonal = (endY - startY) >= 0 ? 1 : -1;
    
    // Check if there are pieces obstructing the queen's path along the diagonal
    let currentX = startX;
    let currentY = startY;

    if (deltaX === deltaY) {
        while (currentX !== endX || currentY !== endY) {
            // Move to the next tile along the diagonal path
            currentX += directionX_Diagonal;
            currentY += directionY_Diagonal;
            
            for (let piece of piecesArray) {
                if (piece.x === currentX && piece.y === currentY && piece.piece_state === "Alive") {
                    return [true, piece]; // Obstructing piece found, return its position
                }
            }
            
            // Check if the current position is the end position
            if (currentX === endX && currentY === endY) {
                for (let piece of piecesArray) {
                    if (piece.x === endX && piece.y === endY && piece.piece_state === "Alive") {
                        return [true, piece]; // Obstructing piece found, return its position
                    }
                }
                break;
            }
        }
        
    }
    // No obstructing piece found, move is possible
    return [true];
}
    
function IsValidKingMove(startX, startY, endX, endY, piecesArray) {
    startX = Number(startX);
    startY = Number(startY);
    endX = Number(endX);
    endY = Number(endY);

    // Check if the move is within one square in any direction
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);
    if (deltaX <= 1 && deltaY <= 1) {
        // Check if there's a piece at the destination
        for (let piece of piecesArray) {
            if (piece.x === endX && piece.y === endY && piece.piece_state === "Alive") {
                return [true, piece]; // Obstructing piece found, return its position
            }
        }
        // No obstructing piece found, move is possible
        return [true];
    } else {
        console.log("Invalid move. King can only move one square in any direction.");
        return [false];
    }
}

module.exports = router;