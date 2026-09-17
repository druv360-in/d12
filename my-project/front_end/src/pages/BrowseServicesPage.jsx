import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import BrowseServices12 from "../components/12BrowseServices";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";
import BrowseRightPanel from "../components/14BrowseRightPanel";

function BrowseServicesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          LEFT SIDEBAR
      ===================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <div
        className="
          lg:ml-[320px]
          min-h-screen
          bg-white
        "
      >

        {/* =================================================
            MOBILE HEADER
        ================================================= */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>


        {/* =================================================
            DESKTOP CONTENT
        ================================================= */}

        <div
          className="
            flex
            items-start
            w-full
            bg-white
          "
        >

          {/* =============================================
              MAIN BROWSE SERVICES
          ============================================= */}

          <main
            className="
              flex-1
              min-w-0
              bg-white
              pb-24
              lg:pb-0
            "
          >
            <BrowseServices12 />
          </main>


          {/* =============================================
              RIGHT PANEL
          ============================================= */}

          <aside
            className="
              hidden
              xl:block
              w-[400px]
              shrink-0
              bg-white
            "
          >
            <BrowseRightPanel />
          </aside>

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