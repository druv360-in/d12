// TemplateDetailsPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

import Temp28 from "../components/28temp";
import TempDescription29 from "../components/tempdescription29";
import Template30 from "../components/template30";
import Template31 from "../components/template31";
import Tempreview32 from "../components/tempreview32";
import Template34 from "../components/Template34";

import SidebarMenu24 from "../components/SidebarMenu24";
import Header01 from "../components/Header01";

export default function TemplateDetailsPage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#f8f9fc]">

      {/* =====================================================
          DESKTOP SIDEBAR
      ====================================================== */}

      <aside
        className="
          fixed
          left-0
          top-0
          z-[60]
          hidden
          h-screen
          w-[272px]
          lg:block
        "
      >
        <SidebarMenu24
          isOpen={true}
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>


      {/* =====================================================
          MOBILE + TABLET HEADER
      ====================================================== */}

      <div className="sticky top-0 z-[70] lg:hidden">
        <Header01
          onMenuClick={() => setIsSidebarOpen(true)}
        />
      </div>


      {/* =====================================================
          MOBILE + TABLET SIDEBAR
      ====================================================== */}

      <div className="lg:hidden">
        <SidebarMenu24
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>


      {/* =====================================================
          DESKTOP CONTENT AREA
      ====================================================== */}

      <div
        className="
          hidden
          min-h-screen
          bg-[#f8f9fc]
          lg:ml-[328px]
          lg:block
        "
      >

        <header
          className="
            sticky
            top-4
            z-40
            mx-4
            flex
            h-[110px]
            items-center
            justify-between
            rounded-[20px]
            border
            border-gray-200
            bg-white
            px-6
            shadow-[0_4px_16px_rgba(15,23,42,0.06)]
            xl:mx-5
            xl:px-7
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gray-50
                text-gray-600
                transition-all
                duration-200
                hover:bg-violet-50
                hover:text-violet-700
              "
            >
              <ArrowLeft size={22} />
            </button>

            <h1
              className="
                text-[25px]
                font-bold
                leading-tight
                text-gray-900
                xl:text-[27px]
              "
            >
              Template Details
            </h1>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex items-center gap-3">

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


            {/* Cart */}

            <button
              type="button"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-violet-50
                text-violet-700
                transition-all
                duration-200
                hover:bg-violet-100
              "
            >
              <ShoppingCart size={20} />
            </button>

          </div>

        </header>


        {/* ===================================================
            MAIN 70 / 30 CONTENT

            Header is above this grid.
        ==================================================== */}

        <div
          className="
            grid
            min-w-0
            grid-cols-[minmax(0,7fr)_minmax(0,3fr)]
            items-start
            gap-5
            px-4
            pb-10
            pt-5
            xl:gap-6
            xl:px-5
          "
        >

          {/* =================================================
              LEFT SIDE — 70%
          ================================================== */}

          <div
            className="
              min-w-0
              space-y-4
            "
          >

            <Temp28 />

            <TempDescription29 />

            <Template30 />

            <Template31 />

            <Tempreview32 />

            <div className="h-5" />

          </div>


          {/* =================================================
              RIGHT SIDE — 30%
          ================================================== */}

          <div className="min-w-0">

            <Template34 />

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE + TABLET CONTENT
      ====================================================== */}

      <div
        className="
          flex
          min-h-screen
          flex-col
          bg-[#f8f9fc]
          lg:hidden
        "
      >

        <main
          className="
            flex-1
            overflow-y-auto
            pb-24
          "
        >

          <div
            className="
              w-full
              space-y-4
              px-3
              py-3
              sm:px-5
              sm:py-4
            "
          >

            <Temp28 />

            <TempDescription29 />

            <Template30 />

            <Template31 />

            <Tempreview32 />

            <Template34 />

            <div className="h-5" />

          </div>

        </main>

      </div>

    </div>
  );
}