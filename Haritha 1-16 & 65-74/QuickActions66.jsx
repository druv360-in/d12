import { Plus, Users, ShoppingBag, MessageSquare } from "lucide-react";

function QuickActions66() {
  const actions = [
    { id: 1, icon: Plus, title: "Post Project", subtitle: "Get proposals", iconColor: "#8b5cf6" },
    { id: 2, icon: Users, title: "Hire Freelancer", subtitle: "Browse talent", iconColor: "#ec4899" },
    { id: 3, icon: ShoppingBag, title: "Buy Template", subtitle: "Save time", iconColor: "#7c3aed" },
    { id: 4, icon: MessageSquare, title: "Message Team", subtitle: "Stay connected", iconColor: "#10b981" }
  ];

  return (
    <div className="quick-actions-66">
      <h3 className="qa-title-66">Quick Actions</h3>
      <div className="qa-grid-66">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button key={action.id} className="qa-card-66">
              <Icon size={22} color={action.iconColor} strokeWidth={2} />
              <div className="qa-text-66">
                <div className="qa-card-title-66">{action.title}</div>
                <div className="qa-card-subtitle-66">{action.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions66;