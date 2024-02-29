import $ from "jquery";
const jquery = $;

import {common} from "./commonController";

import { EmojiButton } from '@joeattardi/emoji-button';

export const afterDataLoad = {
    setNavberLogoLeft: function(clientLogo, logoPosition) {
        if (clientLogo && logoPosition === "left") {
            document.getElementById("bot_customer_logo_left").setAttribute("src", clientLogo);
        } else {
            document.getElementById("bot_customer_logo_left").style.display = "none";
        }
    },

    setNavberLogoLeftTop: function(clientLogo, logoPosition) {
        if (clientLogo && logoPosition === "top_left") {
            document.getElementById("bot_customer_logo_left_top").setAttribute("src", clientLogo);
        } else {
            document.getElementById("bot_customer_logo_left_top").style.display = "none";
        }
    },

    setNavberLogoRight: function(clientLogo, logoPosition) {
        if (clientLogo && logoPosition === "right") {
            document
                .getElementById("bot_customer_logo_right")
                .setAttribute("src", clientLogo);
        } else {
            document.getElementById("bot_customer_logo_right").style.display = "none";
        }
    },

    setNavberLogoCenter: function(clientLogo, logoPosition) {
        if (clientLogo && logoPosition === "center") {
            document
                .getElementById("bot_customer_logo_center")
                .setAttribute("src", clientLogo);
        } else {
            document.getElementById("bot_customer_logo_center").style.display = "none";
        }
    },
    
    setNavberTitle: function(title, subTitle) {
        let element = document.getElementById("chat_title_s_s_l");
        if (title && element) {
            element.innerHTML = title;

            if (subTitle) {
                var e = document.createElement("br")
                element.appendChild(e); 

                var x = document.createElement("SMALL");
                var t = document.createTextNode(subTitle); 
                x.appendChild(t);                                           
                element.appendChild(x); 
            }

        } else {
            element.style.display = "none"
        }
    },

    setNavColor: function(color) {
        let ele = document.getElementById("js-bot-nav-top-header");

        if (color && ele) {
            ele.style.backgroundColor = color;
        }
    },
    
    setCloseButton: function(url) {
        let btnClose = document.getElementById("btnClose");
        if (btnClose) btnClose.style.backgroundImage = `url(${url})`; //"url('" + baseUrl + "/images/cancel.png')";
    },

    
    setChatIcon: function(chatIcon) {
        jquery("#chat-button").css(
            "background-image",
            `url(${chatIcon})`
        );
    },

    setwelcomeMessage: function(welcomeMessage, headerIconURL, clientBGColor, clientTXTColor) {
        if (welcomeMessage) {
            let initialMessage = `<div class="ssl-bot-media" id="bot-sms-4">
                                        <div class="ssl-bot-media-body">
                                            <div class="ssl-bot-chat-msg">
                                                <p class="ssl-bot-position-relative"
                                                    style="${common.textBackgroundColor(clientBGColor, clientTXTColor)}">
                                                    ${welcomeMessage}
                                                </p>
                                            </div>

                                            ${common.showSenderIcon(headerIconURL)}
                                        </div>
                                    </div>`;

            jquery(".chat-container").append(initialMessage);
            initialMessage = false;
        }
    },

    setHideSSLFooter: function(status) {
        if (status === "1") {
            let scrollEle = document.getElementById("auto_scroll");
            if (scrollEle) scrollEle.style.maxHeight = "380px";
        } else {
            let ele = document.getElementById("js-bot-company-footer");
            let inputMessage = document.getElementById("bot-sms-content-cici");
            if (ele) ele.style.display = "none";
            if (inputMessage) inputMessage.style.bottom = "0px";
        }
    },
    
    setToggleText: function(text) {
        if (text) {
            jquery("#js-bot-toggle-cici").append(text);
        }
    },

    setIconShape: function(shape) {
        if (shape === 'round') {
            $("#bot_customer_logo_left").css("border-radius", "50%");
            $("#bot_customer_logo_right").css("border-radius", "50%");
            $("#bot_customer_logo_center").css("border-radius", "50%");
        } else if (shape === "square") {

        } else if (shape === "rectangle") {
            $("#bot_customer_logo_left").css({"max-width": "65px", "max-height": "40px", "width": "65px"});
            $("#bot_customer_logo_right").css({"max-width": "65px", "max-height": "40px", "width": "65px"});
            $("#bot_customer_logo_center").css({"max-width": "65px", "max-height": "40px", "width": "65px"});
        }
    },

    loadEmojis: function() {
        let customization_color = "#00FF00";

        const picker = new EmojiButton({
            position: 'bottom-start',
            styleProperties: {
                '--font': 'Courier New',
                '--category-button-color': customization_color
            },
            showPreview: false,
        });
        const trigger = document.querySelector('.bot-ssl-composer-emoji-button');

        picker.on('emoji', selection => {
            let input_message = jquery("#input_message").val();
            input_message += selection.emoji;

            jquery("#input_message").val(input_message);
            // trigger.innerHTML = selection.emoji;
            common.showMessageSend();
        });

        trigger.addEventListener('click', () => picker.togglePicker(trigger));

    },

    mainBotPositionSet: function() {
        let top = document.getElementById("chat_data").getAttribute("top"),
            right = document.getElementById("chat_data").getAttribute("right"),
            bottom = document.getElementById("chat_data").getAttribute("bottom"),
            left = document.getElementById("chat_data").getAttribute("left");

        if (right && typeof parseInt(right) === "number") {
            jquery("#chat-button").css("right", `${right}px` );
            jquery("#js-toggle-content-cici-3N").css("right", `${70 + parseInt(right)}px` );
        }

        if (bottom && typeof parseInt(bottom) === "number") {
            jquery("#chat-button").css("bottom", `${bottom}px` );
            jquery("#js-toggle-content-cici-3N").css("bottom", `${10 + parseInt(bottom)}px` );
        }

        // if (top && typeof parseInt(top) === "number") {
        //     jquery("#chat-button").css("top", `${top}px` );
        //     jquery("#js-toggle-content-cici-3N").css("top", `${10 + parseInt(top)}px` );
        // }

        // if (left && typeof parseInt(left) === "number") {
        //     jquery("#chat-button").css("left", `${left}px` );
        //     jquery("#js-toggle-content-cici-3N").css("left", `${70 + parseInt(left)}px` );
        // }
    }
 };