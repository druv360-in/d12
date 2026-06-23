import React, { useState } from "react";
import {
  FiCreditCard,
  FiDollarSign,
} from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import { SiWise } from "react-icons/si";

function WithdrawalMethodsList143() {
  const [selectedMethod, setSelectedMethod] = useState("PayPal");

  const methods = [
    {
      name: "PayPal",
      duration: "2-3 business days",
      details: "Min: ₹10 • Fee: 2%",
      icon: <FaPaypal />,
      iconBg: "bg-[#6D28D9]",
    },
    {
      name: "Bank Transfer",
      duration: "3-5 business days",
      details: "Min: ₹50 • Fee: ₹2",
      icon: <FiCreditCard />,
      iconBg: "bg-[#06B63F]",
    },
    {
      name: "Stripe",
      duration: "Instant",
      details: "Min: ₹20 • Fee: 2.5%",
      icon: <FiDollarSign />,
      iconBg: "bg-[#6D28D9]",
    },
    {
      name: "Wise",
      duration: "1-2 business days",
      details: "Min: ₹25 • Fee: 1.5%",
      icon: <SiWise />,
      iconBg: "bg-[#FF5C00]",
    },
  ];

  return (
    <div className="w-full max-w-md bg-[#F5F6F8] rounded-3xl p-6 shadow-md border border-gray-200">
      {/* Heading */}
      <h2 className="text-lg font-bold text-[#0F172A] mb-6">
        Withdrawal Methods
      </h2>

      {/* Cards */}
      <div className="space-y-5">
        {methods.map((method) => (
          <div
            key={method.name}
            onClick={() => setSelectedMethod(method.name)}
            className={`cursor-pointer rounded-3xl border p-5 transition-all duration-300
              ${
                selectedMethod === method.name
                  ? "bg-[#F1EDFF] border-[#B8B8FF]"
                  : "bg-white border-gray-200"
              }`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${method.iconBg} flex items-center justify-center text-white text-lg`}
              >
                {method.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {method.name}
                </h3>

                <p className="text-gray-500 mt-1 text-sm">
                  {method.duration}
                </p>

                <p className="text-gray-600 mt-4 text-sm">
                  {method.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithdrawalMethodsList143;