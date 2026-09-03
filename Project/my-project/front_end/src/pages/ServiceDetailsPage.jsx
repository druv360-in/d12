
import Component42SD from "../components/42componentSD";

import Component43 from "../components/43component";
import PortfolioList45 from "../components/45component";
import Component46 from "../components/46component";

function ServiceDetailsPage() {

  return (

    <div
      className="
      min-h-screen
      bg-gray-100
      flex
      "
    >

      {/* ===========================
          LAPTOP SIDEBAR
          HEADER NOT USED HERE
      ============================ */}
{/* ===========================
          MAIN CONTENT AREA
      ============================ */}

      <div
        className="
        flex-1
        min-w-0
        flex
        flex-col
        "
      >

        {/* ===========================
            MOBILE + TABLET HEADER ONLY
            LAPTOP HIDDEN
        ============================ */}

        <div
          className="
          lg:hidden
          sticky
          top-0
          z-50
          bg-white
          "
        >
</div>

        {/* ===========================
            MOBILE + TABLET SIDEBAR
        ============================ */}
{/* ===========================
            SERVICE HEADER
            SHOWS MOBILE + LAPTOP
        ============================ */}

        <div
          className="
          sticky
          top-0
          z-40
          bg-white
          "
        >

          <Component42SD

            title="Service Details"

            onBack={()=>window.history.back()}

          />

        </div>

        {/* ===========================
            SCROLL CONTENT
        ============================ */}

        <main
          className="
          flex-1
          overflow-y-auto
          pb-24
          "
        >

          <div
            className="
            mx-auto
            w-full
            max-w-screen-xl
            px-4
            py-6
            sm:px-6
            lg:px-8
            "
          >

            <Component43 />

            <PortfolioList45 />

            <Component46

              total={127}

              reviews={[
                {
                  id:1,
                  name:"John Doe",
                  rating:5,
                  comment:"Excellent work!"
                },

                {
                  id:2,
                  name:"Sarah Smith",
                  rating:4.8,
                  comment:"Great quality work."
                }

              ]}

            />

            <div className="h-10"/>

          </div>

        </main>

        {/* ===========================
            MOBILE + TABLET BOTTOM MENU
        ============================ */}

        <div
          className="
          lg:hidden
          "
        >
</div>

      </div>

    </div>

  );

}

export default ServiceDetailsPage;


