import React, { useState } from "react";
import { Shield, Check, Star } from "lucide-react";

const plansData = {
  Large: {
    project: "E-Commerce Platform Development",
    planLabel: "Large Plan",
    freelancer: { name: "Priya Sharma", rating: 4.9, img: "https://i.pravatar.cc/100?img=5" },
    total: "72,000",
    released: "24,000",
    escrow: "24,000"
  },
  Medium: {
    project: "Brand Identity & Logo Design",
    planLabel: "Medium Plan",
    freelancer: { name: "Arjun Mehta", rating: 4.8, img: "https://i.pravatar.cc/100?img=8" },
    total: "18,000",
    released: "9,000",
    escrow: "9,000"
  },
  Small: {
    project: "Instagram Reel Editing (5 Videos)",
    planLabel: "Small Plan",
    freelancer: { name: "Sneha Patel", rating: 5.0, img: "https://i.pravatar.cc/100?img=12" },
    total: "4,500",
    released: "0",
    escrow: "4,500"
  }
};

const SeventyAComponent = ({ selectedPlan = "Large", onPlanChange }) => {
  const [internalPlan, setInternalPlan] = useState(selectedPlan);
  const currentPlan = onPlanChange? selectedPlan : internalPlan;
  const setPlan = onPlanChange || setInternalPlan;
  const data = plansData[currentPlan];
  const plans = ["Large", "Medium", "Small"];

  return (
    <div className="p-4 bg-gray-50">
      {/* SELECT PAYMENT PLAN */}
      <p className="text-xs font-semibold text-gray-400 mb-3">SELECT PAYMENT PLAN</p>
      <div className="flex gap-2 mb-4">
        {plans.map((plan) => (
          <button
            key={plan}
            onClick={() => setPlan(plan)}
            className={`flex-1 py-2.5 rounded-2xl text-sm font-semibold transition ${
              currentPlan === plan
               ? "bg-violet-700 text-white shadow-lg shadow-violet-200"
                : "bg-white text-gray-500 border-gray-200"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>

      {/* ESCROW PROTECTION CARD */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4">
        <div className="bg-violet-700 px-4 py-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-white" />
          <p className="text-white font-bold text-sm">SKILLBUSTER ESCROW PROTECTION</p>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Your payment is <span className="font-bold">protected by SkillBuster Escrow</span>. Funds are securely held until the client confirms project completion. If a dispute occurs, SkillBuster will review the case and may issue a refund when applicable.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Secure Holding", "Client-Controlled Release", "Dispute Resolution", "Refund Policy"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT CARD */}
      <div className="bg-gradient-to-br from-violet-700 via-violet-600 to-amber-400 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm opacity-90">Project</p>
          <span className="bg-amber-300 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
            {data.planLabel}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-4 leading-tight">{data.project}</h2>

        {/* Freelancer */}
        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 mb-4">
          <img src={data.freelancer.img} alt={data.freelancer.name} className="w-12 h-12 rounded-full border-2 border-white" />
          <div>
            <p className="font-bold">{data.freelancer.name}</p>
            <div className="flex items-center gap-1 text-sm opacity-90">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>{data.freelancer.rating} · Hired Freelancer</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 text-center">
            <p className="text-xs opacity-80 mb-1">Total Amount</p>
            <p className="text-lg font-bold">₹{data.total}</p>
            <p className="text-xs opacity-80">Project budget</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 text-center">
            <p className="text-xs opacity-80 mb-1">Released</p>
            <p className="text-lg font-bold">₹{data.released}</p>
            <p className="text-xs opacity-80">Paid to freelancer</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 text-center">
            <p className="text-xs opacity-80 mb-1">In Escrow</p>
            <p className="text-lg font-bold">₹{data.escrow}</p>
            <p className="text-xs opacity-80">Held securely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventyAComponent;