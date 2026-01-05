
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm the PTX Metals AI Advisor. How can I help you today with information about our projects or corporate team?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] h-[500px] shadow-2xl rounded-2xl flex flex-col border border-gray-100 overflow-hidden transition-all duration-300">
          <div className="bg-brand-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Bot className="text-brand-orange" />
              <span className="font-bold">PTX AI Advisor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-orange transition-colors"><X size={20} /></button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${m.role === 'user' ? 'bg-brand-orange text-white rounded-br-none' : 'bg-white text-gray-700 rounded-bl-none'}`}>
                  <div className="flex items-center space-x-1 mb-1 opacity-70">
                    {m.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                    <span className="text-[10px] uppercase font-bold tracking-tighter">{m.role}</span>
                  </div>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Loader2 className="animate-spin text-brand-orange" size={20} />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t bg-white flex items-center space-x-2">
            <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..." 
              className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
            <button onClick={handleSend} disabled={isLoading} className="p-2 bg-brand-orange text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50">
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center group overflow-hidden"
        >
          <MessageSquare size={28} />
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ml-0 group-hover:ml-3 font-bold whitespace-nowrap opacity-0 group-hover:opacity-100">AI Advisor</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
