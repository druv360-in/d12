import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateProjectHeader67a() {
  const navigate = useNavigate();

  return (
    <div className="flex items-start gap-5 px-7 pt-9 pb-7 bg-white border-b border-slate-200">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="w-[54px] h-[54px] flex items-center justify-center text-slate-500 bg-white cursor-pointer flex-shrink-0"
      >
        <ArrowLeft size={28} />
      </button>

      {/* Content */}
      <div>
        <h1 className="mt-2 text-[28px] font-bold text-slate-900">
          Create Project
        </h1>

        <p className="mt-3 text-[16px] leading-relaxed text-slate-500 max-w-[260px]">
          Post your project and get proposals from skilled students
        </p>
      </div>
    </div>
  );
}

export default CreateProjectHeader67a;