setInterval(getGameData, 2000);

function getGameData(){
    //var matchId = document.getElementById("matchId").value;
    console.log("it's working");
    DisplayName();
    DisplayCard();
    //DisplayCardB();
    DisplayShard();
    DisplayBoard();
}

function DisplayName(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);

            var user1Info = '';
            var user2Info = '';

            user1Info = response[0].player_name;
            document.getElementById("p1NameForPromotion").innerText = user1Info + "'s cards and shards";

            user1Info += '\n' + response[0].pc_name;
            document.getElementById("p1Name").innerText = user1Info;


            user2Info = response[1].player_name;
            document.getElementById("p2NameForPromotion").innerText = user2Info + "'s cards and shards";

            user2Info += '\n' + response[1].pc_name;
            document.getElementById("p2Name").innerText = user2Info ;

            document.getElementById("ColorPlyaing").innerText = response[0].colorName;

            document.getElementById("utGoesHere").innerText = response[0].ut_name;
            //since match_pc_id(singifies who0's turns is it) is a FK, currently, we cannot alter it and the same goes for the match_ms_id
        }
    };
    xhttp.open("GET", "state/game/1", true);
    xhttp.send()
}

function DisplayCard(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);


            //----------------WHITE INVERTORY--------------------------------------
            document.getElementById("cardName1w").innerText = response[0].card_name;
            document.getElementById("cardName2w").innerText = response[1].card_name;
            document.getElementById("cardName3w").innerText = response[2].card_name;
            document.getElementById("cardName4w").innerText = response[3].card_name;

            document.getElementById("cardQuantity1w").innerText = response[0].mpc_ammount;
            document.getElementById("cardQuantity2w").innerText = response[1].mpc_ammount;
            document.getElementById("cardQuantity3w").innerText = response[2].mpc_ammount;
            document.getElementById("cardQuantity4w").innerText = response[3].mpc_ammount;

            //-------------BLACK INVETORY----------------------------------------- 
            //not wokring
            document.getElementById("cardName1b").innerText = response[0].card_name;
            document.getElementById("cardName2b").innerText = response[1].card_name;
            document.getElementById("cardName3b").innerText = response[2].card_name;
            document.getElementById("cardName4b").innerText = response[3].card_name;

            document.getElementById("cardQuantity1b").innerText = response[4].mpc_ammount;
            document.getElementById("cardQuantity2b").innerText = response[5].mpc_ammount;
            document.getElementById("cardQuantity3b").innerText = response[6].mpc_ammount;
            document.getElementById("cardQuantity4b").innerText = response[7].mpc_ammount;


        }
    };
    xhttp.open("GET", "state/card/1", true);
    xhttp.send()
}

function DisplayCardB(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);

            //-------------BLACK INVETORY----------------------------------------- 
            //not wokring
            document.getElementById("cardName1b").innerText = response[0].card_name;
            document.getElementById("cardName2b").innerText = response[1].card_name;
            document.getElementById("cardName3b").innerText = response[2].card_name;
            document.getElementById("cardName4b").innerText = response[3].card_name;

            document.getElementById("cardQuantity1b").innerText = response[4].mpc_ammount;
            document.getElementById("cardQuantity2b").innerText = response[5].mpc_ammount;
            document.getElementById("cardQuantity3b").innerText = response[6].mpc_ammount;
            document.getElementById("cardQuantity4b").innerText = response[7].mpc_ammount;


        }
    };
    xhttp.open("GET", "state/card/1", true);
    xhttp.send()
}

function DisplayShard(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);



            document.getElementById("shardQuantity1w").innerText = response[0].mps_shard_ammount;
            document.getElementById("shardQuantity2w").innerText = response[1].mps_shard_ammount;
            document.getElementById("shardQuantity3w").innerText = response[2].mps_shard_ammount;
            document.getElementById("shardQuantity4w").innerText = response[3].mps_shard_ammount;


            document.getElementById("shardQuantity1b").innerText = response[4].mps_shard_ammount;
            document.getElementById("shardQuantity2b").innerText = response[5].mps_shard_ammount;
            document.getElementById("shardQuantity3b").innerText = response[6].mps_shard_ammount;
            document.getElementById("shardQuantity4b").innerText = response[7].mps_shard_ammount;

        }
    };
    xhttp.open("GET", "state/shard/1", true);
    xhttp.send()
}

function DisplayBoard(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);

            var c = 0;
            let output = '';

            for (let i = 0; i < response.length; i++) {
                output += '--------------------------\n'; //'---------------------------------------\n|'
                for (let j = response[i].length - 1; j >= 0; j--) {

                    switch(response[i][j]){
                        case 'wBi':     //White Bishop
                            response[i][j] = '♗';
                            break;
                        case 'wRo':     //White Roock
                            response[i][j] = '♖';
                            break;
                        case 'wKn':     //White Knight
                            response[i][j] = '♘';
                            break;
                        case 'wQw':     //White Quween
                            response[i][j] = '♕';
                            break;
                        case 'wPa':     //White Pawn
                            response[i][j] = "♙";
                            break;
                        case 'wKi':     //White King
                            response[i][j] = "♔";
                            break;
                        case 'bBi':     //Black Bishop
                            response[i][j] = '♝';
                            break;
                        case 'bRo':     //Black Roock
                            response[i][j] = '♜';
                            break;
                        case 'bKn':     //Black Knight
                            response[i][j] = '♞';
                            break;
                        case 'bQw':     //Black Quween
                            response[i][j] = '♛';
                            break;
                        case 'bPa':     //Black Pawn ♟️
                            response[i][j] = "♟";
                            break;
                        case 'bKi':     //Black King
                            response[i][j] = "♚";
                            break;
                        default:
                            if((i+j)%2 == 1){//⬜
                               response[i][j] = "◽";
                            }else{//⬛
                                response[i][j] = "◼";
                            }
                            //console.log("roock is intentional btw");
                    }
                    output += response[i][j] ;//+ '|'

                    c++;
                }
                output += '\n';
            }

            output += '--------------------------';
            //console.log(output);

            document.getElementById("superbChessboard").innerText = output;
        }
    };
    xhttp.open("GET", "state/board1/1" , true);
    xhttp.send()
}