const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post('/search', (request, response) => {
    // Get the data from the request
    if (!request.session.playerID){
        response.status(403).send({
            "error": "Not logged in"
        });
        return;
    }

    var p1 = request.session.playerID;

    // Executes the query to see if somebody is searching for a match and joins it; if none is searching a match, it will create one
    connection.execute('SELECT match_id, mp_player_id, mp_pc_id FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id WHERE match_ms_id = 3',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){ // no Match to join

                    CreateMatchAsFirst(request, response, p1);
                    
                }else{// match to join as long as you it's not against yourself
                    for(let i = 0; i < results.length; i++){
                        if(results[i].mp_player_id != p1){
                            //finds the match_id, gets the color, creates the board/shards/cards and hsould redirect the user to that page
                            var matchId = results[0].match_id;

                            //selects the remaing color
                            var colorTakenId = results[0].mp_pc_id;
                            var colorFreeId;
                            if(colorTakenId == 1){
                                colorFreeId = 2;
                            }else{
                                colorFreeId = 1;
                            }

                            //found the match, now is time to create the match_players
                            InsertIntoMatchPlayerAsSecond(request, response, matchId, p1, colorFreeId);

                        }else{
                            response.status(406).send({
                                "message": "Already searching for a match!"
                            });
                        }
                    }
                }
            }
        });
});

//-------------------Creating the match with no opponent------------------------

function CreateMatchAsFirst(request, response, playerId){
    var matchId
    var colorId = Math.floor(Math.random() * 2) + 1;

    //creates a match and defines it as "searchign for an opponent" and with white as the starting color
    connection.execute('INSERT INTO `Match` (match_ms_id, match_pc_id) VALUES(3, 1);',
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            matchId = results.insertId;

            CreateMatchPlayerAsFirst(request, response, matchId, playerId, colorId)
        }
    });
}

function CreateMatchPlayerAsFirst(request, response, matchId, playerId, colorUser){
    //console.log('Query:\n' + "INSERT INTO Match_Player (mp_match_id, mp_player_id, mp_ut_id, mp_pc_id, mp_canPromote) VALUES ("+matchId+", "+playerId+", 1, "+colorUser+", 1)")
    connection.execute('INSERT INTO Match_Player (mp_match_id, mp_player_id, mp_ut_id, mp_pc_id, mp_canPromote) VALUES (?, ?, 1, ?, 1)',
    [matchId, playerId, colorUser],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            request.session.matchID = matchId;
            

            response.status(201).send({
                "message": "Created a match as first."
            });
        }
    });
}

//--------------------JOIN match as second-------------------------------------

function InsertIntoMatchPlayerAsSecond(request, response, matchId, playerId, colorId){

    //used to calcolate the opponent's color, then creates the matc_players. GIVEN the match
    connection.execute('INSERT INTO match_player(mp_match_id, mp_player_id, mp_ut_id, mp_pc_id, mp_canPromote) VALUES (?, ?, 1, ?, 1);',
    [matchId, playerId, colorId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            
            //Fills board and inventory fro said player, later fetches the opponent and does the same.
            FetchDataForMatchFullfilling(request, response, matchId);

        }
    });
}

function FetchDataForMatchFullfilling(request, response, matchId){
    connection.execute('SELECT mp_id, mp_pc_id FROM Match_Player WHERE mp_match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send( err);
        } else {
            //Stores the different ids and later fill the match
            // var mpId1 = results[0].mp_id;
            // var mpId2 = results[1].mp_id;

            //now to fill the board with pieces.
            FillBoard(request, response, results[0].mp_id, results[0].mp_pc_id);
            FillBoard(request, response, results[1].mp_id, results[1].mp_pc_id);

            //time to create the card and shard counter!
            FillCardandShard(request, response, results[0].mp_id);
            FillCardandShard(request, response, results[1].mp_id);

            ReadyMatch(request, response, matchId);
            //response.send("MP_ids: "+ mpId1 + " "+ mpId2 +" /Board FILLED correctly!  Card, shard counter CREATED correctly!");
        }
    });
}

function FillBoard(request, response, mpId, colorId){   //function FillBoard(request, response, matchPlayerId, colorOpponent){

    var pawnId = 5;
    var psId = 4;

    var kingId = 6;
    var kingPsId = 1;

    //fills the board for whites
    if(colorId == 1){
        //looping and calling the function 16 times, incrementing the tileId and keeping the same pieceId apart for the king.
        for (let i = 1; i <= 16; i++) {
            switch(i){
                case 5:
                    AllocatingPieces(mpId, i, kingId, kingPsId)
                    break;
                default:
                    AllocatingPieces(mpId, i, pawnId, psId)
            }
          }
    }else{ //fill the board for black
        for (let i = 48; i <= 64; i++) {
            switch(i){
                case 61:
                    AllocatingPieces(mpId, i, kingId, kingPsId)
                    break;
                default:
                    AllocatingPieces(mpId, i, pawnId, psId)
            }
          }
    }

    //response.send("Board FILLED!")

}

