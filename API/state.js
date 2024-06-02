const express = require('express');
const router = express.Router();
const connection = require('../database');


//----------------------------------------------GAME STATE----------------------------

router.get('/game/:matchId', (request, response) => {
    // Get the data from the request as a parameter
    var matchId = request.params.matchId;

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
                    console.log(matchId);
                    response.send(results);
                    
                    
                }
                
            }
        });
});

//----------------------------CARD---------------------------------------------------

router.get('/card/:matchId/:playerId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;
    var playerId = request.params.playerId;

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    //returns the card's name and ammount for both player, ordered by mp_pc_id
    connection.execute('SELECT card_name, mpc_ammount FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id INNER JOIN Match_Player_Card ON Match_Player_Card.mpc_mp_id = Match_Player.mp_id INNER JOIN Card ON Card.card_id = Match_Player_Card.mpc_card_id WHERE match_id = ? AND mp_player_id = ? ORDER BY mp_pc_id, card_id;',
        [matchId, playerId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existed with said id, cannot retrieve cards");
                }else{
                    //console.log("cards found");
                    response.send(results);
                    
                }
                
            }
        });
});

//----------------------------SHARD---------------------------------------------------

router.get('/shard/:matchId/:playerId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;
    var playerId = request.params.playerId;

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    //returns the shard's ammount for both player, ordered by mp_pc_id
    connection.execute('SELECT mps_shard_ammount FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id INNER JOIN Match_Player_Shard ON Match_Player_Shard.mps_mp_id = Match_Player.mp_id INNER JOIN Card ON Card.card_id = Match_Player_Shard.mps_shard_id WHERE match_id = ? AND mp_player_id = ? ORDER BY mp_pc_id, card_id;',
        [matchId, playerId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existed with said id, cannot retrieve shards");
                }else{
                    //console.log("shards found");
                    response.send(results);
                    
                }
                
            }
        });
});

//-----------------------------BOARD STAUTS DONE RIGHT-------------------------------

router.get('/boardR/:matchId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;


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

    connection.execute('SELECT t.tile_id, mpp.mpp_tile_id, mpp.mpp_piece_id, mpp_mp_id, mp_pc_id FROM Tile t LEFT JOIN Match_Player_Piece mpp ON mpp.mpp_tile_id = t.tile_id  AND (mpp.mpp_mp_id = ? OR mpp.mpp_mp_id = ?) AND mpp_ps_id != 2 LEFT JOIN Match_Player mp ON mp.mp_id = mpp.mpp_mp_id;',
    [previusResults[0].mp_id, previusResults[1].mp_id],
    function (err, results, fields) {
        if (err){
            response.send(err);
        }else{
            if(results.length == 0){
                response.send("MPPS for mps not found");
            }else{
                //console.log("pieces founds!");

                //printing th eboard to see if the id matches
                let tileset = '';
                for(let i = 0; i< results.length; i++){
                    chessboard[i] = results[i].tile_id;
                    tileset += chessboard[i] + '|'
                    if((i+1)%8 == 0){
                        tileset += '\n|';
                    }
                }


                //composing the chees board
                for(let i = 0; i < results.length; i++){

                    //If the pieece exist, we can start wokring on it
                    if(results[i].mpp_piece_id != null){

                        //Detecting the color
                        if(results[i].mp_pc_id == 1){
                            actualChessBoard[i] = 'w';
                        }else{
                            actualChessBoard[i] = 'b';
                        }

                        //Assinging the piece type
                        switch(results[i].mpp_piece_id){
                            case 1:     //Bishop
                                actualChessBoard[i] += 'Bi';
                                break;
                            case 2:     //Roock
                                actualChessBoard[i] += 'Ro';
                                break;
                            case 3:     //Knight
                                actualChessBoard[i] += 'Kn';
                                break;
                            case 4:     //Quween
                                actualChessBoard[i] += 'Qw';
                                break;
                            case 5:     //Pawn
                                actualChessBoard[i] += 'Pa';
                                break;
                            case 6:     //King
                                actualChessBoard[i] += 'Ki';
                                break;
                            default:
                                console.log("roock is intentional btw");
                        }
                    }else{
                        actualChessBoard[i] = ' '
                    }

                    //console.log((i+1) + " " + actualChessBoard[i]);
                }

                let horizontallyReversed = ReverseHorizontally(actualChessBoard);

                response.send(horizontallyReversed);
                
            }
            
        }
            
        
    });
}


function ReverseHorizontally(array) {
    let numRows = array.length / 8;
    let reversedArray = [];

    for (let i = numRows - 1; i >= 0; i--) {
        let row = array.slice(i * 8, (i + 1) * 8);
        reversedArray.push(...row);
    }

    return reversedArray;
}

module.exports = router;