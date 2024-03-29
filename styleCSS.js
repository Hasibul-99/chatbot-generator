export const style = {
    css: function() {
        return `<style>
        //Common css
        .title{
            margin:auto;
            font-size:x-large;
            font-family: Raleway, sans-serif;
            color:rebeccapurple;
          }
          @media (min-width: 450px) {
                .main-card {
                  width: 96%;
                  max-width: 400px;
                  height: calc(100% - 32px) !important;
                  border-radius: 8px !important;
                  max-height: 470px;
                margin: 16px!important;
                }
              }
          
              .collapsed {
                width: 48px !important;
                height: 48px !important;
                border-radius: 24px !important;
                margin: 16px!important;
              }
          
              .main-card {
                background: white;
                color: white;
                z-index: 1000000;
                width: 100%;
                height: 100%;
                margin: 0px;
                border-radius: 0px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                right: 0;
                bottom: 40px;
                position: fixed;
                transition: all 0.5s;
                box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);
              }
          #chatbot_toggle {
            position: absolute;
            right: 0;
            border: none;
            height: 48px;
            width: 48px;
            background: rebeccapurple;
            padding: 14px;
            color:white;
          }
          #chatbot_toggle:hover {
            background: #7d56a5;
          }
          .line {
            height: 1px;
            background-color: rebeccapurple;
            width: 100%;
            opacity: 0.2;
          }
          .main-title {
            background-color: rebeccapurple;
            font-size: large;
            font-weight: bold;
            display: flex;
            height: 48px;
          }
          .main-title>div{
            height:48px;
            width:48px;
            display:flex;
            margin-left:8px;
          }
          .main-title svg {
            height: 24px;
            margin: auto;
          }
          .main-title > span {
            margin: auto auto auto 8px;
          }
          .chat-area {
            flex-grow: 1;
            overflow: auto;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
          }
          .input-message {
            color: #000;
            padding: 8px 48px 8px 16px;
            flex-grow: 1;
            border: none;
          }
          .input-message:focus {
            outline: none;
          }
          .input-div {
            height: 48px;
            display: flex;
          }
          
          .input-send {
            background: transparent;
            width: 48px;
            height: 48px;
            right: 0%;
            border: none;
            cursor: pointer;
          }
          .input-send:hover {
            background: lavender;
          }
          .input-send svg {
            fill: rebeccapurple;
            margin: 11px 8px;
          }
          .chat-message-div {
            display: flex;
          }
          
          .chat-message-sent {
            background-color: white;
            margin: 8px 16px 8px 64px;
            padding: 8px 16px;
            animation-name: fadeIn;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 100ms;
            color: black;
            border-radius: 8px 8px 2px 8px;
            background-color: lavender;
          }
          
          .chat-message-received {
            background-color: white;
            margin: 8px 64px 8px 16px;
            padding: 8px 16px;
            animation-name: fadeIn;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 100ms;
            color: black;
            border-radius: 8px 8px 8px 2px;
            background-color: lavender;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
          
            to {
              opacity: 1;
            }
          }
          
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }




          .lds-ellipsis {
            display: inline-block;
            position: relative;
            width: 55px;
            height: 5px;
          }
          .lds-ellipsis div {
            position: absolute;
            top: 0;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #000;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
          }
          .lds-ellipsis div:nth-child(1) {
            left: 5px;
            animation: lds-ellipsis1 0.6s infinite;
          }
          .lds-ellipsis div:nth-child(2) {
            left: 5px;
            animation: lds-ellipsis2 0.6s infinite;
          }
          .lds-ellipsis div:nth-child(3) {
            left: 25px;
            animation: lds-ellipsis2 0.6s infinite;
          }
          .lds-ellipsis div:nth-child(4) {
            left: 36px;
            animation: lds-ellipsis3 0.6s infinite;
          }
          @keyframes lds-ellipsis1 {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes lds-ellipsis3 {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(0);
            }
          }
          @keyframes lds-ellipsis2 {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(24px, 0);
            }
          }          
        </style>`
    }
};