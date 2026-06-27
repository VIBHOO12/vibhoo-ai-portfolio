import { Bot, X } from "lucide-react";

export default function ChatHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-4">

      {/* Left */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600">

          <Bot size={24} className="text-white" />

        </div>

        <div>

          <h2 className="text-lg font-bold text-white">
            Vibhoo AI
          </h2>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

            <p className="text-xs text-green-400">
              Online
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <button
        onClick={onClose}
        className="rounded-lg p-2 transition hover:bg-slate-800"
      >
        <X size={20} />
      </button>

    </div>
  );
}