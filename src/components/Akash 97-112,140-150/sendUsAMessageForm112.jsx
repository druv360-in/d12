import React from "react";
import { FiSend } from "react-icons/fi";

function SendUsAMessageForm112() {
  return (
    <div className="w-full max-w-sm bg-[#1E293B] rounded-3xl p-6 shadow-lg">
      {/* Heading */}
      <h2 className="text-white text-2xl font-bold mb-6">
        Send us a Message
      </h2>

      {/* Name */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Your Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-4 py-4 text-white placeholder-gray-500 outline-none focus:border-[#6D6AFF]"
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-4 py-4 text-white placeholder-gray-500 outline-none focus:border-[#6D6AFF]"
        />
      </div>

      {/* Subject */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Subject
        </label>
        <input
          type="text"
          placeholder="How can we help?"
          className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-4 py-4 text-white placeholder-gray-500 outline-none focus:border-[#6D6AFF]"
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-gray-300 text-sm mb-2">
          Category
        </label>

        <select
          className="w-full bg-[#0F172A] border border-[#2C3A4F] rounded-2xl px-4 py-4 text-white outline-none focus:border-[#6D6AFF]"
          defaultValue="General Inquiry"
        >
          <option>General Inquiry</option>
          <option>Students Freelance Support</option>
          <option>Client Support</option>
          <option>Payment Issues</option>
          <option>Technical Support</option>
          <option>Report a Problem</option>
          <option>Partnership Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-gray-300 text-sm mb-2">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Tell us more about your question or concern..."
          className="w-full bg-[#0F172A] border border-[#2C3A4F] rounded-2xl px-4 py-4 text-white placeholder-gray-500 resize-none outline-none focus:border-[#6D6AFF]"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#A020F0] text-white text-xl font-semibold hover:opacity-90 transition">
        <FiSend />
        Send Message
      </button>
    </div>
  );
}

export default SendUsAMessageForm112;