import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import DashboardHeader15 from "../components/DashboardHeader15";
import DashboardStats16 from "../components/DashboardStats16";
import FeaturedFreelancers18 from "../components/FeaturedFreelancers18";
import FreelancerSwitch03 from "../components/FreelancerSwitch03";
import Header01 from "../components/Header01";
import QuickActions20 from "../components/QuickActions20";
import SidebarMenu24 from "../components/SidebarMenu24";
import WhySkillBuster17 from "../components/WhySkillBuster17";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc]">

      {/* ================= FIXED SIDEBAR ================= */}

      <div
        className="
          fixed
          left-0
          top-0
          w-[280px]
          h-screen
          z-50
          hidden
          lg:block
        "
      >
        <SidebarMenu24
          isOpen={true}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>


      {/* ================= MOBILE HEADER ================= */}

      <div className="sticky top-0 z-50 lg:hidden">
        <Header01
          onMenuClick={() => setIsSidebarOpen(true)}
        />
      </div>


      {/* ================= MOBILE SIDEBAR ================= */}

      <div className="lg:hidden">
        <SidebarMenu24
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>


      {/* ================= MAIN CONTENT ================= */}

      <main
        className="
          lg:ml-[340px]
          min-h-screen
          w-auto
          bg-[#f8f9fc]
          pb-24
          lg:pb-0
        "
      >

        {/* ================= FREELANCER SWITCH ================= */}

        <div className="mx-8 mt-8">
          <FreelancerSwitch03 />
        </div>


        {/* ================= CLIENT DASHBOARD ================= */}

        <div className="mx-8 mt-6">
          <DashboardHeader15 />
        </div>


        {/* ================= DASHBOARD CONTENT ================= */}

        <div className="mt-5 space-y-5 px-9">

          <DashboardStats16 />

          <WhySkillBuster17 />

          <FeaturedFreelancers18 />

          <QuickActions20 />

          <div className="h-10" />

        </div>

      </main>


      {/* ================= BOTTOM MENU ================= */}

      <BottomMenu05 />

    </div>
  );
}