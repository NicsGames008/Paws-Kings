//leaving the queue
function leaveQueue(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4) {
                var data = JSON.parse(xhttp.responseText);
                if (xhttp.status == 403) {
                    document.getElementById("message").innerText = data.error;
                    setTimeout(() => {
                        //window.location.replace("/game");
                        window.location.assign('/login.html');
                    }, 2000)
                    //show button to login
                }
                else if (xhttp.status == 406) {
                    //display message and hides the button due to unasibilty
                    document.getElementById("message").innerText = data.error;
                    document.getElementById("searchMatch").style.display="block";
                }
                else if (xhttp.status == 200) {
                    document.getElementById("message").innerText = data.message;
                    document.getElementById("searchMatch").style.display="block";
                    document.getElementById("leaveMatch").style.display="none";
                }
            }
        };

        xhttp.open("PUT", "/lobby/leave", true);
        xhttp.send();
}

var intervalQueueStatus;
//joining a queue
function EnterQueue() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 403) {
                document.getElementById("message").innerText = data.error;
                setTimeout(() => {
                    //window.location.replace("/game");
                    window.location.assign('/login.html');
                }, 2000)
                //show button to login
            }
            else if (xhttp.status == 406) {//already searching
                document.getElementById("message").innerText = data.error;
                //document.getElementById("searchMatch").style.display="none";
                document.getElementById("leaveMatch").style.display="block";
                
            }
            else if (xhttp.status == 201) {//successful creation
                document.getElementById("message").innerText = data.message;
                document.getElementById("searchMatch").style.display="block";
                document.getElementById("leaveMatch").style.display="block";
                
                setInterval(() => {
                    FindMatchState();
                }, 2000);
            }
            else if (xhttp.status == 200) {//successful creation
                document.getElementById("message").innerText = data.message;
                document.getElementById("searchMatch").style.display="block";
                document.getElementById("leaveMatch").style.display="block";

                window.location.assign('/game');

            }
        }
    };

    // Send a POST request to the server
    xhttp.open("POST", "/lobby/search", true);
    xhttp.send();
}

//fetching the queue status
function FindMatchState(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            
            if (xhttp.status == 400) {
                document.getElementById("message").innerText = data.error;
            }

                if(xhttp.status == 200){
                    var message = document.getElementById("message");
                    message.innerHTML = data.message;
                    message.innerHTML += "<br>Redirecting to game page in 2 seconds...";
                    message.style.color = "green";

                    setTimeout(() => {
                        //window.location.replace("/game");
                        window.location.assign('/game');
                    }, 2000)
                }



            // else if (xhttp.status == 204) {//already searching
            //     //document.getElementById("message").innerText = data.error;
            //     document.getElementById("message").innerText = data.message;
            //     //document.getElementById("searchMatch").style.display="none";
            //     //document.getElementById("leaveMatch").style.display="block";
                
            // }
            // else if (xhttp.status == 201) {//successful creation
            //     // var message = document.getElementById("message");
            //     // message.innerHTML = data.message;
            //     // message.innerHTML += "<br>Redirecting to game page in 2 seconds...";
            //     // message.style.color = "green";

            //     // document.getElementById("message").innerHTML = message;

            //     document.getElementById("message").innerText = data.message;

            //     setTimeout(() => {
            //         //window.location.replace("/game");
            //         window.location.assign('/game');
            //     }, 2000)
            //     //document.getElementById("searchMatch").style.display="block";
            //     //document.getElementById("leaveMatch").style.display="block";
            // }
        }
    };
    clearInterval(intervalQueueStatus);
    // Send a POST request to the server
    xhttp.open("GET", "/lobby/status", true);
    xhttp.send();
}