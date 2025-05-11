import React, { useRef, useEffect } from 'react';

// Zobrazení všech zpráv.
// Vstupní pole pro přidání nové zprávy.
// Interní komponenta ChatMessage pro jednotliv7 zprávy.

const ChatBox = ({ messages, message, setMessage, handleAddMessage }) => {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const ChatMessage = ({ text, time }) => (
    <div className="chat-message">
      <span className="chat-time">{time}</span>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="chat-section">
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} time={msg.time} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Napište zprávu..."
        />
        <button onClick={handleAddMessage}>Odeslat</button>
      </div>
    </div>
  );
};

export default ChatBox;