// 151. Social Links Section
function SocialLinksSection151() {
  return (
    <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs transition-colors duration-300">
      <h3 className="text-slate-850 dark:text-white text-lg font-bold mb-5">Social Links</h3>
      
      <div className="space-y-4">
        {/* GitHub */}
        <div className="space-y-1.5">
          <label className="block text-slate-550 dark:text-slate-400 font-semibold text-sm">GitHub</label>
          <input
            type="text"
            defaultValue="https://github.com/username"
            placeholder="https://github.com/username"
            className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#672AC9]/20 focus:border-[#672AC9] transition-all duration-200"
          />
        </div>

        {/* LinkedIn */}
        <div className="space-y-1.5">
          <label className="block text-slate-550 dark:text-slate-400 font-semibold text-sm">LinkedIn</label>
          <input
            type="text"
            defaultValue="https://linkedin.com/in/johnanderson"
            placeholder="https://linkedin.com/in/johnanderson"
            className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-200"
          />
        </div>

        {/* Twitter */}
        <div className="space-y-1.5">
          <label className="block text-slate-550 dark:text-slate-400 font-semibold text-sm">Twitter</label>
          <input
            type="text"
            defaultValue="https://twitter.com/johnanderson"
            placeholder="https://twitter.com/johnanderson"
            className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-200"
          />
        </div>

        {/* Website */}
        <div className="space-y-1.5">
          <label className="block text-slate-550 dark:text-slate-400 font-semibold text-sm">Website</label>
          <input
            type="text"
            defaultValue="https://johnanderson.com"
            placeholder="https://johnanderson.com"
            className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialLinksSection151;
