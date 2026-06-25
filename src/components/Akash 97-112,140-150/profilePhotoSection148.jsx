import React from "react";
import { FiCamera } from "react-icons/fi";

function ProfilePhotoSection148() {
  return (
    <div className="w-full max-w-md bg-[#1E293B] text-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">
        Profile Photo
      </h2>

      <div className="flex items-center gap-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-3xl object-cover"
          />

          {/* Camera Button */}
          <button className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-lg shadow-lg hover:bg-[#5558E8] transition">
            <FiCamera />
          </button>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-300 leading-relaxed">
            Upload a new
            <br />
            profile photo.
            <br />
            Recommended
            <br />
            size: 400x400px
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePhotoSection148;