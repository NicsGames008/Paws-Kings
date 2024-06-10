const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/playerID', (request, response) => {
    if (request.session.playerID===undefined)
        response.send("-1");
    else
        response.send(request.session.playerID.toString());
});

router.post('/register', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    if (!username || !password || !password2){
        res.status(400).send({
            "error": "Missing username, password or confirm password"
        });
        return;
    }

    if (password != password2){
        res.status(400).send({
            "error": "Passwords do not match"
        });
        return;
    }

    // Checks if the username already exists in the DB
    // If it does, we send an error message
    // Otherwise, we call the function createTheAccount
    function checkIfLoginExists() {
        connection.execute('SELECT * FROM Player WHERE player_name = ?',
        [username],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
                return;
            }
            
            if (results.length > 0)
            {
                res.status(400).send({
                    "error": "Username already exists"
                });
                return;
            }

            createTheAccount();
        });
    }

    function createTheAccount() {
        connection.execute('INSERT INTO Player (player_name, player_password) VALUES (?,?)',
        [username, password],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
            }else{
                res.status(200).send({
                    "message": "Account created successfully"
                });
            }
        });
    }

    checkIfLoginExists();
})

// Endpoint that logs the Player in.
router.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    console.log("Username: " + username)
    console.log("Password: " + password)

    if (!username || !password){
        res.status(400).send({
            "error": "Missing username or password"
        })
        return;
    }

    // Checks if the login exists in the database.
    function checkLogin(){
        connection.execute('SELECT * FROM Player WHERE player_name = ? AND player_password = ?',
        [username, password],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
                return;
            }

            if (results.length == 0){
                res.status(404).send({
                    "error": "Invalid username or password"
                });
                return;
            }


            LogPlayerIn(results[0].player_name, results[0].player_id);
        });
    }

    // Logs the player in. We store the playerID and the username in the session.
    function LogPlayerIn(playerName, playerID){
        req.session.playerID = playerID;
        console.log(req.session.playerID, playerID);
        req.session.username = username;
        res.status(200).send({
            "message": "Welcome " + playerName 
        });
    }

    checkLogin();
});

// Endpoint that checks if the client is logged in. (Just for testing purposes)
router.get('/checkLogin', (req, res) => {
    if (req.session.playerID)
        res.status(200).send({
            "loggedIn": true
        });
    else
        res.status(401).send({
            "loggedIn": false
        })
})



module.exports = router;