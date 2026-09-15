import React, { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SidebarMenu24 from "../components/Sidebarmenu24";
import Component42SD from "../components/42componentSD";
import Component43 from "../components/43component";
import PortfolioList45 from "../components/45component";
import Component46 from "../components/46component";

function ServiceDetailsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // =====================================================
  // BACK BUTTON
  // =====================================================
  const handleBack = () => {
    navigate(-1);
  };

  // =====================================================
  // ORDER NOW
  // =====================================================
  const handleOrderNow = () => {
    navigate("/ordernow-sd");
  };

  // =====================================================
  // CHAT
  // =====================================================
  const handleChat = () => {
    navigate("/chat/tech-startup-co");
  };

  return (
    <div
      className="
        h-screen
        overflow-hidden
        bg-[#f7f7f9]
      "
    >
      {/* =====================================================
          SIDEBAR
          ===================================================== */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MOBILE TOP BAR
          ===================================================== */}
      <div
        className="
          lg:hidden
          fixed
          top-0
          left-0
          right-0
          z-50
          h-16
          bg-white
          border-b
          border-gray-100
          flex
          items-center
          justify-between
          px-4
        "
      >
        <button
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
          className="
            w-10
            h-10
            rounded-full
            bg-[#f3f1ff]
            flex
            items-center
            justify-center
            text-gray-700
          "
        >
          <Menu size={21} />
        </button>

        <div className="text-lg font-bold text-gray-900">
          SkillBuster
        </div>

        <div className="w-10 h-10" />
      </div>

      {/* =====================================================
          MAIN AREA
          ===================================================== */}
      <div
        className="
          h-full
          lg:ml-[172px]
          flex
          flex-col
          min-h-0
        "
      >
        {/* ===================================================
            SERVICE DETAILS HEADER
            =================================================== */}
        <div className="pt-16 lg:pt-0 shrink-0">
          <Component42SD
            title="Service Details"
            onBack={handleBack}
          />
        </div>

        {/* ===================================================
            SCROLLABLE CONTENT
            =================================================== */}
        <main
          className="
            flex-1
            min-h-0
            w-full
            overflow-y-auto
            overflow-x-hidden
            pb-[140px]
          "
        >
          <div
            className="
              w-full
              max-w-[1350px]
              ml-auto
              mr-0
              px-4
              sm:px-6
              lg:px-6
              xl:px-8
              py-5
              lg:py-6
            "
          >
            {/* =================================================
                SERVICE DETAILS
                ================================================= */}
            <Component43 />

            {/* =================================================
                PORTFOLIO
                ================================================= */}
            <PortfolioList45 />

            {/* =================================================
                REVIEWS
                ================================================= */}
            <Component46
              total={127}
              reviews={[
                {
                  id: 1,
                  name: "John Doe",
                  rating: 5,
                  comment: "Excellent work!",
                },
                {
                  id: 2,
                  name: "Sarah Smith",
                  rating: 4.8,
                  comment: "Great quality work.",
                },
                {
                  id: 3,
                  name: "Mike Chen",
                  rating: 4,
                  comment:
                    "Good work overall. Minor revisions needed but delivered quality results.",
                },
              ]}
            />

            {/* Extra bottom space */}
            <div className="h-20" />
          </div>
        </main>
      </div>

      {/* =====================================================
          MOBILE SIDEBAR OVERLAY
          ===================================================== */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="
            lg:hidden
            fixed
            inset-0
            z-40
            bg-black/30
          "
        />
      )}

      {/* =====================================================
          FIXED BOTTOM ORDER BAR
          ===================================================== */}
      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          lg:left-[172px]
          z-50
          h-[100px]
          bg-white
          border-t
          border-gray-200
          shadow-[0_-4px_18px_rgba(0,0,0,0.06)]
        "
      >
        <div
          className="
            h-full
            max-w-[1350px]
            ml-auto
            mr-0
            px-4
            sm:px-6
            lg:px-6
            xl:px-8
            flex
            items-center
            justify-center
            gap-4
          "
        >
          {/* =================================================
              CHAT BUTTON
              ================================================= */}
          <button
            type="button"
            onClick={handleChat}
            aria-label="Chat with Tech Startup Co."
            className="
              w-[62px]
              h-[62px]
              rounded-[18px]
              bg-[#f3f1ff]
              flex
              items-center
              justify-center
              text-gray-500
              hover:bg-[#ebe8ff]
              hover:text-purple-600
              transition-all
              duration-200
              flex-shrink-0
              cursor-pointer
            "
          >
            <MessageCircle
              size={28}
              strokeWidth={1.8}
            />
          </button>

          {/* =================================================
              ORDER NOW BUTTON
              ================================================= */}
          <button
            type="button"
            onClick={handleOrderNow}
            className="
              h-[62px]
              w-[460px]
              max-w-[calc(100vw-110px)]
              rounded-[18px]
              bg-gradient-to-r
              from-[#6424c8]
              to-[#8238e8]
              text-white
              font-semibold
              text-[17px]
              flex
              items-center
              justify-center
              shadow-[0_7px_18px_rgba(109,40,217,0.30)]
              hover:shadow-[0_9px_22px_rgba(109,40,217,0.38)]
              hover:scale-[1.01]
              active:scale-[0.99]
              transition-all
              duration-200
            "
          >
            Order Now&nbsp; • &nbsp;$299
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;