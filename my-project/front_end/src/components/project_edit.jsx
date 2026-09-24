import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  DollarSign,
  CalendarDays,
  User,
  Info,
  Plus,
  X,
  ChevronRight,
} from "lucide-react";

import SidebarMenu24 from "./SidebarMenu24";
import Header01 from "./Header01";
import BottomMenu05 from "./BottomMenu05";

const ProjectEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const projectFromState = location.state?.project;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [projectName, setProjectName] = useState(
    projectFromState?.title || "E-Commerce Website Development"
  );

  const [projectDescription, setProjectDescription] = useState(
    projectFromState?.desc ||
      "Build a modern e-commerce platform with payment integration and admin dashboard"
  );

  const [requirements, setRequirements] = useState([
    "User authentication and authorization",
    "Product catalog with search and filters",
    "Shopping cart and checkout system",
    "Payment gateway integration (Stripe)",
  ]);

  const [budget, setBudget] = useState("5000");

  const [deadline, setDeadline] = useState("2026-07-15");

  const [assignedFreelancer, setAssignedFreelancer] = useState(
    projectFromState?.assigned
      ? `${projectFromState.assigned} - React Developer`
      : "Sarah Johnson - React Developer"
  );

  const [projectStatus, setProjectStatus] = useState("In Progress");

  const handleRequirementChange = (index, value) => {
    setRequirements((previous) =>
      previous.map((item, itemIndex) =>
        itemIndex === index ? value : item
      )
    );
  };

  const handleAddRequirement = () => {
    setRequirements((previous) => [
      ...previous,
      "New project requirement",
    ]);
  };

  const handleRemoveRequirement = (index) => {
    setRequirements((previous) =>
      previous.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const handleSave = () => {
    const updatedProject = {
      ...projectFromState,
      title: projectName,
      desc: projectDescription,
      budget: `$${Number(budget || 0).toLocaleString()}`,
      deadline: deadline
        ? new Date(deadline).toLocaleDateString("en-GB")
        : "",
      assigned: projectFromState?.assigned || "Sarah Johnson",
      status: projectStatus,
    };

    navigate("/my-projects", {
      state: {
        updatedProject,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafb]">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN AREA
      ====================================================== */}

      <div className="lg:pl-[272px] xl:pl-[272px]">

        {/* =================================================
            MOBILE HEADER
        ================================================== */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* ===================================================
            PAGE HEADER
        ==================================================== */}

        <header
          className="
            sticky
            top-0
            z-40
            border-b
            border-gray-200
            bg-white
          "
        >
          <div
            className="
              flex
              min-h-[84px]
              items-center
              justify-between
              px-5
              sm:px-7
              lg:pl-[85px]
              lg:pr-9
            "
          >

            {/* =================================================
                LEFT HEADER
            ================================================== */}

            <div className="flex items-center gap-3">

              {/* Simple Back Arrow */}

              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Go back"
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  p-1
                  text-gray-600
                  transition-colors
                  hover:text-violet-600
                "
              >
                <ArrowLeft
                  size={20}
                  strokeWidth={2.5}
                />
              </button>

              {/* Header Title */}

              <div>
                <h1
                  className="
                    text-[25px]
                    font-bold
                    leading-tight
                    tracking-[-0.01em]
                    text-gray-900
                  "
                >
                  Edit Project
                </h1>

                <p
                  className="
                    mt-1.5
                    text-[14px]
                    font-medium
                    text-gray-500
                  "
                >
                  Update project details and settings
                </p>
              </div>

            </div>

            {/* =================================================
                RIGHT PROFILE
            ================================================== */}

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="
                hidden
                items-center
                gap-3
                rounded-full
                border
                border-gray-200
                bg-white
                px-4
                py-2.5
                shadow-sm
                transition
                hover:border-violet-200
                hover:shadow-md
                sm:flex
              "
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                alt="John Doe"
                className="
                  h-10
                  w-10
                  rounded-full
                  object-cover
                "
              />

              <div className="text-left">
                <p className="text-[13px] font-semibold text-gray-800">
                  John Doe
                </p>

                <p className="mt-0.5 text-[11px] text-gray-500">
                  View Profile
                </p>
              </div>

              <ChevronRight
                size={17}
                className="text-gray-400"
              />
            </button>

          </div>
        </header>

        {/* ===================================================
            PAGE CONTENT
        ==================================================== */}

        <main className="pb-40">

          <div
            className="
              mx-auto
              w-full
              max-w-[920px]
              px-5
              py-8
              sm:px-7
              lg:px-8
            "
          >

            <div className="space-y-6">

              {/* =================================================
                  PROJECT NAME
              ================================================== */}

              <section
                className="
                  rounded-[22px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                "
              >

                <label
                  className="
                    mb-4
                    block
                    text-[16px]
                    font-bold
                    text-gray-900
                  "
                >
                  Project Name *
                </label>

                <div className="relative">

                  <FileText
                    size={21}
                    strokeWidth={2}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="
                      w-full
                      rounded-[15px]
                      border
                      border-gray-200
                      bg-white
                      py-4
                      pl-14
                      pr-5
                      text-[16px]
                      font-medium
                      text-gray-800
                      outline-none
                      transition
                      focus:border-violet-400
                      focus:ring-2
                      focus:ring-violet-100
                    "
                  />

                </div>

              </section>

              {/* =================================================
                  PROJECT DESCRIPTION
              ================================================== */}

              <section
                className="
                  rounded-[22px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                "
              >

                <label
                  className="
                    mb-4
                    block
                    text-[16px]
                    font-bold
                    text-gray-900
                  "
                >
                  Project Description *
                </label>

                <textarea
                  rows={6}
                  value={projectDescription}
                  onChange={(e) =>
                    setProjectDescription(e.target.value)
                  }
                  className="
                    w-full
                    resize-none
                    rounded-[15px]
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-4
                    text-[16px]
                    font-medium
                    leading-[1.7]
                    text-gray-800
                    outline-none
                    transition
                    focus:border-violet-400
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />

              </section>

              {/* =================================================
                  PROJECT REQUIREMENTS
              ================================================== */}

              <section
                className="
                  rounded-[22px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                "
              >

                <div className="mb-5 flex items-center justify-between">

                  <label
                    className="
                      text-[16px]
                      font-bold
                      text-gray-900
                    "
                  >
                    Project Requirements
                  </label>

                  <button
                    type="button"
                    onClick={handleAddRequirement}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-violet-50
                      px-4
                      py-2
                      text-[13px]
                      font-bold
                      text-violet-600
                      transition
                      hover:bg-violet-100
                    "
                  >
                    <Plus
                      size={16}
                      strokeWidth={2.2}
                    />
                    Add
                  </button>

                </div>

                <div className="space-y-3.5">

                  {requirements.map((requirement, index) => (
                    <div
                      key={`${requirement}-${index}`}
                      className="flex items-center gap-4"
                    >

                      <input
                        type="text"
                        value={requirement}
                        onChange={(e) =>
                          handleRequirementChange(
                            index,
                            e.target.value
                          )
                        }
                        className="
                          min-w-0
                          flex-1
                          rounded-[14px]
                          border
                          border-gray-200
                          bg-white
                          px-4
                          py-3.5
                          text-[15px]
                          font-medium
                          text-gray-800
                          outline-none
                          transition
                          focus:border-violet-400
                          focus:ring-2
                          focus:ring-violet-100
                        "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveRequirement(index)
                        }
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-red-500
                          transition
                          hover:bg-red-50
                          hover:text-red-600
                        "
                      >
                        <X
                          size={20}
                          strokeWidth={2.2}
                        />
                      </button>

                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  BUDGET + DEADLINE
              ================================================== */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Budget */}

                <section
                  className="
                    rounded-[22px]
                    border
                    border-gray-200
                    bg-white
                    p-7
                    shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                  "
                >

                  <label
                    className="
                      mb-4
                      block
                      text-[16px]
                      font-bold
                      text-gray-900
                    "
                  >
                    Budget ($) *
                  </label>

                  <div className="relative">

                    <DollarSign
                      size={21}
                      strokeWidth={2}
                      className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      type="number"
                      value={budget}
                      onChange={(e) =>
                        setBudget(e.target.value)
                      }
                      className="
                        w-full
                        rounded-[15px]
                        border
                        border-gray-200
                        bg-white
                        py-4
                        pl-12
                        pr-5
                        text-[16px]
                        font-medium
                        text-gray-800
                        outline-none
                        transition
                        focus:border-violet-400
                        focus:ring-2
                        focus:ring-violet-100
                      "
                    />

                  </div>

                </section>

                {/* Deadline */}

                <section
                  className="
                    rounded-[22px]
                    border
                    border-gray-200
                    bg-white
                    p-7
                    shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                  "
                >

                  <label
                    className="
                      mb-4
                      block
                      text-[16px]
                      font-bold
                      text-gray-900
                    "
                  >
                    Deadline *
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={21}
                      strokeWidth={2}
                      className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) =>
                        setDeadline(e.target.value)
                      }
                      className="
                        w-full
                        rounded-[15px]
                        border
                        border-gray-200
                        bg-white
                        py-4
                        pl-12
                        pr-5
                        text-[16px]
                        font-medium
                        text-gray-800
                        outline-none
                        transition
                        focus:border-violet-400
                        focus:ring-2
                        focus:ring-violet-100
                      "
                    />

                  </div>

                </section>

              </div>

              {/* =================================================
                  ASSIGNED FREELANCER
              ================================================== */}

              <section
                className="
                  rounded-[22px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                "
              >

                <label
                  className="
                    mb-4
                    block
                    text-[16px]
                    font-bold
                    text-gray-900
                  "
                >
                  Assigned Freelancer
                </label>

                <div className="relative">

                  <User
                    size={21}
                    strokeWidth={2}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    value={assignedFreelancer}
                    onChange={(e) =>
                      setAssignedFreelancer(e.target.value)
                    }
                    className="
                      w-full
                      rounded-[15px]
                      border
                      border-gray-200
                      bg-white
                      py-4
                      pl-12
                      pr-5
                      text-[16px]
                      font-medium
                      text-gray-800
                      outline-none
                      transition
                      focus:border-violet-400
                      focus:ring-2
                      focus:ring-violet-100
                    "
                  />

                </div>

              </section>

              {/* =================================================
                  PROJECT STATUS
              ================================================== */}

              <section
                className="
                  rounded-[22px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                "
              >

                <label
                  className="
                    mb-4
                    block
                    text-[16px]
                    font-bold
                    text-gray-900
                  "
                >
                  Project Status
                </label>

                <select
                  value={projectStatus}
                  onChange={(e) =>
                    setProjectStatus(e.target.value)
                  }
                  className="
                    w-full
                    rounded-[15px]
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-4
                    text-[16px]
                    font-medium
                    text-gray-800
                    outline-none
                    transition
                    focus:border-violet-400
                    focus:ring-2
                    focus:ring-violet-100
                  "
                >
                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                  <option value="On Hold">
                    On Hold
                  </option>

                </select>

              </section>

              {/* =================================================
                  INFO CARD
              ================================================== */}

              <section
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  bg-[#eee9f8]
                  px-6
                  py-5
                "
              >

                <Info
                  size={21}
                  strokeWidth={2}
                  className="
                    mt-0.5
                    shrink-0
                    text-violet-600
                  "
                />

                <div>

                  <p
                    className="
                      text-[15px]
                      font-bold
                      text-violet-700
                    "
                  >
                    Edit Project
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[13px]
                      font-medium
                      leading-[1.7]
                      text-violet-600
                    "
                  >
                    Changes will be saved immediately. Team members
                    will be notified of major updates.
                  </p>

                </div>

              </section>

            </div>

          </div>

        </main>

      </div>

      {/* =====================================================
          FIXED BOTTOM ACTION BAR
      ====================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          border-t
          border-gray-200
          bg-white
          px-5
          py-5
          shadow-[0_-6px_20px_rgba(15,23,42,0.09)]
          lg:left-[272px]
          xl:left-[272px]
        "
      >

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[760px]
            grid-cols-1
            gap-4
            sm:grid-cols-2
          "
        >

          {/* Cancel */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              rounded-[15px]
              bg-[#f2effb]
              px-7
              py-4
              text-[15px]
              font-bold
              text-gray-500
              transition-all
              duration-200
              hover:bg-[#e9e3f8]
              hover:text-gray-700
            "
          >
            Cancel
          </button>

          {/* Save */}

          <button
            type="button"
            onClick={handleSave}
            className="
              rounded-[15px]
              bg-violet-600
              px-7
              py-4
              text-[15px]
              font-bold
              text-white
              shadow-[0_7px_18px_rgba(124,58,237,0.25)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-violet-700
              hover:shadow-[0_9px_20px_rgba(124,58,237,0.3)]
            "
          >
            Save Changes
          </button>

        </div>

      </div>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
      ====================================================== */}

      <BottomMenu05 />

    </div>
  );
};

export default ProjectEdit;