import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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

  const chat = location.state || {
    name: "Tech Startup Co.",
    avatar: "https://i.pravatar.cc/100?img=12"
  };


  return (

    <div className="min-h-screen bg-[#f7f5ff]">


      {/* SIDEBAR */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />



      {/* MAIN AREA */}
      <div
        className="
          lg:pl-[360px]
          xl:pl-[400px]
        "
      >



        {/* MOBILE + TABLET HEADER01 */}
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




        {/* DESKTOP CHAT HEADER */}
        <div
          className="
            hidden
            lg:block
            sticky
            top-0
            z-40
          "
        >

          <FortyEightChatComponent
            name={chat.name}
            avatarUrl={chat.avatar}
            onBack={() => window.history.back()}
            onSecurePay={() => setShowEscrow(true)}
          />

        </div>




        {/* MOBILE CHAT HEADER */}

        <div
          className="
            lg:hidden
          "
        >

          <FortyEightChatComponent
            name={chat.name}
            avatarUrl={chat.avatar}
            onBack={() => window.history.back()}
            onSecurePay={() => setShowEscrow(true)}
          />

        </div>





        {/* CONTENT */}

        <main
          className="
            pb-24
            lg:pb-0
          "
        >

          <div
            className="
              space-y-5
              px-4
              py-4
              lg:px-8
              lg:py-6
            "
          >

            <FortyNineComponent
              onPayClick={() => setShowEscrow(true)}
            />


            <FiftyComponent
              avatar={chat.avatar}
            />

          </div>

        </main>


      </div>




      {/* MOBILE + TABLET BOTTOM MENU */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>




      {/* ESCROW */}

      <FiftyOneComponent
        show={showEscrow}
        onClose={() => setShowEscrow(false)}
      />


    </div>

  );

};


export default ChatDetailsPage;