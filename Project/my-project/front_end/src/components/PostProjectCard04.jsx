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
        className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="text-purple-700 shrink-0" 
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