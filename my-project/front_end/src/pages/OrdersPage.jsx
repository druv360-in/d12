import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import DashboardHeader15 from "../components/DashboardHeader15";
import EightyTwoComponent from "../components/82component";
import FreelancerSwitch03 from "../components/FreelancerSwitch03";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

function OrdersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleView = (id) => {
    alert("View Order Details : " + id);
  };

  const handleContact = (id) => {
    alert("Contact Freelancer : " + id);
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

        <main className="pb-24 lg:pb-0 bg-white">
          <div className="mx-auto w-full max-w-screen-2xl space-y-5 px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
            <FreelancerSwitch03 />
            <DashboardHeader15 />

            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">
              Orders
            </h1>

            <EightyTwoComponent
              onView={handleView}
              onContact={handleContact}
            />

            <div className="h-10" />
          </div>
        </main>
      </div>

      <BottomMenu05 />
    </div>
  );
}

export default OrdersPage;
