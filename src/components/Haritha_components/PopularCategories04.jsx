function PopularCategories04() {
  const categories = [
    { icon: "🎬", label: "Video Editing" },
    { icon: "🎨", label: "Graphic Design" },
    { icon: "💻", label: "Coding" },
    { icon: "✍️", label: "Content Writing" },
    { icon: "📱", label: "Social Media" },
    { icon: "📊", label: "Digital Marketing" },
  ];

  return (
    <section className="px-5 pt-6 pb-4 bg-white">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[18px] font-bold text-[#1a1a1a]">
          Popular Categories
        </h3>

        <button className="text-[#7c3aed] text-[14px] font-medium">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border border-[#f0f0f0] rounded-[20px] py-5 px-3 flex flex-col items-center justify-center text-center gap-3 min-h-[100px] shadow-sm active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <div className="text-[32px] leading-none">
              {cat.icon}
            </div>

            <p className="text-[#1a1a1a] text-[13px] font-semibold leading-[1.3]">
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories04;