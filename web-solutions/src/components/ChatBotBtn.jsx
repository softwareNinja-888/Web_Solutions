import React, { useState } from "react";
import ChatbotComponent from "./ChatBot";
import { MessageCircle } from "lucide-react";


export function ChatbotButton(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen && <ChatbotComponent />}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

