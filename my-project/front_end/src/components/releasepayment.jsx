import React from "react";
import {
  X,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const ReleasePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paymentData = {
    amount: location.state?.amount || "24,000",

    milestone:
      location.state?.milestone || "Milestone 2",

    freelancer:
      location.state?.freelancer || "Priya Sharma",

    selectedPlan:
      location.state?.selectedPlan || "Large",
  };

  // =====================================================
  // CLOSE
  // =====================================================

  const handleClose = () => {
    navigate("/payments");
  };

  // =====================================================
  // CONFIRM PAYMENT
  // =====================================================

  const handleConfirmRelease = () => {
    navigate("/payment-released", {
      state: {
        amount: paymentData.amount,
        milestone: paymentData.milestone,
        freelancer: paymentData.freelancer,
        selectedPlan: paymentData.selectedPlan,
      },
    });
  };

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

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between
            px-6
            pt-3
            pb-4
          "
        >

          <h2
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            Release Payment
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="
              w-9
              h-9
              rounded-full
              bg-gray-100
              hover:bg-gray-200
              flex
              items-center
              justify-center
              transition
            "
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

        </div>

        {/* CONTENT */}

        <div className="px-6 pb-7">

          {/* PAYMENT SUMMARY */}

          <div
            className="
              bg-emerald-50
              border
              border-emerald-200
              rounded-2xl
              p-4
              mb-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                mb-3
              "
            >

              <ShieldCheck
                className="
                  w-5
                  h-5
                  text-emerald-600
                "
              />

              <p
                className="
                  text-sm
                  font-semibold
                  text-emerald-800
                "
              >
                Payment Summary
              </p>

            </div>

            <div
              className="
                flex
                justify-between
                items-center
              "
            >

              <div>

                <p className="text-sm text-gray-500">
                  {paymentData.milestone}
                </p>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-gray-900
                    mt-1
                  "
                >
                  {paymentData.freelancer}
                </p>

              </div>

              <p
                className="
                  text-2xl
                  font-bold
                  text-emerald-700
                "
              >
                ₹{paymentData.amount}
              </p>

            </div>

          </div>

          {/* WARNING */}

          <div
            className="
              bg-rose-50
              border
              border-rose-200
              rounded-2xl
              p-4
              flex
              gap-3
              mb-5
            "
          >

            <AlertTriangle
              className="
                w-5
                h-5
                text-rose-600
                flex-shrink-0
                mt-0.5
              "
            />

            <p
              className="
                text-sm
                leading-relaxed
                text-rose-800
              "
            >
              By releasing this payment, you confirm that the
              work for this milestone has been completed and
              approved. The payment will be sent to the
              freelancer.
            </p>

          </div>

          {/* CONFIRM */}

          <button
            type="button"
            onClick={handleConfirmRelease}
            className="
              w-full
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              font-bold
              py-3.5
              rounded-2xl
              transition
              shadow-lg
              shadow-emerald-200/50
            "
          >
            Confirm & Release Payment
          </button>

        </div>
      </div>
    </div>
  );
};

export default ReleasePayment;