// 56. Chat Screen Header
function ChatScreenHeader() {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <button className="text-slate-450 hover:text-slate-750 dark:text-slate-450 dark:hover:text-white transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img src="https://i.pravatar.cc/100?img=12" alt="Tech Startup Co." className="w-10 h-10 rounded-full object-cover" />
      <div className="flex-1">
        <h2 className="text-slate-900 dark:text-white font-semibold text-sm">Tech Startup Co.</h2>
        <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Online</span>
      </div>
      <button className="text-slate-450 hover:text-slate-750 dark:text-slate-450 dark:hover:text-white transition-colors duration-200">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.27 1.06l-1.7 1.7a14 14 0 006.6 6.6l1.7-1.7a1 1 0 011.06-.27l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.5 21 3 14.5 3 6V5z" />
        </svg>
      </button>
      <button className="text-slate-450 hover:text-slate-750 dark:text-slate-450 dark:hover:text-white transition-colors duration-200 ml-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 10l4.55-2.27A1 1 0 0121 8.6v6.8a1 1 0 01-1.45.87L15 14v-4z" />
          <rect x="3" y="6" width="12" height="12" rx="2" />
        </svg>
      </button>
    </div>
  );
}
export default ChatScreenHeader;