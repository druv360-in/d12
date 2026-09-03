import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import CreateNewProjectPageHeader67b from "../components/CreateNewProjectPageHeader67b";
import CreateProjectForm68b from "../components/CreateProjectForm68b";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";


export default function CreateNewProjectPage() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  return (

    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >



      {/* Laptop Sidebar */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />




      <div
        className="
          lg:pl-[360px]
          xl:pl-[400px]
        "
      >




        {/* Mobile + Tablet Header */}

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






        <main
          className="
            pb-24
            lg:pb-0
          "
        >


          <div
            className="
              mx-auto
              w-full
              max-w-screen-2xl

              px-4
              sm:px-6
              lg:px-10

              py-4
            "
          >





            {/* Laptop Sticky Page Header */}

            <div
              className="
                lg:sticky
                lg:top-0
                lg:z-40
              "
            >

              <CreateNewProjectPageHeader67b />

            </div>






            {/* Form */}

            <CreateProjectForm68b />




          </div>


        </main>



      </div>





      {/* Mobile Bottom Navigation */}

      <BottomMenu05 />



    </div>

  );
}