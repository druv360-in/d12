import { Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FeaturedServiceCard08({ service }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/service-details")}
      className="
        w-full

        bg-[#F1F3F5]

        border
        border-gray-200/50

        rounded-3xl

        flex

        overflow-hidden

        min-h-[180px]

        /* Strong 3D normal shadow */
        shadow-[0_14px_30px_rgba(0,0,0,0.20)]

        /* Smooth animation */
        transition-all
        duration-300
        ease-out

        /* Hover 3D */
        hover:-translate-y-2
        hover:scale-[1.01]
        hover:shadow-[0_28px_55px_rgba(0,0,0,0.30)]

        cursor-pointer
      "
    >
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.title}
        className="
          w-[120px]
          h-[140px]

          sm:w-[200px]
          sm:h-[170px]

          lg:w-[320px]
          lg:h-[220px]

          xl:w-[380px]
          xl:h-[240px]

          object-cover

          shrink-0
        "
      />

      {/* Content */}
      <div
        className="
          flex-1

          min-w-0

          flex
          flex-col
          justify-between

          p-4

          sm:p-5

          lg:p-8
        "
      >
        {/* Title */}
        <h4
          className="
            text-lg

            lg:text-2xl

            font-semibold

            text-gray-900

            truncate
          "
        >
          {service.title}
        </h4>

        {/* Description */}
        <p
          className="
            mt-3

            line-clamp-2

            text-sm

            lg:text-base

            leading-6

            text-gray-500
          "
        >
          {service.desc}
        </p>

        {/* Rating + Delivery */}
        <div
          className="
            mt-4

            flex
            items-center

            gap-5

            lg:gap-8
          "
        >
          {/* Rating */}
          <div
            className="
              flex
              items-center

              gap-2

              text-sm

              lg:text-base

              font-semibold

              text-gray-600
            "
          >
            <Star
              size={18}
              fill="#fbbf24"
              color="#fbbf24"
            />

            {service.rating}
          </div>

          {/* Delivery */}
          <div
            className="
              flex
              items-center

              gap-2

              text-sm

              lg:text-base

              font-semibold

              text-gray-600
            "
          >
            <Clock
              size={18}
              className="text-gray-400"
            />

            {service.days} days
          </div>
        </div>

        {/* Freelancer + Price */}
        <div
          className="
            mt-4

            flex
            items-center
            justify-between

            gap-2

            w-full
            min-w-0
          "
        >
          {/* Freelancer */}
          <div
            className="
              flex
              items-center

              gap-3

              min-w-0

              flex-1
            "
          >
            <img
              src={service.avatar}
              alt={service.name}
              className="
                h-8
                w-8

                lg:h-10
                lg:w-10

                rounded-full

                object-cover

                shrink-0
              "
            />

            <span
              className="
                text-sm

                lg:text-base

                text-gray-600

                truncate

                min-w-0

                flex-1
              "
            >
              {service.name}
            </span>
          </div>

          {/* Price */}
          <span
            className="
              text-base

              sm:text-lg

              lg:text-2xl

              font-bold

              text-purple-600

              whitespace-nowrap

              shrink-0
            "
          >
            ₹{service.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedServiceCard08;