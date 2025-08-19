import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navigation from "@/components/Navigation";
import { Send, User, Bot, Calendar, MessageSquare, Settings, Brain } from "lucide-react";
import { chatWithTwin } from "@/lib/gemini";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your digital twin. I've learned about your personality and I'm here to help you with anything you need. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const data = await chatWithTwin(inputMessage);
      
      const twinMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I'm processing your request...",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, twinMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble responding right now. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-twin-surface border-twin-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-twin-primary" />
                  Your Twin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-twin-primary text-white">DT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Digital Twin</p>
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Customize Twin
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-twin-surface border-twin-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-twin-secondary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Schedule Meeting
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  Set Reminder
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  View Calendar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] bg-twin-surface border-twin-primary/20 flex flex-col">
              <CardHeader className="border-b border-twin-primary/20">
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-twin-glow" />
                  Chat with Your Digital Twin
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 p-0 flex flex-col">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isUser
                              ? 'bg-twin-primary text-white'
                              : 'bg-twin-surface-elevated border border-twin-primary/20'
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {!message.isUser && <Bot className="w-4 h-4 mt-1 text-twin-glow" />}
                            {message.isUser && <User className="w-4 h-4 mt-1" />}
                            <div className="flex-1">
                              <p className="text-sm">{message.content}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {message.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-twin-surface-elevated border border-twin-primary/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Bot className="w-4 h-4 text-twin-glow" />
                            <div className="typing-animation">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-twin-primary/20">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Chat with your digital twin..."
                      className="flex-1"
                    />
                    <Button 
                      onClick={sendMessage}
                      className="bg-twin-primary hover:bg-twin-primary/90"
                      disabled={!inputMessage.trim() || isTyping}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .typing-animation {
          display: flex;
          gap: 2px;
        }
        .typing-animation span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: hsl(var(--twin-glow));
          animation: typing 1.4s infinite ease-in-out;
        }
        .typing-animation span:nth-child(1) { animation-delay: -0.32s; }
        .typing-animation span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        `
      }} />
    </div>
  );
};

export default Dashboard;