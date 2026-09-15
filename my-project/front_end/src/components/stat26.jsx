import {
  Shield,
  CheckCircle,
} from "lucide-react";

export default function Stat26({
  items,
}) {

  const defaultItems = [
    {
      label: "Verified Email",
      verified: true,
    },

    {
      label: "Payment Method Added",
      verified: true,
    },

    {
      label: "Profile Complete",
      verified: true,
    },
  ];

  const trustItems = items || defaultItems;

  return (
    <section className="w-full h-full">

      <div
        className="
          h-full
          min-h-[250px]
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            gap-2
            mb-5
          "
        >

          <Shield
            size={21}
            className="text-emerald-600"
          />

          <h3
            className="
              text-lg
              font-bold
              text-gray-900
            "
          >
            Trust & Safety
          </h3>

        </div>


        {/* ITEMS */}

        <div className="space-y-4">

          {trustItems.map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-3
              "
            >

              <CheckCircle
                size={18}
                className={
                  item.verified
                    ? "text-green-500"
                    : "text-gray-300"
                }
              />

              <span
                className="
                  text-sm
                  text-gray-600
                "
              >
                {item.label}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}