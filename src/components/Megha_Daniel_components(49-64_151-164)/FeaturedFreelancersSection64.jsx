import FeaturedFreelancerCard from "./FeaturedFreelancerCard";

// 64. Featured Freelancers Section
function FeaturedFreelancersSection() {
  const freelancers = [
    { name: "Emma R.", role: "UI/UX Designer", school: "Stanford University", rate: "$35/hr", rating: 4.9, projects: 89, avatar: "https://i.pravatar.cc/100?img=47" },
    { name: "James K.", role: "Full Stack Developer", school: "MIT", rate: "$40/hr", rating: 4.8, projects: 76, avatar: "https://i.pravatar.cc/100?img=51" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-4 shadow-xs transition-colors duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-slate-850 dark:text-white font-bold flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
          </svg>
          Featured Freelancers
        </h3>
        <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full">⚡ Premium</span>
      </div>
      <div className="flex flex-col gap-3">
        {freelancers.map((f) => (
          <FeaturedFreelancerCard key={f.name} {...f} />
        ))}
      </div>
      <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-3">
        Featured listings get 5x more visibility. Want to feature your services?
      </p>
    </div>
  );
}
export default FeaturedFreelancersSection;
