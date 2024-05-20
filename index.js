// Dependencies of the project
const express = require('express');
const session = require('express-session');
const connection = require('./database');
const lobby = require('./API/lobby');
const state = require('./API/state');
const movePiece = require('./API/piece');
const signing = require('./API/signing');

// Set the port of the server
const serverPort = 3000;

// Create a new instance of express
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

// Middlewares
// We are telling the server to use the folder 'www' as static pages
app.use(express.static('www'));
app.use(express.urlencoded({extended: true}));
app.use('/lobby', lobby);
app.use('/state', state);
app.use('/piece', movePiece);
app.use('/signing', signing);
app.use(session({
    secret: 'sussybussy',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        //USE THIS WHEN SERVER
        //secure: true,
        maxAge: 2628000000
    }
  }))

app.get('/counters', function (req, res) {
    if (req.session.counter){
        req.session.counter++;
    }
    else{
        req.session.counter = 1;
    }
    res.send('Counters: ' + req.session.counter);
})


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