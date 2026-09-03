import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import BottomMenu05 from "../components/BottomMenu05";
import Header01 from "../components/Header01";
import Profile22 from "../components/profile22";
import SidebarMenu24 from "../components/SidebarMenu24";
import Stat24 from "../components/stat24";
import Stat25 from "../components/stat25";
import Stat26 from "../components/stat26";

function ProfilePage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUpgrade = () => {
    console.log("Upgrade clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Sidebar */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:pl-[360px] xl:pl-[400px]">

        {/* Mobile Header */}
        <div className="sticky top-0 z-50 lg:hidden">
          <Header01 onMenuClick={() => setIsSidebarOpen(true)} />
        </div>

        <main className="mx-auto w-full max-w-screen-xl space-y-4 px-4 py-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gray-100
              transition
              hover:bg-gray-200
            "
          >
            <ArrowLeft
              size={20}
              className="text-gray-700"
            />
          </button>

          {/* Profile */}
          <Profile22 />

          {/* Stats */}
          <Stat24 />
          <Stat25 onUpgrade={handleUpgrade} />
          <Stat26 />

        </main>

      </div>

      {/* Bottom Navigation */}
      <BottomMenu05 />

    </div>
  );
}

export default ProfilePage;