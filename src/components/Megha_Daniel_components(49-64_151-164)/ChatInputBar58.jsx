// 58. Chat Input Bar
function ChatInputBar() {
  return (
    <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <button className="text-slate-450 hover:text-slate-750 dark:text-slate-450 dark:hover:text-white p-2 transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
        </svg>
      </button>
      <button className="text-slate-450 hover:text-slate-750 dark:text-slate-450 dark:hover:text-white p-2 transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
          <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15l-5-5L5 21" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-450 dark:placeholder-slate-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#672AC9]/25 transition-all duration-250"
      />
      <button className="bg-violet-600 text-white p-2.5 rounded-full hover:opacity-90 transition-opacity">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  );
}
export default ChatInputBar;