export default function TypingIndicator() {
  return (
    <div className="mb-4 flex items-center gap-2">

      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce"></span>

      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce delay-150"></span>

      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce delay-300"></span>

      <p className="ml-2 text-sm text-slate-400">
        Vibhoo AI is typing...
      </p>

    </div>
  );
}