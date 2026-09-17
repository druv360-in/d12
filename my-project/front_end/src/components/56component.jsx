import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FiftySevenComponent from "./57component.jsx";

const FiftySixComponent = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  // =====================================================
  // REQUESTED FREELANCERS
  // =====================================================

  const [requestedIds, setRequestedIds] = useState([]);

  // =====================================================
  // SUCCESS MESSAGE
  // =====================================================

  const [successMessage, setSuccessMessage] = useState(null);

  // =====================================================
  // FILTERS
  // =====================================================

  const filters = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Video Editing",
    "Content Writing",
    "Mobile Development",
    "Digital Marketing",
  ];

  // =====================================================
  // FREELANCERS
  // =====================================================

  const freelancers = [
    {
      id: 1,
      name: "Emma Thompson",
      university: "Stanford University",
      rating: 4.9,
      projects: 89,
      responseTime: "< 1hr",
      skills: ["React", "Node.js", "Python", "UI/UX"],
      price: 35,
      category: "Web Development",
      avatar:
        "https://i.pravatar.cc/80?img=1",

      about:
        "Full-stack developer specializing in modern web applications and scalable solutions.",

      reviews: 124,

      reviewsData: [],

      services: [
        {
          id: 1,
          title: "Full Stack Web Development",
          description:
            "Modern responsive web applications using React and Node.js.",
          price: 35,
        },
        {
          id: 2,
          title: "React Website Development",
          description:
            "Professional React websites with responsive design.",
          price: 35,
        },
      ],
    },

    {
      id: 2,
      name: "Marcus Johnson",
      university: "MIT",
      rating: 4.8,
      projects: 76,
      responseTime: "< 1hr",
      skills: [
        "Figma",
        "Adobe Creative Suite",
        "Branding",
        "UI Design",
      ],
      price: 40,
      category: "UI/UX Design",
      avatar:
        "https://i.pravatar.cc/80?img=2",

      about:
        "UI/UX designer focused on creating clean, intuitive and engaging digital experiences.",

      reviews: 98,

      reviewsData: [],

      services: [
        {
          id: 1,
          title: "UI/UX Design",
          description:
            "Modern and user-friendly UI/UX designs for websites and apps.",
          price: 40,
        },
        {
          id: 2,
          title: "Figma Website Design",
          description:
            "High-quality Figma designs for modern websites.",
          price: 40,
        },
      ],
    },

    {
      id: 3,
      name: "Sophia Chen",
      university: "UC Berkeley",
      rating: 5.0,
      projects: 112,
      responseTime: "< 1hr",
      skills: [
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Motion Graphics",
      ],
      price: 45,
      category: "Video Editing",
      avatar:
        "https://i.pravatar.cc/80?img=3",

      about:
        "Professional video editor specializing in creative video production and motion graphics.",

      reviews: 156,

      reviewsData: [],

      services: [
        {
          id: 1,
          title: "Professional Video Editing",
          description:
            "Professional editing for YouTube, social media and business videos.",
          price: 45,
        },
        {
          id: 2,
          title: "Motion Graphics",
          description:
            "Creative motion graphics and visual effects.",
          price: 45,
        },
      ],
    },

    {
      id: 4,
      name: "Alex Rivera",
      university: "NYU",
      rating: 4.7,
      projects: 64,
      responseTime: "< 1hr",
      skills: [
        "Social Media Strategy",
        "Content Creation",
        "SEO",
        "Analytics",
      ],
      price: 30,
      category: "Digital Marketing",
      avatar:
        "https://i.pravatar.cc/80?img=4",

      about:
        "Digital marketing specialist helping businesses grow through content, SEO and social media.",

      reviews: 87,

      reviewsData: [],

      services: [
        {
          id: 1,
          title: "Digital Marketing",
          description:
            "Complete digital marketing strategies for growing businesses.",
          price: 30,
        },
        {
          id: 2,
          title: "Social Media Management",
          description:
            "Professional social media strategy and content creation.",
          price: 30,
        },
      ],
    },
  ];

  // =====================================================
  // SEARCH + CATEGORY FILTER
  // =====================================================

  const filtered = freelancers.filter((freelancer) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      freelancer.name.toLowerCase().includes(searchText) ||
      freelancer.university.toLowerCase().includes(searchText) ||
      freelancer.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    const matchesCategory =
      activeFilter === "All" ||
      freelancer.category === activeFilter;

    return matchesSearch && matchesCategory;
  });

  // =====================================================
  // HIRE
  // =====================================================

  const handleHire = (freelancer) => {
    // Prevent duplicate request
    if (requestedIds.includes(freelancer.id)) {
      return;
    }

    setRequestedIds((previous) => [
      ...previous,
      freelancer.id,
    ]);

    // Show green success message
    setSuccessMessage(freelancer);

    // Hide after 5 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  // =====================================================
  // VIEW PROFILE
  // =====================================================

  const handleViewProfile = (freelancer) => {
    navigate(`/profile/${freelancer.id}`, {
      state: {
        freelancer,
      },
    });
  };

  // =====================================================
  // MESSAGE
  // =====================================================

  const handleMessage = (member) => {
    navigate("/chatnotfound", {
      state: {
        member,
      },
    });
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="w-full bg-white">

      {/* =================================================
          SEARCH
          ================================================= */}

      <div className="relative mb-4">

        <Search
          className="
            absolute
            left-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, skill, or university..."
          className="
            h-14
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            pl-12
            pr-4
            text-sm
            text-gray-900
            outline-none
            transition-all
            duration-300
            focus:border-violet-400
            focus:ring-4
            focus:ring-violet-100
          "
        />

      </div>


      {/* =================================================
          FILTERS
          ================================================= */}

      <div
        className="
          mb-4
          flex
          items-center
          gap-2
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >

        <Filter
          className="
            h-5
            w-5
            shrink-0
            text-gray-400
          "
        />

        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`
              shrink-0
              whitespace-nowrap
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                activeFilter === filter
                  ? `
                    bg-violet-700
                    text-white
                    shadow-[0_8px_18px_rgba(109,40,217,0.22)]
                  `
                  : `
                    border
                    border-gray-200
                    bg-[#F7F4FC]
                    text-gray-600
                    hover:-translate-y-0.5
                    hover:bg-violet-50
                    hover:text-violet-700
                  `
              }
            `}
          >
            {filter}
          </button>
        ))}

      </div>


      {/* =================================================
          COUNT
          ================================================= */}

      <p
        className="
          mb-4
          text-sm
          text-gray-500
        "
      >
        {filtered.length} freelancers available
      </p>


      {/* =================================================
          FREELANCER LIST
          ================================================= */}

      <div className="space-y-5">

        {filtered.map((freelancer) => (
          <FiftySevenComponent
            key={freelancer.id}
            freelancer={freelancer}
            requested={requestedIds.includes(
              freelancer.id
            )}
            onHire={handleHire}
            onViewProfile={handleViewProfile}
            onMessage={handleMessage}
          />
        ))}

      </div>


      {/* =================================================
          NO RESULTS
          ================================================= */}

      {filtered.length === 0 && (
        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-[#F8F6FB]
            px-6
            py-12
            text-center
          "
        >

          <p
            className="
              text-base
              font-semibold
              text-gray-700
            "
          >
            No freelancers found
          </p>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            Try another search or category.
          </p>

        </div>
      )}


      {/* =================================================
          GREEN SUCCESS POPUP
          ================================================= */}

      {successMessage && (
        <div
          className="
            fixed
            bottom-24
            left-1/2
            z-[100]
            w-[calc(100%-32px)]
            max-w-[360px]
            -translate-x-1/2

            rounded-2xl
            border
            border-green-200
            bg-[#42A36F]
            px-4
            py-4
            text-white

            shadow-[0_15px_35px_rgba(0,0,0,0.20)]

            animate-[fadeIn_0.3s_ease-out]
          "
        >

          <div className="flex items-center gap-3">

            {/* AVATAR */}

            <img
              src={successMessage.avatar}
              alt={successMessage.name}
              className="
                h-10
                w-10
                shrink-0
                rounded-full
                border-2
                border-white/40
                object-cover
              "
            />

            {/* MESSAGE */}

            <div className="min-w-0 flex-1">

              <p
                className="
                  text-sm
                  font-bold
                "
              >
                Request sent to{" "}
                {successMessage.name}!
              </p>

              <p
                className="
                  mt-0.5
                  text-xs
                  text-green-50
                "
              >
                Awaiting their response
              </p>

            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSuccessMessage(null)}
              className="
                shrink-0
                text-xl
                leading-none
                text-white/80
                transition
                hover:text-white
              "
            >
              ×
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default FiftySixComponent;