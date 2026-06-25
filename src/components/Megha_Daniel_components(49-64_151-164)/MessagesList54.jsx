// MessagesList54.jsx
import MessageThreadItem from "./MessageThreadItem55";
import { ChevronRight } from "lucide-react";

const threads = [
  { id: 1, name: "Tech Startup Co.", time: "10:30 AM", message: "Thanks! Looking forward to the final delivery.", unread: 2, avatar: "https://i.pravatar.cc/100?img=12", online: true },
  { id: 2, name: "Sarah Martinez",   time: "Yesterday", message: "Can you make the logo a bit more colorful?",    unread: 0, avatar: "https://i.pravatar.cc/100?img=45", online: true },
  { id: 3, name: "Mike Chen",        time: "2 days ago", message: "Perfect! Approved the design.",               unread: 0, avatar: "https://i.pravatar.cc/100?img=33", online: true },
];

function MessagesList() {
  return (
    <div className="bg-white min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-slate-900 text-2xl font-bold">Messages</h1>
          <p className="text-slate-400 text-sm mt-0.5">{threads.length} conversations</p>
        </div>

        
      </div>

      {/* Thread list */}
      <div className="flex flex-col gap-3">
        {threads.map((t) => (
          <MessageThreadItem key={t.id} {...t} />
        ))}
      </div>
    </div>
  );
}

export default MessagesList;