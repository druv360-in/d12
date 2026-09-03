import React from "react";
import { Play, Calendar, ExternalLink } from "lucide-react";

// HARDCODED PROJECTS - so 11th file doesn't need changes
const PROJECTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    title: "Brand Campaign Video",
    description: "Created a 60-second promotional video for a tech startup, featuring dynamic transitions and motion graphics.",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    date: "March 2026"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    title: "Wedding Highlight Reel",
    description: "Edited a cinematic wedding video with color grading, audio mixing, and seamless storytelling.",
    tools: ["Final Cut Pro", "Color Finale", "Motion"],
    date: "February 2026"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    title: "Product Demo Video",
    description: "Produced an engaging product demonstration with text animations, background music, and voice-over.",
    tools: ["Adobe Premiere Pro", "Audition", "Photoshop"],
    date: "January 2026"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    title: "YouTube Channel Intro",
    description: "Designed and animated a custom intro for a gaming YouTube channel with 3D elements and sound design.",
    tools: ["After Effects", "Cinema 4D", "Audition"],
    date: "December 2025"
  },
];

function PortfolioCard45({
  image,
  title,
  description,
  tools = [],
  date,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      {/* Image with Play Button */}
      <div className="relative w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
            <Play size={24} className="text-purple-600 ml-1" fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text- font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-500 text- leading-[1.6] mb-4">{description}</p>

        {/* Tools */}
        {tools.length > 0 && (
          <div className="mb-4">
            <p className="text-gray-400 text- mb-2">Tools Used:</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-50 text-purple-700 text- font-medium rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer: Date + Button */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-1.5 text-gray-400 text-">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text- font-semibold rounded-full hover:opacity-90 transition">
            <ExternalLink size={14} />
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioList45() {
  return (
    <div className="mx-auto mt-6 w-full max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Past Work & Portfolio</h3>
        <span className="font-semibold text-purple-600">{PROJECTS.length} Projects</span>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <PortfolioCard45 key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
