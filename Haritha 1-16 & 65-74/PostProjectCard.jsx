import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostProjectCard() {
  const navigate = useNavigate();

  return (
    <div className="post-project-wrapper">
      <div
        className="post-project-card"
        onClick={() => navigate("/project-setup-page")}
        style={{ cursor: "pointer" }}
      >
        <div className="post-content">
          <h4 className="post-title">Post a Project</h4>
          <p className="post-text">Hire talented freelancers today</p>
        </div>

        <button className="post-icon-btn">
          <Plus size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}

export default PostProjectCard;