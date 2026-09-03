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
          w-5
          h-5
          text-pink-600
        "
        strokeWidth={2}
      />
    ),

    document: (
      <FileText
        className="
          w-5
          h-5
          text-red-600
        "
        strokeWidth={2}
      />
    ),

    video: (
      <Video
        className="
          w-5
          h-5
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
        bg-white
        rounded-2xl
        px-4
        py-4
        sm:px-5
        sm:py-4
        border
        border-gray-200
      "
    >

      {/* =====================================================
          FILE INFORMATION
      ===================================================== */}

      <div
        className="
          flex
          items-start
          gap-3
          sm:gap-4
        "
      >

        {/* ===================================================
            FILE ICON
        =================================================== */}

        <div
          className={`
            w-10
            h-10
            sm:w-11
            sm:h-11
            rounded-xl
            flex
            items-center
            justify-center
            shrink-0
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
            flex-1
            min-w-0
          "
        >

          {/* Title */}

          <h3
            className="
              text-base
              sm:text-lg
              font-semibold
              text-gray-900
              leading-6
              truncate
            "
          >
            {work.title}
          </h3>


          {/* Contributor Information */}

          <div
            className="
              flex
              items-center
              gap-2
              mt-1
              min-w-0
            "
          >

            <img
              src={work.avatar}
              alt={work.name}
              className="
                w-5
                h-5
                sm:w-6
                sm:h-6
                rounded-full
                object-cover
                shrink-0
              "
            />

            <span
              className="
                text-xs
                sm:text-sm
                text-gray-600
                whitespace-nowrap
              "
            >
              {work.name}
            </span>

            <span
              className="
                text-gray-400
                text-xs
              "
            >
              •
            </span>

            <span
              className="
                text-xs
                sm:text-sm
                text-gray-500
                whitespace-nowrap
              "
            >
              {work.timeAgo}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          ACTION BUTTONS
      ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-2
          mt-3
          ml-[52px]
          sm:ml-[59px]
        "
      >

        {/* ===================================================
            VIEW FILE
        =================================================== */}

        <button
          onClick={() => onViewFile?.(work.id)}
          className="
            flex-1
            h-9
            bg-violet-50
            hover:bg-violet-100
            text-violet-700
            rounded-xl
            text-sm
            font-medium
            transition
          "
        >
          View File
        </button>


        {/* ===================================================
            VERIFIED / VERIFY WORK
        =================================================== */}

        {work.verified ? (

          <button
            className="
              flex
              items-center
              justify-center
              gap-1.5
              h-9
              px-4
              bg-emerald-50
              text-emerald-600
              rounded-xl
              text-sm
              font-medium
              whitespace-nowrap
            "
          >

            <CheckCircle
              className="
                w-4
                h-4
              "
              strokeWidth={2}
            />

            Verified

          </button>

        ) : (

          <button
            onClick={() => onVerify?.(work.id)}
            className="
              h-9
              px-4
              bg-violet-50
              hover:bg-violet-100
              text-violet-700
              rounded-xl
              text-sm
              font-medium
              whitespace-nowrap
              transition
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