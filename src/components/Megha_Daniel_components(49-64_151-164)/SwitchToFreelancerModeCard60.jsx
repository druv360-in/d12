// 60. Switch to Freelancer Mode Card
function SwitchToFreelancerModeCard() {
  return (
    <div className="bg-white dark:bg-[#1E2835] border border-slate-100 dark:border-transparent rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-md dark:hover:shadow-none shadow-xs transition-all duration-300">
      <div className="bg-violet-600 rounded-xl p-3 text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 4h16a1 1 0 011 1v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a1 1 0 011-1z" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Switch to Freelancer Mode</h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs">Manage gigs and earn money</p>
      </div>
      <svg className="w-5 h-5 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
export default SwitchToFreelancerModeCard;