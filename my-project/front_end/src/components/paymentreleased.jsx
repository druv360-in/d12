import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const PaymentReleased = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const amount =
    location.state?.amount || "24,000";

  const freelancer =
    location.state?.freelancer || "Priya Sharma";

  const selectedPlan =
    location.state?.selectedPlan || "Large";

  // =====================================================
  // SHOW FOR 3 SECONDS
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {

      navigate("/payments", {
        replace: true,

        // ===============================================
        // TELL PAYMENT CENTRE THAT PAYMENT IS COMPLETE
        // ===============================================

        state: {
          paymentCompleted: true,
          selectedPlan: selectedPlan,
        },
      });

    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate, selectedPlan]);

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#374151]/55
        backdrop-blur-[7px]
      "
    >

      {/* =================================================
          BOTTOM SHEET
      ================================================== */}

      <div
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-[448px]
          max-w-[calc(100vw-32px)]
          bg-white
          rounded-t-[24px]
          shadow-[0_-8px_35px_rgba(0,0,0,0.16)]
          overflow-hidden
        "
      >

        {/* HANDLE */}

        <div className="flex justify-center pt-3 pb-1">

          <div
            className="
              w-[40px]
              h-[4px]
              rounded-full
              bg-gray-300
            "
          />

        </div>

        {/* CONTENT */}

        <div
          className="
            px-6
            pt-6
            pb-8
            text-center
          "
        >

          {/* SUCCESS ICON */}

          <div className="flex justify-center mb-4">

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-emerald-100
                flex
                items-center
                justify-center
              "
            >

              <CheckCircle
                className="
                  w-9
                  h-9
                  text-emerald-600
                "
              />

            </div>

          </div>

          {/* TITLE */}

          <h2
            className="
              text-2xl
              font-bold
              text-gray-900
              mb-2
            "
          >
            Payment Released!
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              text-sm
              text-gray-500
              leading-relaxed
              mb-5
            "
          >
            ₹{amount} sent to {freelancer}
          </p>

          {/* SUCCESS BOX */}

          <div
            className="
              bg-emerald-50
              border
              border-emerald-200
              rounded-2xl
              p-4
            "
          >

            <p
              className="
                text-sm
                font-semibold
                text-emerald-800
              "
            >
              Payment successfully released
            </p>

            <p
              className="
                text-xs
                text-emerald-700
                mt-1
              "
            >
              Returning to Payment Centre...
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentReleased;