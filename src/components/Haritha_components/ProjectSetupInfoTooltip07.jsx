import { Info } from "lucide-react";

function ProjectSetupInfoTooltip07() {
  return (
    <div className="mx-5 mt-6 mb-10 flex items-start gap-4 rounded-3xl bg-purple-50 p-5 shadow-sm">
      <div className="text-purple-600 shrink-0">
        <Info size={22} />
      </div>

      <div>
        <h3 className="text-[18px] font-bold text-purple-700 mb-1">
          Project Setup
        </h3>

        <p className="text-[15px] leading-[1.6] text-purple-600">
          After creating the project, you can add tasks, track progress,
          and manage payments from the project details page.
        </p>
      </div>
    </div>
  );
}

export default ProjectSetupInfoTooltip07;