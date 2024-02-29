import { style } from "./styleCSS";
import { html } from "./htmlContent";

let clientData = {
    botMainLogo: null,
    client_id: 1,
    client_key: "Fa78I112416",
    client_text_background_color: "#2196f3",
    client_text_color: "#ffffff",
    created_at: null,
    created_by: 1,
    customization_color: "#00ff00",
    greeting_message: "GREETING MESS",
    header_color: "#ff0000",
    header_company_icon: "web-settings/5fd202f46727f1607598836.jpg",
    header_title: "Header Title",
    icon_color: "#000000",
    icon_file: "web-settings/5fd202f46727f1607598836.jpg",
    icon_popup_text: "Icon Popup Text",
    icon_position: "left",
    icon_shape: "circle",
    icon_text: "Icon Text",
    id: 1,
    isNotShowSSLFooter: "1",
    mainBotLogoShape: "circle",
    subtitle: "Test sub title",
    toggleText: "hello toggle",
    updated_at: "2020-12-09 11:24:16",
    updated_by: 1,
    user_text_background_color: "#20f355",
    user_text_color: "#000000",
    welcomeMessage: "WELCOME MESS"
};

document.body.innerHTML += `<div>
    ${style.css()}

    ${html.content()}
</div>`;

const baseUrl = 'http://13.213.6.4:5000/';

var running = false;
function send() {
    if (running == true) return;
    var msg = document.getElementById("message").value;
    if (msg == "") return;
    running = true;
    addMsg(msg);
    loadingMsg();
    //DELEAY MESSAGE RESPOSE Echo
    // window.setTimeout(addResponseMsg, 1000, msg);
    let url = `${baseUrl}chat`;

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
        body: `{"message": "${msg}"}`
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(response => {
            addResponseMsg(response?.answer);
            removeLoadingMsg()
        })
        .catch(err => console.error(err));
};

function loadingMsg() {
    var div = document.createElement("div");
    div.innerHTML = "<div class='chat-message-received'><div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div></div>";
    div.className = "chat-message-div chat-message-loading";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
    running = false;
}

function removeLoadingMsg() {
    document.querySelectorAll(".chat-message-loading").forEach(el => el.remove());
}

function addMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML =
        "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
        msg +
        "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    //SEND MESSAGE TO API
    document.getElementById("message").value = "";
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
}

function addResponseMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
    running = false;
}
document.getElementById("message").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        send();
    }
});

document.getElementById("js-input-send").addEventListener("click", function(event) {
    event.preventDefault();
    send();
});

document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
        document.getElementById("chatbot").classList.remove("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = "none"
        document.getElementById("chatbot_toggle").children[1].style.display = ""
        // setTimeout(addResponseMsg, 1000, "Hi")
    }
    else {
        document.getElementById("chatbot").classList.add("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = ""
        document.getElementById("chatbot_toggle").children[1].style.display = "none"
    }
}



























