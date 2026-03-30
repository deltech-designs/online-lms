import React, { useState } from "react";

interface Message {
  id: number;
  sender: "ai" | "user";
  text: React.ReactNode;
  time: string;
  isQuickTip?: boolean;
}

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: <>Good luck on your <strong>Module 2 Assessment!</strong> I'm here if you need clarification on any concepts mentioned in the questions, but I can't give you the direct answers! 😄</>,
      time: "Just now",
    },
    {
      id: 2,
      sender: "ai",
      text: <>Remember that <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">fr</code> units in Grid are for distributing remaining space after fixed elements are sized.</>,
      time: "Just now",
      isQuickTip: true,
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "user", text: input, time: "Just now" },
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "ai",
          text: "That's a great question! Focus on understanding the concept of fractional units and how they interact with fixed-size elements in your grid.",
          time: "Just now",
        },
      ]);
    }, 800);
  };

  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" /><circle cx="18" cy="6" r="3" fill="#2563EB" stroke="none" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">AI Study Assistant</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Assessment Support On</p>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.isQuickTip ? (
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1.5">Quick Tip</p>
                <p className="text-sm text-gray-700 leading-relaxed">{msg.text}</p>
              </div>
            ) : msg.sender === "ai" ? (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-gray-700 leading-relaxed">{msg.text}</div>
                  <p className="text-[10px] text-gray-300 mt-1 ml-1">AI Assistant • {msg.time}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm leading-relaxed max-w-[85%]">{msg.text as string}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask for a hint or clarification..."
            className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400 text-gray-700"
          />
          <button
            onClick={handleSend}
            className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-gray-300 text-center mt-2">AI Assessment Proctor Mode Active.</p>
      </div>
    </aside>
  );
};

export default AIAssistant;