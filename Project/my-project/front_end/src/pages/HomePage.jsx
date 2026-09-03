import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import ClientBanner03 from "../components/ClientBanner03";
import Header01 from "../components/Header01";
import HeroBanner02 from "../components/HeroBanner02";
import PopularCategories07 from "../components/PopularCategories07";
import PostProjectCard04 from "../components/PostProjectCard04";
import FeaturedServices09 from "../components/FeaturedServices09";
import SidebarMenu24 from "../components/SidebarMenu24";
import TopFreelancers11 from "../components/TopFreelancers11";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-[360px] xl:pl-[400px]">
        <div className="sticky top-0 z-50 lg:hidden">
          <Header01 onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        <main className="w-full pb-24 lg:pb-0">
          <div className="mx-auto w-full max-w-[1500px] space-y-8 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
            <HeroBanner02 />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ClientBanner03 />
              <PostProjectCard04 />
            </div>

            <PopularCategories07 />
            <FeaturedServices09 />
            <TopFreelancers11 />
          </div>
        </main>
      </div>

      <BottomMenu05 />
    </div>
  );
}

export default HomePage;
