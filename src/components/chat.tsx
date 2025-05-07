import React, { useState, useRef, useEffect } from "react";
import { Trash2 } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string; isStreaming?: boolean }[]>(() => {
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem('chatHistory');
      return savedMessages ? JSON.parse(savedMessages) : [];
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Add ref for input field

  useEffect(() => {
    inputRef.current?.focus();
  }, [messages]);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  const clearHistory = () => {
    setMessages([]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setInput("");
    setLoading(true);

    // Add an empty bot message that will be updated with streaming content
    setMessages((msgs) => [...msgs, { from: "bot", text: "", isStreaming: true }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    if (!res.body) {
      setLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let botText = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      
      chunk.split("\n").forEach(line => {
        if (line.startsWith("data: ")) {
          const content = line.replace("data: ", "");
          if (content === "[DONE]") return;
          botText += content;
          // Update the last message with the new content
          setMessages((msgs) => {
            const newMsgs = [...msgs];
            const lastMsg = newMsgs[newMsgs.length - 1];
            if (lastMsg.from === "bot") {
              lastMsg.text = botText;
            }
            return newMsgs;
          });
        }
      });
    }

    // Mark the message as no longer streaming
    setMessages((msgs) => {
      const newMsgs = [...msgs];
      const lastMsg = newMsgs[newMsgs.length - 1];
      if (lastMsg.from === "bot") {
        lastMsg.isStreaming = false;
      }
      return newMsgs;
    });
    
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh]">
        {messages.length > 0 && (
          <div className="absolute top-2 right-8 z-10">
            <button
              onClick={clearHistory}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              title="Clear History"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      <div className="flex-1 overflow-y-auto space-y-2 p-2 bg-muted rounded mb-2 relative">

        
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground mt-8">
            👋 Ask me anything about my experience, skills, or projects!
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow
                ${msg.from === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-gray-900 border border-gray-200"
                }`}
            >
              {msg.text}
              {msg.isStreaming && (
                <span className="inline-block w-2 h-4 ml-1 bg-gray-400 animate-pulse" />
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring focus:border-primary"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Type your question..."
          disabled={loading}
        />
        <button
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 transition disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}