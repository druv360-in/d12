import React from "react";

function Component138() {
  return (
    <div className="w-full m-4">
      
      {/* Outer Card Wrapper - Horizontal Layout */}
      <div className="w-full  bg-white rounded-2xl p-6 border border-[#f0f2f5] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left Side Content Block */}
        <div className="flex-1 space-y-4">
          
          {/* Title Row with "Video Editing" Badge inline */}
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-[#0f172a]">
              Need Professional Video Editor for YouTube Channel
            </h2>
            <span className="bg-[#f3effc] text-[#7c3aed] text-xs px-3 py-1 rounded-full font-medium tracking-wide">
              Video Editing
            </span>
          </div>

          {/* Job Description Text */}
          <p className="text-sm text-[#64748b] font-normal leading-relaxed max-w-3xl">
            Looking for an experienced video editor to edit 4 videos per month for
            my tech review channel. Must be proficient in Adobe Premiere Pro and
            After Effects.
          </p>

          {/* Skill Tag Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="bg-[#f1f5f9] text-[#64748b] text-xs px-3 py-1.5 rounded-full font-medium">
              Premiere Pro
            </span>
            <span className="bg-[#f1f5f9] text-[#64748b] text-xs px-3 py-1.5 rounded-full font-medium">
              After Effects
            </span>
            <span className="bg-[#f1f5f9] text-[#64748b] text-xs px-3 py-1.5 rounded-full font-medium">
              Color Grading
            </span>
          </div>

          {/* Inline Icon Meta Information Footer */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-[#64748b] font-medium">
            
            {/* Price Indicator */}
            <div className="flex items-center gap-1.5">
              <span className="text-base text-[#475569] font-normal">$</span>
              <span className="text-[#334155] font-semibold">₹400-600</span>
            </div>

            {/* Time Posted Indicator */}
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Posted 2 hours ago</span>
            </div>

            {/* Proposal Count Indicator */}
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>12 proposals</span>
            </div>

            {/* Expiry / Due Date Indicator */}
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Due in 5 days</span>
            </div>

          </div>
        </div>

        {/* Right Side Buttons Layout */}
        <div className="flex flex-col w-full md:w-48 gap-3 self-stretch md:self-center justify-center">
          
          {/* Submit Proposal Primary Button */}
          <button className="w-full py-2.5 rounded-xl bg-[#6d28d9] hover:bg-[#5b21b6] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>      
            Submit Proposal
          </button>

          {/* View Details Secondary Button */}
          <button className="w-full py-2.5 rounded-xl bg-[#f5f3ff] hover:bg-[#ede9fe] text-[#4f46e5] text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View Details
          </button>

        </div>

      </div>
    </div>
  );
}

export default Component138;