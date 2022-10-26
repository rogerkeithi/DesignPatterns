import { createChatBotMessage } from 'react-chatbot-kit';
import { useState } from 'react'
import axios from "axios";

const botName = "ADAM";

const config = { 
  botName: botName,
  initialMessages: [createChatBotMessage(`Olá, meu nome é ${botName}`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#453980",
    },
    chatButton: {
      backgroundColor: "#302859",
    },
  },
}

export default config