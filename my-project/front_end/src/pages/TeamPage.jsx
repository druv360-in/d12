import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import DashboardHeader15 from "../components/DashboardHeader15";
import FiftyFourComponent from "../components/54component";
import FiftyTwoComponent from "../components/52component";
import FreelancerSwitch03 from "../components/FreelancerSwitch03";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

export default function TeamPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMessage = (member) => {
    navigate("/chatnotfound", {
      state: {
        member,
      },
    });
  };

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
          <div className="mx-auto w-full max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
            <div className="mb-5">
              <FreelancerSwitch03 />
            </div>

            <DashboardHeader15 />

            <div className="mt-5 space-y-4">
              <FiftyTwoComponent
                onAddMember={() => navigate("/add-team-member")}
                onMessage={handleMessage}
              />

              <FiftyFourComponent />

              <div className="h-10" />
            </div>
          </div>
        </main>
      </div>

      <BottomMenu05 />
    </div>
  );
}
