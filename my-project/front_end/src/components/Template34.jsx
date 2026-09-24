import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Download,
  Eye,
  Zap,
  ShoppingCart,
  TrendingUp,
  Check,
} from "lucide-react";

export default function Template34({
  price = "49",
  originalPrice = "99",
  rating = 4.9,
  sales = "342",
  views = "2.1k",
  tags = ["React", "Tailwind", "Template", "Business"],
}) {
  const navigate = useNavigate();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  const handleBuyNow = () => {
    navigate("/servicenotfound");
  };

  return (
    <div
      className="
        px-4
        pt-4
        lg:sticky
        lg:top-[104px]
        lg:self-start
      "
    >
      <div
        className="
          rounded-[26px]
          border
          border-gray-100
          bg-white
          p-6
          shadow-[0_4px_16px_rgba(15,23,42,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_28px_rgba(15,23,42,0.12)]
        "
      >

        {/* PRICE */}

        <div className="mb-3 flex items-baseline gap-2">

          <span
            className="
              text-[34px]
              font-bold
              leading-none
              text-violet-700
            "
          >
            ₹{price}
          </span>

          <span
            className="
              text-[19px]
              text-gray-400
              line-through
            "
          >
            ₹{originalPrice}
          </span>

        </div>


        {/* OFFER */}

        <div className="mb-6 flex items-center gap-2">

          <TrendingUp
            className="
              h-5
              w-5
              shrink-0
              text-emerald-600
            "
          />

          <span
            className="
              text-[15px]
              font-medium
              text-emerald-600
            "
          >
            Save 50% - Limited Time Offer!
          </span>

        </div>


        {/* STATS */}

        <div className="mb-6 grid grid-cols-3 gap-3">

          {/* Rating */}

          <div
            className="
              rounded-[18px]
              border
              border-violet-100
              bg-violet-50
              p-4
              text-center
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-sm
            "
          >
            <Star
              className="
                mx-auto
                mb-1.5
                h-6
                w-6
                fill-yellow-500
                text-yellow-500
              "
            />

            <p className="text-[19px] font-bold text-gray-900">
              {rating}
            </p>

            <p className="text-[14px] text-gray-500">
              Rating
            </p>
          </div>


          {/* Sales */}

          <div
            className="
              rounded-[18px]
              border
              border-violet-100
              bg-violet-50
              p-4
              text-center
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-sm
            "
          >
            <Download
              className="
                mx-auto
                mb-1.5
                h-6
                w-6
                text-violet-600
              "
            />

            <p className="text-[19px] font-bold text-gray-900">
              {sales}
            </p>

            <p className="text-[14px] text-gray-500">
              Sales
            </p>
          </div>


          {/* Views */}

          <div
            className="
              rounded-[18px]
              border
              border-emerald-100
              bg-emerald-50
              p-4
              text-center
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-sm
            "
          >
            <Eye
              className="
                mx-auto
                mb-1.5
                h-6
                w-6
                text-emerald-600
              "
            />

            <p className="text-[19px] font-bold text-gray-900">
              {views}
            </p>

            <p className="text-[14px] text-gray-500">
              Views
            </p>
          </div>

        </div>


        {/* =====================================================
            BUY NOW
        ====================================================== */}

        <button
          type="button"
          onClick={handleBuyNow}
          className="
            mb-3
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-[18px]
            bg-violet-700
            py-4
            text-[16px]
            font-semibold
            text-white
            shadow-lg
            shadow-violet-200
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-violet-800
            hover:shadow-xl
          "
        >
          <Zap className="h-5 w-5" />
          Buy Now
        </button>


        {/* =====================================================
            ADD TO CART
        ====================================================== */}

        <button
          type="button"
          onClick={handleAddToCart}
          className={`
            mb-7
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-[18px]
            py-4
            text-[16px]
            font-semibold
            transition-all
            duration-200
            hover:-translate-y-0.5

            ${
              addedToCart
                ? `
                  border-2
                  border-emerald-500
                  bg-emerald-500
                  text-white
                  shadow-lg
                  shadow-emerald-100
                  hover:bg-emerald-600
                `
                : `
                  border-2
                  border-violet-700
                  bg-white
                  text-violet-700
                  hover:bg-violet-50
                `
            }
          `}
        >
          {addedToCart ? (
            <>
              <Check className="h-5 w-5" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </>
          )}
        </button>


        {/* TAGS */}

        <div className="mb-7">

          <h3
            className="
              mb-3
              text-[20px]
              font-bold
              text-gray-900
            "
          >
            Tags
          </h3>

          <div className="flex flex-wrap gap-2">

            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  bg-gray-100
                  px-3
                  py-1.5
                  text-[14px]
                  font-medium
                  text-gray-600
                  transition
                  hover:bg-violet-50
                  hover:text-violet-700
                "
              >
                {tag}
              </span>
            ))}

          </div>

        </div>


        {/* LICENSE */}

        <div
          className="
            rounded-[20px]
            border
            border-gray-100
            bg-gray-50
            p-5
            transition-all
            duration-200
            hover:bg-gray-100
          "
        >

          <h3
            className="
              mb-2.5
              text-[20px]
              font-bold
              text-gray-900
            "
          >
            License Information
          </h3>

          <p
            className="
              mb-3
              text-[15px]
              leading-relaxed
              text-gray-500
            "
          >
            This template comes with a commercial license. You can use it
            for personal and commercial projects.
          </p>

          <button
            type="button"
            className="
              text-[15px]
              font-semibold
              text-violet-700
              transition
              hover:text-violet-900
            "
          >
            Read full license →
          </button>

        </div>

      </div>
    </div>
  );
}