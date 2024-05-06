// Dependencies of the project
const express = require('express');
// Create a new connection to the database
const connection = require('./database');
const signing = require('./API/signing');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
app.use(express.urlencoded());

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));
app.use('/signing', signing);

// Connect to database and check if it's working. Otherwise gives an error.
connection.connect((err) => {
    if (err){
        console.log("Error connection to DB: " + err);
        return;
    }
    console.log("Connected to database!");
})


// Listen on port for any requests made.
// Note: Only 1 program can be listening at a single port at any time. This means we can't execute this server two times in the same port...
app.listen(serverPort, () => {
    console.log('👌 Server is running at ' + serverPort);
});


// Endpoints

//EndPoint Update Piece

app.post('/upgradePiece',(request, response)=>{

    var startX = request.body.startX;
    var startY = request.body.startY;
    var playerId = request.body.playerId;
    var matchId = request.body.matchId;
    var endY = request.body.endY;
    var endX = request.body.endX;
    var tilePromotion = request.body.tilePromotion;
    var card = request.body.card
    var pieceState = request.body.pieceState
    var upgradeTier = request.body. upgradeTier

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

    


})


////////////////////////////////////////////////////////////////////
///Chanse state to sleep here 
////////////////////////////////////////////////////////////////////





