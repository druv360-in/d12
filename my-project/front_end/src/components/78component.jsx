import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  FileText,
  UserPlus,
  Edit,
  Trash2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website Development",
    desc: "Build a modern e-commerce platform with payment integration",
    budget: "$5,000",
    deadline: "15/07/2026",
    progress: 45,
    status: "In-progress",
    assigned: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Mobile App UI/UX Design",
    desc: "Design user interface for fitness tracking mobile app",
    budget: "$2,500",
    deadline: "30/06/2026",
    progress: 0,
    status: "pending",
    assigned: null,
  },
  {
    id: 3,
    title: "Brand Identity Package",
    desc: "Complete brand identity including logo, colors, and guidelines",
    budget: "$1,500",
    deadline: "20/05/2026",
    progress: 100,
    status: "completed",
    assigned: "Emily Davis",
  },
];

const statusConfig = {
  "In-progress": "bg-violet-100 text-violet-700",
  pending: "bg-amber-100 text-amber-700",
  completed: "bg-emerald-100 text-emerald-700",
};

const SeventyEightComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-7 px-4 lg:px-6">

      {/* =====================================================
          PAGE TITLE
      ====================================================== */}

      <h1 className="mb-7 text-[23px] font-bold text-gray-900">
        My Projects
      </h1>


      {/* =====================================================
          PROJECT CARDS
      ====================================================== */}

      <div className="space-y-8">

        {projects.map((project) => (
          <div
            key={project.id}
            className="
              rounded-2xl
              border
              border-gray-100
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            {/* =================================================
                TITLE + STATUS
            ================================================== */}

            <div className="mb-5 flex items-start justify-between gap-5">

              <h2 className="text-[20px] font-bold leading-snug text-gray-900">
                {project.title}
              </h2>

              <span
                className={`
                  whitespace-nowrap
                  rounded-full
                  px-3.5
                  py-1.5
                  text-[13px]
                  font-semibold
                  ${statusConfig[project.status]}
                `}
              >
                {project.status}
              </span>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="mb-5 text-[15px] leading-relaxed text-gray-600">
              {project.desc}
            </p>


            {/* =================================================
                BUDGET / DEADLINE / PROGRESS
            ================================================== */}

            <div className="mb-4 grid grid-cols-3 gap-3 md:gap-4">

              {/* Budget */}
              <div
                className="
                  rounded-xl
                  bg-emerald-50
                  p-4
                  text-center
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-sm
                "
              >
                <p className="text-[13px] text-gray-500">
                  Budget
                </p>

                <p className="mt-1 text-[18px] font-bold text-gray-900">
                  {project.budget}
                </p>
              </div>


              {/* Deadline */}
              <div
                className="
                  rounded-xl
                  bg-violet-50
                  p-4
                  text-center
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-sm
                "
              >
                <p className="text-[13px] text-gray-500">
                  Deadline
                </p>

                <p className="mt-1 text-[18px] font-bold text-gray-900">
                  {project.deadline}
                </p>
              </div>


              {/* Progress */}
              <div
                className="
                  rounded-xl
                  bg-violet-50
                  p-4
                  text-center
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-sm
                "
              >
                <p className="text-[13px] text-gray-500">
                  Progress
                </p>

                <p className="mt-1 text-[18px] font-bold text-gray-900">
                  {project.progress}%
                </p>
              </div>

            </div>


            {/* =================================================
                PROGRESS BAR
            ================================================== */}

            <div className="mb-4 h-2.5 w-full overflow-hidden rounded-full bg-violet-100">
              <div
                className="
                  h-2.5
                  rounded-full
                  bg-amber-500
                  transition-all
                  duration-500
                "
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>


            {/* =================================================
                ASSIGNED FREELANCER
            ================================================== */}

            {project.assigned && (
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-2
                  text-[15px]
                  text-gray-500
                "
              >
                <Users className="h-5 w-5" />

                <span>
                  Assigned to{" "}
                  <span className="font-medium text-gray-700">
                    {project.assigned}
                  </span>
                </span>
              </div>
            )}


            {/* =================================================
                ACTION BUTTONS
            ================================================== */}

            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">

              {/* =================================================
                  VIEW
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  navigate("/view-projectdetails", {
                    state: {
                      project,
                    },
                  })
                }
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  bg-violet-50
                  px-3
                  py-3
                  text-[15px]
                  font-semibold
                  text-violet-700
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-violet-100
                  hover:shadow-sm
                "
              >
                <FileText className="h-[18px] w-[18px]" />
                View
              </button>


              {/* =================================================
                  PROPOSALS
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  navigate("/project-proposal", {
                    state: {
                      project,
                    },
                  })
                }
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  bg-violet-50
                  px-3
                  py-3
                  text-[15px]
                  font-semibold
                  text-violet-700
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-violet-100
                  hover:shadow-sm
                "
              >
                <UserPlus className="h-[18px] w-[18px]" />
                Proposals
              </button>


              {/* =================================================
                  EDIT
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  navigate("/project-edit", {
                    state: {
                      project,
                    },
                  })
                }
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  bg-violet-50
                  px-3
                  py-3
                  text-[15px]
                  font-semibold
                  text-violet-700
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-violet-100
                  hover:shadow-sm
                "
              >
                <Edit className="h-[18px] w-[18px]" />
                Edit
              </button>


              {/* =================================================
                  DELETE
              ================================================== */}

              <button
  type="button"
  onClick={() =>
    navigate("/project-delete", {
      state: {
        project,
      },
    })
  }
  className="
    flex
    items-center
    justify-center
    gap-1.5
    rounded-xl
    bg-rose-50
    px-3
    py-3
    text-[15px]
    font-semibold
    text-red-600
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:bg-rose-100
    hover:shadow-sm
  "
>
  <Trash2 className="h-[18px] w-[18px]" />
  Delete
</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default SeventyEightComponent;