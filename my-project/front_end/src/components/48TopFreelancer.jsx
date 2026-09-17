import React, { useState } from "react";
import {
  MessageCircle,
  UserPlus,
  X,
  Award,
  DollarSign,
  CircleCheck,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopFreelancer48({ freelancer }) {
  const navigate = useNavigate();

  const [showHireModal, setShowHireModal] = useState(false);
  const [hiringType, setHiringType] = useState("hourly");

  // =====================================================
  // MESSAGE
  // ALWAYS OPENS CHAT ID 1 - TECH STARTUP CO.
  // =====================================================

  const handleMessage = () => {
    navigate("/chat/1", {
      state: {
        id: 1,
        name: "Tech Startup Co.",
        message: "Thanks! Looking forward to the final design.",
        time: "10:30 AM",
        unread: 2,
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
    });
  };

  // =====================================================
  // OPEN HIRE MODAL
  // =====================================================

  const handleHire = () => {
    setShowHireModal(true);
  };

  // =====================================================
  // CANCEL
  // =====================================================

  const handleCancel = () => {
    setShowHireModal(false);
  };

  // =====================================================
  // CONFIRM & HIRE
  // =====================================================

  const handleConfirmHire = () => {
    setShowHireModal(false);

    navigate("/team", {
      state: {
        hiredFreelancer: freelancer,
        hiringType: hiringType,
      },
    });
  };

  // =====================================================
  // SAFETY
  // =====================================================

  if (!freelancer) {
    return null;
  }

  return (
    <>
      {/* =====================================================
          FIXED BOTTOM BAR
      ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          border-t
          border-gray-200
          bg-white/95
          px-4
          py-6
          shadow-[0_-8px_25px_rgba(0,0,0,0.10)]
          backdrop-blur-md
          lg:left-[320px]
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1400px]
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >
          {/* =================================================
              MESSAGE
          ================================================= */}

          <button
            type="button"
            onClick={handleMessage}
            className="
              flex
              h-16
              w-[280px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              text-base
              font-semibold
              text-purple-700
              shadow-[0_6px_15px_rgba(0,0,0,0.10)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-purple-50
              hover:shadow-[0_12px_25px_rgba(0,0,0,0.16)]
              active:scale-[0.98]
            "
          >
            <MessageCircle size={22} strokeWidth={2} />
            <span>Message</span>
          </button>

          {/* =================================================
              HIRE NOW
          ================================================= */}

          <button
            type="button"
            onClick={handleHire}
            className="
              flex
              h-16
              w-[280px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-purple-600
              px-5
              text-base
              font-semibold
              text-white
              shadow-[0_8px_20px_rgba(124,58,237,0.28)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:from-violet-700
              hover:to-purple-700
              hover:shadow-[0_15px_30px_rgba(124,58,237,0.38)]
              active:scale-[0.98]
            "
          >
            <UserPlus size={22} strokeWidth={2} />
            <span>Hire Now</span>
          </button>
        </div>
      </div>

      {/* =====================================================
          HIRE MODAL
      ===================================================== */}

      {showHireModal && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-gray-900/40
            px-4
            backdrop-blur-md
          "
          onClick={handleCancel}
        >
          {/* =================================================
              MODAL
          ================================================= */}

          <div
            className="
              relative
              flex
              max-h-[92vh]
              w-full
              max-w-[600px]
              flex-col
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_30px_80px_rgba(0,0,0,0.28)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-gray-200
                bg-white
                px-6
                py-5
              "
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Hire Freelancer
              </h2>

              <button
                type="button"
                onClick={handleCancel}
                aria-label="Close"
                className="
                  flex
                  h-11
                  w-11
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F1F3F5]
                  text-gray-500
                  shadow-[0_6px_14px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:bg-purple-50
                  hover:text-purple-600
                  hover:shadow-[0_10px_20px_rgba(0,0,0,0.16)]
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div
              className="
                overflow-y-auto
                px-6
                py-6
                sm:px-7
              "
            >
              {/* =================================================
                  SELECTED FREELANCER
              ================================================= */}

              <div
                className="
                  rounded-3xl
                  border
                  border-purple-100
                  bg-gradient-to-br
                  from-purple-50
                  to-violet-50
                  p-5
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                "
              >
                {/* PROFILE */}

                <div className="flex items-center gap-4">
                  <img
                    src={freelancer.image || freelancer.avatar}
                    alt={freelancer.name}
                    className="
                      h-20
                      w-20
                      shrink-0
                      rounded-2xl
                      border-2
                      border-white
                      object-cover
                      shadow-[0_6px_14px_rgba(0,0,0,0.15)]
                    "
                  />

                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-gray-900">
                      {freelancer.name}
                    </h3>

                    <div
                      className="
                        mt-1
                        flex
                        items-center
                        gap-1.5
                      "
                    >
                      <span className="text-lg">⭐</span>

                      <span className="font-semibold text-gray-800">
                        {freelancer.rating}
                      </span>

                      <span className="text-sm text-gray-400">
                        ({freelancer.reviews || 0} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    STATS
                ================================================= */}

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-3
                    gap-3
                  "
                >
                  {/* COMPLETED */}

                  <div
                    className="
                      rounded-2xl
                      bg-white
                      p-4
                      text-center
                      shadow-[0_6px_14px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_10px_20px_rgba(0,0,0,0.13)]
                    "
                  >
                    <CircleCheck
                      size={25}
                      className="mx-auto text-violet-600"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                      Completed
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {freelancer.projects || 0}
                    </p>
                  </div>

                  {/* SUCCESS RATE */}

                  <div
                    className="
                      rounded-2xl
                      bg-white
                      p-4
                      text-center
                      shadow-[0_6px_14px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_10px_20px_rgba(0,0,0,0.13)]
                    "
                  >
                    <Award
                      size={25}
                      className="mx-auto text-yellow-500"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                      Success Rate
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      98%
                    </p>
                  </div>

                  {/* HOURLY RATE */}

                  <div
                    className="
                      rounded-2xl
                      bg-white
                      p-4
                      text-center
                      shadow-[0_6px_14px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_10px_20px_rgba(0,0,0,0.13)]
                    "
                  >
                    <DollarSign
                      size={25}
                      className="mx-auto text-green-600"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                      Hourly Rate
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      ${freelancer.rate}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  HIRING TYPE
              ================================================= */}

              <div
                className="
                  mt-6
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                "
              >
                <h3 className="text-xl font-bold text-gray-900">
                  Select Hiring Type
                </h3>

                {/* HOURLY */}

                <button
                  type="button"
                  onClick={() => setHiringType("hourly")}
                  className={`
                    mt-5
                    w-full
                    rounded-2xl
                    border-2
                    p-5
                    text-left
                    transition-all
                    duration-300
                    ${
                      hiringType === "hourly"
                        ? "border-purple-600 bg-purple-50 shadow-[0_8px_20px_rgba(124,58,237,0.12)]"
                        : "border-gray-200 bg-white hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Hourly Contract
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        Pay by the hour as work progresses
                      </p>

                      <p className="mt-3 font-bold text-purple-700">
                        $ &nbsp; {freelancer.rate}/hour
                      </p>
                    </div>

                    <div
                      className={`
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        ${
                          hiringType === "hourly"
                            ? "border-purple-600"
                            : "border-gray-300"
                        }
                      `}
                    >
                      {hiringType === "hourly" && (
                        <div
                          className="
                            h-3
                            w-3
                            rounded-full
                            bg-purple-600
                          "
                        />
                      )}
                    </div>
                  </div>
                </button>

                {/* FIXED PRICE */}

                <button
                  type="button"
                  onClick={() => setHiringType("fixed")}
                  className={`
                    mt-4
                    w-full
                    rounded-2xl
                    border-2
                    p-5
                    text-left
                    transition-all
                    duration-300
                    ${
                      hiringType === "fixed"
                        ? "border-purple-600 bg-purple-50 shadow-[0_8px_20px_rgba(124,58,237,0.12)]"
                        : "border-gray-200 bg-white hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Fixed Price Project
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        Set a budget for the entire project
                      </p>

                      <p className="mt-3 text-sm text-gray-600">
                        Negotiate price based on project scope
                      </p>
                    </div>

                    <div
                      className={`
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        ${
                          hiringType === "fixed"
                            ? "border-purple-600"
                            : "border-gray-300"
                        }
                      `}
                    >
                      {hiringType === "fixed" && (
                        <div
                          className="
                            h-3
                            w-3
                            rounded-full
                            bg-purple-600
                          "
                        />
                      )}
                    </div>
                  </div>
                </button>
              </div>

              {/* =================================================
                  SKILLS
              ================================================= */}

              <div
                className="
                  mt-6
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                "
              >
                <h3 className="text-base font-bold text-gray-900">
                  Skills & Expertise
                </h3>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {(freelancer.skills || []).map((skill, index) => (
                    <span
                      key={index}
                      className="
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        text-gray-600
                        shadow-[0_3px_8px_rgba(0,0,0,0.06)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-purple-200
                        hover:bg-purple-50
                        hover:text-purple-700
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  SECURE PAYMENT
              ================================================= */}

              <div
                className="
                  mt-6
                  flex
                  gap-3
                  rounded-3xl
                  bg-purple-50
                  p-5
                "
              >
                <AlertCircle
                  size={24}
                  className="shrink-0 text-purple-700"
                />

                <div>
                  <h3 className="font-semibold text-purple-800">
                    Secure Payment
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-purple-700">
                    Payments are protected by SkillBuster's escrow
                    system. Funds are released only when you approve
                    the work.
                  </p>
                </div>
              </div>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                {/* CANCEL */}

                <button
                  type="button"
                  onClick={handleCancel}
                  className="
                    h-16
                    rounded-2xl
                    bg-purple-50
                    px-5
                    text-base
                    font-semibold
                    text-gray-600
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-purple-100
                    hover:shadow-[0_10px_20px_rgba(0,0,0,0.10)]
                    active:scale-[0.98]
                  "
                >
                  Cancel
                </button>

                {/* CONFIRM */}

                <button
                  type="button"
                  onClick={handleConfirmHire}
                  className="
                    flex
                    h-16
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-purple-600
                    px-5
                    text-base
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(124,58,237,0.28)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_30px_rgba(124,58,237,0.38)]
                    active:scale-[0.98]
                  "
                >
                  <UserPlus size={21} />
                  Confirm & Hire
                </button>
              </div>

              {/* TERMS */}

              <p
                className="
                  mt-6
                  pb-2
                  text-center
                  text-xs
                  text-gray-400
                "
              >
                By hiring, you agree to SkillBuster's{" "}
                <span className="font-semibold text-purple-700">
                  Terms of Service
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}