// tempreview32.jsx
import React from "react";
import { Star } from "lucide-react";
import Tempreviewcard33 from "./tempreviewcard33";

const ratingData = [
  { stars: 5, percent: 80 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 5 },
  { stars: 1, percent: 5 },
];

const reviews = [
  {
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Sarah Johnson",
    date: "2 days ago",
    rating: 5,
    comment: "Amazing template! Saved me hours of work. The code quality is excellent and very easy to customize."
  },
  {
    avatar: "https://i.pravatar.cc/40?img=11",
    name: "Michael Chen", 
    date: "1 week ago",
    rating: 5,
    comment: "Best purchase I made this month. The documentation is clear and the design is beautiful."
  },
  {
    avatar: "https://i.pravatar.cc/40?img=5",
    name: "Jessica Williams",
    date: "2 weeks ago",
    rating: 4,
    comment: "Great template overall. Would love to see more color options, but the quality is top-notch."
  }
];

export default function Tempreview32() {
  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
        <div className="bg-amber-50 rounded-2xl p-4 mb-5">
          <div className="flex gap-6 items-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">4.9</p>
              <div className="flex gap-1 my-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-sm text-gray-500">342 reviews</p>
            </div>
            <div className="flex-1 space-y-1">
              {ratingData.map((item) => (
                <div key={item.stars} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600 w-10">{item.stars} star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                  </div>
                  <span className="text-gray-600 w-8 text-right">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <Tempreviewcard33 key={i} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}