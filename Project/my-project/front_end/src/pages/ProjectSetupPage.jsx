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


  return (

    <div className="min-h-screen bg-gray-100">


      {/* LAPTOP SIDEBAR */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />



      {/* MAIN AREA */}

      <div
        className="
          lg:pl-[360px]
          xl:pl-[400px]
        "
      >



        {/* MOBILE + TABLET HEADER */}

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





        {/* DESKTOP PROJECT HEADER */}

        <div
          className="
            sticky
            top-0
            z-40
            hidden
            lg:block
            bg-white
          "
        >

          <CreateProjectHeader67a />

        </div>





        {/* CONTENT */}

        <main
          className="
            pb-24
            lg:pb-0
          "
        >

          <div
            className="
              mx-auto
              max-w-screen-2xl
              px-4
              sm:px-6
              lg:px-10
              py-6
            "
          >


            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-8
                items-start
              "
            >



              {/* LEFT FORM */}

              <div
                className="
                  lg:col-span-2
                "
              >

                <CreateProjectForm68a />

              </div>





              {/* RIGHT COLUMN */}

              <div
                className="
                  flex
                  flex-col
                  gap-6
                "
              >



                {/* LAPTOP STICKY */}

                <div
                  className="
                    hidden
                    lg:block
                    sticky
                    top-24
                  "
                >

                  <ProjectInsights69 />

                </div>





                {/* MOBILE + TABLET */}

                <div
                  className="
                    lg:hidden
                  "
                >

                  <ProjectInsights69 />

                </div>




                <VisibilitySettings72 />

                <AISuggestions70 />


              </div>


            </div>


          </div>


        </main>


      </div>





      {/* MOBILE + TABLET BOTTOM MENU */}

      <BottomMenu05 />


    </div>

  );

}


export default ProjectSetupPage;