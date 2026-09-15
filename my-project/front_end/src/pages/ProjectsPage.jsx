import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import DashboardHeader15 from "../components/DashboardHeader15";
import FreelancerSwitch03 from "../components/FreelancerSwitch03";
import Header01 from "../components/Header01";
import SeventySevenComponent from "../components/77component";
import SeventyEightComponent from "../components/78component";
import SidebarMenu24 from "../components/SidebarMenu24";

export default function ProjectsPage() {
  const navigate = useNavigate();
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

        <main className="pb-24 lg:pb-0 bg-gray-50">
          <div className="mx-auto w-full max-w-screen-2xl space-y-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
            <FreelancerSwitch03 />
            <DashboardHeader15 />

            <SeventySevenComponent
              onCreate={() => navigate("/project-setup-page")}
              stats={{
                total: 3,
                active: 1,
                done: 1,
              }}
            />

            <SeventyEightComponent />
            <div className="h-10" />
          </div>
        </main>
      </div>

      <BottomMenu05 />
    </div>
  );
}
