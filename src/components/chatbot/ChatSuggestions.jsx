const suggestions = [
  "Tell me about Vibhoo",
  "Show me your projects",
  "What are your skills?",
  "Download your resume",
];

export default function ChatSuggestions({ onSelect }) {
  return (
    <div className="border-t border-slate-800 p-4">

      <p className="mb-3 text-sm text-slate-400">
        Suggested Questions
      </p>

      <div className="flex flex-wrap gap-2">

        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm hover:bg-blue-600"
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
}