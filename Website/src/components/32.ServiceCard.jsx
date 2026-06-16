import React from 'react'
import Banner from '../assets/images/image6.jpg'
import Emma from '../assets/person/Emma.jpg'
function ServiceCard() {
  return (
    <div className="w-150 overflow-hidden rounded-3xl bg-[rgb(31,41,55)] text-white shadow-lg m-6 p-6">
      {/* Banner Image */}
      <img
        src={Banner}
        alt="Course Banner"
        className="h-64 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Creator */}
        <div className="flex items-center gap-4">
          <img
            src={Emma}
            alt="Emma Thompson"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-bold">Emma Thompson</h3>
            <p className="text-lg text-slate-400">Stanford University</p>
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-xl font-medium">
          Modern Website Development
        </h1>

        {/* Tags */}
        <div className="mt-6 flex gap-4">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-indigo-600">
            React
          </span>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-indigo-600">
            Tailwind
          </span>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-indigo-600">
            Responsive
          </span>
        </div>

        {/* Rating & Time */}
        <div className="mt-6 flex items-center gap-8 text-xl">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">4.9</span>
            <span className="text-slate-400">(45)</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🕒</span>
            <span>5 days</span>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Price */}
        <p className="text-3xl font-semibold text-indigo-600">
          Starting at $299
        </p>
      </div>
    </div>
  );
}

export default ServiceCard