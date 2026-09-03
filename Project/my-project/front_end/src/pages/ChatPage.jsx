import { useState } from "react";

import BottomMenu05 from "../components/BottomMenu05";
import Header01 from "../components/Header01";
import Messages from "../components/Messages";
import SidebarMenu24 from "../components/SidebarMenu24";

export default function ChatPage() {
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

        <main className="pb-24 lg:pb-0">
          <Messages />
        </main>
      </div>

      <BottomMenu05 />
    </div>
  );
}
