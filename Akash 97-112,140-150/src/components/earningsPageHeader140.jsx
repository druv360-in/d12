import React, { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import WithdrawFundModal146 from "./withdrawFundModal146.jsx";

function EarningsPageHeader140() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState(
    "PayPal (2% fee, 2-3 days)"
  );

  return (
    <>
      {/* Earnings Card */}
      <div className="w-full max-w-md bg-[#F5F6F8] rounded-3xl p-4 shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-[#0F172A]">
          Earnings
        </h1>

        <p className="text-gray-600 text-md mt-4 leading-8">
          Manage your earnings and withdrawals
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-8 flex items-center gap-3 px-4 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#00C853] to-[#0066FF] shadow-lg"
        >
          <FiCreditCard className="text-md" />
          Withdraw Funds
        </button>
      </div>

      {/* Withdraw Modal */}
      <WithdrawFundModal146
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        amount={amount}
        setAmount={setAmount}
        method={method}
        setMethod={setMethod}
      />
    </>
  );
}

export default EarningsPageHeader140;