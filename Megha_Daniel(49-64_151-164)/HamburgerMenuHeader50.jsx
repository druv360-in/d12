import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategoriesMenuSection from "./CategoriesMenuSection53";
import ProjectsDropdownMenu from "./ProjectsDropdownMenu52";
import SwitchToFreelancerModeBanner from "./SwitchToFreelancerModeBanner52";
import { LayoutDashboard, Package, Send, ShoppingCart, Wallet, LineChart, Home, MessageSquare, Mail, Shield, Sun, Moon } from "lucide-react";

// 50. Hamburger Menu Header / Search
function HamburgerMenuHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPath = location.pathname;
  const [isFreelancerMode, setIsFreelancerMode] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const navButtonClass = (path) => {
    const isActive = selectedPath === path;

    return `w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 relative overflow-hidden group ${
      isActive
        ? "bg-[#672AC9] text-white [&>svg]:text-white"
        : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white [&>svg]:text-[#672AC9]"
    }`;
  };

  return (
    <aside className="overflow-hidden rounded-2xl bg-white dark:bg-[#1E2835] border border-slate-200 dark:border-none shadow-lg dark:shadow-slate-950/30">
      <div className="flex flex-col gap-4 p-4">
        <div className="relative">
          <svg className="w-4 h-4 text-[#672AC9] absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" strokeWidth={2} />
            <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search services..."
            className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button 
          onClick={toggleTheme}
          className="self-center bg-slate-100 dark:bg-slate-800 text-[#672AC9] p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <nav className="flex flex-col gap-1">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className={navButtonClass("/")}
          >
            <Home className="w-5 h-5 shrink-0" />
            <span className="flex-1 text-left font-medium relative">Home</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavigate("/chats")}
            className={navButtonClass("/chats")}
          >
           <MessageSquare className="w-5 h-5 shrink-0" />
           <span className="flex-1 text-left font-medium relative">Chats</span>
            <span className="bg-[#672AC9] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </button>
        </nav>
      </div>

       <SwitchToFreelancerModeBanner
        isFreelancerMode={isFreelancerMode}
        onToggle={() => setIsFreelancerMode(!isFreelancerMode)}
      />
      
      {isFreelancerMode ? (
        <FreelancerNavSection />
      ) : (
        <>
          <ProjectsDropdownMenu />
          <CategoriesMenuSection />
        </>
      )}

      <nav className="flex flex-col gap-1 px-4 pt-6 pb-4">
        <button
          type="button"
          onClick={() => handleNavigate("/contact-us")}
          className={navButtonClass("/contact-us")}
        >
          <Mail className="w-5 h-5 shrink-0" />
          <span className="flex-1 text-left font-medium relative">Contact Us</span>
        </button>
        <button
          type="button"
          onClick={() => handleNavigate("/terms-and-conditions")}
          className={navButtonClass("/terms-and-conditions")}
        >
          <Shield className="w-5 h-5 shrink-0" />
          <span className="flex-1 text-left font-medium relative">Terms and Conditions</span>
        </button>
      </nav>
    </aside>
  );
}

function FreelancerNavSection() {
  const items = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Gigs", icon: Package },
    { label: "Proposals", icon: Send },
    { label: "Orders", icon: ShoppingCart },
    { label: "Earnings", icon: Wallet },
    { label: "Analytics", icon: LineChart },
  ];

  return (
    <div className="flex flex-col gap-1 px-3 py-2">
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-300 [&>svg]:text-[#672AC9]"
          >
            <IconComponent className="w-5 h-5 shrink-0" />
            <span className="flex-1 text-left">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default HamburgerMenuHeader;
