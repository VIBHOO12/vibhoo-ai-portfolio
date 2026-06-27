// import ChatHeader from "./ChatHeader";
// import ChatMessages from "./ChatMessages";
// import ChatInput from "./ChatInput";
// import ChatSuggestions from "./ChatSuggestions";
// import TypingIndicator from "./TypingIndicator";

// export default function ChatWindow({
//   messages,
//   input,
//   typing,
//   setInput,
//   onSend,
//   onClose,
//   bottomRef,
// }) {
//   return (
//     <div className="fixed bottom-24 right-6 z-50 flex h-[650px] w-[390px] flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">

//       {/* Header */}
//       <ChatHeader onClose={onClose} />

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto bg-slate-900 px-5 py-4">

//         <ChatMessages messages={messages} />

//         {typing && <TypingIndicator />}

//         <div ref={bottomRef}></div>

//       </div>

//       {/* Suggestions */}
//       <ChatSuggestions onSelect={onSend} />

//       {/* Input */}
//       <ChatInput
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onSend={() => onSend()}
//       />

//     </div>
//   );
// }
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatSuggestions from "./ChatSuggestions";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({
  messages,
  input,
  typing,
  setInput,
  onSend,
  onClose,
  bottomRef,
}) {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex h-[650px] w-[390px] flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">

      <ChatHeader onClose={onClose} />

      <div className="flex-1 overflow-y-auto p-5">

        <ChatMessages messages={messages} />

        {typing && <TypingIndicator />}

        <div ref={bottomRef}></div>

      </div>

      <ChatSuggestions onSelect={onSend} />

      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSend={() => onSend()}
      />
    </div>
  );
}