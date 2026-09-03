import {
  Home,
  MessageCircle,
  Briefcase,
  Mail,
  Shield,
  Search,
  X,
  Zap,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

function SidebarMenu24({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const projectRoutes = [
    "/projects",
    "/my-projects",
    "/ongoing-projects",
    "/create-new-project",
    "/project-setup-page",
    "/payments",
    "/templates",
    "/orders",
  ];

  const menus = [
    {
      name: "Home",
      icon: Home,
      path: "/app",
    },
    {
      name: "Chats",
      icon: MessageCircle,
      path: "/chat",
      badge: "3",
    },
    {
      name: "Projects",
      icon: Briefcase,
      path: "/projects",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0
          bg-black/40
          backdrop-blur-sm
          z-40
          lg:hidden
          transition-all duration-300

          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-dvh
          flex
          flex-col
          overflow-hidden

          w-[88vw]
          max-w-[88vw]
          sm:w-[352px]
          sm:max-w-[352px]
          md:w-[360px]
          md:max-w-[360px]
          lg:w-[336px]
          lg:max-w-[336px]
          xl:w-[340px]
          xl:max-w-[340px]

          bg-white
          border-r
          border-gray-200

          z-50
          shadow-xl
          lg:shadow-none

          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* Logo Header */}
        <div
          className="
            flex
            h-16
            sm:h-[4.5rem]
            lg:h-20
            items-center
            justify-between
            px-4
            sm:px-5
            lg:px-6
            shrink-0
            border-b
            border-gray-100
          "
        >
          {/* Logo */}
          <div
            onClick={() => handleNavigation("/app")}
            className="
              flex
              cursor-pointer
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                sm:h-11
                sm:w-11
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-purple-600
                to-violet-700
              "
            >
              <Zap
                size={20}
                className="text-white"
              />
            </div>

            <h2
              className="
                text-lg
                sm:text-xl
                font-bold
                text-slate-900
              "
            >
              SkillBuster
            </h2>
          </div>

          {/* Mobile Close */}
          <button
            onClick={onClose}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-gray-100
              lg:hidden
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div
          className="
            flex-1
            overflow-y-auto
            overscroll-contain
            scroll-smooth
            min-h-0
            px-4
            pt-8
            pb-8
            sm:px-5
            sm:pt-8
            sm:pb-5
            lg:px-6
            lg:pt-8
            lg:pb-6
          "
        >

          {/* Search */}
          <div className="relative mb-3 lg:mb-6">
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search..."
              onClick={() => handleNavigation("/browse-services")}
              readOnly
              className="
                h-11
                sm:h-12
                w-full
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                pl-11
                pr-4
                text-sm
                outline-none
                focus:border-purple-500
                cursor-pointer
              "
            />
          </div>

          {/* Menu */}
          <div className="space-y-1 lg:space-y-3">
            {menus.map((menu) => {
              const Icon = menu.icon;

              /*
               * HOME:
               * Active only when current route is /app
               */
              const active =
                menu.name === "Home"
                  ? location.pathname === "/app" ||
                    location.pathname === "/app/"
                  : menu.name === "Chats"
                    ? location.pathname.startsWith("/chat")
                    : menu.name === "Projects"
                      ? projectRoutes.some(
                          (route) =>
                            location.pathname === route ||
                            location.pathname.startsWith(
                              `${route}/`
                            )
                        )
                      : location.pathname.startsWith(menu.path);

              return (
                <button
                  key={menu.name}
                  type="button"
                  onClick={() => handleNavigation(menu.path)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-2
                    sm:px-5
                    sm:py-3.5
                    transition-all
                    duration-300

                    ${
                      active
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      sm:gap-4
                    "
                  >
                    <Icon size={20} />

                    <span
                      className="
                        text-sm
                        sm:text-base
                        font-medium
                      "
                    >
                      {menu.name}
                    </span>
                  </div>

                  {menu.badge && (
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-purple-600
                        text-xs
                        text-white
                      "
                    >
                      {menu.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Switch Freelancer */}
          <div
            className="
              mt-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-700
              to-violet-600
              p-5
              sm:p-6
              text-white
            "
          >
            <h3
              className="
                text-lg
                sm:text-xl
                font-semibold
              "
            >
              Switch to Freelancer
            </h3>

            <p
              className="
                mt-2.5
                text-sm
                leading-5
                text-purple-100
              "
            >
              Create gigs, receive orders and start earning.
            </p>

            <button
              type="button"
              className="
                mt-4
                rounded-lg
                bg-white
                px-4
                py-2.5
                text-sm
                font-semibold
                text-purple-700
                hover:bg-purple-50
              "
            >
              Switch Now
            </button>
          </div>

          {/* Contact + Terms */}
          <div
            className="
              mt-2
              pb-2
              space-y-1
            "
          >
            <button
              type="button"
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-gray-700
                transition
                hover:bg-gray-100
              "
            >
              <Mail size={20} />

              <span className="font-medium">
                Contact Us
              </span>
            </button>

            <button
              type="button"
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-gray-700
                transition
                hover:bg-gray-100
              "
            >
              <Shield size={20} />

              <span className="font-medium">
                Terms & Conditions
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarMenu24;
