// Dependencies of the project
const express = require('express');
const connection = require('./database');
const lobby = require('./API/lobby');
const state = require('./API/state');
const movePiece = require('./API/piece');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
app.use(express.urlencoded());
// Middleware to parse JSON bodies
app.use(express.json());

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));
app.use('/lobby', lobby);
app.use('/state', state);
app.use('/piece', movePiece);


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