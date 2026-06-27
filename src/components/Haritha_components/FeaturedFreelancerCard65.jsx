import { Star, Zap } from "lucide-react";

function FeaturedFreelancerCard65() {
  const freelancers = [
    {
      id: 1,
      firstName: "Emma",
      lastName: "Thompson",
      school: "Stanford University",
      rating: 4.9,
      projects: 89,
      rate: "$35/hr",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      id: 2,
      firstName: "Marcus",
      lastName: "Johnson",
      school: "MIT",
      rating: 4.8,
      projects: 76,
      rate: "$40/hr",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2 text-slate-800 text-base font-bold">
          <Star size={18} color="#f59e0b" strokeWidth={2} />
          <span>Featured Freelancers</span>
        </div>

        <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
          <Zap size={14} color="#92400e" strokeWidth={2.5} />
          <span>Premium</span>
        </div>
      </div>

      {/* Freelancer list */}
      <div className="flex flex-col gap-2.5 mb-3">
        {freelancers.map((freelancer) => (
          <div
            key={freelancer.id}
            className="bg-yellow-50 border-[1.5px] border-yellow-300 rounded-xl p-3 flex gap-3 items-start"
          >
            {/* Avatar */}
            <div className="relative shrink-0">
              <img
                src={freelancer.avatar}
                alt={freelancer.firstName}
                className="w-12 h-12 rounded-[10px] object-cover block"
              />

              <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-amber-400 rounded-full flex items-center justify-center border-2 border-yellow-50">
                <Star size={10} fill="#fff" color="#fff" />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-1 justify-between gap-2 min-w-0 items-start">
              <div className="flex-1 min-w-0">
                <div className="text-slate-900 text-[15px] font-bold leading-tight mb-0.5">
                  <div>{freelancer.firstName}</div>
                  <div>{freelancer.lastName}</div>
                </div>

                <p className="text-slate-400 text-xs mb-1 leading-tight">
                  {freelancer.school}
                </p>

                <div className="flex items-center gap-1 text-xs">
                  <Star size={12} fill="#f59e0b" color="#f59e0b" />
                  <span className="text-slate-600 font-semibold">
                    {freelancer.rating}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-medium">
                    {freelancer.projects} projects
                  </span>
                </div>
              </div>

              {/* Rate */}
              <div className="shrink-0 text-violet-600 text-[15px] font-bold pt-0.5">
                {freelancer.rate}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-slate-400 text-xs text-center leading-snug">
        Featured listings get 5x more visibility. Want to feature your services?
      </p>
    </div>
  );
}

export default FeaturedFreelancerCard65;