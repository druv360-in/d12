import React from "react";
import {
  Play,
  Calendar,
  ExternalLink,
} from "lucide-react";

// ======================================================
// PROJECT DATA
// ======================================================

const PROJECTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop",
    title: "Brand Campaign Video",
    description:
      "Created a 60-second promotional video for a tech startup, featuring dynamic transitions and motion graphics.",
    tools: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
    ],
    date: "March 2026",

    // ADD YOUR YOUTUBE VIDEO LINK HERE
    youtubeUrl:
      "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
    title: "Wedding Highlight Reel",
    description:
      "Edited a cinematic wedding video with color grading, audio mixing, and seamless storytelling.",
    tools: [
      "Final Cut Pro",
      "Color Finale",
      "Motion",
    ],
    date: "February 2026",

    // ADD YOUR YOUTUBE VIDEO LINK HERE
    youtubeUrl:
      "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&auto=format&fit=crop",
    title: "Product Demo Video",
    description:
      "Produced an engaging product demonstration with text animations, background music, and voice-over.",
    tools: [
      "Adobe Premiere Pro",
      "Audition",
      "Photoshop",
    ],
    date: "January 2026",

    // ADD YOUR YOUTUBE VIDEO LINK HERE
    youtubeUrl:
      "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    title: "YouTube Channel Intro",
    description:
      "Designed and animated a custom intro for a gaming YouTube channel with 3D elements and sound design.",
    tools: [
      "After Effects",
      "Cinema 4D",
      "Audition",
    ],
    date: "December 2025",

    // ADD YOUR YOUTUBE VIDEO LINK HERE
    youtubeUrl:
      "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
  },
];

// ======================================================
// PORTFOLIO CARD
// ======================================================

function PortfolioCard45({
  image,
  title,
  description,
  tools = [],
  date,
  youtubeUrl,
}) {
  // ====================================================
  // OPEN YOUTUBE
  // ====================================================

  const handlePlay = () => {
    if (youtubeUrl) {
      window.open(
        youtubeUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div
      className="
        w-full
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
      {/* ==================================================
          IMAGE
      ================================================== */}

      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/20
          "
        >
          {/* ==================================================
              PLAY BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${title} on YouTube`}
            className="
              flex
              h-14
              w-14
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-lg

              transition-all
              duration-300
              ease-out

              hover:scale-110
              hover:bg-white
              hover:shadow-[0_12px_25px_rgba(0,0,0,0.25)]

              active:scale-95
            "
          >
            <Play
              size={24}
              className="ml-1 text-purple-600"
              fill="currentColor"
            />
          </button>
        </div>
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="p-5">
        {/* TITLE */}

        <h4
          className="
            mb-2
            text-lg
            font-bold
            text-gray-900
          "
        >
          {title}
        </h4>

        {/* DESCRIPTION */}

        <p
          className="
            mb-4
            text-sm
            leading-[1.6]
            text-gray-500
          "
        >
          {description}
        </p>

        {/* ==================================================
            TOOLS
        ================================================== */}

        {tools.length > 0 && (
          <div className="mb-4">
            <p
              className="
                mb-2
                text-sm
                text-gray-400
              "
            >
              Tools Used:
            </p>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="
                    rounded-full
                    bg-purple-50
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-purple-700

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:bg-purple-100
                    hover:shadow-sm
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================
            FOOTER
        ================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            pt-2
          "
        >
          {/* DATE */}

          <div
            className="
              flex
              items-center
              gap-1.5
              text-xs
              text-gray-400
            "
          >
            <Calendar size={14} />
            <span>{date}</span>
          </div>

          {/* ==================================================
              VIEW PROJECT BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={handlePlay}
            className="
              flex
              cursor-pointer
              items-center
              gap-1.5
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-purple-600
              px-4
              py-2
              text-xs
              font-semibold
              text-white

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:shadow-[0_10px_22px_rgba(109,40,217,0.30)]

              active:scale-95
            "
          >
            <ExternalLink size={14} />
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

// ======================================================
// PORTFOLIO LIST
// ======================================================

export default function PortfolioList45() {
  return (
    <div
      className="
        mt-8
        w-full
        bg-white
        pb-8
      "
    >
      {/* ==================================================
          HEADER
      ================================================== */}

      <div
        className="
          mx-auto
          mb-6
          flex
          w-full
          max-w-[1600px]
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        <h3
          className="
            text-xl
            font-bold
            text-gray-900
            sm:text-2xl
          "
        >
          Past Work & Portfolio
        </h3>

        <span
          className="
            text-sm
            font-semibold
            text-purple-600
            sm:text-base
          "
        >
          {PROJECTS.length} Projects
        </span>
      </div>

      {/* ==================================================
          PROJECT GRID
      ================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          gap-6
          px-4

          sm:px-6

          md:grid-cols-2

          lg:grid-cols-3

          lg:px-8
          xl:px-10
        "
      >
        {PROJECTS.map((project) => (
          <PortfolioCard45
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}