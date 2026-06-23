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
    <section className="popular-categories">
      <div className="categories-header">
        <h3 className="categories-title">Popular Categories</h3>
        <button className="view-all-btn">View All →</button>
      </div>
      
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <p className="category-label">{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories04;