function AllocatingPieces(mpId, tile, piece, pieceState){

    connection.execute('INSERT INTO Match_Player_Piece (mpp_mp_id, mpp_tile_id, mpp_piece_id, mpp_ps_id) VALUE (?, ?, ?, ?);',
    [mpId, tile, piece, pieceState],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            
        }
    });

    
}

function FillCardandShard(request, response, mpId){   //function FillBoard(request, response, matchPlayerId, colorOpponent){

    for (let i = 1; i <= 4; i++) {
        AllocatingCards(mpId, i);
        AllocatingShards(mpId, i);
      }
}

function AllocatingCards(matchPlayerId, cardId){

    connection.execute('INSERT INTO Match_Player_Card (mpc_mp_id, mpc_card_id, mpc_ammount) VALUES (?, ?, 0);',
    [matchPlayerId, cardId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //console.log("card Id: " + cardId + " slot created!");
        }
    });
 }
    
function AllocatingShards(matchPlayerId, cardId){

    connection.execute('INSERT INTO Match_Player_Shard (mps_mp_id, mps_shard_id, mps_shard_ammount) VALUES (?, ?, 0);',
    [matchPlayerId, cardId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //console.log("shard Id: " + cardId + " slot created!");
        }
    });

}

//Changes the state of a match, from "seathcing for a match" -> "on-going"
function ReadyMatch(request, response, matchId){
    connection.execute('UPDATE `match` SET match_ms_id = 1 WHERE match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send( err);
        } else {
            request.session.matchID = matchId;
            response.status(200).send({
                "message": "match joined succesfully, everything ready!"
            });
            //redirecting to game page
        }
    });
}


//------------------------------------Leaving queue---------------------------------------


router.put('/leave', (request, response) => {
    // Get the data from the request

    if (!request.session.playerID){
        response.status(403).send({
            "error": "Not logged in"
        });
        return;
    }

    var p1 = request.session.playerID;
    var matchId;

    //should check if player exist as ab actual player, retrieving his information

    // Executes the query to see if somebody is searching for a match and joins it, if it has an error, it will send the error message
    connection.execute('SELECT match_id, mp_player_id FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id WHERE match_ms_id = 3 AND mp_player_id = ?;',
        [p1],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.status(406).send({
                        "error": "gotta start searching for a match before stopping"
                    });
                }else{
                    matchId = results[0].match_id;
                    LeaveMatchPlayer(request, response, matchId);
                }
            }

        });
});

function LeaveMatchPlayer(request, response, matchId) {

    //Updates the state of the match of the given match
    
    connection.execute('UPDATE `Match` SET match_ms_id = 4 WHERE match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //asking cesar ggs
            //-----------------------------------------------------------------------------------------------------------------------------------------------------
            request.session.matchID = 0;
            response.status(200).send({
                "message" : "Stopped searching for a match"
            });
        }
    });
}

//---------------------------------ask for queue status---------------------------------------------

router.get('/status', (request, response) => {
    
    var playerID = request.session.playerID;
    var matchID = request.session.matchID;

    // Get the data from the request
    if (!playerID){
        response.status(403).send({
            "error": "Not logged in"
        });
        return;
    }

    //the matchid stops iding due to the server error, why?

    if (!matchID)
    {
        response.status(400).send({
            "error": "Not searching for a match!"
        });
        return;
        // search for a match
        // if finds any join
        // otherwise create it (define the session.matchID)
    }else{
        // Check if the player is already in match
            // if so, send message to the frontend to redirect to game page.
        connection.execute('SELECT match_id FROM `Match` INNER JOIN Match_Player mp ON mp.mp_match_id = `Match`.match_id WHERE (match_ms_id = 1 OR match_ms_id = 3) AND match_id = ? AND mp.mp_player_id != ?;',
        [matchID, playerID],
        function (err, results, fields) {
            if (err){//not searhcing for anything
                response.status(400).send({
                    "error": "Not searching for a match!"
                });
                return;
            }else if(results.length == 0){//User is not searching any matches
                response.status(201).send({
                    "message": "Still searching for a match",
                    "result": results
                });
            }else if(results.length > 0) {
                // //User is searching for a match
                response.status(200).send({
                    "message": "Match found, redirecting the user",
                    "result": results
                });
            }              
        });

        // if not in game
            // send message still searching for a match (frontend will setInterval every x seconds for an update)
    }

    // Executes the query to see if somebody is searching for a match and joins it, if it has an error, it will send the error message
    
});


module.exports = router;