// template30.jsx
import React from "react";
import { CheckCircle2, Code2, Image as ImageIcon, FileText } from "lucide-react";

const features = [
  "Complete source code",
  "Responsive design for all devices", 
  "Well-documented and commented",
  "Easy customization",
  "Free updates for 6 months",
  "Email support included",
  "Commercial license",
  "Premium fonts included"
];

const includedFiles = [
  { icon: Code2, label: "HTML/CSS/JS", color: "text-purple-600" },
  { icon: ImageIcon, label: "Images & Icons", color: "text-emerald-600" },
  { icon: FileText, label: "Documentation", color: "text-purple-600" }
];

export default function Template30() {
  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-2xl shadow-sm p-5">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          <h2 className="text-xl font-bold text-gray-900">What's Included</h2>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-6">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 bg-violet-50 rounded-xl px-4 py-3"
            >
              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-900 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Included Files */}
        <div className="bg-violet-50 rounded-2xl p-4 border-violet-100">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Included Files:</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {includedFiles.map((file, i) => (
              <div key={i} className="flex items-center gap-2">
                <file.icon className={`w-5 h-5 ${file.color}`} />
                <span className="text-gray-600 text-sm">{file.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}