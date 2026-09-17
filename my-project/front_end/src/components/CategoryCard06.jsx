import { useNavigate } from "react-router-dom";

const CategoryCard06 = ({ icon, title, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="
        w-full

        bg-[#F1F3F5]

        border
        border-gray-200/50

        rounded-2xl

        /* Strong 3D normal shadow */
        shadow-[0_12px_25px_rgba(0,0,0,0.20)]

        /* Smooth 3D animation */
        transition-all
        duration-300
        ease-out

        /* Hover 3D */
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-[0_25px_50px_rgba(0,0,0,0.30)]

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

        cursor-pointer
      "
    >
      {/* Icon */}
      <div className="mb-3 text-5xl sm:text-6xl">
        {icon}
      </div>

      {/* Title */}
      <p
        className="
          text-center
          text-[15px]
          sm:text-base
          font-semibold
          leading-5
          text-gray-800
        "
      >
        {title.split(" ").map((word, index) => (
          <span key={index} className="block">
            {word}
          </span>
        ))}
      </p>
    </button>
  );
};

export default CategoryCard06;