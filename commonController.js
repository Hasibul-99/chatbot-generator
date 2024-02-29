import $ from "jquery";

export const common = {
    showMessageSend: function() {
        $('#js-composer-send-button').show();

        $('#js-composer-upload-button').hide();
        $('#js-composer-gif-button').hide();
        $("#js-input-composer-button").css("width", "85px");
    },
    hideMessageSend: function() {
        $('#js-composer-send-button').hide();

        $('#js-composer-upload-button').show();
        $('#js-composer-gif-button').show();
        $("#js-input-composer-button").css("width", "90px");
    },

    showSenderIcon: function(imageLink) {
        let url = imageLink ? imageLink : "https://botadmin.sslwireless.com/images/web_chat_icon_new.png";

        return `<span class="bot_message_img_container">
                    <img id="bot_custom_message_img" src="${url}" 
                        alt="" style="width: 35px; border-radius: 50%;">
                </span>`;
    },

    textBackgroundColor: function(backbroundColor, textcolor) {
        if (backbroundColor && textcolor) {
            return `background-color: ${backbroundColor};
                color: ${textcolor}`;
        } else if (backbroundColor) {
            return `background-color: ${backbroundColor};`
        } else if (textcolor) {
            return `color: ${textcolor}`;
        }
        
    }
}