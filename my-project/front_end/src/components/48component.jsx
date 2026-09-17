import React from "react";
import { Star, MapPin } from "lucide-react";

export default function ProfileCard48({
  name = "Emma Thompson",
  field = "Computer Science",
  university = "Stanford University",
  image =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80",
  rating = 4.9,
  projects = 89,
  reviews = 127,
  about =
    "Full-stack developer passionate about creating beautiful and functional web applications. 3 years of experience in modern web technologies.",
  skills = ["React", "Node.js", "Python", "UI/UX"],
}) {
  // =====================================================
  // SCROLL TO REVIEWS
  // =====================================================

  const handleReviewsClick = () => {
    const reviewsSection = document.getElementById("reviews-section");

    if (reviewsSection) {
      reviewsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full">
      {/* =====================================================
          PROFILE CARD
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          rounded-3xl
          bg-gradient-to-br
          from-violet-600
          via-purple-600
          to-purple-700
          p-5
          shadow-[0_12px_25px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          ease-out
          sm:p-6
          hover:-translate-y-2
          hover:scale-[1.01]
          hover:shadow-[0_25px_50px_rgba(0,0,0,0.30)]
        "
      >
        {/* =====================================================
            PROFILE TOP
        ===================================================== */}

        <div className="flex items-start gap-4">
          {/* PROFILE IMAGE */}

          <img
            src={image}
            alt={name}
            className="
              h-24
              w-24
              shrink-0
              rounded-2xl
              border-[3px]
              border-white/30
              object-cover
              shadow-[0_8px_18px_rgba(0,0,0,0.20)]
            "
          />

          {/* NAME + DETAILS */}

          <div className="min-w-0 flex-1 pt-1">
            <h2
              className="
                text-xl
                font-bold
                leading-[1.2]
                text-white
              "
            >
              {name}
            </h2>

            <p className="mt-1 text-sm text-white/90">
              {field}
            </p>

            <div
              className="
                mt-1
                flex
                items-center
                gap-1.5
                text-sm
                text-white/90
              "
            >
              <MapPin
                size={15}
                strokeWidth={2.5}
              />

              <span className="truncate">
                {university}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            rounded-2xl
            bg-white/15
            p-4
            backdrop-blur-sm
            shadow-[0_8px_18px_rgba(0,0,0,0.10)]
          "
        >
          {/* =================================================
              RATING
          ================================================= */}

          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-1.5">
              <Star
                size={18}
                fill="#facc15"
                color="#facc15"
                strokeWidth={0}
              />

              <span className="font-bold text-white">
                {rating}
              </span>
            </div>

            <p className="mt-1 text-sm text-white/80">
              Rating
            </p>
          </div>

          {/* DIVIDER */}

          <div className="h-10 w-px bg-white/20" />

          {/* =================================================
              PROJECTS
          ================================================= */}

          <div className="flex-1 text-center">
            <p className="font-bold text-white">
              {projects}
            </p>

            <p className="mt-1 text-sm text-white/80">
              Projects
            </p>
          </div>

          {/* DIVIDER */}

          <div className="h-10 w-px bg-white/20" />

          {/* =================================================
              REVIEWS
          ================================================= */}

          <button
            type="button"
            onClick={handleReviewsClick}
            className="
              flex
              flex-1
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-xl
              py-1
              text-center
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:bg-white/10
              hover:shadow-[0_8px_18px_rgba(0,0,0,0.15)]
              active:scale-95
            "
          >
            <p className="font-bold text-white">
              {reviews}
            </p>

            <p
              className="
                mt-1
                text-sm
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Reviews
            </p>
          </button>
        </div>
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      {about && (
        <div
          className="
            mx-auto
            mt-6
            w-full
            max-w-[1600px]
            px-1
          "
        >
          <h3
            className="
              mb-3
              font-bold
              text-gray-900
            "
          >
            About Me
          </h3>

          <p
            className="
              leading-[1.6]
              text-gray-500
            "
          >
            {about}
          </p>
        </div>
      )}

      {/* =====================================================
          SKILLS
      ===================================================== */}

      {skills && skills.length > 0 && (
        <div
          className="
            mx-auto
            mt-6
            w-full
            max-w-[1600px]
            px-1
            pb-6
          "
        >
          <h3
            className="
              mb-3
              font-bold
              text-gray-900
            "
          >
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="
                  rounded-full
                  bg-purple-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-purple-700
                  shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-purple-200
                  hover:shadow-[0_8px_16px_rgba(0,0,0,0.14)]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}