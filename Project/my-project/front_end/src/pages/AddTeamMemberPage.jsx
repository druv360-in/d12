import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import FiftyFiveComponent from "../components/55component";
import FiftySixComponent from "../components/56component";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

export default function AddTeamMemberPage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">


      {/* SIDEBAR */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />



      {/* MAIN CONTENT AREA */}
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




        {/* DESKTOP CONTENT */}
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
              max-w-screen-xl

              px-4
              py-4

              sm:px-6
              lg:px-8
            "
          >


            {/* DESKTOP STICKY PAGE HEADER */}
            <div
              className="
                hidden
                lg:block

                sticky
                top-0
                z-40

                bg-gray-100
                pt-4
                pb-3
              "
            >

              <FiftyFiveComponent
                onBack={() => navigate(-1)}
              />

            </div>




            {/* MOBILE/TABLET PAGE HEADER */}
            <div
              className="
                lg:hidden
              "
            >

              <FiftyFiveComponent
                onBack={() => navigate(-1)}
              />

            </div>




            {/* PAGE BODY */}
            <div
              className="
                mt-4
              "
            >

              <FiftySixComponent />

            </div>


          </div>

        </main>


      </div>




      {/* MOBILE + TABLET BOTTOM MENU */}
      <div className="lg:hidden">
        <BottomMenu05 />
      </div>


    </div>
  );
}