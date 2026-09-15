import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";
import BottomMenu05 from "../components/BottomMenu05";

import Component48 from "../components/48component";
import PortfolioList45 from "../components/45component";
import FreelancerServices48 from "../components/48freelancerservices";
import Component46 from "../components/46component";

import TopFreelancer48 from "../components/48TopFreelancer";

export default function ProfileDetailPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const freelancer = state?.freelancer;

  /* =====================================================
     NO PROFILE DATA
  ===================================================== */

  if (!freelancer) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">

          <h2 className="text-xl font-bold text-gray-900">
            No Profile Found
          </h2>

          <button
            onClick={() => navigate("/browse-services")}
            className="
              mt-4
              rounded-xl
              bg-purple-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-purple-700
            "
          >
            Back to Browse Services
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />


      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div
        className="
          w-full
          lg:ml-[313px]
          lg:w-[calc(100%-313px)]
        "
      >

        {/* =================================================
            MOBILE / TABLET HEADER
        ================================================= */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>


        {/* =================================================
            LAPTOP HEADER
        ================================================= */}

        <div
          className="
            sticky
            top-0
            z-40
            hidden
            h-[72px]
            items-center
            border-b
            border-gray-200
            bg-white
            px-3
            lg:flex
          "
        >

          {/* BACK BUTTON */}

         <div className="w-full">
  <div className="mx-auto flex w-full max-w-[1600px] items-center px-1">

    <button
      onClick={() => navigate(-1)}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-purple-50
        text-gray-700
        transition
        hover:bg-purple-100
      "
    >
      <ArrowLeft size={19} />
    </button>

  </div>
</div>

          {/* PAGE TITLE */}

          <h1
            className="
              absolute
              left-1/2
              -translate-x-1/2
              text-3xl
              font-bold
              text-gray-900
            "
          >
            Profile
          </h1>

        </div>


        {/* =================================================
            MAIN SCROLL CONTENT
        ================================================= */}

        <main
          className="
            min-h-[calc(100vh-72px)]
            w-full
            overflow-y-auto
            bg-gray-50
            px-0
            py-4
            pb-24
            lg:pb-28
          "
        >

          <div className="w-full">

            {/* =================================================
                PROFILE
            ================================================= */}

            <Component48
              name={freelancer.name}
              field={freelancer.field}
              university={freelancer.university}
              image={freelancer.image || freelancer.avatar}
              rating={freelancer.rating}
              projects={freelancer.projects}
              reviews={freelancer.reviews}
              about={freelancer.about}
              skills={freelancer.skills}
            />


            {/* =================================================
                PORTFOLIO
            ================================================= */}

            <PortfolioList45 />


            {/* =================================================
                FREELANCER SERVICES
            ================================================= */}

            <div className="mt-2">
              <FreelancerServices48
                onHire={() => {
                  console.log("Hire Me clicked");
                }}
                onViewAll={() => {
                  console.log("View All clicked");
                }}
              />
            </div>


            {/* =================================================
                REVIEWS
            ================================================= */}

            <Component46
              total={freelancer.reviews}
              reviews={freelancer.reviewsData || []}
            />

          </div>

        </main>

      </div>


      {/* =====================================================
          LAPTOP MESSAGE + HIRE NOW
      ===================================================== */}

      <div className="hidden lg:block">

        <TopFreelancer48
          onMessage={() => {
            console.log("Message clicked");
          }}
          onHire={() => {
            console.log("Hire Now clicked");
          }}
        />

      </div>


      {/* =====================================================
          MOBILE / TABLET BOTTOM NAVIGATION
      ===================================================== */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>

    </div>
  );
}