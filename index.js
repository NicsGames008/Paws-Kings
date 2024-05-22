// Dependencies of the project
const express = require('express');
const session = require('express-session');
const connection = require('./database');
const lobby = require('./API/lobby');
const state = require('./API/state');
const piece = require('./API/piece');
const signing = require('./API/signing');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Session middleware setup
app.use(session({
    secret: 'susybussy', // This is the secret key that is used to encrypt the session
    resave: false, // This is to avoid saving the session everytime the client makes a request
    saveUninitialized: true, // This is to save the session even if it's not initialized
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 // This is the time that the session will be alive in ms. In this case, 24 hours
     }
}))

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));

//API routs
app.use('/lobby', lobby);
app.use('/state', state);
app.use('/piece', piece);
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