import { Zap, CheckCircle } from "lucide-react";

export default function Stat25({ onUpgrade = () => {} }) {
  const benefits = [
    "Priority customer support",
    "Featured project listings", 
    "Advanced analytics",
    "Unlimited team members"
  ];

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl p-5 text-white shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Zap size={20} className="text-white fill-white" />
          <h3 className="text-lg font-bold text-white">Upgrade to Pro</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-purple-100 mb-4 leading-relaxed">
          Get priority support, featured project listings, and access to top-rated freelancers.
        </p>

        {/* Benefits List */}
        <div className="space-y-2 mb-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-purple-200 flex-shrink-0" />
              <span className="text-sm text-white">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          onClick={onUpgrade}
          className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl hover:bg-purple-50 transition-colors"
        >
          Upgrade Now
        </button>
      </div>
    </section>
  );
}
