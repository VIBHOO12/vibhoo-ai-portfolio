import ChatBubble from "./ChatBubble";

export default function ChatMessages({ messages = [] }) {
  return (
    <>
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          message={message}
        />
      ))}
    </>
  );
}