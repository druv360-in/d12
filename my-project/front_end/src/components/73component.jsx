import React from "react";
import {
  Lock,
  Shield,
  Info,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const actionData = {
  Large: {
    title: "Milestone 2 — Frontend Development",
    amount: "24,000",
    secured: "Jun 25, 2026",
  },

  Medium: {
    title: "Installment 2 — Final Delivery & Brand Guide",
    amount: "9,000",
    secured: "Jun 20, 2026",
  },

  Small: {
    title: "Full Payment — Complete project delivery — 5 edited reels",
    amount: "4,500",
    secured: "Jun 18, 2026",
  },
};

const SeventyThreeComponent = ({
  selectedPlan = "Large",
  onRelease,
  onDispute,
}) => {
  const data = actionData[selectedPlan];

  return (
    <div
      className="bg-white rounded-3xl mx-4 mt-4 overflow-hidden"
      style={{
        border: "2px solid #D4A928",
      }}
    >
      {/* =====================================================
          YELLOW HEADER
      ====================================================== */}
      <div
        className="px-4 py-3.5 flex items-center gap-2"
        style={{
          backgroundColor: "#DAB439",
        }}
      >
        {/* Lock Icon */}
        <Lock className="w-5 h-5 flex-shrink-0 text-white" />

        {/* Header Text */}
        <p className="font-bold text-base text-white">
          Action Required — Funds in Escrow
        </p>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="p-5">

        {/* Project / Payment Title */}
        <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2">
          {data.title}
        </h2>

        {/* Amount */}
        <p className="text-[32px] font-bold text-violet-800 mb-2">
          ₹{data.amount}
        </p>

        {/* Secured Date */}
        <p className="text-sm text-gray-500 mb-4">
          Secured on {data.secured} · Protected by SkillBuster
        </p>

        {/* =================================================
            INFO BOX 1 - GREEN
        ================================================== */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex gap-3 mb-3">
          
          <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />

          <p className="text-sm text-emerald-900 leading-relaxed">
            <span className="font-bold">
              Your payment will be held securely by SkillBuster
            </span>{" "}
            and will NOT be released to the freelancer until you approve the
            completed work.
          </p>

        </div>

        {/* =================================================
            INFO BOX 2 - LIGHT YELLOW
        ================================================== */}
        <div
          className="rounded-2xl p-4 flex gap-3 mb-5"
          style={{
            backgroundColor: "#FFF9E8",
            border: "1px solid #F0DFA5",
          }}
        >

          <Info
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{
              color: "#D49B00",
            }}
          />

          <p
            className="text-sm leading-relaxed"
            style={{
              color: "#725B13",
            }}
          >
            If there is an issue with the work or the project is not delivered
            as agreed, you may{" "}
            <span className="font-bold">
              request a refund
            </span>{" "}
            before funds are released.
          </p>

        </div>

        {/* =================================================
            BUTTONS
        ================================================== */}
        <div className="flex gap-3">

          {/* Release Payment Button */}
          <button
            onClick={onRelease}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-200/50 transition"
          >
            <CheckCircle className="w-5 h-5" />

            Release Payment
          </button>

          {/* Raise Dispute Button */}
          <button
            onClick={onDispute}
            className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition"
          >
            <AlertCircle className="w-5 h-5" />

            Raise Dispute
          </button>

        </div>
      </div>
    </div>
  );
};

export default SeventyThreeComponent;