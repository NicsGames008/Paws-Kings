const express = require('express');
const router = express.Router();
const connection = require('../database');



// Endpoint Register

router.post('/up', (request, response) => {
    var name = request.body.name;
    var email = request.body.email;
    var password = request.body.password;

    // If any of the info is missing
    if (!name || !email || !password){
        response.send("Missing Info!");
        return;
    }

    connection.query("SELECT * FROM player where player_name = ? OR player_email = ?;",
    [name, email],
       function (err, results, fields) {
        if (err) {
           response.send(err);
        } else {
            if(results.lenght == 0 ){
                InsertIntoPlayer(response, name, email, password);
            }else
                response.send("there are some mfs with those info");
        }
    });

})


function InsertIntoPlayer(response, name, email, password){

    connection.query("INSERT INTO Player (player_name, player_email, player_password) VALUES(?, ?, ?);",
    [ name, email, password ], 
    function (err, results, fields) {
     if (err) {
        response.send(err);
     } else {
            response.send("user Register");
     }
 });
}


// Endpoint Login

router.get('/in', (request, response) => {

    var email = request.body.email;
    var password = request.body.password;

    // If any of the info is missing
    if (!email || !password){
        response.send("Missing Info!");
        return;
    }
 
    connection.query("SELECT * FROM player where player_email = ? AND player_password = ?;",
    [email, password],
       function (err, results, fields) {
        if (err) {
           response.send(err);
        } else {
            if(results[0]){
                response.send("Logged in!!");
            }else
                response.send("Not Logged in");
        }
    });

})
//////////////////////////////////////////////////////////////////////////////////////////////////////
//update user info
//////////////////////////////////////////////////////////////////////////////////////////////////////




module.exports = router;