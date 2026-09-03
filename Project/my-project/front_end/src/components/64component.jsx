import React from "react";
import { CheckCircle } from "lucide-react";

import SixtyFiveComponent from "./65component.jsx";

const SixtyFourComponent = () => {
  /* =========================================================
     COMPLETED WORK DATA
  ========================================================= */

  const completedWork = [
    {
      id: 1,

      title: "Homepage Design Mockup",

      fileType: "image",

      name: "Marcus Johnson",

      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",

      timeAgo: "2 hours ago",

      verified: true,
    },

    {
      id: 2,

      title: "Database Schema Documentation",

      fileType: "document",

      name: "Emma Thompson",

      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",

      timeAgo: "1 day ago",

      verified: true,
    },

    {
      id: 3,

      title: "Product Demo Video Draft",

      fileType: "video",

      name: "Sophia Chen",

      avatar:
        "https://i.pravatar.cc/200?img=47",

      timeAgo: "3 days ago",

      verified: false,
    },
  ];

  /* =========================================================
     VIEW FILE
  ========================================================= */

  const handleViewFile = (id) => {
    console.log("View file:", id);
  };

  /* =========================================================
     VERIFY WORK
  ========================================================= */

  const handleVerify = (id) => {
    console.log("Verify work:", id);
  };

  return (
    <div
      className="
        w-full
        bg-white
        rounded-3xl
        p-5
        sm:p-6
        lg:p-7
        shadow-sm
        border
        border-gray-100
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-3
          mb-5
        "
      >

        <CheckCircle
          className="
            w-6
            h-6
            text-emerald-600
            shrink-0
          "
          strokeWidth={2}
        />

        <h2
          className="
            text-xl
            sm:text-2xl
            lg:text-2xl
            font-bold
            text-gray-900
          "
        >
          Completed Work
        </h2>

      </div>


      {/* =====================================================
          COMPLETED WORK LIST
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {completedWork.map((work) => (
          <SixtyFiveComponent
            key={work.id}
            work={work}
            onViewFile={handleViewFile}
            onVerify={handleVerify}
          />
        ))}

      </div>

    </div>
  );
};

export default SixtyFourComponent;