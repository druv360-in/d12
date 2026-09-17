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

  // =====================================================
  // GET SELECTED FREELANCER
  // =====================================================

  const freelancer = state?.freelancer;

  // =====================================================
  // NO PROFILE DATA
  // =====================================================

  if (!freelancer) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-white
        "
      >
        <div className="text-center">
          <h2
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            No Profile Found
          </h2>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              mt-4
              rounded-xl
              bg-purple-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-purple-700
              hover:shadow-lg
            "
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white">

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
          min-h-screen
          w-full
          bg-white
          lg:ml-[320px]
          lg:w-[calc(100%-320px)]
        "
      >

        {/* =================================================
            MOBILE / TABLET HEADER
        ================================================= */}

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

        {/* =================================================
            DESKTOP HEADER
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
            lg:flex
          "
        >
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[1400px]
              items-center
              px-6
            "
          >

            {/* BACK BUTTON */}

            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-[#F1F3F5]
                text-gray-700
                shadow-[0_8px_18px_rgba(0,0,0,0.14)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:bg-gray-200
                hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]
              "
            >
              <ArrowLeft size={20} />
            </button>

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
            MAIN CONTENT
        ================================================= */}

        <main
          className="
            min-h-[calc(100vh-72px)]
            w-full
            overflow-y-auto
            bg-white
            px-0
            py-6
            pb-32
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
              image={
                freelancer.image ||
                freelancer.avatar
              }
              rating={freelancer.rating}
              projects={freelancer.projects}
              reviews={freelancer.reviews}
              about={freelancer.about}
              skills={freelancer.skills}
            />

            {/* =================================================
                PORTFOLIO
            ================================================= */}

            <PortfolioList45
              freelancerId={freelancer.id}
              freelancer={freelancer}
            />

            {/* =================================================
                SERVICES
            ================================================= */}

            <div className="mt-2">
              <FreelancerServices48
                freelancerId={freelancer.id}
                freelancer={freelancer}
                onHire={() => {
                  console.log(
                    "Hire Me clicked for:",
                    freelancer.name
                  );
                }}
              />
            </div>

            {/* =================================================
                REVIEWS
            ================================================= */}

            <Component46
              total={freelancer.reviews}
              reviews={
                freelancer.reviewsData || []
              }
              freelancer={freelancer}
            />

          </div>
        </main>
      </div>

      {/* =====================================================
          PROFILE-SPECIFIC HIRE BAR
      ===================================================== */}

      <div className="hidden lg:block">
        <TopFreelancer48
          freelancer={freelancer}

          onMessage={() => {
            console.log(
              "Message clicked for:",
              freelancer.name
            );
          }}
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM NAV
      ===================================================== */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>

    </div>
  );
}