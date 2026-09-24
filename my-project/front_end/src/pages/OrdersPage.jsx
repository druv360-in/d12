import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import DashboardHeader15 from "../components/DashboardHeader15";
import EightyTwoComponent from "../components/82component";
import FreelancerSwitch03 from "../components/FreelancerSwitch03";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

function OrdersPage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // =====================================================
  // VIEW ORDER DETAILS
  // =====================================================

  const handleView = (id) => {
    if (id === 1 || id === "1") {
      navigate("/order1");
    } else if (id === 2 || id === "2") {
      navigate("/order2");
    }
  };

  // =====================================================
  // CONTACT FREELANCER
  // =====================================================

  const handleContact = (id) => {
    if (id === 1 || id === "1") {
      navigate("/emmachat");
    } else if (id === 2 || id === "2") {
      navigate("/marcuschat");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="lg:pl-[341px] xl:pl-[341px]">

        {/* ===================================================
            MOBILE HEADER
        ==================================================== */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* ===================================================
            PAGE
        ==================================================== */}

        <main className="bg-white pb-24 lg:pb-0">

          <div
            className="
              mx-auto
              w-full
              max-w-screen-2xl
              space-y-5
              px-4
              py-5
              sm:px-6
              lg:px-8
              lg:py-6
            "
          >

            {/* =================================================
                FREELANCER SWITCH
            ================================================== */}

            <FreelancerSwitch03 />

            {/* =================================================
                DASHBOARD HEADER / TABS
            ================================================== */}

            <DashboardHeader15 />

            {/* =================================================
                PAGE TITLE
            ================================================== */}

            <h1
              className="
                text-2xl
                font-bold
                text-slate-900
                lg:text-3xl
              "
            >
              Orders
            </h1>

            {/* =================================================
                ORDERS
            ================================================== */}

            <EightyTwoComponent
              onView={handleView}
              onContact={handleContact}
            />

            {/* =================================================
                BOTTOM SPACING
            ================================================== */}

            <div className="h-10" />

          </div>
        </main>
      </div>

      {/* =====================================================
          MOBILE BOTTOM MENU
      ====================================================== */}

      <BottomMenu05 />

    </div>
  );
}

export default OrdersPage;