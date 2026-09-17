import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import BottomMenu05 from "../components/BottomMenu05";
import DashboardHeader15 from "../components/DashboardHeader15";
import FiftyFourComponent from "../components/54component";
import FiftyTwoComponent from "../components/52component";
import FreelancerSwitch03 from "../components/FreelancerSwitch03";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

export default function TeamPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // =====================================================
  // SUCCESS MESSAGE
  // =====================================================

  const [showSuccessMessage, setShowSuccessMessage] =
    useState(false);

  const [hiredFreelancer, setHiredFreelancer] =
    useState(null);

  // =====================================================
  // GET HIRED FREELANCER
  // =====================================================

  useEffect(() => {
    const freelancer =
      location.state?.hiredFreelancer;

    if (freelancer) {
      setHiredFreelancer(freelancer);
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // =====================================================
  // MESSAGE
  // =====================================================

  const handleMessage = (member) => {
    navigate("/chatnotfound", {
      state: {
        member,
      },
    });
  };

  // =====================================================
  // ADD TEAM MEMBER
  // =====================================================

  const handleAddMember = () => {
    navigate("/add-team-member");
  };

  // =====================================================
  // OPEN PROFILE
  // =====================================================

  const handleProfile = (member) => {
    const freelancerData = {
      id: member.id,

      name: member.name,

      field: member.role,

      university: member.university,

      avatar: member.avatar,

      image: member.avatar,

      rating:
        member.name === "Emma Thompson"
          ? 4.9
          : member.name === "Marcus Johnson"
          ? 4.8
          : 5.0,

      projects:
        member.name === "Emma Thompson"
          ? 89
          : member.name === "Marcus Johnson"
          ? 76
          : 112,

      reviews:
        member.name === "Emma Thompson"
          ? 127
          : member.name === "Marcus Johnson"
          ? 98
          : 145,

      rate:
        member.name === "Emma Thompson"
          ? 35
          : member.name === "Marcus Johnson"
          ? 40
          : 45,

      about:
        member.name === "Emma Thompson"
          ? "Full-stack developer passionate about creating beautiful and functional web applications. 3 years of experience in modern web technologies."
          : member.name === "Marcus Johnson"
          ? "Creative designer specializing in brand identity and digital design. Love bringing ideas to life through visual storytelling."
          : "Award-winning developer passionate about creating modern and engaging digital experiences.",

      skills:
        member.name === "Emma Thompson"
          ? [
              "React",
              "Node.js",
              "Python",
              "UI/UX",
            ]
          : member.name === "Marcus Johnson"
          ? [
              "Figma",
              "Adobe Creative Suite",
              "Branding",
              "UI Design",
            ]
          : [
              "React",
              "JavaScript",
              "TypeScript",
              "Frontend",
            ],
    };

    navigate(`/profile/${member.id}`, {
      state: {
        freelancer: freelancerData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

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
          lg:pl-[360px]
          xl:pl-[400px]
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
            onMenuClick={() =>
              setIsSidebarOpen(true)
            }
          />
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main
          className="
            min-h-screen
            bg-gray-50
            pb-24
            lg:pb-0
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-screen-2xl
              px-4
              py-4
              sm:px-6
              lg:px-8
              lg:py-6
            "
          >

            {/* =================================================
                SWITCH TO FREELANCER
            ================================================= */}

            <div className="mb-5">
              <FreelancerSwitch03 />
            </div>

            {/* =================================================
                DASHBOARD HEADER
            ================================================= */}

            <DashboardHeader15 />

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {showSuccessMessage &&
              hiredFreelancer && (
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-green-200
                    bg-green-50
                    px-5
                    py-5
                    text-green-700
                    shadow-[0_8px_20px_rgba(0,0,0,0.06)]
                  "
                >
                  <CheckCircle2
                    size={25}
                    className="
                      shrink-0
                      text-green-600
                    "
                  />

                  <p
                    className="
                      text-base
                      font-semibold
                    "
                  >
                    Successfully hired{" "}
                    {hiredFreelancer.name}!
                  </p>
                </div>
              )}

            {/* =================================================
                TEAM
            ================================================= */}

            <div className="mt-5 space-y-4">

              <FiftyTwoComponent
                onAddMember={handleAddMember}
                onMessage={handleMessage}
                onProfile={handleProfile}
              />

              <FiftyFourComponent />

              <div className="h-10" />

            </div>

          </div>
        </main>
      </div>

      {/* =====================================================
          MOBILE BOTTOM MENU
      ===================================================== */}

      <BottomMenu05 />

    </div>
  );
}