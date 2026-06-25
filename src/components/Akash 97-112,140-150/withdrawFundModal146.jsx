import React from "react";
import { FiCreditCard, FiAlertCircle } from "react-icons/fi";

function WithdrawFundModal146({
  isOpen,
  onClose,
  amount,
  setAmount,
  method,
  setMethod,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#F5F6F8] rounded-[2rem] p-8 shadow-2xl">

          {/* Header */}
          <h2 className="text-[#111827] text-2xl font-bold mb-8">
            Withdraw Funds
          </h2>

          {/* Balance Card */}
          <div className="bg-[#E8F6EE] border border-green-100 rounded-3xl p-6">
            <p className="text-gray-500 text-md">
              Available Balance
            </p>

            <h1 className="text-[#059669] text-xl font-bold mt-3">
              ₹2850.75
            </h1>
          </div>

          {/* Amount */}
          <div className="mt-8">
            <label className="block text-gray-600 font-semibold mb-3">
              Withdrawal Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₹ 0.00"
              className="w-full px-5 py-5 rounded-2xl border border-gray-200 bg-white outline-none text-md"
            />

            <p className="text-gray-400 text-sm mt-3">
              Maximum: ₹2850.75
            </p>
          </div>

          {/* Method */}
          <div className="mt-8">
            <label className="block text-gray-600 font-semibold mb-3">
              Withdrawal Method
            </label>

            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full px-3 py-3 rounded-2xl border border-gray-200 bg-white outline-none"
            >
              <option>PayPal (2% fee, 2-3 days)</option>
              <option>Bank Transfer (1% fee, 1-2 days)</option>
              <option>Stripe Instant Payout</option>
            </select>
          </div>

          {/* Processing Info */}
          <div className="mt-8 bg-[#EEE8F8] border border-[#D8CFF4] rounded-3xl p-6">
            <div className="flex gap-3 items-start">
              <FiAlertCircle className="text-[#6D28D9] text-xl mt-1" />

              <div>
                <h3 className="text-[#4C1D95] font-semibold">
                  Processing Time
                </h3>

                <p className="text-[#6D28D9] mt-2 leading-7">
                  Withdrawals are typically processed within 24 hours.
                  The time to reach your account depends on the
                  method selected.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center gap-4 mt-10">
            <button className="flex-1 flex items-center justify-center gap-1 px-4 py-3 text-sm rounded-full text-white font-semibold bg-gradient-to-r from-[#79D0A5] to-[#9F8DEB] shadow-lg">
              <FiCreditCard />
              Confirm Withdrawal
            </button>

            <button
              onClick={onClose}
              className="px-4 py-3 rounded-full bg-[#ECECF2] text-gray-500 font-semibold"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WithdrawFundModal146;