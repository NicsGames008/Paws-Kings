function Promotion(){
    var startX = document.getElementById('startX').value;
    var startY = document.getElementById('startY').value;
    var playerId = document.getElementById('playerId').value;
    var matchId = document.getElementById('matchId').value;
    var cardId = document.getElementById('cardId').value;

    var data = {
        startX: startX,
        startY: startY,
        playerId: playerId,
        matchId: matchId,
        cardId: cardId,
    };

// Create an XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// Define the callback function to handle the response
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) { // When the request is complete
        if (this.status == 200) { // If the request was successful
            // Get the response from the server
            var response = this.responseText;
            console.log(response);
        } else { // If there was an error with the request
            // Log the error status
            console.error("Error:", this.status);
        }
    }
};

// Configure the XMLHttpRequest object
xhttp.open("POST", "/upgradePiece", true); // Specify the method and URL
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Set the request header
xhttp.send(JSON.stringify(data)); // Send JSON data to the server
}
