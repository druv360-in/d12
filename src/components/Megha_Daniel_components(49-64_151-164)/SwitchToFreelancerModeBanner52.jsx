
// 51. Switch to Freelancer Mode Banner
function SwitchToFreelancerModeBanner({ isFreelancerMode, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="m-4 flex w-[calc(100%-2rem)] cursor-pointer items-center gap-3 rounded-xl bg-[#672AC9] p-4 text-left transition-all duration-300 hover:opacity-90"
    >
      <div className="rounded-lg p-2 shrink-0 bg-white/90 text-[#672AC9]">
        {isFreelancerMode ? (
          // Client mode icon (users)
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ) : (
          // Freelancer mode icon (briefcase)
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 4h16a1 1 0 011 1v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a1 1 0 011-1z" />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-semibold text-sm">
          {isFreelancerMode ? "Switch to Client Mode" : "Switch to Freelancer Mode"}
        </h3>
        <p className="text-purple-100 text-xs">
          {isFreelancerMode ? "Hire freelancers & manage projects" : "Manage gigs & earn money"}
        </p>
      </div>
      <span className="rounded-full p-1 bg-white/90 text-[#672AC9]">
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
}
export default SwitchToFreelancerModeBanner;
