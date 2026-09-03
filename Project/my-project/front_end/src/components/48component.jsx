import React from "react";
import { Star, MapPin } from "lucide-react";

export default function ProfileCard48({
  name = "Emma Thompson",
  field = "Computer Science",
  university = "Stanford University",
  image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80",
  rating = 4.9,
  projects = 89,
  reviews = 127,
  about = "Full-stack developer passionate about creating beautiful and functional web applications. 3 years of experience in modern web technologies.",
  skills = ["React", "Node.js", "Python", "UI/UX"]
}) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">

      {/* 1. PURPLE CARD SECTION */}
      <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-purple-700 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex items-start gap-4">
          <img
            src={image}
            alt={name}
            className="h-24 w-24 shrink-0 rounded-2xl border-[3px] border-white/30 object-cover"
          />
          <div className="flex-1 pt-1 min-w-0">
            <h2 className="text-xl font-bold leading-[1.2] text-gray-900">{name}</h2>
            <p className="mt-1 text-sm text-white/90">{field}</p>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-white/90">
              <MapPin size={15} strokeWidth={2.5} />
              <span>{university}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/15 backdrop-blur-sm rounded-2xl mt-5 p-4 flex justify-between items-center">
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-1.5">
              <Star size={18} fill="#facc15" color="#facc15" strokeWidth={0} />
              <span className="text-white text- font-bold">{rating}</span>
            </div>
            <p className="text-white/80 text- mt-1">Rating</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center flex-1">
            <p className="text-white text- font-bold">{projects}</p>
            <p className="text-white/80 text- mt-1">Projects</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center flex-1">
            <p className="text-white text- font-bold">{reviews}</p>
            <p className="text-white/80 text- mt-1">Reviews</p>
          </div>
        </div>
      </div>

      {/* 2. ABOUT ME SECTION <-- HERE */}
      {about && (
        <div className="mt-6 px-1">
          <h3 className="text- font-bold text-gray-900 mb-3">About Me</h3>
          <p className="text-gray-500 text- leading-[1.6]">
            {about}
          </p>
        </div>
      )}

      {/* 3. SKILLS SECTION <-- HERE */}
      {skills && skills.length > 0 && (
        <div className="mt-6 px-1 pb-6">
          <h3 className="text- font-bold text-gray-900 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
