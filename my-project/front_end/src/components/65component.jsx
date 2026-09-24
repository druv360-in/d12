import React from "react";
import {
  Image,
  FileText,
  Video,
  CheckCircle,
} from "lucide-react";

const SixtyFiveComponent = ({
  work,
  onViewFile,
  onVerify,
}) => {

  /* =========================================================
     FILE TYPE ICONS
  ========================================================= */

  const fileTypeIcons = {
    image: (
      <Image
        className="
          w-6
          h-6
          text-pink-600
        "
        strokeWidth={2}
      />
    ),

    document: (
      <FileText
        className="
          w-6
          h-6
          text-red-600
        "
        strokeWidth={2}
      />
    ),

    video: (
      <Video
        className="
          w-6
          h-6
          text-violet-600
        "
        strokeWidth={2}
      />
    ),
  };


  /* =========================================================
     FILE TYPE BACKGROUNDS
  ========================================================= */

  const fileTypeBg = {
    image: "bg-pink-50",
    document: "bg-red-50",
    video: "bg-violet-50",
  };


  return (
    <div
      className="
        w-full
        rounded-[22px]
        border
        border-gray-200
        bg-white
        px-5
        py-5
        shadow-[0_3px_12px_rgba(15,23,42,0.06)]
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-[0_7px_20px_rgba(15,23,42,0.10)]
        sm:px-6
        sm:py-5
      "
    >

      {/* =====================================================
          FILE INFORMATION
      ====================================================== */}

      <div
        className="
          flex
          items-start
          gap-4
          sm:gap-5
        "
      >

        {/* ===================================================
            FILE ICON
        =================================================== */}

        <div
          className={`
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-[15px]
            sm:h-13
            sm:w-13
            ${fileTypeBg[work.fileType]}
          `}
        >
          {fileTypeIcons[work.fileType]}
        </div>


        {/* ===================================================
            TITLE + USER INFORMATION
        =================================================== */}

        <div
          className="
            min-w-0
            flex-1
          "
        >

          {/* Title */}

          <h3
            className="
              truncate
              text-[18px]
              font-semibold
              leading-7
              text-gray-900
              sm:text-[19px]
            "
          >
            {work.title}
          </h3>


          {/* Contributor Information */}

          <div
            className="
              mt-1.5
              flex
              min-w-0
              items-center
              gap-2
            "
          >

            <img
              src={work.avatar}
              alt={work.name}
              className="
                h-7
                w-7
                shrink-0
                rounded-full
                object-cover
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[14px]
                font-medium
                text-gray-600
                sm:text-[15px]
              "
            >
              {work.name}
            </span>

            <span
              className="
                text-[14px]
                text-gray-400
                sm:text-[15px]
              "
            >
              •
            </span>

            <span
              className="
                whitespace-nowrap
                text-[14px]
                text-gray-500
                sm:text-[15px]
              "
            >
              {work.timeAgo}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          ACTION BUTTONS
      ====================================================== */}

      <div
        className="
          mt-4
          flex
          items-center
          gap-3
          ml-[64px]
          sm:ml-[68px]
        "
      >

        {/* ===================================================
            VIEW FILE
        =================================================== */}

        <button
          type="button"
          onClick={() => onViewFile?.(work.id)}
          className="
            flex-1
            h-11
            rounded-[14px]
            bg-violet-50
            text-[15px]
            font-semibold
            text-violet-700
            transition-all
            duration-200
            hover:bg-violet-100
            hover:-translate-y-0.5
          "
        >
          View File
        </button>


        {/* ===================================================
            VERIFIED / VERIFY WORK
        =================================================== */}

        {work.verified ? (

          <button
            type="button"
            className="
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-[14px]
              bg-emerald-50
              px-5
              text-[15px]
              font-semibold
              text-emerald-600
              whitespace-nowrap
            "
          >

            <CheckCircle
              className="h-5 w-5"
              strokeWidth={2}
            />

            Verified

          </button>

        ) : (

          <button
            type="button"
            onClick={() => onVerify?.(work.id)}
            className="
              h-11
              rounded-[14px]
              bg-violet-50
              px-5
              text-[15px]
              font-semibold
              text-violet-700
              whitespace-nowrap
              transition-all
              duration-200
              hover:bg-violet-100
              hover:-translate-y-0.5
            "
          >
            Verify Work
          </button>

        )}

      </div>

    </div>
  );
};

export default SixtyFiveComponent;