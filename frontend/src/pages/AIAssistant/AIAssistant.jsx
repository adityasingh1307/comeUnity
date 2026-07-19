import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./AIAssistant.css";
import { Navigate } from "react-router-dom";


export default function AIAssistant() {
  const token = localStorage.getItem("token");

if (!token) {
  return <Navigate to="/login" />;
}
  const bottomRef = useRef(null);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help your community today?",
      sender: "bot",
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ai",
        {
          message: currentInput,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          text: response.data.reply,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          text:
            "AI is currently unavailable. Please try again later.",
          sender: "bot",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="ai-page">
        <div className="ai-card">
          <h1>Community AI Assistant 🤖</h1>

          <p>
            Ask me anything about food donations,
            blood requests, NGOs, volunteering,
            and government services.
          </p>

          <div className="chat-box">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? "user-msg"
                    : "bot-msg"
                }
              >
                {message.text}
              </div>
            ))}

            {loading && (
              <div className="bot-msg thinking">
                AI is thinking...
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}