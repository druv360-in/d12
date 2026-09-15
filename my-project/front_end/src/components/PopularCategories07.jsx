import { useNavigate } from "react-router-dom";
import CategoryCard06 from "./CategoryCard06";

const categories = [
  {
    icon: "🎬",
    title: "Video Editing",
    path: "/browse-services",
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    path: "/browse-services",
  },
  {
    icon: "💻",
    title: "Coding",
    path: "/browse-services",
  },
  {
    icon: "✍️",
    title: "Content Writing",
    path: "/browse-services",
  },
  {
    icon: "📱",
    title: "Social Media",
    path: "/browse-services",
  },
  {
    icon: "📊",
    title: "Digital Marketing",
    path: "/browse-services",
  },
];

const PopularCategories07 = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-8 lg:px-0">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900">
          Popular Categories
        </h2>

        <button
          onClick={() => navigate("/browse-services")}
          className="
            cursor-pointer
            font-semibold
            text-purple-600
            hover:text-purple-700
          "
        >
          View All →
        </button>

      </div>

      {/* Categories Grid */}
      <div
        className="
          grid
          grid-cols-3
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-3
          xl:grid-cols-3
          gap-3
        "
      >
        {categories.map((category, index) => (
          <CategoryCard06
            key={index}
            icon={category.icon}
            title={category.title}
            path={category.path}
          />
        ))}
      </div>

    </section>
  );
};

export default PopularCategories07;