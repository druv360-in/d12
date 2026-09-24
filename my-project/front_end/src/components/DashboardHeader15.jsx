
import {
  Briefcase,
  Users,
  PlayCircle,
  PlusCircle,
  FileText,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

function DashboardHeader15() {
  const navigate = useNavigate();
  const location = useLocation();

  const current = location.pathname;

  const menuItems = [
    {
      name: "Overview",
      path: "/projects",
      icon: Briefcase,
    },
    {
      name: "My Team",
      path: "/team",
      icon: Users,
    },
    {
      name: "Ongoing Projects",
      path: "/ongoing-projects",
      icon: PlayCircle,
    },
    {
      name: "Post Project",
      path: "/project-setup-page",
      icon: PlusCircle,
    },
    {
      name: "Projects",
      path: "/my-projects",
      icon: FileText,
    },
    {
      name: "Templates",
      path: "/templates",
      icon: ShoppingBag,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="w-full">
      {/* ================= Banner ================= */}

      <div
        className="
          w-full
          bg-gradient-to-r
          from-violet-700
          to-purple-600
          rounded-[20px]
          px-5
          py-10
          lg:px-10
          shadow-lg
          hover:-translate-y-1
          hover:brightness-105
          hover:shadow-2xl
          transition-all
          duration-300
          cursor-pointer
        "
      >
        <h2
          className="
            text-3xl
            lg:text-5xl
            font-bold
            text-white
          "
        >
          Client Dashboard
        </h2>

        <p
          className="
            mt-3
            text-purple-100
            text-base
            lg:text-xl
          "
        >
          Manage your team, projects, and orders
        </p>
      </div>

      {/* ================= Floating Menu ================= */}

      <div className="mt-5 w-full">
        <div
          className="
            overflow-x-auto
            px-2
            lg:px-0
          "
        >
          <div
            className="
              flex
              gap-3
              w-max
            "
          >
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active = current === item.path;

              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-2xl
                    font-semibold
                    whitespace-nowrap
                    transition-all

                    ${
                      active
                        ? "bg-violet-700 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-violet-100"
                    }
                  `}
                >
                  <Icon size={20} />

                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader15;


