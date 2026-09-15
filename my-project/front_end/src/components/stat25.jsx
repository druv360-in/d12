import {
  Zap,
  CheckCircle,
} from "lucide-react";

export default function Stat25({
  onUpgrade = () => {},
}) {

  const benefits = [
    "Priority customer support",
    "Featured project listings",
    "Advanced analytics",
    "Unlimited team members",
  ];

  return (
    <section className="w-full h-full">

      <div
        className="
          h-full
          min-h-[250px]
          rounded-2xl
          bg-gradient-to-br
          from-purple-600
          to-violet-700
          p-6
          text-white
          shadow-sm
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            gap-2
            mb-3
          "
        >

          <Zap
            size={21}
            className="fill-white"
          />

          <h3
            className="
              text-lg
              font-bold
            "
          >
            Upgrade to Pro
          </h3>

        </div>


        {/* DESCRIPTION */}

        <p
          className="
            max-w-xl
            text-sm
            leading-6
            text-purple-100
          "
        >
          Get priority support, featured project listings,
          and access to top-rated freelancers.
        </p>


        {/* BENEFITS */}

        <div
          className="
            mt-4
            space-y-2.5
          "
        >

          {benefits.map((benefit, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-2
              "
            >

              <CheckCircle
                size={17}
                className="
                  shrink-0
                  text-white
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                "
              >
                {benefit}
              </span>

            </div>

          ))}

        </div>


        {/* BUTTON */}

        <button
          onClick={onUpgrade}
          className="
            mt-5
            rounded-xl
            bg-white
            px-5
            py-2.5
            text-sm
            font-semibold
            text-purple-700
            transition
            hover:bg-purple-50
          "
        >
          Upgrade Now
        </button>

      </div>

    </section>
  );
}