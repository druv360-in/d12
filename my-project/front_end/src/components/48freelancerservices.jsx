import React, { useState } from "react";
import {
  BriefcaseBusiness,
  Star,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// ======================================================
// FREELANCER SERVICES
// ======================================================

const FREELANCER_SERVICES = {
  1: {
    // EMMA
    hourlyRate: 35,

    services: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        title: "Modern Website Development",
        description:
          "I will create a fully responsive, modern website using React and Tailwind CSS. Includes 5 pages, mobile optimization, and clean code.",
        rating: 4.9,
        price: 299,
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        title: "Custom Web Application",
        description:
          "Build a custom web application with database integration, user authentication, and admin dashboard.",
        rating: 4.9,
        price: 599,
      },
    ],
  },

  // ====================================================
  // MARCUS
  // ====================================================

  2: {
    hourlyRate: 40,

    services: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        title: "Professional Logo Design",
        description:
          "Complete brand identity package including logo design, color palette, and brand guidelines. 3 initial concepts with unlimited revisions.",
        rating: 4.8,
        price: 149,
      },

      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
        title: "UI/UX Design for Mobile App",
        description:
          "Complete mobile app design with wireframes, high-fidelity mockups, and interactive prototype. User-centered design approach.",
        rating: 4.8,
        price: 399,
      },
    ],
  },

  // ====================================================
  // SOPHIA
  // ====================================================

  3: {
    hourlyRate: 45,

    services: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
        title: "Social Media Video Editing",
        description:
          "Professional video editing for Instagram, TikTok, or YouTube. Includes color grading, transitions, text animations, and royalty-free music.",
        rating: 5.0,
        price: 99,
      },
    ],
  },
};

// ======================================================
// DEFAULT DATA
// ======================================================

const DEFAULT_DATA = {
  hourlyRate: 35,

  services: [],
};

// ======================================================
// COMPONENT
// ======================================================

