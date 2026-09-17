import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostProjectCard04() {
  const navigate = useNavigate();

  const goToSetup = () => navigate("/project-setup-page");

  return (
    <section>
      <div
        role="button"
        tabIndex={0}
        onClick={goToSetup}
        onKeyDown={(e) => e.key === "Enter" && goToSetup()}
        className="
          cursor-pointer
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-5

          shadow-[0_8px_20px_rgba(0,0,0,0.12)]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-2
          hover:scale-[1.02]
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)]

          focus:outline-none
          focus:ring-2
          focus:ring-purple-500
        "
      >
        <div className="flex items-center justify-between">

          <div>
            <h4 className="mb-1 text-base font-semibold text-purple-700">
              Post a Project
            </h4>

            <p className="text-sm text-gray-500">
              Hire talented freelancers today
            </p>
          </div>

          <CirclePlus
            size={36}
            strokeWidth={1.5}
            className="
              shrink-0
              text-purple-700
              transition-transform
              duration-300
              hover:scale-110
            "
            onClick={(e) => {
              e.stopPropagation();
              goToSetup();
            }}
          />

        </div>
      </div>
    </section>
  );
}

export default PostProjectCard04;