import { Bot } from "lucide-react";

export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-2xl hover:scale-110 transition"
    >
      <Bot size={30} />
    </button>
  );
}