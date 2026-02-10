
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2, Settings, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { getAIResponse, configureAI, setActiveProvider, getActiveProvider, getAvailableProviders, providerNames, providerColors } from '../services/aiService';
import { ChatMessage, AIProvider } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm the PTX Metals AI Advisor. I can help you with information about our projects, team, and investment opportunities. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [apiKeys, setApiKeys] = useState({ openai: '', anthropic: '', gemini: '' });
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('gemini');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Check for env API key on mount
  useEffect(() => {
    const envKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (import.meta as any).env?.VITE_API_KEY;
    if (envKey) {
      configureAI({ gemini: { apiKey: envKey } }, 'gemini');
      setIsConfigured(true);
    }
  }, []);

  const saveConfig = () => {
    const config: any = {};
    if (apiKeys.openai) config.openai = { apiKey: apiKeys.openai };
    if (apiKeys.anthropic) config.anthropic = { apiKey: apiKeys.anthropic };
    if (apiKeys.gemini) config.gemini = { apiKey: apiKeys.gemini };

    configureAI(config, selectedProvider);
    setActiveProvider(selectedProvider);
    setIsConfigured(Object.keys(config).length > 0);
    setShowSettings(false);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I encountered an error. Please try again or contact us directly." }]);
    }
    setIsLoading(false);
  };

  // Simple markdown-like formatting
  const formatMessage = (content: string) => {
    // Split by double newlines for paragraphs
    const paragraphs = content.split(/\n\n+/);

    return paragraphs.map((para, pIdx) => {
      // Check for bullet points
      if (para.includes('\n- ') || para.startsWith('- ')) {
        const items = para.split('\n').filter(line => line.trim());
        return (
          <ul key={pIdx} className="list-disc list-inside space-y-1 my-2">
            {items.map((item, iIdx) => (
              <li key={iIdx} className="text-sm leading-relaxed">
                {item.replace(/^-\s*/, '')}
              </li>
            ))}
          </ul>
        );
      }

      // Check for numbered lists
      if (/^\d+\.\s/.test(para)) {
        const items = para.split('\n').filter(line => line.trim());
        return (
          <ol key={pIdx} className="list-decimal list-inside space-y-1 my-2">
            {items.map((item, iIdx) => (
              <li key={iIdx} className="text-sm leading-relaxed">
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        );
      }

      // Check for headers (lines starting with ##)
      if (para.startsWith('##')) {
        return (
          <h4 key={pIdx} className="font-bold text-sm mt-3 mb-1 text-brand-orange">
            {para.replace(/^#+\s*/, '')}
          </h4>
        );
      }

      // Bold text **text**
      let formattedText = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      return (
        <p
          key={pIdx}
          className="text-sm leading-relaxed my-1"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  const SettingsPanel = () => (
    <div className="absolute inset-0 bg-white z-20 flex flex-col">
      <div className="bg-gradient-to-r from-brand-dark to-gray-900 p-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <Settings className="text-brand-orange" size={20} />
          <span className="font-bold">AI Configuration</span>
        </div>
        <button onClick={() => setShowSettings(false)} className="hover:text-brand-orange transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        <p className="text-xs text-gray-500 mb-4">
          Add your API keys to enable AI features. Your keys are stored locally and never sent to our servers.
        </p>

        {/* Provider Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Active Provider</label>
          <div className="grid grid-cols-3 gap-2">
            {(['openai', 'anthropic', 'gemini'] as AIProvider[]).map(provider => (
              <button
                key={provider}
                onClick={() => setSelectedProvider(provider)}
                className={`p-2 rounded-lg text-xs font-bold transition-all border-2 ${
                  selectedProvider === provider
                    ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {provider === 'openai' && 'OpenAI'}
                {provider === 'anthropic' && 'Claude'}
                {provider === 'gemini' && 'Gemini'}
              </button>
            ))}
          </div>
        </div>

        {/* API Keys */}
        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: providerColors.openai }}></span>
              OpenAI API Key
            </label>
            <input
              type="password"
              value={apiKeys.openai}
              onChange={(e) => setApiKeys(prev => ({ ...prev, openai: e.target.value }))}
              placeholder="sk-..."
              className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: providerColors.anthropic }}></span>
              Anthropic API Key
            </label>
            <input
              type="password"
              value={apiKeys.anthropic}
              onChange={(e) => setApiKeys(prev => ({ ...prev, anthropic: e.target.value }))}
              placeholder="sk-ant-..."
              className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: providerColors.gemini }}></span>
              Google Gemini API Key
            </label>
            <input
              type="password"
              value={apiKeys.gemini}
              onChange={(e) => setApiKeys(prev => ({ ...prev, gemini: e.target.value }))}
              placeholder="AIza..."
              className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange"
            />
          </div>
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50">
        <button
          onClick={saveConfig}
          className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          <Zap size={16} />
          Save Configuration
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[400px] h-[550px] shadow-2xl rounded-2xl flex flex-col border border-gray-100 overflow-hidden transition-all duration-300 relative">
          {showSettings && <SettingsPanel />}

          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark to-gray-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
                  <Bot size={22} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-brand-dark"></div>
              </div>
              <div>
                <span className="font-bold block">PTX AI Advisor</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  {isConfigured ? `Powered by ${providerNames[selectedProvider]}` : 'Click settings to configure'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="hover:text-brand-orange transition-colors p-1"
                title="Settings"
              >
                <Settings size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:text-brand-orange transition-colors p-1">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${m.role === 'user' ? 'order-1' : 'order-2'}`}>
                  {/* Avatar */}
                  <div className={`flex items-end gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      m.role === 'user'
                        ? 'bg-brand-orange text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>

                    {/* Message Bubble */}
                    <div className={`p-4 rounded-2xl shadow-sm ${
                      m.role === 'user'
                        ? 'bg-brand-orange text-white rounded-br-md'
                        : 'bg-white text-gray-700 rounded-bl-md border border-gray-100'
                    }`}>
                      <div className={`${m.role === 'user' ? 'text-sm' : ''}`}>
                        {m.role === 'assistant' ? formatMessage(m.content) : m.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Animation */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                    <Bot size={14} className="text-gray-600" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                      <span className="text-xs text-gray-400">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {['W2 Project details', 'Management team', 'Stock information'].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setInputValue(q)}
                    className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-brand-orange/10 hover:text-brand-orange rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isConfigured ? "Ask me anything about PTX Metals..." : "Configure API keys to start..."}
                disabled={!isConfigured}
                className="flex-grow bg-transparent px-3 py-2 text-sm focus:outline-none disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !isConfigured || !inputValue.trim()}
                className="p-2.5 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-all disabled:opacity-50 disabled:hover:bg-brand-orange"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              AI responses are for informational purposes only. Not financial advice.
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-brand-orange to-orange-500 text-white p-4 rounded-2xl shadow-2xl hover:shadow-brand-orange/30 hover:scale-105 transition-all duration-300 flex items-center"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          <Sparkles size={24} className="mr-0 group-hover:mr-2 transition-all" />
          <span className="max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300 whitespace-nowrap font-bold">
            AI Advisor
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