export default function FreelancerServices48({
  freelancerId,
  hourlyRate,
  services,
  onHire,
}) {
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  // ====================================================
  // GET PROFILE-SPECIFIC DATA
  // ====================================================

  const profileData =
    FREELANCER_SERVICES[freelancerId] || DEFAULT_DATA;

  const finalHourlyRate =
    hourlyRate ?? profileData.hourlyRate;

  const finalServices =
    services ?? profileData.services;

  // ====================================================
  // SERVICE CLICK
  // ====================================================

  const handleServiceClick = (service) => {
    navigate("/service-details", {
      state: {
        service,
        freelancerId,
      },
    });
  };

  return (
    <>
      {/* =====================================================
          SERVICES
      ===================================================== */}

      <div className="mt-8 w-full bg-white pb-8">

        {/* =====================================================
            HOURLY RATE CARD
        ===================================================== */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1600px]
            items-center
            justify-between
            rounded-3xl
            bg-gradient-to-r
            from-violet-50
            to-purple-50
            px-5
            py-5

            shadow-[0_12px_25px_rgba(0,0,0,0.14)]

            transition-all
            duration-300
            ease-out

            sm:px-6
            lg:px-7

            hover:-translate-y-2
            hover:scale-[1.01]
            hover:shadow-[0_25px_50px_rgba(0,0,0,0.24)]
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-white
                shadow-[0_6px_14px_rgba(0,0,0,0.10)]
              "
            >
              <BriefcaseBusiness
                size={30}
                strokeWidth={2}
                className="text-purple-700"
              />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Hourly Rate
              </p>

              <p
                className="
                  mt-0.5
                  text-2xl
                  font-bold
                  text-gray-900
                "
              >
                ${finalHourlyRate}/hr
              </p>
            </div>

          </div>

          {/* HIRE */}

          <button
            type="button"
            onClick={onHire}
            className="
              rounded-2xl
              bg-white
              px-7
              py-4
              text-base
              font-semibold
              text-purple-700
              shadow-[0_6px_14px_rgba(0,0,0,0.10)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-purple-50
              hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)]

              active:scale-[0.98]
            "
          >
            Hire Me
          </button>

        </div>

        {/* =====================================================
            SERVICES HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-8
            flex
            w-full
            max-w-[1600px]
            items-center
            justify-between
            px-1
          "
        >
          <h3
            className="
              text-xl
              font-medium
              text-gray-900
            "
          >
            Services ({finalServices.length})
          </h3>

          {finalServices.length > 0 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="
                cursor-pointer
                text-lg
                font-semibold
                text-purple-700

                transition-all
                duration-300

                hover:-translate-y-1
                hover:text-purple-900
                hover:shadow-[0_6px_14px_rgba(109,40,217,0.12)]
              "
            >
              View All
            </button>
          )}
        </div>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div
          className="
            mt-5
            flex
            w-full
            flex-col
            gap-5
          "
        >
          {finalServices.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="
                mx-auto
                flex
                w-full
                max-w-[1600px]
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-gray-200/70
                bg-[#F1F3F5]

                shadow-[0_12px_25px_rgba(0,0,0,0.18)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-2
                hover:scale-[1.01]
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.30)]
              "
            >
              {/* IMAGE */}

              <img
                src={service.image}
                alt={service.title}
                className="
                  h-[140px]
                  w-[140px]
                  shrink-0
                  object-cover

                  transition-transform
                  duration-500

                  hover:scale-105

                  sm:h-[145px]
                  sm:w-[145px]
                "
              />

              {/* CONTENT */}

              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4
                  sm:px-6
                "
              >
                <div className="min-w-0">

                  {/* TITLE */}

                  <h4
                    className="
                      text-lg
                      font-semibold
                      leading-6
                      text-gray-900
                    "
                  >
                    {service.title}
                  </h4>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-1.5
                      line-clamp-2
                      text-sm
                      leading-5
                      text-gray-500
                    "
                  >
                    {service.description}
                  </p>

                  {/* RATING */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    <Star
                      size={18}
                      fill="#d4af37"
                      color="#d4af37"
                      strokeWidth={0}
                    />

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-gray-800
                      "
                    >
                      {service.rating}
                    </span>
                  </div>

                </div>

                {/* PRICE */}

                <div className="shrink-0 self-end">
                  <span
                    className="
                      text-xl
                      font-bold
                      text-purple-700
                    "
                  >
                    ${service.price}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          VIEW ALL POPUP
      ===================================================== */}

      {showAll && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-gray-900/40
            px-4
            backdrop-blur-md
          "
          onClick={() => setShowAll(false)}
        >
          {/* MODAL */}

          <div
            className="
              w-full
              max-w-[780px]
              max-h-[85vh]
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-gray-200
                px-7
                py-5
              "
            >
              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                All Services ({finalServices.length})
              </h2>

              <button
                type="button"
                onClick={() => setShowAll(false)}
                aria-label="Close services"
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-50
                  text-gray-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-purple-100
                  hover:text-purple-700
                  hover:shadow-[0_8px_18px_rgba(0,0,0,0.14)]
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* POPUP SERVICES */}

            <div
              className="
                max-h-[calc(85vh-80px)]
                space-y-4
                overflow-y-auto
                px-7
                py-7
              "
            >
              {finalServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setShowAll(false);
                    handleServiceClick(service);
                  }}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200/70
                    bg-[#F1F3F5]

                    shadow-[0_10px_20px_rgba(0,0,0,0.14)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:scale-[1.01]
                    hover:shadow-[0_18px_35px_rgba(0,0,0,0.22)]
                  "
                >
                  {/* IMAGE */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-[150px]
                      w-[130px]
                      shrink-0
                      object-cover
                    "
                  />

                  {/* CONTENT */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      items-center
                      justify-between
                      gap-5
                      px-6
                      py-4
                    "
                  >
                    <div className="min-w-0">

                      <h3
                        className="
                          text-lg
                          font-semibold
                          text-gray-900
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          line-clamp-2
                          text-sm
                          leading-5
                          text-gray-500
                        "
                      >
                        {service.description}
                      </p>

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <Star
                          size={18}
                          fill="#d4af37"
                          color="#d4af37"
                          strokeWidth={0}
                        />

                        <span
                          className="
                            text-sm
                            font-semibold
                            text-gray-800
                          "
                        >
                          {service.rating}
                        </span>
                      </div>

                    </div>

                    <span
                      className="
                        shrink-0
                        self-end
                        text-xl
                        font-bold
                        text-purple-700
                      "
                    >
                      ${service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}