// MessageThreadItem55.jsx
function MessageThreadItem({ name, time, message, unread, avatar, online }) {
  return (
    <button className="w-full flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all active:scale-[0.98] cursor-pointer shadow-sm">
      {/* Avatar + online dot */}
      <div className="relative shrink-0">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
        />
        {online && (
          <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        )}
      </div>

      {/* Name + message */}
      <div className="flex-1 text-left min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <p className="font-semibold text-slate-900 truncate">{name}</p>
          <span className="text-xs text-slate-400 ml-2 shrink-0">{time}</span>
        </div>
        <p className="text-sm text-slate-500 truncate">{message}</p>
      </div>

      {/* Unread badge */}
      {unread > 0 && (
        <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-violet-600">
          {unread}
        </div>
      )}
    </button>
  );
}

export default MessageThreadItem;