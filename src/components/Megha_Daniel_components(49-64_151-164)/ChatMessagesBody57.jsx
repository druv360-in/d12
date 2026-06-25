// 57. Chat Messages Body
function ChatMessagesBody() {
  const messages = [
    { from: "them", text: "Hi! I saw your Modern Website Development service.", time: "10:00 AM" },
    { from: "me", text: "Hello! Yes, I can help you with that. What kind of website are you looking for?", time: "10:05 AM" },
    { from: "them", text: "I need a portfolio website for my design agency. Something modern and sleek.", time: "10:07 AM" },
    { from: "me", text: "Perfect! I can definitely help with that. I specialize in modern, responsive designs. Would you like to see some of my previous work?", time: "10:10 AM" },
    { from: "them", text: "Yes please! Also, what's the estimated timeline?", time: "10:12 AM" },
  ];

  return (
    <div className="flex flex-col gap-3 p-4 bg-slate-50 dark:bg-slate-950 min-h-[60vh] transition-colors duration-300">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`max-w-[75%] p-3 rounded-2xl text-sm transition-colors duration-300 ${
            m.from === "me"
              ? "self-end bg-violet-600 text-white rounded-br-sm"
              : "self-start bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-transparent rounded-bl-sm shadow-xs dark:shadow-none"
          }`}
        >
          <p>{m.text}</p>
          <span className={`block mt-1 text-xs font-medium ${m.from === "me" ? "text-violet-200" : "text-slate-400 dark:text-slate-500"}`}>{m.time}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatMessagesBody;