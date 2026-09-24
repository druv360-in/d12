import { useState } from "react";

import CreateProjectHeader67a from "../components/CreateProjectHeader67a";
import CreateProjectForm68a from "../components/CreateProjectForm68a";

import ProjectInsights69 from "../components/ProjectInsights69";
import VisibilitySettings72 from "../components/VisibilitySettings72";
import AISuggestions70 from "../components/AISuggestions70";

import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";
import BottomMenu05 from "../components/BottomMenu05";

function ProjectSetupPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideCardClass = `
    rounded-[28px]
    overflow-hidden
    transition-all
    duration-300
    ease-out
    hover:-translate-y-1
    hover:shadow-[0_16px_35px_rgba(109,40,217,0.12)]
  `;

  return (
    <div className="min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-[341px] xl:pl-[341px]">

        {/* MOBILE HEADER */}
        <div
          className="
            sticky
            top-0
            z-50
            lg:hidden
          "
        >
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* DESKTOP HEADER */}
        <div
          className="
            sticky
            top-0
            z-40
            hidden
            bg-white
            transition-all
            duration-300
            ease-out
            hover:drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]
            lg:block
          "
        >
          <CreateProjectHeader67a />
        </div>

        <main className="pb-24 lg:pb-0">

          <div
            className="
              mx-auto
              max-w-screen-2xl
              px-4
              py-6
              sm:px-6
              lg:px-10
            "
          >

            <div
              className="
                grid
                grid-cols-1
                items-start
                gap-8
                lg:grid-cols-3
              "
            >

              {/* =================================================
                  MAIN FORM
              ================================================== */}

              <div className="lg:col-span-2">
                <CreateProjectForm68a />
              </div>


              {/* =================================================
                  RIGHT SIDE CARDS
              ================================================== */}

              <div className="flex flex-col gap-6">

                {/* PROJECT INSIGHTS */}
                <div className={sideCardClass}>
                  <div className="hidden lg:block sticky top-24">
                    <ProjectInsights69 />
                  </div>

                  <div className="lg:hidden">
                    <ProjectInsights69 />
                  </div>
                </div>


                {/* VISIBILITY SETTINGS */}
                <div className={sideCardClass}>
                  <VisibilitySettings72 />
                </div>


                {/* AI SUGGESTIONS */}
                <div className={sideCardClass}>
                  <AISuggestions70 />
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

      {/* MOBILE BOTTOM MENU */}
      <BottomMenu05 />

    </div>
  );
}

export default ProjectSetupPage;