import { Send } from "lucide-react";

export default function ChatInput({
  value,
  onChange,
  onSend,
}) {
  return (
    <div className="border-t border-slate-800 p-4">

      <div className="flex gap-3">

        <input
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
          placeholder="Ask Vibhoo AI..."
          className="flex-1 rounded-xl bg-slate-800 px-4 py-3 outline-none"
        />

        <button
          onClick={onSend}
          className="rounded-xl bg-blue-600 p-3 hover:bg-blue-700"
        >
          <Send size={20} />
        </button>

      </div>

    </div>
  );
}