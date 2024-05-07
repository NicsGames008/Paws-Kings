const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/board', (request, response) => {
    // Get the data from the request
    var matchId = request.body.matchId;
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
                        //console.log(chessboard[i] + " at index:" + i);
                    }

                    ObtainChessPiecesLocation(request, response, chessboard, matchId);
                    //response.send(results);
                    
                }
                
            }
                
            
        });
});

function ObtainChessPiecesLocation(request, response, chessboard, matchId){
    connection.execute('select mpp_id, mpp_mp_id , mp_match_id , mpp_piece_id,  mp_pc_id, mpp_tile_id , tile_x , tile_y from Match_player_piece inner join match_player on match_player.mp_id = match_player_piece.mpp_mp_id INNER JOIN Tile ON tile.tile_id = mpp_tile_id where mp_match_id = ? order by tile_x desc,  tile_y asc;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("there is no pieces on the board")
                }else{
                    console.log("pieces located");
                    
                    //response.send(results);
                    CreateChessBoard(request, response, results, chessboard);
                    
                }
                
            }
                
            
        });
}


function CreateChessBoard(request, response, results, chessboard) {

    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
            board[i][j] = '0';
        }
    }


    let TileOccupated = [];
    let pieceOnTile = [];
    //results = tiles with pieces, so it loop throught them to 
    for(let i = 0; i < results.length; i++){
        if(i < 32){
            TileOccupated[i] = results[i].mpp_tile_id;
            pieceOnTile[i] = results[i].mpp_piece_id;
            console.log("Tile(" + TileOccupated[i] + ") occupied at index:" + i);
        }
    }
 
    let tileToCheck = 1;


    tileToCheck = 1;
    var posArray = 0;
    //called for the first time and checks when a certain tile is free or occupied by which piece

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8 ; j++) {
            //console.log("tile da controllata: " + tileToCheck);
            if(CheckTile(tileToCheck, TileOccupated)){

                console.log("piece on the tile: " + tileToCheck);



                if(results[posArray].mp_pc_id == 1){
                    console.log(results[posArray].mp_pc_id);
                    board[i][j] = 'w';
                }else{
                    console.log(results[posArray].mp_pc_id);
                    board[i][j] = 'b';
                }

                //console.log(typeof results[posArray].mpp_piece_id);
                switch(results[posArray].mpp_piece_id){
                    case 1:     //Bishop
                        board[i][j] += 'Bi';
                        break;
                    case 2:     //Roock
                        board[i][j] += 'Ro';
                        break;
                    case 3:     //Knight
                        board[i][j] += 'Kn';
                        break;
                    case 4:     //Quween
                        board[i][j] += 'Qw';
                        break;
                    case 5:     //Pawn
                        board[i][j] += 'Pa';
                        break;
                    case 6:     //King
                        board[i][j] += 'Ki';
                        console.log("we are Kings");
                        break;
                    default:
                        console.log("roock is intentional btw");
                }
                posArray++;

            }else{
                board[i][j] = '   ';
                //console.log("tile empty");
            }
            //board[i][j] = tileToCheck;
            tileToCheck++;
            console.log("\n");
        }
        //console.log("\n");
    }

    // Print the board
    printBoard(board);
    response.send(board);
}

function CheckTile(posToCheck, arrToCheck){
    for(let i = 0; i < 64; i++){
        if(arrToCheck[i] === posToCheck){
            //console.log("posizione:" + arrToCheck[i] + " == :" + posToCheck);
            return true;
        }

    }
    return false;
}

function printBoard(board) {
    
    let output = '';
    for (let i = 0; i < board.length; i++) {
        output += '----------------------------------\n|';
        for (let j = board[i].length - 1; j >= 0; j--) {
            output += board[i][j] + '|';
        }
        output += '\n';
    }
    output += '----------------------------------';
    console.log(output);

}


//----------------------------HTML usage only-------------------------

router.get('/board1/:matchId', (request, response) => {
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

//----------------------------------------------GAME STATE----------------------------

router.get('/game/:matchId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;

    //should check if player exist as ab actual player, retrieving his information

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT match_id, match_ms_id, match_pc_id, player_color.pc_name AS colorName, mp_match_id, mp_ut_id, ut_name AS upgradeTier, player_id, player_name, mp_pc_id, pc.pc_name FROM `Match` INNER JOIN player_color ON player_color.pc_id = match_pc_id INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id  INNER JOIN Player ON Player.player_id = mp_player_id INNER JOIN player_color pc ON pc.pc_id = mp_pc_id INNER JOIN Upgrade_Tier ON Upgrade_Tier.ut_id = mp_ut_id WHERE match_id = 1 ORDER BY mp_pc_id;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existed with said id");
                }else{
                    console.log("match id found");
                    response.send(results);
                    
                }
                
            }
        });
});

