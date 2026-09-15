import React, { useState } from "react";
import { BriefcaseBusiness, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
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
];

export default function FreelancerServices48({
  hourlyRate = 35,
  onHire,
}) {
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* =====================================================
          MAIN SERVICES COMPONENT
      ===================================================== */}

          <div className="mx-auto mt-6 w-full max-w-[1600px] px-1 pb-8">

        {/* =====================================================
            HOURLY RATE
        ===================================================== */}

        <div
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-3xl
            bg-gradient-to-r
            from-violet-50
            to-purple-50
            px-5
            py-5
            sm:px-6
            lg:px-7
          "
        >

          {/* LEFT SIDE */}

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

              <p className="mt-0.5 text-2xl font-bold text-gray-900">
                ${hourlyRate}/hr
              </p>
            </div>

          </div>


          {/* HIRE ME BUTTON */}

          <button
            onClick={onHire}
            className="
              rounded-2xl
              bg-white
              px-7
              py-4
              text-base
              font-semibold
              text-purple-700
              transition
              hover:bg-purple-50
              active:scale-[0.98]
            "
          >
            Hire Me
          </button>

        </div>


        {/* =====================================================
            SERVICES HEADER
        ===================================================== */}

        <div className="mt-8 flex items-center justify-between">

          <h3 className="text-xl font-medium text-gray-900">
            Services ({SERVICES.length})
          </h3>

          <button
            onClick={() => setShowAll(true)}
            className="
              text-lg
              font-semibold
              text-purple-700
              transition
              hover:text-purple-900
            "
          >
            View All
          </button>

        </div>


        {/* =====================================================
            SERVICES LIST
        ===================================================== */}

        <div className="mt-5 flex w-full flex-col gap-4">

          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="
                flex
                w-full
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_4px_18px_rgba(0,0,0,0.06)]
                transition
                hover:shadow-[0_6px_22px_rgba(0,0,0,0.08)]
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
                  sm:h-[145px]
                  sm:w-[145px]
                  lg:h-[145px]
                  lg:w-[140px]
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

                  <div className="mt-4 flex items-center gap-1.5">

                    <Star
                      size={18}
                      fill="#d4af37"
                      color="#d4af37"
                      strokeWidth={0}
                    />

                    <span className="text-sm font-semibold text-gray-800">
                      {service.rating}
                    </span>

                  </div>

                </div>


                {/* PRICE */}

                <div className="shrink-0 self-end">

                  <span className="text-xl font-bold text-purple-700">
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

          {/* =================================================
              POPUP CONTAINER
          ================================================= */}

          <div
            className="
              w-full
              max-w-[780px]
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* =================================================
                POPUP HEADER
            ================================================= */}

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

              <h2 className="text-xl font-bold text-gray-900">
                All Services ({SERVICES.length})
              </h2>

              <button
                onClick={() => setShowAll(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-50
                  text-gray-500
                  transition
                  hover:bg-purple-100
                "
              >
                <X size={22} />
              </button>

            </div>


            {/* =================================================
                POPUP SERVICES
            ================================================= */}

            <div className="space-y-4 px-7 py-7">

              {/* =================================================
                  SERVICE 1
              ================================================= */}

              <div
                onClick={() => navigate("/service-details")}
                className="
                  flex
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.06)]
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >

                <img
                  src={SERVICES[0].image}
                  alt={SERVICES[0].title}
                  className="
                    h-[150px]
                    w-[130px]
                    shrink-0
                    object-cover
                  "
                />

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

                    <h3 className="text-lg font-semibold text-gray-900">
                      {SERVICES[0].title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
                      {SERVICES[0].description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5">

                      <Star
                        size={18}
                        fill="#d4af37"
                        color="#d4af37"
                        strokeWidth={0}
                      />

                      <span className="text-sm font-semibold text-gray-800">
                        {SERVICES[0].rating}
                      </span>

                    </div>

                  </div>

                  <span className="shrink-0 self-end text-xl font-bold text-purple-700">
                    ${SERVICES[0].price}
                  </span>

                </div>

              </div>


              {/* =================================================
                  SERVICE 2
              ================================================= */}

              <div
                onClick={() => navigate("/service-details")}
                className="
                  flex
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.06)]
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >

                <img
                  src={SERVICES[1].image}
                  alt={SERVICES[1].title}
                  className="
                    h-[150px]
                    w-[130px]
                    shrink-0
                    object-cover
                  "
                />

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

                    <h3 className="text-lg font-semibold text-gray-900">
                      {SERVICES[1].title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
                      {SERVICES[1].description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5">

                      <Star
                        size={18}
                        fill="#d4af37"
                        color="#d4af37"
                        strokeWidth={0}
                      />

                      <span className="text-sm font-semibold text-gray-800">
                        {SERVICES[1].rating}
                      </span>

                    </div>

                  </div>

                  <span className="shrink-0 self-end text-xl font-bold text-purple-700">
                    ${SERVICES[1].price}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
}