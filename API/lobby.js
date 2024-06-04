const express = require('express');
const router = express.Router();
const connection = require('../database');


router.post('/search', (request, response) => {
    // Get the data from the request
    var p1 = request.body.p1;
    var colorOpponent;


    // if the vars are empty is gives an error message
    if (!p1){
        response.send(" Missing data!");
        return;
    }

    // Executes the query to see if somebody is searching for a match and joins it, if it has an error, it will send the error message
    connection.execute('SELECT match_id, mp_player_id FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id WHERE match_ms_id = 3;',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.status(200).send("none is searching for a match");
                }else if(results[0].mp_player_id == p1){
                    response.send("you cannot play a match against yourself, you silly goose");
                }else{
                

                // Get the id of the first "searching for a match" result
                var matchId = results[0].match_id;
                console.log("Lobby individuata a questo ID: " + matchId);

                // Insert players data into the `Match_Player` table
                choseColorOpponent(request, response, p1, matchId);
                }
//                }
                for(let i = 0; i<= results.length; i++){

                }
            }
        });
});


function choseColorOpponent(request, response, p1, matchId){
    var chosenColor;
    var colorOpponent;
    var currentMatch;

    connection.execute('SELECT mp_id, mp_match_id, mp_player_id, mp_pc_id FROM Match_Player INNER JOIN `Match` ON `Match`.match_id = match_player.mp_match_id WHERE match_ms_id = 3;',
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
                //response.send(results[0].mp_pc_id + "");
                console.log("Match_Player Individuato: " + results[0].mp_id);
                //gets the color of the first result of "searching for a match"
                currentMatch = results[0];
                chosenColor = results[0].mp_pc_id;

                

                //assigns the opposite color for the opponent
                colorOpponent = PickingColor(chosenColor);
                
                //Debug
                //console.log("Match number: " +  currentMatch.mp_match_id + " / p1:" + currentMatch.mp_player_id + " color: " + chosenColor + " / p2: " + p1 + " color: " + colorOpponent);

                //now it joins the match
                JoinMatchPlayer(request, response, p1, matchId, colorOpponent, chosenColor);

        }
    });
}

function PickingColor(chosenColor){
    var colordOppisent = 0;

    if(chosenColor == 1){
        return colordOppisent = 2;
    }else{
        return colordOppisent = 1;
    }
}

function JoinMatchPlayer(request, response, p1, matchId, colorOpponent, chosenColor) {

    //Updates the state of the match of the given match
    
    connection.execute('UPDATE `Match` SET match_ms_id = 1 WHERE match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //Insert the remaining player data into the `Match_Player` table on the corrisponding match
            //console.log("p1: " + p1 + " matchId: " + matchId + " color opponent: " + colorOpponent);
            insertPlayerIntoMatch(request, response, p1, matchId, colorOpponent, chosenColor);
            
        }
    });
}

function insertPlayerIntoMatch(request, response, p1, matchId, colorOpponent, chosenColor){
    connection.execute('INSERT INTO Match_Player (mp_match_id, mp_player_id, mp_ut_id, mp_pc_id) VALUES (?, ?, 1, ?);',
    [matchId, p1, colorOpponent],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //response.send("Match created successfully!");
            console.log("User assosiacted to the right match!");
            //now to fill the board with pieces.
            RetrieveDataForFillBoard(request, response, matchId, colorOpponent, chosenColor);
        }
    });
}

function RetrieveDataForFillBoard(request, response, matchId, colorOpponent, chosenColor){
    connection.execute('SELECT mp_id FROM Match_Player WHERE mp_match_id = ?;',
    [matchId],
    function (err, results, fields) {
        if (err) {
            response.send( err);
        } else {
            console.log("filling the board for said MP: " + results[0].mp_id);


            //questo è il problema, quando un igocatore si unisce al match, il server prende sempre il primo utente che rileva.
            var matchPlayerId1 = results[0].mp_id;
            var matchPlayerId2 = results[1].mp_id;
            //response.send(results[0]);

            //now to fill the board with pieces.
            FillBoard(request, response, matchPlayerId1, chosenColor);
            FillBoard(request, response, matchPlayerId2, colorOpponent);

            //time to create the card and shard counter!
            FillCardandShard(request, response, matchPlayerId1);
            FillCardandShard(request, response, matchPlayerId2);


            response.send("MP_ids: "+ matchPlayerId1 + " "+ matchPlayerId2 +" /Board FILLED correctly!  Card, shard counter CREATED correctly!");
        }
    });
}

