import React, { useState } from "react";
import { RefreshCw, Lock, Shield, TrendingUp, CreditCard, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

const SeventySixComponent = ({ onDispute }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl mx-4 mt-4 shadow-sm border border-gray-100 overflow-hidden">
      {/* Header - Clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-bold text-gray-900">Refund Policy & Information</h2>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* FAQ Content - Shows when open */}
      {isOpen && (
        <div className="px-5 pt-4 pb-2">
          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">When can I request a refund?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You may request a refund at any point before releasing a milestone payment. Once released, funds cannot be recovered.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">How does SkillBuster handle disputes?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team reviews all dispute cases within 3–5 business days. We examine deliverables, communication, and agreements to decide fairly.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">What qualifies for a refund?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Non-delivery, work that significantly differs from agreed scope, or communication failure after payment. Subjective dissatisfaction alone is not sufficient.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">How long does a refund take?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Approved refunds are processed within 7–10 business days to your original payment method.
              </p>
            </div>

            {/* Dispute Button */}
            <button
              onClick={onDispute}
              className="w-full bg-rose-50 hover:bg-rose-100 border-rose-200 text-red-600 font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition"
            >
              <AlertCircle className="w-5 h-5" />
              Raise a Dispute / Refund Request
            </button>
          </div>
        </div>
      )}

      {/* Always Visible: Security Cards + Card Info */}
      <div className="px-5 pb-5 pt-4">
        {/* 3 Security Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-violet-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <Lock className="w-6 h-6 text-violet-700 mb-2" />
            <p className="text-xs font-semibold text-gray-600">SSL Encrypted</p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <Shield className="w-6 h-6 text-emerald-600 mb-2" />
            <p className="text-xs font-semibold text-gray-600">Escrow Protected</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <TrendingUp className="w-6 h-6 text-amber-600 mb-2" />
            <p className="text-xs font-semibold text-gray-600">Dispute Cover</p>
          </div>
        </div>

        {/* Payment Card */}
        <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-violet-700 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Visa — expires 08/27</p>
            </div>
          </div>
          <button className="text-violet-700 font-semibold text-sm">Change</button>
        </div>
      </div>
    </div>
  );
};

export default SeventySixComponent;