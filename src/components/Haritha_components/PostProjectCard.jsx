import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostProjectCard() {
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-5 bg-white">
      <div
        onClick={() => navigate("/project-setup-page")}
        className="bg-white border border-gray-200 rounded-2xl px-4 py-[18px] flex items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex-1">
          <h4 className="text-[#7c3aed] text-[15px] font-semibold leading-[1.3] mb-1">
            Post a Project
          </h4>

          <p className="text-[#6b7280] text-[13px] font-normal leading-[1.4]">
            Hire talented freelancers today
          </p>
        </div>

        <button className="w-10 h-10 rounded-full border-2 border-[#6d28d9] bg-white text-[#6d28d9] flex items-center justify-center shrink-0 active:bg-[#f5f3ff] active:scale-95 transition-all duration-200">
          <Plus size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}

export default PostProjectCard;