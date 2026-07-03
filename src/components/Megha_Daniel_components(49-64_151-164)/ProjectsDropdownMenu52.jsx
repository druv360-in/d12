

import { useState } from "react";
import { Briefcase } from "lucide-react";

// 52. Projects Dropdown Menu
function ProjectsDropdownMenu() {
  const [open, setOpen] = useState(true);

  const items = ["All Projects", "Ongoing Projects", "Post New Project"];

  return (
    <div className="py-1 px-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-white text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
      >
        <Briefcase className="w-5 h-5 text-[#672AC9] transition-colors" />
        <span className="flex-1 text-left">Projects</span>
        <svg className={`w-4 h-4 text-[#672AC9] transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="flex flex-col pb-2 pl-3">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="px-9 py-2 text-slate-550 dark:text-slate-350 text-sm rounded-lg hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsDropdownMenu;
