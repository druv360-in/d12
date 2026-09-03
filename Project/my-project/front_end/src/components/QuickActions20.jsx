import {
  Plus,
  Users,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import ActionCard21 from "./ActionCard21";

function QuickActions20() {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      icon: Plus,
      title: "Post Project",
      subtitle: "Get proposals",
      iconColor: "#8b5cf6",
      path: "/project-setup-page",
    },
    {
      id: 2,
      icon: Users,
      title: "Hire Freelancer",
      subtitle: "Browse talent",
      iconColor: "#ec4899",
      path: "/browse-services",
    },
    {
      id: 3,
      icon: ShoppingBag,
      title: "Buy Template",
      subtitle: "Save time",
      iconColor: "#7c3aed",
      path: "/template",
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Message Team",
      subtitle: "Stay connected",
      iconColor: "#10b981",
      path: "/chat",
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-5 shadow-sm">
      <h3 className="text-slate-900 text-xl font-bold mb-5">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <div
            key={action.id}
            onClick={() => navigate(action.path)}
            className="cursor-pointer"
          >
            <ActionCard21
              icon={action.icon}
              title={action.title}
              subtitle={action.subtitle}
              iconColor={action.iconColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions20;