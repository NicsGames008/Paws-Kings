setInterval(getGameData, 5000);

function getGameData(){
    //var matchId = document.getElementById("matchId").value;
    //console.log("it's working");
    DisplayName();
    DisplayCard();
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
            var matchColor = '';

            user1Info = response[0].player_name;
            document.getElementById("p1NameForPromotion").innerText = user1Info + "'s cards and shards";

            user1Info += '\n' + response[0].pc_name;
            document.getElementById("yourName").innerText = user1Info;


            user2Info = response[1].player_name;

            user2Info += '\n' + response[1].pc_name;
            document.getElementById("foeName").innerText = user2Info ;

            if(response[0].match_ms_id == 1){
                if(response[0].match_pc_id == 1){
                    matchColor = 'Color Playing: White';
                }else{
                    matchColor = 'Color Playing: Black';
                }
            }else{
                if(response[0].match_pc_id == 1){
                    matchColor = 'MAtch won by White';
                }else{
                    matchColor = 'Match won by Black';
                }
            }
            document.getElementById("ColorPlyaing").innerText = matchColor;

            document.getElementById("utGoesHere").innerText = response[0].upgradeTier;
            
        }
    };
    xhttp.open("GET", "state/game/" + 1, true);
    xhttp.send()
}

function DisplayCard(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);

            //----------------YOUR INVERTORY--------------------------------------
            document.getElementById("cardName1").innerText = response[0].card_name;
            document.getElementById("cardName2").innerText = response[1].card_name;
            document.getElementById("cardName3").innerText = response[2].card_name;
            document.getElementById("cardName4").innerText = response[3].card_name;

            document.getElementById("cardQuantity1").innerText = response[0].mpc_ammount;
            document.getElementById("cardQuantity2").innerText = response[1].mpc_ammount;
            document.getElementById("cardQuantity3").innerText = response[2].mpc_ammount;
            document.getElementById("cardQuantity4").innerText = response[3].mpc_ammount;
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



            document.getElementById("shardQuantity1").innerText = response[0].mps_shard_ammount;
            document.getElementById("shardQuantity2").innerText = response[1].mps_shard_ammount;
            document.getElementById("shardQuantity3").innerText = response[2].mps_shard_ammount;
            document.getElementById("shardQuantity4").innerText = response[3].mps_shard_ammount;
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

            var c = 8;
            let output = '-----------------------\n' + c + '|';
            for(let i = 0; i< response.length; i++){
                switch(response[i]){
                    case 'wBi':     //White Bishop
                        response[i] = '♗';
                        break;
                    case 'wRo':     //White Roock
                        response[i] = '♖';
                        break;
                    case 'wKn':     //White Knight
                        response[i] = '♘';
                        break;
                    case 'wQw':     //White Quween
                        response[i] = '♕';
                        break;
                    case 'wPa':     //White Pawn
                        response[i] = "♙";
                        break;
                    case 'wKi':     //White King
                        response[i] = "♔";
                        break;
                    case 'bBi':     //Black Bishop
                        response[i] = '♝';
                        break;
                    case 'bRo':     //Black Roock
                        response[i] = '♜';
                        break;
                    case 'bKn':     //Black Knight
                        response[i] = '♞';
                        break;
                    case 'bQw':     //Black Quween
                        response[i] = '♛';
                        break;
                    case 'bPa':     //Black Pawn ♟️
                        response[i] = "♟";
                        break;
                    case 'bKi':     //Black King
                        response[i] = "♚";
                        break;
                    default:
                        if(i%2 == 1){//⬜
                           response[i] = "◻";
                        }else{//⬛
                            response[i] = "◼";
                        }
                    }
                        //console.log("roock is intentional btw");
                
                output += response[i] + '|';//

                if((i+1) % 8 == 0  && i != (response.length-1)){  
                    c --;
                    output += '\n-----------------------\n' + c +'|';
                }

            }
            output += '\n-------------------------\n';

            output += '1 -2 -3 -4 -5 -6 -7 -8';
            //console.log(output);

            document.getElementById("superbChessboard").innerText = output;
        }
    };
    xhttp.open("GET", "state/boardR/1" , true);
    xhttp.send()
}

function MakeMove() {
    // Get values from the IDS
    var startX = document.getElementById('startX').value;
    var startY = document.getElementById('startY').value;
    var endX = document.getElementById('endX').value;
    var endY = document.getElementById('endY').value;
    var playerId = document.getElementById('playerId').value;

    //var matchId = document.querySelector('input[name="matchId"]').value;

    // Construct JSON object with form data
    var data = {
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        playerId: playerId,
        matchId: '1'
    };

    console.log(JSON.stringify(data));

    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Define the callback function to handle the response
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) { // When the request is complete
            if (this.status == 200) { // If the request was successful
                // Get the response from the server
                var response = this.responseText;

                // Update the HTML element with the response
                //document.getElementById("response").innerText = response;

                // Log the response from the server
                console.log(response);
            } else { // If there was an error with the request
                // Log the error status
                console.error("Error:", this.status);
            }
        }
    };

    // Configure the XMLHttpRequest object
    xhttp.open("POST", "piece/move", true); // Specify the method and URL
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Set the request header
    xhttp.send(JSON.stringify(data)); // Send JSON data to the server
}
