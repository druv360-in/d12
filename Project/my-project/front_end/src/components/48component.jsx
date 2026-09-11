import React from "react";
import { Star, MapPin } from "lucide-react";

export default function ProfileCard48({
  name = "Emma Thompson",
  field = "Computer Science",
  university = "Stanford University",
  image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80",
  rating = 4.0,
  projects = 80,
  reviews = 127,
  about =
    "Full-stack developer passionate about creating beautiful and functional web applications. 3 years of experience in modern web technologies.",
  skills = ["React", "Node.js", "Python", "UI/UX"],
}) {
  return (
    <div className="w-full max-w-[1600px] mx-auto">

      {/* =====================================================
          PURPLE PROFILE CARD
      ===================================================== */}

      <div
        className="
          w-full
          rounded-3xl
          bg-gradient-to-br
          from-violet-600
          via-purple-600
          to-purple-700
          p-5
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          sm:p-6
          lg:p-7
        "
      >

        {/* PROFILE INFORMATION */}

        <div className="flex items-start gap-4">

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
              sm:h-28
              sm:w-28
            "
          />

          <div className="min-w-0 flex-1 pt-1">

            <h2
              className="
                text-xl
                font-bold
                leading-[1.2]
                text-gray-900
                sm:text-2xl
              "
            >
              {name}
            </h2>

            <p className="mt-1 text-sm text-white/90 sm:text-base">
              {field}
            </p>

            <div className="mt-1 flex items-center gap-1.5 text-sm text-white/90 sm:text-base">

              <MapPin
                size={16}
                strokeWidth={2.5}
              />

              <span>
                {university}
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            PROFILE STATS
        ===================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            rounded-2xl
            bg-white/15
            p-4
            backdrop-blur-sm
            sm:p-5
          "
        >

          {/* RATING */}

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

            <p className="mt-1 text-xs text-white/80 sm:text-sm">
              Rating
            </p>

          </div>


          {/* DIVIDER */}

          <div className="h-10 w-px bg-white/20" />


          {/* PROJECTS */}

          <div className="flex-1 text-center">

            <p className="font-bold text-white">
              {projects}
            </p>

            <p className="mt-1 text-xs text-white/80 sm:text-sm">
              Projects
            </p>

          </div>


          {/* DIVIDER */}

          <div className="h-10 w-px bg-white/20" />


          {/* REVIEWS */}

          <div className="flex-1 text-center">

            <p className="font-bold text-white">
              {reviews}
            </p>

            <p className="mt-1 text-xs text-white/80 sm:text-sm">
              Reviews
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          ABOUT ME
      ===================================================== */}

      {about && (
        <div className="mt-6 w-full px-1">

          <h3 className="mb-3 text-lg font-bold text-gray-900">
            About Me
          </h3>

          <p className="text-base leading-[1.6] text-gray-500">
            {about}
          </p>

        </div>
      )}


      {/* =====================================================
          SKILLS
      ===================================================== */}

      {skills && skills.length > 0 && (
        <div className="mt-6 w-full px-1 pb-6">

          <h3 className="mb-3 text-lg font-bold text-gray-900">
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