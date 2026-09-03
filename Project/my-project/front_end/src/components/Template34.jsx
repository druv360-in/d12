// Template34.jsx
import React from "react";
import { Star, Download, Eye, Zap, ShoppingCart, TrendingUp } from "lucide-react";

export default function Template34({ 
  price = "49",
  originalPrice = "99",
  rating = 4.9,
  sales = "342",
  views = "2.1k",
  tags = ["React", "Tailwind", "Template", "Business"]
}) {
  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-2xl shadow-sm p-5">
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-violet-700">₹{price}</span>
          <span className="text-xl text-gray-400 line-through">₹{originalPrice}</span>
        </div>

        {/* Offer Badge */}
        <div className="flex items-center gap-2 text-emerald-600 mb-5">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Save 50% - Limited Time Offer!</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-violet-50 rounded-2xl p-3 text-center">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-gray-900">{rating}</p>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
          <div className="bg-violet-50 rounded-2xl p-3 text-center">
            <Download className="w-5 h-5 text-violet-600 mx-auto mb-1" />
            <p className="text-lg font-bold text-gray-900">{sales}</p>
            <p className="text-xs text-gray-500">Sales</p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-3 text-center">
            <Eye className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <p className="text-lg font-bold text-gray-900">{views}</p>
            <p className="text-xs text-gray-500">Views</p>
          </div>
        </div>

        {/* Buttons */}
        <button className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 mb-3 shadow-lg shadow-violet-200">
          <Zap className="w-5 h-5" />
          Buy Now
        </button>
        
        <button className="w-full border-2 border-violet-700 text-violet-700 hover:bg-violet-50 font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 mb-6">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* License */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">License Information</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            This template comes with a commercial license. You can use it for personal and commercial projects.
          </p>
          <button className="text-violet-700 font-semibold text-sm">
            Read full license →
          </button>
        </div>

      </div>
    </div>
  );
}