import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div 
      className="chatbot-container"
      role="complementary"
      aria-label="Chat assistant"
    >
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="chat-window"
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {isOpen && (
        <div 
          id="chat-window"
          className="chat-window"
          role="region"
          aria-live="polite"
        >
          <div className="messages-container">
            {/* Messages content */}
          </div>
          
          <form 
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle message submit
            }}
          >
            <label htmlFor="chat-message" className="sr-only">
              Type your message
            </label>
            <input
              id="chat-message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              aria-label="Chat message"
            />
            <button 
              type="submit"
              className="chat-button"
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
