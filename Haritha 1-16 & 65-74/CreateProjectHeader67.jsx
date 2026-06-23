import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateProjectHeader67() {
  const navigate = useNavigate();

  return (
    <div className="create-project-header">
      <button
        className="create-project-back-btn"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={28} />
      </button>

      <div className="create-project-header-content">
        <h1>Create Project</h1>
        <p>
          Post your project and get proposals from skilled
          students
        </p>
      </div>
    </div>
  );
}

export default CreateProjectHeader67;