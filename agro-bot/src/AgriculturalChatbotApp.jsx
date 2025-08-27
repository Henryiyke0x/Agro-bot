import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Mic,
  Camera,
  Image,
  MapPin,
  Cloud,
  Droplets,
  Thermometer,
  Menu,
  Bell,
  User,
  Home,
  MessageCircle,
  BarChart3,
  Settings,
  Search,
  Star,
  Calendar,
  Leaf,
  Bug,
  Sprout,
  Sun,
  Moon,
  ChevronRight,
  Plus,
  Filter,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react";

const AgriculturalChatbotApp = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm your AI agricultural assistant. How can I help you with your farming needs today?",
      timestamp: new Date(Date.now() - 120000),
      category: "greeting",
    },
    {
      id: 2,
      type: "user",
      content:
        "My tomato plants have yellow leaves. What could be the problem?",
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: 3,
      type: "bot",
      content:
        "Yellow leaves on tomato plants can indicate several issues:\n\n🔸 **Overwatering** - Most common cause\n🔸 **Nitrogen deficiency** - Starts with lower leaves\n🔸 **Disease** - Early blight or fusarium wilt\n🔸 **Natural aging** - Lower leaves naturally yellow\n\nCan you share a photo of the affected plants? This will help me provide more specific guidance.",
      timestamp: new Date(Date.now() - 30000),
      category: "diagnosis",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Home Screen Component
  const HomeScreen = () => (
    <div className="flex-1  bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-8 rounded-b-3xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <Menu className="w-6 h-6" />
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6" />
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Good Morning, Farmer!</h1>
          <p className="text-green-100">Let's make your crops thrive today</p>
        </div>

        {/* Weather Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">28°C</p>
                <p className="text-sm text-green-100">Partly Cloudy</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 text-sm">
                <Droplets className="w-4 h-4" />
                <span>65%</span>
              </div>
              <p className="text-xs text-green-100 mt-1">Perfect for farming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setCurrentScreen("chat")}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-1">Ask AI</h3>
            <p className="text-sm text-green-100">Get instant help</p>
          </button>

          <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <Camera className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-1">Diagnose</h3>
            <p className="text-sm text-blue-100">Photo analysis</p>
          </button>

          <button className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <BarChart3 className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-1">Analytics</h3>
            <p className="text-sm text-orange-100">Track progress</p>
          </button>

          <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-1">Schedule</h3>
            <p className="text-sm text-purple-100">Plan activities</p>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Recent Activity</h3>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Tomato diagnosis completed
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplets className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Irrigation reminder sent</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Pest alert for corn field</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Chat Screen Component
  const ChatScreen = () => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleSend = () => {
      if (inputText.trim()) {
        const newMessage = {
          id: messages.length + 1,
          type: "user",
          content: inputText,
          timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);
        setInputText("");
        setIsTyping(true);

        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            type: "bot",
            content:
              "Thank you for your question! Based on the information you've provided, I recommend checking your soil moisture levels and examining the affected leaves more closely. Would you like me to guide you through a step-by-step diagnosis?",
            timestamp: new Date(),
            category: "recommendation",
          };
          setMessages((prev) => [...prev, botResponse]);
          setIsTyping(false);
        }, 2000);
      }
    };

    const formatTime = (timestamp) => {
      return timestamp.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    };

    const quickSuggestions = [
      "How to prevent pests?",
      "Best fertilizer for tomatoes",
      "When to harvest corn?",
      "Soil pH testing",
    ];

    return (
      <div className="flex flex-col h-full bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white px-6 py-4 shadow-sm border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentScreen("home")}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">AgriBot Assistant</h1>
              <p className="text-sm text-gray-500">
                Online • Always here to help
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                  message.type === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                {message.type === "bot" && (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                )}

                <div
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    message.type === "user"
                      ? "bg-green-500 text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {message.content}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      message.type === "user"
                        ? "text-green-100"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-end space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length <= 3 && (
          <div className="px-4 py-2">
            <div className="flex space-x-2 overflow-x-auto">
              {quickSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(suggestion)}
                  className="flex-shrink-0 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <div className="flex justify-between space-x-2 mb-3">
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
              <Camera className="w-5 h-5" />
              <span className="text-sm font-medium">Photo Diagnosis</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Location Help</span>
            </button>
          </div>

          {/* Input Area */}
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about crops, pests, weather..."
                className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600 transition-colors">
                <Image className="w-5 h-5" />
              </button>
            </div>

            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Mic className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className="p-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 rounded-full transition-colors shadow-lg"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Bottom Navigation
  const BottomNavigation = () => (
    <div className="bg-white border-t border-gray-200 px-6 py-2">
      <div className="flex justify-around">
        {[
          { icon: Home, label: "Home", screen: "home" },
          { icon: MessageCircle, label: "Chat", screen: "chat" },
          { icon: BarChart3, label: "Analytics", screen: "analytics" },
          { icon: BookOpen, label: "Guide", screen: "guide" },
          { icon: User, label: "Profile", screen: "profile" },
        ].map((item) => (
          <button
            key={item.screen}
            onClick={() => setCurrentScreen(item.screen)}
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
              currentScreen === item.screen
                ? "text-green-600 bg-green-50"
                : "text-gray-500 hover:text-green-600 hover:bg-green-50"
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50 max-w-md mx-auto border-x border-gray-200">
      {currentScreen === "home" && <HomeScreen />}
      {currentScreen === "chat" && <ChatScreen />}
      {currentScreen !== "chat" && currentScreen !== "home" && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-500">This feature is under development</p>
          </div>
        </div>
      )}
      <BottomNavigation />
    </div>
  );
};

export default AgriculturalChatbotApp;
