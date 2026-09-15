// TemplateDetailsPage.jsx

import React from "react";

import Temp28 from "../components/28temp";
import TempDescription29 from "../components/tempdescription29";
import Template30 from "../components/template30";
import Template31 from "../components/template31";
import Tempreview32 from "../components/tempreview32";
import Template34 from "../components/Template34";

export default function TemplateDetailsPage() {

  return (

    <div
      className="
        min-h-screen
        w-full
        bg-gray-100
      "
    >

      {/* ================= LAPTOP VIEW ================= */}

      <div
        className="
          hidden
          lg:flex
          min-h-screen
        "
      >

        {/* Sidebar */}
{/* Content */}

        <div
          className="
            flex-1
            min-w-0
            bg-gray-50
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-5
              px-6
              py-4
            "
          >

            {/* LEFT SIDE */}

            <div
              className="
                space-y-1
              "
            >

              <Temp28 />

              <TempDescription29 />

              <Template30 />

              <Template31 />

              <Tempreview32 />

            </div>

            {/* RIGHT SIDE */}

            <div
              className="
                relative
              "
            >

              <Template34 />

            </div>

          </div>

        </div>

      </div>

      {/* ================= MOBILE + TABLET ================= */}

      <div
        className="
          flex
          lg:hidden
          min-h-screen
          flex-col
          bg-gray-50
        "
      >
<main
          className="
            flex-1
            overflow-y-auto
            pb-24
          "
        >

          <div
            className="
              w-full
              space-y-1
              px-3
              py-2
              sm:px-5
            "
          >

            <Temp28 />

            <TempDescription29 />

            <Template30 />

            <Template31 />

            <Tempreview32 />

            <Template34 />

            <div className="h-5" />

          </div>

        </main>
</div>

    </div>

  );

}


