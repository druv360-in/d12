import { Plus, Users, ShoppingBag, MessageSquare } from "lucide-react";

function QuickActions66() {
  const actions = [
    { id: 1, icon: Plus, title: "Post Project", subtitle: "Get proposals", iconColor: "#8b5cf6" },
    { id: 2, icon: Users, title: "Hire Freelancer", subtitle: "Browse talent", iconColor: "#ec4899" },
    { id: 3, icon: ShoppingBag, title: "Buy Template", subtitle: "Save time", iconColor: "#7c3aed" },
    { id: 4, icon: MessageSquare, title: "Message Team", subtitle: "Stay connected", iconColor: "#10b981" }
  ];

  return (
    <div className="bg-white p-4 rounded-2xl">
      {/* Title */}
      <h3 className="text-slate-900 text-lg font-bold mb-4">
        Quick Actions
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="bg-white border-0 rounded-xl p-4 flex flex-col items-start gap-2 text-left shadow-sm
                         transition-all duration-150 hover:-translate-y-1 hover:shadow-md active:translate-y-0"
            >
              <Icon size={22} color={action.iconColor} strokeWidth={2} />

              <div className="flex flex-col gap-[2px]">
                <div className="text-slate-800 text-sm font-semibold leading-snug">
                  {action.title}
                </div>
                <div className="text-slate-400 text-xs leading-tight">
                  {action.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions66;