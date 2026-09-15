import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import BottomMenu05 from "../components/BottomMenu05";
import Header01 from "../components/Header01";
import Profile22 from "../components/profile22";
import SidebarMenu24 from "../components/SidebarMenu24";
import Stat24 from "../components/stat24";
import Stat25 from "../components/stat25";
import Stat26 from "../components/stat26";

function ProfilePage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUpgrade = () => {
    console.log("Upgrade clicked");
  };

  return (
    <div className="min-h-screen bg-[#faf7fc]">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          lg:ml-[313px]
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
            LAPTOP TOP BAR
        ================================================= */}

        <div
          className="
            hidden
            lg:flex
            sticky
            top-0
            z-40
            h-[72px]
            items-center
            justify-between
            border-b
            border-gray-200
            bg-white
            px-6
            xl:px-8
          "
        >

          {/* BACK BUTTON */}

          <button
            onClick={() => navigate(-1)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-purple-50
              text-gray-700
              transition
              hover:bg-purple-100
            "
          >
            <ArrowLeft size={19} />
          </button>


          {/* USER PROFILE */}

          <button
            onClick={() => navigate("/profile")}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-4
              py-2
              shadow-sm
              transition
              hover:shadow-md
            "
          >

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Doe"
              className="
                h-10
                w-10
                rounded-full
                object-cover
                border-2
                border-purple-600
              "
            />

            <div className="text-left">

              <p className="text-sm font-bold text-gray-900">
                John Doe
              </p>

              <p className="text-xs text-gray-500">
                View Profile
              </p>

            </div>

          </button>

        </div>


        {/* =================================================
            PAGE BODY
        ================================================= */}

        <main
          className="
            min-h-[calc(100vh-72px)]
            overflow-y-auto
            px-5
            py-6
            sm:px-6
            lg:px-6
            xl:px-8
            pb-24
            lg:pb-10
          "
        >

          {/* NO max-width / NO mx-auto */}

          <div className="w-full">

            {/* =================================================
                PROFILE
            ================================================= */}

            <Profile22 />


            {/* =================================================
                STATISTICS
            ================================================= */}

            <div className="mt-5">

              <Stat24 />

            </div>


            {/* =================================================
                UPGRADE + TRUST
            ================================================= */}

            <div
              className="
                mt-5
                grid
                grid-cols-1
                lg:grid-cols-5
                gap-5
              "
            >

              {/* UPGRADE */}

              <div className="lg:col-span-3">

                <Stat25
                  onUpgrade={handleUpgrade}
                />

              </div>


              {/* TRUST */}

              <div className="lg:col-span-2">

                <Stat26 />

              </div>

            </div>

          </div>

        </main>

      </div>


      {/* =====================================================
          MOBILE BOTTOM NAV
      ===================================================== */}

      <div className="lg:hidden">

        <BottomMenu05 />

      </div>

    </div>
  );
}

export default ProfilePage;