function FillBoard(request, response, matchPlayerId, colorSent){   //function FillBoard(request, response, matchPlayerId, colorOpponent){

    var pieceId = 5;
    var pieceStateId = 4;
    
    //fills the board for whites
    if(colorSent == 1){
        //looping and calling the function 16 times, incrementing the tileId and keeping the same pieceId apart for the king.
        for (let i = 1; i <= 16; i++) {

            console.log("i: " + i);

            if(i == 4){
                pieceId = 6;
                pieceStateId = 1;
            }

            AllocatingPieces(matchPlayerId, i, pieceId, pieceStateId)

            pieceId = 5;
            pieceStateId = 4;
            console.log("piece set in place white");
          }
    }else{ //fill the board for black
        for (let i = 1; i <= 16; i++) {

            if(i == 4){
                pieceId = 6;
                pieceStateId = 1;
            }

            AllocatingPieces(matchPlayerId, 64+1-i, pieceId, pieceStateId)

            pieceStateId = 4;
            pieceId = 5;
            console.log("piece set in place black");
          } 
    }

    //response.send("Board FILLED!")

}

function AllocatingPieces(matchPlayerId, tile, piece, pieceState){

    connection.execute('INSERT INTO Match_Player_Piece (mpp_mp_id, mpp_tile_id, mpp_piece_id, mpp_ps_id) VALUE (?, ?, ?, ?);',
    [matchPlayerId, tile, piece, pieceState],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //response.send("all pieces SET in place");
        }
    });

    
}

function FillCardandShard(request, response, matchPlayerId){   //function FillBoard(request, response, matchPlayerId, colorOpponent){

    for (let i = 1; i <= 4; i++) {
    
        console.log("i: " + i);
    
    
        AllocatingCards(matchPlayerId, i)
        AllocatingShards(matchPlayerId, i)
    
        console.log("card entity created! " + i);
        console.log("shard entity created! " + i);
      }
    
    
        //response.send("Card ans Shard slot CREATED!")
    
}

function AllocatingCards(matchPlayerId, cardId){

    connection.execute('INSERT INTO Match_Player_Card (mpc_mp_id, mpc_card_id, mpc_ammount) VALUES (?, ?, 0);',
    [matchPlayerId, cardId],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            console.log("card Id: " + cardId + " slot created!");
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
            console.log("shard Id: " + cardId + " slot created!");
        }
    });

}



//----------------------------------------

router.post('/create', (request, response) => {
    // Get the data from the request
    if (!request.session.playerID){
        response.status(403).send({
            "error": "Not logged in"
        });
        return;
    }

    var p1 = request.session.playerID;

    //should check if player exist as ab actual player, retrieving his information

    // Executes the query to see if somebody is searching for a match and joins it, if it has an error, it will send the error message
    connection.execute('SELECT match_id, mp_player_id FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id WHERE match_ms_id = 3;',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    console.log("Creating The lobby");
                    //creates a match whihc state is 3(in search of a opponent)
                    CreateMatchAsFirst(request, response, p1);
                    console.log("Lobby creata");
                }else{
                    response.status(406).send({
                        "error": "Already searching for a match!"
                    });
                }}
        });
});

function CreateMatchAsFirst(request, response, playerId){
    var chosenColor = Math.floor(Math.random() * 2) + 1;
    var colorOpponent;
    var currentMatch;

    connection.execute('INSERT INTO `Match` (match_ms_id, match_pc_id) VALUES(3, 1);',
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //usefull stuff
            console.log("chosen color: " + chosenColor);
            MatchDataRetrieval(request, response, playerId, chosenColor);
            //CreateMatchPlayerAsFirst(request, response, playerId, chosenColor)

            
        }
    });
}

function MatchDataRetrieval(request, response, playerId, chosenColor){

    connection.execute('SELECT match_id FROM `Match` WHERE match_ms_id = 3;',
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                
                // Get the id of the first "searching for a match" result
                matchId = results[0].match_id;

                console.log("Lobby id: " + matchId);

                CreateMatchPlayerAsFirst(request, response, matchId, playerId, chosenColor)
                // Insert players data into the `Match_Player` table

            }
        });
}

function CreateMatchPlayerAsFirst(request, response, matchId, playerId, colorUser){

    connection.execute('INSERT INTO Match_Player (mp_match_id, mp_player_id, mp_ut_id, mp_pc_id) VALUES (?, ?, 1, ?);',
    [matchId, playerId, colorUser],
    function (err, results, fields) {
        if (err) {
            response.send(err);
        } else {
            //response.send("Match created successfully!");
            
            //now to fill the board with pieces.
            //RetrieveDataForFillBoard(request, response, matchId, colorUser);
            request.session.matchID = matchId;
            response.status(200).send({
                "message": "Created a match."
            });
        }
    });
}


//----------------------------------------------------------------------------------


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
            response.status(200).send({
                "message" : "Stopped searching for a match"
            });
        }
    });
}



module.exports = router;