import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

export function ChatbotComponent(){
  return (
    <div className="fixed bottom-5 right-5 bg-black shadow-lg p-2 rounded-lg z-120">
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}  className='z-100'/>
    </div>
  );
};

export default ChatbotComponent;