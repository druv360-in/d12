import { Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FreelancerCard19 from "./FreelancerCard19";

function FeaturedFreelancers18() {
  const navigate = useNavigate();

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

  // ============================================================
  // NAVIGATE TO PROFILE DETAIL
  // ============================================================

  const handleFreelancerClick = (freelancer) => {
    // Always move the current page to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    navigate(`/profile/${freelancer.id}`, {
      state: {
        freelancer: {
          id: freelancer.id,
          name: `${freelancer.firstName} ${freelancer.lastName}`,
          field: "Computer Science",
          university: freelancer.school,
          avatar: freelancer.avatar,
          rating: freelancer.rating,
          projects: freelancer.projects,
          reviews: 127,
          about:
            "Full-stack developer passionate about creating beautiful and functional web applications. 3 years of experience in modern web technologies.",
          skills: ["React", "Node.js", "Python", "UI/UX"],
          hourlyRate: Number(
            freelancer.rate.replace("$", "").replace("/hr", "")
          ),
        },
      },
    });
  };

  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-sm">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3 text-xl font-bold text-slate-800">

          <Star
            size={24}
            className="text-yellow-500"
            fill="currentColor"
          />

          <span>
            Featured Freelancers
          </span>

        </div>


        {/* Premium Badge */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-amber-100
            px-4
            py-2
            text-sm
            font-semibold
            text-amber-800
          "
        >
          <Zap size={16} />

          <span>
            Premium
          </span>
        </div>

      </div>


      {/* =====================================================
          FREELANCER CARDS
      ====================================================== */}

      <div className="flex flex-col gap-4">

        {freelancers.map((freelancer) => (
          <FreelancerCard19
            key={freelancer.id}
            freelancer={freelancer}
            onClick={() => handleFreelancerClick(freelancer)}
          />
        ))}

      </div>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <p
        className="
          mt-5
          text-center
          text-sm
          text-slate-400
        "
      >
        Featured listings get 5× more visibility. Want to feature your
        services?
      </p>

    </div>
  );
}

export default FeaturedFreelancers18;