// template30.jsx

import React from "react";
import {
  CheckCircle2,
  Code2,
  Image as ImageIcon,
  FileText,
} from "lucide-react";

const features = [
  "Complete source code",
  "Responsive design for all devices",
  "Well-documented and commented",
  "Easy customization",
  "Free updates for 6 months",
  "Email support included",
  "Commercial license",
  "Premium fonts included",
];

const includedFiles = [
  {
    icon: Code2,
    label: "HTML/CSS/JS",
    color: "text-purple-600",
  },
  {
    icon: ImageIcon,
    label: "Images & Icons",
    color: "text-emerald-600",
  },
  {
    icon: FileText,
    label: "Documentation",
    color: "text-purple-600",
  },
];

export default function Template30() {
  return (
    <div className="px-5 py-5">

      {/* =====================================================
          MAIN CARD
      ====================================================== */}

      <div
        className="
          rounded-[26px]
          border
          border-gray-100
          bg-white
          p-6
          shadow-[0_4px_16px_rgba(15,23,42,0.06)]
          sm:p-7
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-6 flex items-center gap-3">

          <CheckCircle2
            className="
              h-7
              w-7
              shrink-0
              text-emerald-500
            "
          />

          <h2
            className="
              text-[25px]
              font-bold
              leading-tight
              text-gray-900
              sm:text-[27px]
            "
          >
            What's Included
          </h2>

        </div>


        {/* ===================================================
            FEATURES — 2 COLUMNS
        ==================================================== */}

        <div
          className="
            mb-7
            grid
            grid-cols-1
            gap-3
            md:grid-cols-2
            md:gap-4
          "
        >

          {features.map((item, i) => (

            <div
              key={i}
              className="
                flex
                min-h-[52px]
                items-center
                gap-3
                rounded-[17px]
                bg-violet-50
                px-4
                py-3.5
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-violet-100
                hover:shadow-sm
              "
            >

              <CheckCircle2
                className="
                  h-5
                  w-5
                  shrink-0
                  text-purple-600
                "
              />

              {/* Feature content increased by 2px */}
              <span
                className="
                  text-[17px]
                  font-medium
                  leading-snug
                  text-gray-900
                  sm:text-[18px]
                "
              >
                {item}
              </span>

            </div>

          ))}

        </div>


        {/* ===================================================
            INCLUDED FILES
        ==================================================== */}

        <div
          className="
            rounded-[21px]
            border
            border-violet-100
            bg-violet-50
            p-5
            sm:p-6
          "
        >

          <h3
            className="
              mb-4
              text-[19px]
              font-bold
              text-gray-900
              sm:text-[20px]
            "
          >
            Included Files:
          </h3>


          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {includedFiles.map((file, i) => {

              const FileIcon = file.icon;

              return (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-2.5
                  "
                >

                  <FileIcon
                    className={`
                      h-5
                      w-5
                      shrink-0
                      ${file.color}
                    `}
                  />

                  {/* Included file content increased by 2px */}
                  <span
                    className="
                      text-[16px]
                      font-medium
                      text-gray-600
                      sm:text-[17px]
                    "
                  >
                    {file.label}
                  </span>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </div>
  );
}