import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Check,
  DollarSign,
  FileText,
  ListChecks,
  Plus,
  X,
} from "lucide-react";

function CreateNewProjectPage() {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const [skills, setSkills] = useState([
    "React",
    "Node.js",
  ]);

  // =====================================================
  // SUCCESS POPUP STATE
  // =====================================================

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // =====================================================
  // ADD SKILL
  // =====================================================

  const handleAddSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (!skills.includes(skill)) {
      setSkills((prev) => [...prev, skill]);
    }

    setSkillInput("");
  };

  // =====================================================
  // REMOVE SKILL
  // =====================================================

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((prev) =>
      prev.filter((skill) => skill !== skillToRemove)
    );
  };

  // =====================================================
  // CREATE PROJECT
  // =====================================================

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const projectData = {
      projectName,
      description,
      requirements,
      budget,
      deadline,
      skills,
    };

    console.log("Project Created:", projectData);

    // Show professional success popup
    setShowSuccessPopup(true);
  };

  // =====================================================
  // CLOSE SUCCESS POPUP
  // =====================================================

  const handleSuccessDone = () => {
    setShowSuccessPopup(false);

    // Return to previous page
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* =====================================================
          STICKY HEADER
      ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          w-[calc(100%+76px)]
          -mr-[76px]
          bg-white
          border-b
          border-gray-200
          px-4
          sm:px-6
          lg:px-8
          py-6
          shadow-sm
          transition-shadow
          duration-200
          hover:shadow-md
        "
      >
        <div className="flex items-center gap-4">

          {/* Back Button */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-transparent
              text-gray-700
              transition-all
              duration-200
              hover:bg-gray-100
              hover:text-gray-900
              active:scale-95
            "
          >
            <ArrowLeft size={24} />
          </button>

          {/* Header Text */}

          <div className="flex-1">

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                leading-tight
                text-gray-900
              "
            >
              Create New Project
            </h1>

            <p
              className="
                mt-1
                text-sm
                sm:text-base
                text-gray-500
              "
            >
              Fill in the details to start your project
            </p>

          </div>

        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="px-4 sm:px-6 lg:px-8">

        <form
          onSubmit={handleSubmit}
          className="
            mx-auto
            w-full
            max-w-5xl
            space-y-7
            py-7
            pb-36
          "
        >

          {/* =================================================
              PROJECT NAME
          ================================================== */}

          <section
            className="
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-6
              sm:p-7
              shadow-sm
              transition-all
              duration-200
              hover:bg-white
              hover:shadow-md
            "
          >
            <div className="mb-5 flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-100
                  text-gray-600
                "
              >
                <FileText size={21} />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Project Name
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Give your project a clear and meaningful name.
                </p>
              </div>

            </div>

            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter your project name"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                text-base
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-purple-600
                focus:ring-4
                focus:ring-purple-100
              "
            />
          </section>

          {/* =================================================
              PROJECT DESCRIPTION
          ================================================== */}

          <section
            className="
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-6
              sm:p-7
              shadow-sm
              transition-all
              duration-200
              hover:bg-white
              hover:shadow-md
            "
          >
            <div className="mb-5 flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-100
                  text-gray-600
                "
              >
                <FileText size={21} />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Project Description
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Explain what you want to build and what the project is about.
                </p>
              </div>

            </div>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={7}
              placeholder="Describe your project in detail..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-4
                text-base
                leading-relaxed
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-purple-600
                focus:ring-4
                focus:ring-purple-100
              "
            />
          </section>

          {/* =================================================
              PROJECT REQUIREMENTS
          ================================================== */}

          <section
            className="
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-6
              sm:p-7
              shadow-sm
              transition-all
              duration-200
              hover:bg-white
              hover:shadow-md
            "
          >
            <div className="mb-5 flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-100
                  text-gray-600
                "
              >
                <ListChecks size={21} />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Project Requirements
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Mention the important features, deliverables and expectations.
                </p>
              </div>

            </div>

            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              rows={7}
              placeholder="List the requirements for your project..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-4
                text-base
                leading-relaxed
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-purple-600
                focus:ring-4
                focus:ring-purple-100
              "
            />
          </section>

          {/* =================================================
              BUDGET + DEADLINE
          ================================================== */}

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

            {/* Budget */}

            <section
              className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                sm:p-7
                shadow-sm
                transition-all
                duration-200
                hover:bg-white
                hover:shadow-md
              "
            >
              <div className="mb-5 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gray-100
                    text-gray-600
                  "
                >
                  <DollarSign size={21} />
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Budget
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Set your project budget.
                  </p>
                </div>

              </div>

              <div className="relative">

                <span
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-base
                    font-semibold
                    text-gray-500
                  "
                >
                  ₹
                </span>

                <input
                  type="number"
                  min="0"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter budget"
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    pl-9
                    pr-4
                    text-base
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-purple-600
                    focus:ring-4
                    focus:ring-purple-100
                  "
                />

              </div>
            </section>

            {/* Deadline */}

            <section
              className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                sm:p-7
                shadow-sm
                transition-all
                duration-200
                hover:bg-white
                hover:shadow-md
              "
            >
              <div className="mb-5 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gray-100
                    text-gray-600
                  "
                >
                  <Calendar size={21} />
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Deadline
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Choose your expected completion date.
                  </p>
                </div>

              </div>

              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="
                  h-14
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  text-base
                  text-gray-900
                  outline-none
                  transition
                  focus:border-purple-600
                  focus:ring-4
                  focus:ring-purple-100
                "
              />
            </section>

          </div>

          {/* =================================================
              SKILLS REQUIRED
          ================================================== */}

          <section
            className="
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-6
              sm:p-7
              shadow-sm
              transition-all
              duration-200
              hover:bg-white
              hover:shadow-md
            "
          >
            <div className="mb-5">

              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Skills Required
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Add the skills you expect the freelancer to have.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
                placeholder="e.g. React, UI/UX, Node.js"
                className="
                  h-14
                  flex-1
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  text-base
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-purple-600
                  focus:ring-4
                  focus:ring-purple-100
                "
              />

              <button
                type="button"
                onClick={handleAddSkill}
                className="
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-purple-600
                  px-7
                  font-semibold
                  text-white
                  transition
                  hover:bg-purple-700
                "
              >
                <Plus size={20} />
                Add Skill
              </button>

            </div>

            {skills.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">

                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-purple-100
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-purple-700
                    "
                  >
                    <span>{skill}</span>

                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        text-purple-600
                        transition
                        hover:bg-purple-200
                      "
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

              </div>
            )}

          </section>

        </form>
      </main>

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
          px-4
          py-5
          shadow-[0_-6px_25px_rgba(0,0,0,0.10)]
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            items-center
            justify-center
            gap-5
          "
        >

          {/* Cancel */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              min-w-[226px]
              rounded-2xl
              border
              border-gray-300
              bg-white
              px-10
              py-4
              text-base
              font-semibold
              text-gray-700
              shadow-sm
              transition-all
              duration-200
              hover:bg-gray-100
              hover:border-gray-400
              hover:shadow-md
              active:scale-[0.98]
            "
          >
            Cancel
          </button>

          {/* Create Project */}

          <button
            type="button"
            onClick={handleSubmit}
            className="
              min-w-[266px]
              rounded-2xl
              bg-purple-600
              px-10
              py-4
              text-base
              font-semibold
              text-white
              shadow-lg
              shadow-purple-200
              transition-all
              duration-200
              hover:bg-purple-700
              hover:shadow-xl
              active:scale-[0.98]
            "
          >
            Create Project
          </button>

        </div>
      </div>

      {/* =====================================================
          PROJECT CREATED SUCCESS POPUP
      ====================================================== */}

      {showSuccessPopup && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-gray-900/50
            px-4
            backdrop-blur-[3px]
          "
        >
          <div
            className="
              w-full
              max-w-[430px]
              rounded-3xl
              bg-white
              p-7
              sm:p-8
              text-center
              shadow-2xl
              animate-[fadeIn_0.2s_ease-out]
            "
          >

            {/* Success Icon */}

            <div className="flex justify-center">

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-100
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-500
                    shadow-lg
                    shadow-emerald-200
                  "
                >
                  <Check
                    size={30}
                    strokeWidth={3}
                    className="text-white"
                  />
                </div>
              </div>

            </div>

            {/* Title */}

            <h2
              className="
                mt-6
                text-2xl
                font-bold
                text-gray-900
              "
            >
              Project Created!
            </h2>

            {/* Message */}

            <p
              className="
                mx-auto
                mt-3
                max-w-[340px]
                text-sm
                leading-relaxed
                text-gray-500
              "
            >
              Your project has been successfully created.
              Freelancers can now view your project and send
              their proposals.
            </p>

            {/* Project Name */}

            {projectName.trim() && (
              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  py-3
                "
              >
                <p className="text-xs font-medium text-gray-400">
                  PROJECT
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-gray-800">
                  {projectName}
                </p>
              </div>
            )}

            {/* Done Button */}

            <button
              type="button"
              onClick={handleSuccessDone}
              className="
                mt-6
                w-full
                rounded-2xl
                bg-purple-600
                px-6
                py-3.5
                text-base
                font-semibold
                text-white
                shadow-lg
                shadow-purple-200
                transition-all
                duration-200
                hover:bg-purple-700
                hover:shadow-xl
                active:scale-[0.98]
              "
            >
              Done
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default CreateNewProjectPage;