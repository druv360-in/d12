// Featured Freelancer Card
function FeaturedFreelancerCard({ name, role, school, rate, rating, projects, avatar }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border-2 border-yellow-300 dark:border-yellow-600/30 bg-yellow-50/50 dark:bg-yellow-950/10 p-4 transition-colors duration-300">
      <div className="relative shrink-0">
        <img src={avatar} alt={name} className="h-16 w-16 rounded-xl object-cover" />
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 dark:bg-yellow-500 text-yellow-950 text-xs font-bold shadow-sm">
          ★
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-base font-bold text-slate-800 dark:text-yellow-100">{name}</h4>
        <p className="truncate text-sm text-slate-600 dark:text-slate-350">{role}</p>
        <p className="truncate text-xs text-slate-400 dark:text-slate-550">{school}</p>
        <div className="mt-1 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="text-base text-yellow-500">★</span>
          <span>{rating}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span>{projects} projects</span>
        </div>
      </div>

      <div className="shrink-0 text-lg font-bold text-[#672AC9] dark:text-[#672AC9]">{rate}</div>
    </div>
  );
}

export default FeaturedFreelancerCard;
