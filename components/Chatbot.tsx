import React, { useState, useEffect, useRef } from "react";
import SunAnimation from "./ui/SunAnimation";
import { X, Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
};

const Chatbot = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [stage, setStage] = useState<'init' | 'email' | 'query'>('init');
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Theme detection and management
  useEffect(() => {
    // Check for system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for theme changes
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    setMessages(prev => [...prev, { id: prev.length, text, sender }]);
  };

  useEffect(() => {
    if (chatbotOpen) {
      const timer1 = setTimeout(() => {
        addMessage("Hi there! 👋 I'm your helpful assistant.", 'bot');
      }, 1000);

      const timer2 = setTimeout(() => {
        addMessage("Could you please share your email address?", 'bot');
        setStage('email');
      }, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [chatbotOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    addMessage(input, 'user');

    if (stage === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(input)) {
        setEmail(input);
        addMessage("Thank you! Now, please enter your query.", 'bot');
        setStage('query');
      } else {
        addMessage("Please enter a valid email address.", 'bot');
      }
    } else if (stage === 'query') {
      addMessage("Thank you for your query. We'll contact you soon!", 'bot');
      
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, question: input })
        });
        
        if (!response.ok) {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        console.error("Error submitting query:", error);
      }
      
      setStage('init');
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-16 left-20 transform -translate-x-1/2 md:left-36">
      <button
        className="relative h-16 w-16 md:h-20 md:w-20 rounded-full bg-transparent hover:bg-blue-500 transition-colors duration-300"
        onClick={() => setChatbotOpen(!chatbotOpen)}
        aria-label="Open Chatbot"
      >
        <SunAnimation />
      </button>
      
      {chatbotOpen && (
        <div className="absolute bottom-full transform translate-x-10 left-0 mb-4 w-80 h-96 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-[1px] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Chatbot
            </h3>
            <button 
              onClick={() => setChatbotOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              aria-label="Close Chatbot"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-2">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`max-w-[80%] p-2 rounded-lg ${
                  msg.sender === 'bot' 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 self-start' 
                    : 'bg-blue-500 text-white self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-300 dark:border-gray-700 flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                stage === 'email' 
                  ? "Enter your email" 
                  : stage === 'query' 
                  ? "Enter your query" 
                  : "Chatbot is not active"
              }
              className="flex-grow p-2 border rounded mr-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              disabled={stage === 'init'}
            />
            <button 
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-500"
              disabled={stage === 'init'}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;