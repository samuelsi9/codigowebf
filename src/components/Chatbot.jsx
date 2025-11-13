import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 I'm here to help you learn more about Codigo. How can I assist you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses = {
    'hello': "Hello! 👋 Welcome to Codigo. We create modern mobile apps, professional websites, and AI-driven solutions. How can I help you?",
    'hi': "Hi there! 🚀 What would you like to know about our services?",
    'services': "We offer:\n• Mobile Apps Development\n• Professional Websites\n• AI-Driven Apps\n• System Installation (Windows, macOS, Linux, Android)\n\nWhich one interests you?",
    'pricing': "Our pricing is custom-tailored to each project. We offer affordable prices with fast delivery and reliable support. Would you like to discuss your specific needs?",
    'contact': "Great! You can reach us through:\n• Email us directly\n• Use the contact form\n• Or just tell me what you need and I'll help!",
    'help': "I can help you with:\n• Information about our services\n• Pricing details\n• Contact information\n• General questions\n\nWhat would you like to know?",
    'default': "I'm here to help! You can ask me about:\n• Our services (mobile apps, websites, AI apps)\n• Pricing\n• Contact information\n• Or any other questions about Codigo!"
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return responses['hello'];
    } else if (lowerMessage.includes('service')) {
      return responses['services'];
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return responses['pricing'];
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return responses['contact'];
    } else if (lowerMessage.includes('help')) {
      return responses['help'];
    } else {
      return responses['default'];
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage = {
        text: getBotResponse(inputValue),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className={`chatbot-toggle ${isOpen ? 'chatbot-open' : ''}`}
        onClick={toggleChat}
        aria-label="Chat Support"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {!isOpen && <span className="chatbot-pulse"></span>}
      </button>

      <div className={`chatbot-container ${isOpen ? 'chatbot-container-open' : ''}`} ref={chatContainerRef}>
        <div className="chatbot-header">
          <div className="chatbot-header-content">
            <div className="chatbot-avatar">
              <span>🤖</span>
            </div>
            <div className="chatbot-info">
              <h3>Codigo Assistant</h3>
              <p>Online • Usually replies instantly</p>
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}>
              <div className="message-bubble">
                {message.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < message.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        <form className="chatbot-input-form" onSubmit={handleSend}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="chatbot-input"
            autoFocus={isOpen}
          />
          <button type="submit" className="chatbot-send-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;

