import React, { useState } from "react";

function BasicInformationCard149() {
  const [formData, setFormData] = useState({
    fullName: "John Anderson",
    username: "johnanderson",
    email: "johnanderson@company.com",
    phone: "+1 (555) 123-4567",
    bio: "Experienced project manager and tech enthusiast. Looking to build great products with talented freelancers.",
    location: "San Francisco, CA",
    company: "Tech Startup Inc.",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="w-full max-w-md bg-[#1E293B] rounded-3xl p-6 shadow-lg">
      {/* Title */}
      <h2 className="text-white text-xl font-bold mb-6">
        Basic Information
      </h2>

      {/* Full Name */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full bg-[#233248] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none"
        />
      </div>

      {/* Username */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full bg-[#233248] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none"
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#233248] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none"
        />
      </div>

      {/* Phone */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-[#233248] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none"
        />
      </div>

      {/* Bio */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Bio
        </label>
        <textarea
          rows="4"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full bg-[#0F172A] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none resize-none"
        />
      </div>

      {/* Location */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full bg-[#233248] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none"
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-[#233248] border border-[#2F405A] rounded-2xl px-4 py-3 text-white outline-none"
        />
      </div>
    </div>
  );
}

export default BasicInformationCard149;