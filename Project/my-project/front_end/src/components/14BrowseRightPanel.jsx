import { Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const providers = [
  {
    id: 1,
    name: "Emma Thompson",
    university: "Stanford University",
    avatar: "https://i.pravatar.cc/100?img=47",
    title: "Professional Web Developer",
    category: "Coding",
    rating: 4.9,
    reviews: 45,
    reviewsData: [],
    projects: 78,
    about:
      "Full-stack developer passionate about creating beautiful and functional web applications.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 2,
    name: "Marcus Johnson",
    university: "MIT",
    avatar: "https://i.pravatar.cc/100?img=11",
    title: "Professional Graphic Designer",
    category: "Graphic Design",
    rating: 4.8,
    reviews: 67,
    reviewsData: [],
    projects: 91,
    about:
      "Creative graphic designer specializing in branding, visual identity and modern web design.",
    skills: ["Logo Design", "Branding", "UI Design"],
  },

  {
    id: 3,
    name: "Sophia Chen",
    university: "UC Berkeley",
    avatar: "https://i.pravatar.cc/100?img=32",
    title: "Professional Video Editor",
    category: "Video Editing",
    rating: 5,
    reviews: 89,
    reviewsData: [],
    projects: 105,
    about:
      "Professional video editor creating engaging and high-quality videos for brands and creators.",
    skills: ["Video Editing", "YouTube", "Reels"],
  },

  {
    id: 4,
    name: "Alex Rivera",
    university: "NYU",
    avatar: "https://i.pravatar.cc/100?img=12",
    title: "Social Media Specialist",
    category: "Social Media",
    rating: 4.7,
    reviews: 34,
    reviewsData: [],
    projects: 64,
    about:
      "Digital marketing strategist helping brands grow their online presence. Data-driven approach with creative execution.",
    skills: ["Instagram", "Marketing", "Growth"],
  },
];

const trendingServices = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    title: "Modern Website Development",
    rating: 4.9,
    price: 299,
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1574717024453-3540567c8a23?w=800",
    title: "Social Media Video Editing",
    rating: 5,
    price: 99,
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    title: "Instagram Growth Strategy",
    rating: 4.7,
    price: 199,
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    title: "Professional Logo Design",
    rating: 4.8,
    price: 149,
  },
];

function BrowseRightPanel() {
  const navigate = useNavigate();

  // =====================================================
  // OPEN FREELANCER PROFILE
  // =====================================================

  const openProfile = (provider) => {
    navigate(`/profile/${provider.id}`, {
      state: {
        freelancer: provider,
      },
    });
  };

  // =====================================================
  // OPEN SERVICE DETAILS
  // =====================================================

  const openService = (service) => {
    navigate("/service-details", {
      state: {
        service: service,
      },
    });
  };

  return (
    <aside className="w-full bg-white border-l border-gray-200">

      {/* =====================================================
          PROFILE
      ===================================================== */}

      <div className="px-5 py-5 border-b border-gray-200">

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="John Doe"
            className="
              w-11
              h-11
              rounded-full
              object-cover
              border-2
              border-purple-600
            "
          />

          <div>

            <h3 className="text-sm font-bold text-gray-900">
              John Doe
            </h3>

            <button
              onClick={() => navigate("/profile")}
              className="
                text-xs
                text-gray-500
                hover:text-purple-600
                transition
              "
            >
              View Profile
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="grid grid-cols-2 gap-3 px-5 py-5">

        <div
          className="
            rounded-2xl
            bg-purple-50
            border
            border-purple-200
            p-4
          "
        >

          <p className="text-xs text-gray-500">
            Active Projects
          </p>

          <p className="text-xl font-bold text-purple-700 mt-2">
            12
          </p>

        </div>


        <div
          className="
            rounded-2xl
            bg-purple-50
            border
            border-purple-200
            p-4
          "
        >

          <p className="text-xs text-gray-500">
            Total Spent
          </p>

          <p className="text-xl font-bold text-purple-700 mt-2">
            ₹2.4k
          </p>

        </div>

      </div>


      {/* =====================================================
          TRENDING PROVIDERS
      ===================================================== */}

      <div className="px-5">

        <div className="flex items-center gap-2 mb-5">

          <TrendingUp
            size={20}
            className="text-purple-600"
          />

          <h2 className="text-lg font-bold text-gray-900">
            Trending Providers
          </h2>

        </div>


        <div className="space-y-3">

          {providers.map((provider) => (

            <div
              key={provider.id}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                p-2
                -mx-2
                hover:bg-gray-50
                transition
              "
            >

              {/* AVATAR */}

              <img
                src={provider.avatar}
                alt={provider.name}
                className="
                  w-10
                  h-10
                  rounded-full
                  object-cover
                  shrink-0
                "
              />


              {/* PROVIDER DETAILS */}

              <div className="flex-1 min-w-0">

                {/* CLICK NAME */}

                <p
                  onClick={() => openProfile(provider)}
                  className="
                    font-semibold
                    text-sm
                    text-gray-900
                    truncate
                    cursor-pointer
                    hover:text-purple-600
                    transition
                  "
                >
                  {provider.name}
                </p>

                <p
                  className="
                    text-xs
                    text-gray-500
                    truncate
                  "
                >
                  {provider.university}
                </p>

              </div>


              {/* STAR */}

              <Star
                size={15}
                fill="#d4af37"
                color="#d4af37"
                className="shrink-0"
              />

            </div>

          ))}

        </div>

      </div>


      {/* =====================================================
          TRENDING SERVICES
      ===================================================== */}

      <div className="px-5 mt-10 pb-8">

        <h2 className="text-lg font-bold text-gray-900 mb-5">
          Trending Services
        </h2>


        <div className="space-y-5">

          {trendingServices.map((service) => (

            <div
              key={service.id}
              onClick={() => openService(service)}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                cursor-pointer
              "
            >

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-24
                  object-cover
                "
              />


              <div className="p-3">

                <p
                  className="
                    font-semibold
                    text-sm
                    text-gray-900
                    line-clamp-2
                  "
                >
                  {service.title}
                </p>


                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-3
                  "
                >

                  <div className="flex items-center gap-1">

                    <Star
                      size={14}
                      fill="#d4af37"
                      color="#d4af37"
                    />

                    <span className="text-xs text-gray-600">
                      {service.rating}
                    </span>

                  </div>


                  <span className="text-sm font-bold text-purple-700">
                    ₹{service.price}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </aside>
  );
}

export default BrowseRightPanel;