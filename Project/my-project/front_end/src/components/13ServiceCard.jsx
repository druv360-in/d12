import {
  Star,
  Clock,
  Zap,
} from "lucide-react";

function ServiceCard13({
  image,
  avatar,
  seller,
  university,
  title,
  tags,
  rating,
  reviews,
  days,
  price,
  onClick,
}) {

  const isOwnService = seller === "You";


  return (

    <div
      onClick={onClick}
      className={`
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-200

        ${
          !isOwnService
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-md"
            : ""
        }
      `}
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <img
        src={image}
        alt={title}
        className="
          h-[195px]
          w-full
          object-cover
        "
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-4">


        {/* =================================================
            SELLER
        ================================================= */}

        <div
          className="
            mb-4
            flex
            items-center
            gap-3
          "
        >

          {/* PROFILE ICON */}

          {isOwnService ? (

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-purple-600
                text-white
              "
            >

              <Zap
                size={18}
                fill="white"
                strokeWidth={2}
              />

            </div>

          ) : (

            <img
              src={
                avatar ||
                "https://i.pravatar.cc/100"
              }
              alt={seller}
              className="
                h-9
                w-9
                shrink-0
                rounded-full
                object-cover
              "
            />

          )}


          {/* SELLER INFO */}

          <div className="min-w-0">

            <h3
              className="
                truncate
                text-sm
                font-semibold
                text-gray-900
              "
            >
              {seller}
            </h3>

            <p
              className="
                truncate
                text-xs
                text-gray-500
              "
            >
              {university}
            </p>

          </div>

        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h2
          className="
            mb-4
            min-h-[48px]
            line-clamp-2
            text-lg
            font-semibold
            leading-6
            text-gray-900
          "
        >
          {title}
        </h2>


        {/* =================================================
            TAGS
        ================================================= */}

        <div
          className="
            mb-4
            flex
            min-h-[58px]
            flex-wrap
            content-start
            gap-2
          "
        >

          {tags.map(
            (tag, index) => (

              <span
                key={index}
                className="
                  rounded-full
                  bg-purple-100
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-purple-700
                "
              >
                {tag}
              </span>

            )
          )}

        </div>


        {/* =================================================
            RATING + DELIVERY
        ================================================= */}

        <div
          className="
            mb-4
            flex
            items-center
            gap-4
            text-xs
            text-gray-500
          "
        >

          {/* RATING */}

          <div
            className="
              flex
              items-center
              gap-1
            "
          >

            <Star
              size={16}
              fill="#d4af37"
              color="#d4af37"
            />

            <span
              className="
                font-medium
                text-gray-700
              "
            >
              {rating}
            </span>

            <span>
              ({reviews})
            </span>

          </div>


          {/* DELIVERY */}

          <div
            className="
              flex
              items-center
              gap-1
            "
          >

            <Clock
              size={16}
              className="text-gray-400"
            />

            <span>
              {days} days
            </span>

          </div>

        </div>


        {/* =================================================
            PRICE
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-gray-200
            pt-4
          "
        >

          <span
            className="
              text-xs
              text-gray-500
            "
          >
            Starting at
          </span>


          <span
            className="
              text-sm
              font-semibold
              text-purple-700
            "
          >
            ₹{price}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ServiceCard13;