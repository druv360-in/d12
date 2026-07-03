import { useState } from "react";
import { Briefcase, Users, PlayCircle, PlusCircle, FileText, LayoutTemplate, CheckCircle } from "lucide-react";

// 61. Dashboard Tab Bar
function DashboardTabBar() {
  const [active, setActive] = useState("Overview");

  const tabs = [
    { name: "Overview",          icon: Briefcase      },
    { name: "My Team",           icon: Users          },
    { name: "Ongoing Projects",  icon: PlayCircle     },
    { name: "Post New Project",  icon: PlusCircle     },
    { name: "Projects",          icon: FileText       },
    { name: "Templates",         icon: LayoutTemplate },
    { name: "Orders",            icon: CheckCircle    },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {tabs.map(({ name, icon: Icon }) => {
        const isActive = active === name;
        return (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              isActive
                ? "bg-violet-600 text-white"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            <Icon className="w-4 h-4" />
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default DashboardTabBar;