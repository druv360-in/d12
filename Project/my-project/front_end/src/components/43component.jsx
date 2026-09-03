import React from "react";
import {
  Star,
  MessageCircle,
  Clock3,
  CheckCircle,
} from "lucide-react";

export default function Component43({
  image = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  title = "Modern Website Development",
  price = 299,
  rating = 4.9,
  reviews = 45,
  freelancerImage = "https://randomuser.me/api/portraits/women/44.jpg",
  freelancerName = "Emma Thompson",
  profession = "Computer Science",
  university = "Stanford University",
  delivery = "5 days",
  orders = 45,
  about = "I will create a fully responsive, modern website using React and Tailwind CSS. Includes 5 pages, mobile optimization, and clean code.",
  tags = ["React", "Tailwind", "Responsive", "Modern"],
}) {
  return (
    <div className="px-4 pb-6">

      {/* Service Image */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="mt-5 text-2xl font-bold text-gray-900">
        {title}
      </h2>

      {/* Rating & Price */}
      <div className="flex justify-between items-end mt-3">
        <div>
          <div className="flex items-center gap-1 text-sm">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-semibold">{rating}</span>
            <span className="text-gray-400">
              ({reviews} reviews)
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">
            Starting at
          </p>
          <h3 className="text-4xl font-bold text-purple-700">
            ${price}
          </h3>
        </div>
      </div>

      {/* Seller Card */}
      <div className="mt-5 flex items-center justify-between rounded-2xl bg-purple-50 p-4">

        <div className="flex items-center gap-3">
          <img
            src={freelancerImage}
            alt={freelancerName}
            className="w-14 h-14 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-900">
              {freelancerName}
            </h3>

            <p className="text-sm text-gray-500">
              {profession}
            </p>

            <p className="text-xs text-gray-400">
              {university}
            </p>
          </div>
        </div>

        <button className="text-purple-700">
          <MessageCircle size={20} />
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-3 mt-5">

        <div className="bg-white rounded-2xl shadow-sm border p-4 text-center">
          <Clock3 className="mx-auto text-purple-600" size={20} />
          <p className="text-xs text-gray-400 mt-2">
            Delivery
          </p>
          <p className="font-bold mt-1">
            {delivery}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-4 text-center">
          <CheckCircle className="mx-auto text-green-600" size={20} />
          <p className="text-xs text-gray-400 mt-2">
            Orders
          </p>
          <p className="font-bold mt-1">
            {orders}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-4 text-center">
          <Star
            size={20}
            className="mx-auto fill-yellow-400 text-yellow-400"
          />
          <p className="text-xs text-gray-400 mt-2">
            Rating
          </p>
          <p className="font-bold mt-1">
            {rating}
          </p>
        </div>

      </div>

      {/* About */}
      <div className="mt-7">
        <h3 className="text-xl font-bold mb-3">
          About This Service
        </h3>

        <p className="text-gray-600 leading-7">
          {about}
        </p>
      </div>

      {/* Skills */}
      <div className="mt-7">
        <h3 className="text-xl font-bold mb-3">
          Skills & Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}