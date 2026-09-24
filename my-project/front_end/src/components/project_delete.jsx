import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ProjectDelete = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const project = location.state?.project;

  const projectName = project?.title || "this project";

  const handleCancel = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    /*
      Delete action can be connected to your backend/database later.

      For now, after confirming deletion,
      return to the Projects page.
    */

    navigate("/my-projects", {
      state: {
        deletedProjectId: project?.id,
      },
    });
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/55
        px-4
      "
    >
      {/* =====================================================
          DELETE CONFIRMATION MODAL
      ====================================================== */}

      <div
        className="
          w-full
          max-w-[540px]
          rounded-[24px]
          border
          border-gray-200
          bg-white
          p-8
          shadow-[0_24px_70px_rgba(0,0,0,0.28)]
        "
      >
        {/* ===================================================
            ICON + TITLE
        ==================================================== */}

        <div className="flex items-start gap-5">
          {/* Warning Icon */}

          <div
            className="
              flex
              h-[54px]
              w-[54px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-rose-50
            "
          >
            <AlertTriangle
              size={27}
              strokeWidth={2.2}
              className="text-red-500"
            />
          </div>

          {/* Title + Description */}

          <div className="min-w-0 pt-0.5">
            <h2
              className="
                text-[23px]
                font-bold
                leading-tight
                tracking-[-0.01em]
                text-gray-900
              "
            >
              Delete Project?
            </h2>

            <p
              className="
                mt-2
                text-[15px]
                font-medium
                leading-[1.65]
                text-gray-500
              "
            >
              Are you sure you want to delete this project?
            </p>
          </div>
        </div>

        {/* ===================================================
            PROJECT NAME
        ==================================================== */}

        <div
          className="
            mt-7
            rounded-[16px]
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
          "
        >
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-wide
              text-gray-400
            "
          >
            Project
          </p>

          <p
            className="
              mt-2
              text-[17px]
              font-bold
              leading-[1.5]
              text-gray-800
            "
          >
            {projectName}
          </p>
        </div>

        {/* ===================================================
            WARNING
        ==================================================== */}

        <p
          className="
            mt-5
            text-[14px]
            font-medium
            leading-[1.7]
            text-gray-500
          "
        >
          This action cannot be undone. All project information
          associated with this project may be removed.
        </p>

        {/* ===================================================
            ACTION BUTTONS
        ==================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-end
            gap-3.5
          "
        >
          {/* Cancel */}

          <button
            type="button"
            onClick={handleCancel}
            className="
              min-w-[105px]
              rounded-full
              border
              border-gray-200
              bg-white
              px-6
              py-3
              text-[14px]
              font-semibold
              text-gray-700
              transition-all
              duration-200
              hover:bg-gray-50
              hover:shadow-sm
            "
          >
            Cancel
          </button>

          {/* Delete */}

          <button
            type="button"
            onClick={handleDelete}
            className="
              min-w-[150px]
              rounded-full
              bg-red-500
              px-6
              py-3
              text-[14px]
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-red-600
              hover:shadow-md
            "
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDelete;