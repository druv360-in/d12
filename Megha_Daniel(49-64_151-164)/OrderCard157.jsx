// OrderCard157.jsx
import { Calendar, MessageCircle } from "lucide-react";

function OrderCard157({ order }) {
  const statusConfig = {
    Active:    { label: "In Progress", icon: "🕐", color: "bg-[#672AC9]/10 text-[#672AC9] border border-[#672AC9]/20 dark:bg-[#672AC9]/20 dark:text-[#672AC9] dark:border-[#672AC9]/30" },
    Delivered: { label: "Delivered",   icon: "✓",  color: "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40" },
    Pending:   { label: "Pending",     icon: "⏳",  color: "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/40" },
    Cancelled: { label: "Cancelled",   icon: "✕",  color: "bg-rose-50 text-rose-500 border border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/40" },
  };

  const cfg = statusConfig[order.status] || statusConfig.Active;
  const showProgress = order.status === "Active" && order.progress != null;
  const showReply = order.messages > 0;

  return (
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#1E2835] px-6 py-5 flex items-start gap-5 transition-all duration-300">
      {/* Avatar */}
      <div className="shrink-0 w-12 h-12 rounded-full bg-[#672AC9]/20 dark:bg-slate-700 flex items-center justify-center text-[#672AC9]">
        {order.client.avatar
          ? <img src={order.client.avatar} alt={order.client.name} className="w-full h-full rounded-full object-cover" />
          : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
        }
      </div>

      {/* Left: client info */}
      <div className="shrink-0 w-40">
        <h4 className="text-slate-900 dark:text-white font-bold text-sm">{order.client.name}</h4>
        <p className="text-slate-400 dark:text-slate-400 text-xs mt-0.5">Ordered on {order.client.orderedOn}</p>
      </div>

      {/* Middle: order info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
          <h3 className="text-slate-900 dark:text-white font-bold text-sm">{order.title}</h3>
          <span className={`shrink-0 flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full w-fit ${cfg.color}`}>
            <span>{cfg.icon}</span> {cfg.label}
          </span>
        </div>

        <p className="text-slate-400 dark:text-slate-400 text-xs mb-3">Gig: {order.gig}</p>

        {showProgress && (
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-slate-500 dark:text-slate-400 text-xs">Progress</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">{order.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
              <div
                className="bg-[#672AC9] h-2 rounded-full transition-all duration-500"
                style={{ width: `${order.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 text-slate-400 dark:text-slate-400 text-xs">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Deadline: {order.deadline}
          </span>
          {showReply && (
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5" />
              {order.messages} new messages
            </span>
          )}
        </div>
      </div>

      {/* Right: price + actions */}
      <div className="shrink-0 flex flex-col items-end gap-2">
        <span className="text-[#672AC9] dark:text-[#672AC9] font-bold text-xl">₹{order.price}</span>
        <button className="bg-[#672AC9] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#672AC9] transition-colors">
          View Details
        </button>
        {showReply && (
          <button className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" /> Reply
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderCard157;