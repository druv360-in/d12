import { Shield, CheckCircle } from "lucide-react";

export default function Stat26({ items }) {
  const defaultItems = [
    { label: "Verified Email", verified: true },
    { label: "Payment Method Added", verified: true },
    { label: "Profile Complete", verified: true },
  ];

  const trustItems = items || defaultItems;

  return (
    <section className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl p-5 shadow-sm border-gray-100">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Shield size={20} className="text-gray-700" />
          <h3 className="text-lg font-bold text-gray-900">Trust & Safety</h3>
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle 
                size={18} 
                className={item.verified ? "text-green-500" : "text-gray-300"} 
              />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
