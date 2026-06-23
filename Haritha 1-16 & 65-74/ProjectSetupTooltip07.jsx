import { Info } from "lucide-react";

function ProjectSetupTooltip07() {
  return (
    <div className="project-setup-tooltip">
      <div className="tooltip-icon">
        <Info size={20} />
      </div>
      <div className="tooltip-content">
        <h4 className="tooltip-title">Project Setup</h4>
        <p className="tooltip-text">
          After creating the project, you can add tasks, track progress, 
          and manage payments from the project details page.
        </p>
      </div>
    </div>
  );
}

export default ProjectSetupTooltip07;