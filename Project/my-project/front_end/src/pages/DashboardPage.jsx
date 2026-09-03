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
    <div className="min-h-screen bg-gray-100">
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-[360px] xl:pl-[400px]">
        <div className="sticky top-0 z-50 lg:hidden">
          <Header01 onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        <main className="pb-24 lg:pb-0 bg-[#F8F8F8]">
          <div className="mx-auto w-full max-w-screen-2xl px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
            <div className="mb-5">
              <FreelancerSwitch03 />
            </div>

            <DashboardHeader15 />

            <div className="mt-5 space-y-5">
              <DashboardStats16 />
              <WhySkillBuster17 />
              <FeaturedFreelancers18 />
              <QuickActions20 />
              <div className="h-10" />
            </div>
          </div>
        </main>
      </div>

      <BottomMenu05 />
    </div>
  );
}
