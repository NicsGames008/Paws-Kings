const express = require('express');
const router = express.Router();
const connection = require('../database');

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
    console.log(req.session.playerID);
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


























// // Endpoint Register
// router.post('/up', (request, response) => {
//     var name = request.body.name;
//     var email = request.body.email;
//     var password = request.body.password;

//     // If any of the info is missing
//     if (!name || !email || !password){
//         response.send("Missing Info!");
//         return;
//     }

//     connection.query("SELECT * FROM Player WHERE player_name = ? OR player_email = ?;",
//     [name, email],
//        function (err, results, fields) {
//         if (err) {
//            response.send(err);
//         } else {
//             if(results.length == 0){
//                 InsertIntoPlayer(response, name, email, password);
//             }else
//                 response.send("there are some mfs with those info");
//         }
//     });

// })


// function InsertIntoPlayer(response, name, email, password){

//     connection.query("INSERT INTO Player (player_name, player_email, player_password) VALUES(?, ?, ?);",
//     [ name, email, password ], 
//     function (err, results, fields) {
//      if (err) {
//         response.send(err);
//      } else {
//             response.send("User Register");
//      }
//  });
// }


// // Endpoint Login
// router.get('/in', (request, response) => {

//     var email = request.body.email;
//     var password = request.body.password;

//     // If any of the info is missing
//     if (!email || !password){
//         response.send("Missing Info!");
//         return;
//     }
 
//     connection.query("SELECT * FROM Player WHERE player_email = ? AND player_password = ?;",
//     [email, password],
//        function (err, results, fields) {
//         if (err) {
//            response.send(err);
//         } else {
//             if(results[0]){
//                 response.send("Logged in!!");
//             }else
//                 response.send("Not Logged in");
//         }
//     });