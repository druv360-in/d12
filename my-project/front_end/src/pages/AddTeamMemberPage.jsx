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
    <div className="min-h-screen w-full bg-white">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN AREA
          ===================================================== */}

      <div
        className="
          min-h-screen
          bg-white
          lg:ml-[320px]
        "
      >

        {/* ===================================================
            MOBILE / TABLET HEADER
            =================================================== */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>


        {/* ===================================================
            MAIN CONTENT
            =================================================== */}

        <main className="w-full bg-white pb-24 lg:pb-0">

          {/* =================================================
              DESKTOP HEADER
              ================================================= */}

          <div className="hidden lg:block">

            <FiftyFiveComponent
              onBack={() => navigate(-1)}
            />

          </div>


          {/* =================================================
              MOBILE / TABLET HEADER
              ================================================= */}

          <div className="lg:hidden">

            <FiftyFiveComponent
              onBack={() => navigate(-1)}
            />

          </div>


          {/* =================================================
              PAGE CONTENT
              ================================================= */}

          <div
            className="
              mx-auto
              w-full
              px-4
              py-5
              sm:px-6
              lg:px-8
              xl:px-10
            "
          >

            <FiftySixComponent />

          </div>

        </main>

      </div>


      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
          ===================================================== */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>

    </div>
  );
}