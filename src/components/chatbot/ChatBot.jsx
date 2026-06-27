import { useEffect, useRef, useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

import { getAIResponse } from "../../utils/aiEngine";

export default function ChatBot({
  isOpen,
  setIsOpen,
}) {
  // const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hi 👋 I'm Vibhoo AI.\n\nAsk me anything about Vibhoo, his projects, skills, experience or resume.",
    },
  ]);

  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  function sendMessage(text = input) {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTyping(true);

    setTimeout(() => {
      const result = getAIResponse(text);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: result.answer,
      };

      setMessages((prev) => [...prev, botMessage]);

      setTyping(false);
    }, 800);
  }

  return (
    <>
      <ChatButton
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <ChatWindow
          messages={messages}
          input={input}
          typing={typing}
          setInput={setInput}
          onSend={sendMessage}
          onClose={() => setIsOpen(false)}
          bottomRef={messageEndRef}
        />
      )}
    </>
  );
}