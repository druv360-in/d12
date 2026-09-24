import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import SidebarMenu24 from "./SidebarMenu24";
import Header01 from "./Header01";
import BottomMenu05 from "./BottomMenu05";

export default function ServiceNotFound() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white">

      {/* =====================================================
          DESKTOP SIDEBAR
      ====================================================== */}

      <div
        className="
          fixed
          left-0
          top-0
          z-[60]
          hidden
          h-screen
          w-[280px]
          lg:block
        "
      >
        <SidebarMenu24
          isOpen={true}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>


      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <div className="sticky top-0 z-[70] lg:hidden">
        <Header01
          onMenuClick={() => setIsSidebarOpen(true)}
        />
      </div>


      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <div className="lg:hidden">
        <SidebarMenu24
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          min-h-screen
          bg-white
          lg:ml-[280px]
        "
      >

        {/* ===================================================
            TOP PROFILE AREA
        ==================================================== */}

        <div
          className="
            flex
            h-[88px]
            items-center
            justify-end
            border-b
            border-gray-100
            px-5
            sm:px-7
            lg:px-8
          "
        >

          {/* Profile */}

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-gray-200
              bg-white
              px-2
              py-1.5
              shadow-[0_2px_8px_rgba(15,23,42,0.06)]
              transition-all
              duration-200
              hover:border-violet-200
              hover:shadow-md
            "
          >

            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
              alt="John Doe"
              className="
                h-11
                w-11
                rounded-full
                object-cover
              "
            />

            <div className="hidden text-left sm:block">

              <p
                className="
                  text-[14px]
                  font-semibold
                  leading-tight
                  text-gray-800
                "
              >
                John Doe
              </p>

              <p
                className="
                  text-[11px]
                  leading-tight
                  text-gray-500
                "
              >
                View Profile
              </p>

            </div>

            <ChevronRight
              size={17}
              className="text-gray-400"
            />

          </button>

        </div>


        {/* ===================================================
            SERVICE NOT FOUND CONTENT
        ==================================================== */}

        <div
          className="
            flex
            min-h-[calc(100vh-88px)]
            items-center
            justify-center
            px-6
            pb-24
            lg:pb-10
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >

            <h1
              className="
                text-[21px]
                font-bold
                tracking-tight
                text-gray-900
                sm:text-[23px]
              "
            >
              Service not found
            </h1>


            <p
              className="
                mt-3
                text-[15px]
                text-gray-500
                sm:text-[16px]
              "
            >
              Unable to process checkout for this service.
            </p>


            <button
              type="button"
              onClick={() => navigate("/browse-services")}
              className="
                mt-6
                text-[15px]
                font-medium
                text-violet-700
                transition-all
                duration-200
                hover:text-violet-900
                hover:underline
              "
            >
              Browse Services
            </button>

          </div>

        </div>

      </main>


      {/* =====================================================
          MOBILE BOTTOM MENU
      ====================================================== */}

      <BottomMenu05 />

    </div>
  );
}