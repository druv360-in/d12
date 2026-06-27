import { Star } from "lucide-react";

function TopFreelancerCard10({ freelancer }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3 shadow-sm">
      <img
        src={freelancer.avatar}
        alt={freelancer.name}
        className="w-[52px] h-[52px] rounded-lg object-cover shrink-0"
      />

      <div className="flex-1 flex justify-between items-start gap-2 min-w-0">
        <div className="flex-1 min-w-0">
          <h4 className="text-[16px] font-semibold text-gray-900 leading-[1.3]">
            {freelancer.name}
          </h4>

          <p className="text-[13px] text-gray-500 mb-2">
            {freelancer.university}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[13px] text-gray-600 font-medium">
              <Star
                size={14}
                fill="#fbbf24"
                color="#fbbf24"
              />
              <span>{freelancer.rating}</span>
            </div>

            <div className="text-[13px] text-gray-600 font-medium">
              {freelancer.projects} projects
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end shrink-0 pt-[2px]">
          <span className="text-[12px] text-gray-400">
            From
          </span>

          <span className="text-[16px] font-bold text-purple-600">
            ${freelancer.rate}/hr
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopFreelancerCard10;