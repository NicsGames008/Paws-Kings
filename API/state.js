const express = require('express');
const router = express.Router();
const connection = require('../database');


//----------------------------------------------GAME STATE----------------------------

router.get('/game', (request, response) => {
    // Get the data from the request as a parameter
    var matchId = request.session.matchID;

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    //gives back a number of basic information for display reasons
    connection.execute('SELECT match_id, match_ms_id, match_pc_id, Player_Color.pc_name AS colorName, mp_match_id, mp_ut_id, ut_name AS upgradeTier, player_id, player_name, mp_pc_id, pc.pc_name FROM `Match` INNER JOIN Player_Color ON Player_Color.pc_id = match_pc_id INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id  INNER JOIN Player ON Player.player_id = mp_player_id INNER JOIN Player_Color pc ON pc.pc_id = mp_pc_id INNER JOIN Upgrade_Tier ON Upgrade_Tier.ut_id = mp_ut_id WHERE match_id = ? ORDER BY mp_pc_id;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existes with said id");
                }else{
                    //console.log("match id found");
                    //console.log(matchId);
                    response.send(results);
                    
                    
                }
                
            }
        });
});

//----------------------------CARD---------------------------------------------------

router.get('/card', (request, response) => {
    // Get the data from the request
    var matchId = request.session.matchID;
    var playerId = request.session.playerID;

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    //returns the card's name and ammount for both player, ordered by mp_pc_id
    connection.execute('SELECT card_id, card_name, mpc_ammount, mp_pc_id FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id INNER JOIN Match_Player_Card ON Match_Player_Card.mpc_mp_id = Match_Player.mp_id INNER JOIN Card ON Card.card_id = Match_Player_Card.mpc_card_id WHERE match_id = ? AND mp_player_id = ? ORDER BY mp_pc_id, card_id;',
        [matchId, playerId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existS with said id, ERGO cannot retrieve cards");
                }else{
                    response.send(results);
                    
                }
                
            }
        });
});

//----------------------------SHARD---------------------------------------------------

router.get('/shard', (request, response) => {
    // Get the data from the request
    var matchId = request.session.matchID;
    var playerId = request.session.playerID;

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    //returns the shard's ammount for both player, ordered by mp_pc_id
    connection.execute('SELECT card_id, mps_shard_ammount, shard_ammount_needed, mp_pc_id  FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id INNER JOIN Match_Player_Shard ON Match_Player_Shard.mps_mp_id = Match_Player.mp_id INNER JOIN Shard ON Shard.card_id = Match_Player_Shard.mps_shard_id WHERE match_id = ? AND mp_player_id = ? ORDER BY mp_pc_id, card_id;',
        [matchId, playerId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existS with said id, ERGO cannot retrieve shards");
                }else{
                    response.send(results);
                    
                }
                
            }
        });
});

//-----------------------------BOARD STAUTS DONE RIGHT-------------------------------

router.get('/boardR', (request, response) => {
    // Get the data from the request
    var matchId = request.session.matchID;


    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT DISTINCT(mp_id) FROM Match_Player INNER JOIN Match_Player_Piece ON mp_id = mpp_mp_id WHERE mp_match_id = ?;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("mps unretrieved");
                }else{
                    //console.log("Got the two mps!");

                    FillFleetingBoard(request, response, results);
                }
            }
        });
});

function FillFleetingBoard(request, response, previusResults){
    //array that rappresents the chessboard
    var chessboard = [];

    var actualChessBoard = [];

    connection.execute('SELECT t.tile_id, t.tile_x as x, t.tile_y as y, mpp.mpp_piece_id, mpp_mp_id, mp_pc_id, mpp_ps_id, mp.mp_player_id AS playerID FROM Tile t LEFT JOIN Match_Player_Piece mpp ON mpp.mpp_tile_id = t.tile_id AND (mpp.mpp_mp_id = ? OR mpp.mpp_mp_id = ?) AND mpp_ps_id != 2  LEFT JOIN Match_Player mp ON mp.mp_id = mpp.mpp_mp_id order by tile_id; ',
    [previusResults[0].mp_id, previusResults[1].mp_id],
    function (err, results, fields) {
        if (err){
            response.send(err);
        }else{
            if(results.length == 0){
                response.send("MPPS for mps not found");
            }else{
                response.send(results);
            }
            
        }
            
        
    });
}


// function ReverseHorizontally(array) {
//     let numRows = array.length / 8;
//     let reversedArray = [];

//     for (let i = numRows - 1; i >= 0; i--) {
//         let row = array.slice(i * 8, (i + 1) * 8);
//         reversedArray.push(...row);
//     }

//     return reversedArray;
// }

//------------------------------------Donkey function-------------------------------------------
//                       continuosly asking if it's the user's turn

router.get('/donkey', (request, response) => {
    // Get the data from the request
    var matchId = request.session.matchID;
    var playerId = request.session.playerID;

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    //Fetches the on-going match of said player id(both gatehr from coockies) and if the results legth is not 0, then sends back the color to be used to check if it's said player's turn
    connection.execute('SELECT match_ms_id, match_pc_id AS currentColor, mp_player_id, mp_pc_id AS playerColor FROM `Match` INNER JOIN Player_Color ON Player_Color.pc_id = match_pc_id  INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id   WHERE match_id = ? AND mp_player_id = ?  AND match_ms_id = 1 ORDER BY mp_pc_id;',
        [matchId, playerId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("Player/Match/On-Going found");
                }else{
                    response.send(results[0].currentColor == results[0].playerColor);
                }
            }
        });
});


router.get('/inMatch', (request, response) =>{
    var playerId = request.session.playerID; 

    if(!playerId) {
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT match_id FROM `Match` INNER JOIN Match_Player mp ON mp.mp_match_id =  `Match`.match_id WHERE match_ms_id = 1 AND mp.mp_player_id = ?;',
        [playerId],
        function (err, results, fields) {
            if (err){
                response.status(400).send({
                    "error": "Not searching for a match!"
                });
                return;
            }else{
                if(results.length > 0){
                    console.log(results[0].match_id);
                    request.session.matchID = results[0].match_id;
                    console.log(request.session.matchID, request.session.playerID);
                    response.status(202).send({
                        "message": "Player in match already!"
                    });
                }else{
                    response.status(200).send({
                        "message": "Not in a match yet!"
                    });
                }
            }
        });
});

module.exports = router;