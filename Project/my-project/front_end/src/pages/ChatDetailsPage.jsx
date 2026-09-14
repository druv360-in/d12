import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

import FortyEightChatComponent from "../components/48chatcomponent.jsx";
import FortyNineComponent from "../components/49component.jsx";
import FiftyComponent from "../components/50component.jsx";
import FiftyOneComponent from "../components/51component.jsx";

const ChatDetailsPage = () => {
  const [showEscrow, setShowEscrow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // =====================================================
  // CHAT DETAILS
  // =====================================================

  const chat = location.state || {
    name:
      id === "tech-startup-co"
        ? "Tech Startup Co."
        : "Tech Startup Co.",

    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  };

  return (
    <div className="min-h-screen bg-[#f7f5ff]">

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
          w-full
          lg:pl-[400px]
          xl:pl-[400px]
        "
      >

        {/* =====================================================
            MOBILE + TABLET HEADER
            ===================================================== */}

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

        {/* =====================================================
            DESKTOP CHAT HEADER
            ONLY THIS CARD MOVES LEFT
            ===================================================== */}

        <div
          className="
            hidden
            lg:block
            sticky
            top-0
            z-40
            lg:-translate-x-[97px]
            xl:-translate-x-[97px]
          "
        >
          <FortyEightChatComponent
            name={chat.name}
            avatarUrl={chat.avatar}
            onBack={() => navigate("/chat")}
            onSecurePay={() => setShowEscrow(true)}
          />
        </div>

        {/* =====================================================
            MOBILE CHAT HEADER
            ===================================================== */}

        <div className="lg:hidden">
          <FortyEightChatComponent
            name={chat.name}
            avatarUrl={chat.avatar}
            onBack={() => navigate("/chat")}
            onSecurePay={() => setShowEscrow(true)}
          />
        </div>

        {/* =====================================================
            CONTENT
            ===================================================== */}

        <main
          className="
            w-full
            pb-24
            lg:pb-0
          "
        >
          <div
            className="
              w-full
              space-y-5
              px-4
              py-4
              lg:px-4
              lg:py-6
            "
          >

            {/* =================================================
                ESCROW / PAYMENT CARD
                ONLY THIS CARD MOVES LEFT
                ================================================= */}

            <div
              className="
                w-full
                lg:-translate-x-[63px]
                xl:-translate-x-[63px]
              "
            >
              <FortyNineComponent
                onPayClick={() => setShowEscrow(true)}
              />
            </div>

            {/* =================================================
                CHAT MESSAGES + INPUT
                POSITION REMAINS UNCHANGED
                ================================================= */}

            <FiftyComponent
              avatar={chat.avatar}
              paymentCard={
                <FiftyOneComponent
                  show={showEscrow}
                  onClose={() => setShowEscrow(false)}
                />
              }
            />

          </div>
        </main>

      </div>

      {/* =====================================================
          MOBILE + TABLET BOTTOM MENU
          ===================================================== */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>

    </div>
  );
};

export default ChatDetailsPage;