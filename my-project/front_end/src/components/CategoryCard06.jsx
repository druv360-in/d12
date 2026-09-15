import { useNavigate } from "react-router-dom";

const CategoryCard06 = ({ icon, title, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="
        w-full
        bg-[#F1F3F5]
        border-gray-200/50
        rounded-2xl
        shadow-sm
        hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200
        h-36
        sm:h-40
        lg:h-44
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-5
        overflow-hidden
      "
    >
      {/* Icon */}
      <div className="mb-3 text-5xl sm:text-6xl">
        {icon}
      </div>

      {/* Title */}
      <p className="text-center text-[15px] sm:text-base font-semibold leading-5 text-gray-800">
        {title.split(" ").map((word, index, arr) => (
          <span key={index} className="block">
            {word}
          </span>
        ))}
      </p>
    </button>
  );
};

export default CategoryCard06;