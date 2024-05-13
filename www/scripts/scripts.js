setInterval(getGameData, 3000);

//var used to avoid using the playerId everywhere.
const searchParams = new URLSearchParams(window.location.search);


var playerId4 = searchParams.get('playerId');
var matchId = searchParams.get('matchId');
var CurrentColor = '';
var playerColor = '';

//funciton called on page loading and every 2 seconds
function getGameData(){
    DisplayName();
    DisplayCard();
    DisplayShard();
    DisplayBoard();
    console.log(this.playerId4);
    console.log(this.matchId);
}

function DisplayName(){
    //Works for the match 1



    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);

            var user1Info = ' ';
            var matchColor = ' ';
            playerId = response[0].player_id;


            //all the infos for the player with the lowest id: name, color and, currently, id
            user1Info = response[0].player_name + '\n' + response[0].pc_name;
            document.getElementById("p1Name").innerText = user1Info;
            document.getElementById("p1Id").innerText = 'playeR ID: ' + response[0].player_id;
            document.getElementById("p1NameForPromotion").innerText = response[0].player_name + "'s INVENTORY";


            CurrentColor = response[0].match_pc_id;
            playerColor = response[0].mp_pc_id;




            //deciphers who's turn is it to play and displays who has won
            if(response[0].match_ms_id == 1){
                if(response[0].match_pc_id == 1){
                    matchColor = 'Color playing: White';
                }else{
                    matchColor = 'Color playing: Black';
                }
            }else{
                if(response[0].match_pc_id == 1){
                    matchColor = 'Match won by White';
                }else{
                    matchColor = 'Match won by Black';
                }
            }
            document.getElementById("ColorPlyaing").innerText = matchColor;

            //Shows up unntil which type the user can upgrade his pawns
            document.getElementById("utGoesHere").innerText = response[0].upgradeTier;
            //onsole.log(response[0].upgradeTier);
        }
    };
    xhttp.open("GET", "state/game/" + matchId, true);
    xhttp.send()
}

function DisplayCard(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);


            //----------------WHITE INVERTORY--------------------------------------
            document.getElementById("cardName1w").innerText = response[0].card_name + "(1)";
            document.getElementById("cardName2w").innerText = response[1].card_name + "(2)";
            document.getElementById("cardName3w").innerText = response[2].card_name + "(3)";
            document.getElementById("cardName4w").innerText = response[3].card_name + "(4)";

            document.getElementById("cardQuantity1w").innerText = response[0].mpc_ammount;
            document.getElementById("cardQuantity2w").innerText = response[1].mpc_ammount;
            document.getElementById("cardQuantity3w").innerText = response[2].mpc_ammount;
            document.getElementById("cardQuantity4w").innerText = response[3].mpc_ammount;

        }
    };
    xhttp.open("GET", "state/card/" + matchId, true);
    xhttp.send()
}


function DisplayShard(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);


            //----------------WHITE INVERTORY--------------------------------------
            document.getElementById("shardQuantity1w").innerText = response[0].mps_shard_ammount;
            document.getElementById("shardQuantity2w").innerText = response[1].mps_shard_ammount;
            document.getElementById("shardQuantity3w").innerText = response[2].mps_shard_ammount;
            document.getElementById("shardQuantity4w").innerText = response[3].mps_shard_ammount;

        }
    };
    xhttp.open("GET", "state/shard/" + matchId, true);
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

                //Translates the pieces from an array into a string, which will be printed
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
                
                    
                output += response[i] + '|';

                if((i+1) % 8 == 0  && i != (response.length-1)){  
                    c --;
                    output += '\n-----------------------\n' + c +'|';
                }

            }
            output += '\n-------------------------\n';

            output += '1 ‎ ‎ ‎ ‎ 2 ‎  3 ‎  4 ‎  5 ‎  6 ‎ 7 ‎ 8';

            document.getElementById("superbChessboard").innerText = output;
        }
    };
    xhttp.open("GET", "state/boardR/" + matchId , true);
    xhttp.send()
}

function MakeMove() {
    // Get values from the IDS
    var startX = document.getElementById('startX').value;
    var startY = document.getElementById('startY').value;
    var endX = document.getElementById('endX').value;
    var endY = document.getElementById('endY').value;
    //gets the value of the player_id when the user info is loaded
    var playerId = this.playerId

    // Construct JSON object with form data
    var data = {
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        playerId: playerId,
        matchId: this.matchId
    };

    //console.log(JSON.stringify(data));

    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Define the callback function to handle the response
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) { // When the request is complete
            if (this.status == 200) { // If the request was successful
                // Get the response from the server
                var response = this.responseText;

                // Update the HTML element with the response
                document.getElementById("responseMove").innerText = response;
                document.getElementById('startX').value = '';
                document.getElementById('startY').value = '';
                document.getElementById('endX').value = '';
                document.getElementById('endY').value = '';
                // Log the response from the server
                console.log(response);
                getGameData();

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


function Promote(){
    var startX = document.getElementById('X').value;
    var startY = document.getElementById('Y').value;
    var cardId = document.getElementById('cardId').value;
    //gets the value of the player_id when the user info is loaded
    var playerId = this.playerId;
    
    var data = {
        startX: startX,
        startY: startY,
        playerId: playerId,
        matchId: this.matchId,
        cardId: cardId,
    };
    console.log(JSON.stringify(data));
// Create an XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// Define the callback function to handle the response
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) { // When the request is complete
        if (this.status == 200) { // If the request was successful
            var response = this.responseText;

            // Update the HTML element with the response
            document.getElementById("responsePromote").innerText = response;

            // Log the response from the server
            console.log(response);
            document.getElementById('X').value = '';
            document.getElementById('Y').value = '';
            document.getElementById('cardId').value = '';

            getGameData();
        } else { // If there was an error with the request
            // Log the error status
            console.error("Error:", this.status);
        }
    }



};

// Configure the XMLHttpRequest object
xhttp.open("POST", "/piece/promote", true); // Specify the method and URL
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Set the request header
xhttp.send(JSON.stringify(data)); // Send JSON data to the server
}