//----------------------------CARD---------------------------------------------------

router.get('/card/:matchId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;

    //should check if player exist as ab actual player, retrieving his information

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT * FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id INNER JOIN Match_Player_Card ON Match_Player_Card.mpc_mp_id = Match_Player.mp_id INNER JOIN Card ON card.card_id = match_player_card.mpc_card_id WHERE match_id = ? ORDER BY mp_pc_id, card_id;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existed with said id");
                }else{
                    console.log("cards found");
                    response.send(results);
                    
                }
                
            }
        });
});

//----------------------------SHARD---------------------------------------------------

router.get('/shard/:matchId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;

    //should check if player exist as ab actual player, retrieving his information

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT * FROM `Match` INNER JOIN Match_Player ON Match_Player.mp_match_id = `Match`.match_id INNER JOIN Match_Player_Shard ON Match_Player_Shard.mps_mp_id = Match_Player.mp_id INNER JOIN Card ON card.card_id = match_player_shard.mps_shard_id WHERE match_id = ? ORDER BY mp_pc_id, card_id;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("no match existed with said id");
                }else{
                    console.log("shards found");
                    response.send(results);
                    
                }
                
            }
        });
});

//-----------------------------GAME STAUTS NOW DONE RIGHT-------------------------------

router.get('/boardR/:matchId', (request, response) => {
    // Get the data from the request
    var matchId = request.params.matchId;


    //should check if player exist as ab actual player, retrieving his information

    // if the vars are empty is gives an error message
    if (!matchId){
        response.send(" Missing data!");
        return;
    }

    connection.execute('SELECT DISTINCT(mp_id) FROM match_player INNER JOIN match_player_piece ON mp_id = mpp_mp_id WHERE mp_match_id = ?;',
        [matchId],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                if(results.length == 0){
                    response.send("mps unretrieved");
                }else{
                    console.log("Got the two mps!");
                    //response.send(results);
                    FillFleetingBoard(request, response, matchId, results);
  
                }
                
            }
                
            
        });
});

function FillFleetingBoard(request, response, matchId, previusResults){
    //array that rappresents the chessboard
    var chessboard = [];

    var amogus = [];

    connection.execute('SELECT t.tile_id, mpp.mpp_tile_id, mpp.mpp_piece_id, mpp_mp_id, mp_pc_id FROM tile t LEFT JOIN match_player_piece mpp ON mpp.mpp_tile_id = t.tile_id  AND (mpp.mpp_mp_id = ? OR mpp.mpp_mp_id = ?) AND mpp_ps_id != 2 LEFT JOIN match_player mp ON mp.mp_id = mpp.mpp_mp_id;',
    [previusResults[0].mp_id, previusResults[1].mp_id],
    function (err, results, fields) {
        if (err){
            response.send(err);
        }else{
            if(results.length == 0){
                response.send("MPPS for mps not found");
            }else{
                console.log("pieces founds!");

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
                            amogus[i] = 'w';
                        }else{
                            amogus[i] = 'b';
                        }

                        //Assinging the piece type
                        switch(results[i].mpp_piece_id){
                            case 1:     //Bishop
                                amogus[i] += 'Bi';
                                break;
                            case 2:     //Roock
                                amogus[i] += 'Ro';
                                break;
                            case 3:     //Knight
                                amogus[i] += 'Kn';
                                break;
                            case 4:     //Quween
                                amogus[i] += 'Qw';
                                break;
                            case 5:     //Pawn
                                amogus[i] += 'Pa';
                                break;
                            case 6:     //King
                                amogus[i] += 'Ki';
                                break;
                            default:
                                console.log("roock is intentional btw");
                        }
                    }else{
                        amogus[i] = ' '
                    }
                }

                console.log(amogus);

                let horizontallyReversed = reverseHorizontally(amogus);

                response.send(horizontallyReversed);
            }
            
        }
            
        
    });
}


function StringifyChessboard(chessboard){
    let output = '-----------------\n|';
    for(let i = 0; i< chessboard.length; i++){
        output += chessboard[i] + '|';

        if((i+1)%8 == 0  && i != (chessboard.length-1)){  
            output += '\n|';
        }

    }
    output += '\n-----------------';
    console.log(output)

    return output;
}

function reverseHorizontally(array) {
    let numRows = array.length / 8;
    let reversedArray = [];

    for (let i = numRows - 1; i >= 0; i--) {
        let row = array.slice(i * 8, (i + 1) * 8);
        reversedArray.push(...row);
    }

    console.log(reversedArray);
    return reversedArray;
}

module.exports = router;