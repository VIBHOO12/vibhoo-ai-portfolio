import { Bot, User } from "lucide-react";

export default function ChatBubble({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`mb-5 flex ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-[85%] gap-3 ${
          isBot ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 ${
            isBot
              ? "bg-gradient-to-r from-blue-600 to-violet-600"
              : "bg-slate-700"
          }`}
        >
          {isBot ? (
            <Bot size={18} className="text-white" />
          ) : (
            <User size={18} className="text-white" />
          )}
        </div>

        {/* Message */}

        <div
          className={`rounded-2xl px-4 py-3 ${
            isBot
              ? "bg-slate-800 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          <p className="whitespace-pre-line leading-7">
            {message.text}
          </p>

          <p
            className={`mt-2 text-xs ${
              isBot
                ? "text-slate-400"
                : "text-blue-100"
            }`}
          >
            {new Date(message.id).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}