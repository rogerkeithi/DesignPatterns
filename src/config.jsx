import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Adam';

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