
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Brain, Paperclip } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Imperial Axis, your AI assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Add thinking message
    const thinkingMessage: Message = {
      id: `thinking-${Date.now()}`,
      content: 'thinking',
      isUser: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, thinkingMessage]);

    console.log('Sending message to webhook:', userMessage.content);
    
    try {
      const webhookUrl = 'https://n8n-kh3f.onrender.com/webhook-test/358150cc-ecba-45d1-ae96-e22ea2946364';
      console.log('Webhook URL:', webhookUrl);

      const payload = {
        message: userMessage.content,
        timestamp: userMessage.timestamp.toISOString(),
        userId: 'user-' + Date.now(),
      };
      
      console.log('Sending payload:', payload);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response has content
      const responseText = await response.text();
      console.log('Response text:', responseText);
      
      let aiResponse = 'I received your message and I\'m processing it. Thank you for reaching out!';
      
      // Try to parse as JSON if there's content
      if (responseText.trim()) {
        try {
          const data = JSON.parse(responseText);
          console.log('Parsed response data:', data);
          aiResponse = data.response || data.message || data.reply || aiResponse;
        } catch (parseError) {
          console.log('Response is not JSON, using as plain text:', responseText);
          // If it's not JSON, use the text directly (if it's meaningful)
          if (responseText.length > 0 && responseText.length < 1000) {
            aiResponse = responseText;
          }
        }
      }
      
      // Remove thinking message and add AI response
      setMessages(prev => {
        const withoutThinking = prev.filter(msg => !msg.content.includes('thinking'));
        return [...withoutThinking, {
          id: Date.now().toString(),
          content: aiResponse,
          isUser: false,
          timestamp: new Date(),
        }];
      });

    } catch (error) {
      console.error('Error sending message to webhook:', error);
      
      // Remove thinking message and add error response
      setMessages(prev => {
        const withoutThinking = prev.filter(msg => !msg.content.includes('thinking'));
        return [...withoutThinking, {
          id: Date.now().toString(),
          content: 'I apologize, but I\'m having trouble processing your request right now. Please try again later.',
          isUser: false,
          timestamp: new Date(),
        }];
      });

      toast.error('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Imperial Axis</h1>
            <p className="text-purple-100">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col bg-gradient-to-b from-purple-50 to-white border-0 rounded-t-none">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.isUser ? 'justify-end' : 'justify-start'
              )}
            >
              {message.content === 'thinking' ? (
                <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
                  <Brain className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-medium">Imperial Nexus is thinking...</span>
                </div>
              ) : (
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg px-4 py-2 shadow-sm animate-fade-in',
                    message.isUser
                      ? 'bg-purple-600 text-white ml-4'
                      : 'bg-white text-gray-800 mr-4 border border-purple-100'
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <span className={cn(
                    'text-xs mt-1 block',
                    message.isUser ? 'text-purple-100' : 'text-gray-500'
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-purple-100 p-4 bg-white/80 backdrop-blur-sm">
          <div className="flex gap-2 items-end">
            <Button
              variant="outline"
              size="icon"
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <Paperclip className="w-4 h-4" />
            </Button>
            
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="min-h-[44px] max-h-[120px] resize-none border-purple-200 focus:border-purple-400 focus:ring-purple-400/20 pr-12"
                disabled={isLoading}
              />
            </div>

            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </Card>
    </div>
  );
}
