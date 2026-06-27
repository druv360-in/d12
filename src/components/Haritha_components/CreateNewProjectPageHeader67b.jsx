import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateNewProjectPageHeader67b() {
  const navigate = useNavigate();

  return (
    <div className="flex items-start gap-3 px-5 py-4 bg-white border-b border-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center p-1 -ml-1 text-gray-900"
        aria-label="Go back"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
          Create New Project
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed">
          Fill in the details to start your project
        </p>
      </div>
    </div>
  );
}

export default CreateNewProjectPageHeader67b;