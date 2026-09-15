import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import BrowseServices12 from "../components/12BrowseServices";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";
import BrowseRightPanel from "../components/14BrowseRightPanel";

function BrowseServicesPage() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          LEFT SIDEBAR
      ===================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() =>
          setIsSidebarOpen(false)
        }
      />


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div className="lg:ml-[400px]">

        {/* =================================================
            MOBILE HEADER
        ================================================= */}

        <div
          className="
            sticky
            top-0
            z-50
            lg:hidden
          "
        >

          <Header01
            onMenuClick={() =>
              setIsSidebarOpen(true)
            }
          />

        </div>


        {/* =================================================
            MAIN + RIGHT PANEL
        ================================================= */}

        <div
          className="
            flex
            items-start
            w-full
          "
        >

          {/* =============================================
              MAIN BROWSE SERVICES
          ============================================= */}

          <main
            className="
              flex-1
              min-w-0
              pb-24
              lg:pb-0
            "
          >

            <BrowseServices12 />

          </main>


          {/* =============================================
              RIGHT PANEL
              
              IMPORTANT:
              NOT fixed
              NOT sticky
              NOT h-screen
          ============================================= */}

          <div
            className="
              hidden
              xl:block
              w-[400px]
              shrink-0
            "
          >

            <BrowseRightPanel />

          </div>

        </div>

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

export default BrowseServicesPage;