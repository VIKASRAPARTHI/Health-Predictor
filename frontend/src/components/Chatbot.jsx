import axios from "axios";
import React, { useState } from "react";
import "../assets/styles/chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const API_URL = "AIzaSyBd76QAOCYOtSdaY9YiA73eKS_ZA5xgnVI"; // Replace with your actual API endpoint

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post(API_URL, { message: userInput });
      setMessages([...newMessages, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Sorry, I couldn't fetch a response.", sender: "bot" }]);
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Healthcare AI Chatbot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me about your health..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
