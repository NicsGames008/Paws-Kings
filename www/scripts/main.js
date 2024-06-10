function tryLogin() {
    var message = document.getElementById("message");
    message.innerHTML = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                // If the login is successful, we show a message and redirect to the game page in 2 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to game page in 2 seconds...";
                message.style.color = "green";

                // Redirect to game page in 2 seconds
                setTimeout(() => {

                    window.location.replace("/match.html");
                }, 2000)
            } else {
                // If the login is not successful, we show an error message.
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };

    // Send the username and password to the server
    var data = {
        "username": username,
        "password": password
    }

    // Send a POST request to the server (we are sending as post because we are sending a body with the data to the server)
    xhttp.open("POST", "/signing/login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
}

function register() {
    var message = document.getElementById("message");
    message.innerHTML = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                // If the registration is successful, we show a message and redirect to the login page in 5 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to login page in 3 seconds...";
                message.style.color = "green";

                // Redirect to game page in 2 seconds
                setTimeout(() => {
                    window.location.replace("/login.html");
                }, 3000)
            } else {
                // If the registration is not successful, we show an error message.
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };

    // Send the username, password and confirmation password to the server
    var data = {
        "username": username,
        "password": password,
        "password2": password2
    }

    // Send a POST request to the server
    xhttp.open("POST", "/signing/register", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
}


function FindMatchState(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4) {
                var data = JSON.parse(xhttp.responseText);
                if (xhttp.status == 400) {
                    document.getElementById("message").innerText = data.error;
                }
                else if (xhttp.status == 204) {//already searching
                    document.getElementById("message").innerText = data.message;
                }
                else if (xhttp.status == 201) {//successful creation
                    document.getElementById("message").innerText = data.message;

                    setTimeout(() => {
                        //window.location.replace("/game");
                        window.location.assign('/game');
                    }, 2000)
                }
            }
        };
        // Send a POST request to the server
        xhttp.open("GET", "/lobby/status", true);
        xhttp.send();
}