import { useState } from "react";

const categories = [
 {
    name: "Video Editing",
    icon: "🎬",
    items: ["YouTube Videos", "Social Media Clips", "Product Videos", "Promotional Videos", "Wedding Videos"],
  },
  {
    name: "Graphic Design",
    icon: "🎨",
    items: ["Logo Design", "Brand Identity", "Social Media Graphics", "UI/UX Design", "Illustrations"],
  },
  {
    name: "Coding",
    icon: "💻",
    items: ["Web Development", "Mobile Apps", "Backend Development", "WordPress", "Python Scripts"],
  },
  {
    name: "Content Writing",
    icon: "✍️",
    items: ["Blog Posts", "Copywriting", "Technical Writing", "Product Descriptions", "SEO Content"],
  },
  {
    name: "Social Media",
    icon: "📱",
    items: ["Instagram Management", "TikTok Content", "Facebook Ads", "Community Management", "Influencer Marketing"],
  },
  {
    name: "Digital Marketing",
    icon: "📊",
    items: ["SEO Services", "Google Ads", "Email Marketing", "Analytics", "Content Strategy"],
  },
];

// 53. Categories Menu Section
function CategoriesMenuSection() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setOpenCategory((currentCategory) =>
      currentCategory === categoryName ? null : categoryName
    );
  };

  return (
    <div className="p-4 border-t border-slate-100 dark:border-slate-800/80 mt-2">
      <h4 className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider px-2 mb-2">
        CATEGORIES
      </h4>
      <div className="flex flex-col gap-0.5">
        {categories.map((cat) => {
          const isOpen = openCategory === cat.name;

          return (
            <div key={cat.name}>
              <button
                type="button"
                onClick={() => toggleCategory(cat.name)}
                className={`w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-slate-700 dark:text-white text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 ${
                  isOpen ? "bg-slate-100 dark:bg-slate-800" : ""
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="flex-1 text-left font-medium">{cat.name}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="flex flex-col pb-2 pl-9 mt-1 gap-0.5">
                  {cat.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="rounded-md px-3 py-2 text-sm text-slate-550 dark:text-slate-350 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesMenuSection;
