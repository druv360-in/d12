import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import ServiceCard13 from "./13ServiceCard";

function BrowseServices12() {
  const navigate = useNavigate();

  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=12",
      seller: "You",
      university: "Your Gig",
      title:
        "I will design a modern, responsive website UI in Figma",
      category: "Graphic Design",
      tags: [
        "figma",
        "ui design",
        "web design",
      ],
      rating: 4.9,
      reviews: 11,
      days: 3,
      price: 2500,
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=15",
      seller: "You",
      university: "Your Gig",
      title:
        "I will create professional video edits for YouTube and social media",
      category: "Video Editing",
      tags: [
        "video editing",
        "youtube",
        "reels",
      ],
      rating: 4.8,
      reviews: 22,
      days: 2,
      price: 1500,
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=22",
      seller: "You",
      university: "Your Gig",
      title:
        "I will build a full-stack web app using React and Node",
      category: "Coding",
      tags: [
        "react",
        "nodejs",
        "full stack",
      ],
      rating: 5,
      reviews: 7,
      days: 7,
      price: 5000,
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=47",
      seller: "Emma Thompson",
      university: "Stanford University",
      title:
        "Modern Website Development",
      category: "Coding",
      tags: [
        "React",
        "Tailwind",
        "Responsive",
      ],
      rating: 4.9,
      reviews: 45,
      days: 5,
      price: 299,
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=11",
      seller: "Marcus Johnson",
      university: "MIT",
      title:
        "Professional Logo Design",
      category: "Graphic Design",
      tags: [
        "Branding",
        "Logo",
        "Identity",
      ],
      rating: 4.8,
      reviews: 67,
      days: 3,
      price: 149,
    },

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1574717024453-3540567c8a23?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=32",
      seller: "Sophia Chen",
      university: "UC Berkeley",
      title:
        "Social Media Video Editing",
      category: "Video Editing",
      tags: [
        "Video",
        "Social Media",
        "Editing",
      ],
      rating: 5,
      reviews: 89,
      days: 2,
      price: 99,
    },

    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=12",
      seller: "Alex Rivera",
      university: "NYU",
      title:
        "Instagram Growth Strategy",
      category: "Social Media",
      tags: [
        "Instagram",
        "Growth",
        "Strategy",
      ],
      rating: 4.7,
      reviews: 34,
      days: 7,
      price: 199,
    },

    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=47",
      seller: "Emma Thompson",
      university: "Stanford University",
      title:
        "Custom Web Application",
      category: "Coding",
      tags: [
        "Full-Stack",
        "Database",
        "Authentication",
      ],
      rating: 4.9,
      reviews: 28,
      days: 10,
      price: 599,
    },

    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      avatar:
        "https://i.pravatar.cc/100?img=11",
      seller: "Marcus Johnson",
      university: "MIT",
      title:
        "UI/UX Design for Mobile App",
      category: "Graphic Design",
      tags: [
        "UI/UX",
        "Mobile",
        "Prototype",
      ],
      rating: 4.8,
      reviews: 41,
      days: 7,
      price: 399,
    },
  ];


  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [
    {
      name: "Video Editing",
      icon: "🎬",
    },

    {
      name: "Graphic Design",
      icon: "🎨",
    },

    {
      name: "Coding",
      icon: "💻",
    },

    {
      name: "Content Writing",
      icon: "✍️",
    },

    {
      name: "Social Media",
      icon: "📱",
    },

    {
      name: "Digital Marketing",
      icon: "📊",
    },
  ];


  const [selectedCategory, setSelectedCategory] =
    useState("All");


  // =====================================================
  // FILTER
  // =====================================================

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter(
          (service) =>
            service.category === selectedCategory
        );


  // =====================================================
  // OPEN SERVICE
  // =====================================================

  const openService = (service) => {
    if (service.seller === "You") {
      return;
    }

    navigate("/service-details", {
      state: {
        service: service,
      },
    });
  };


  return (
    <div className="w-full min-h-screen bg-white">

  {/* =================================================
    STICKY BROWSE HEADER
================================================= */}

<div
  className="
    sticky
    top-0
    z-40

    w-full

    bg-white

    border-b
    border-gray-200

    shadow-[0_6px_18px_rgba(0,0,0,0.06)]
  "
>
  <div
    className="
      w-full

      px-5
      py-6

      sm:px-7

      lg:px-10
    "
  >

    {/* =================================================
        HEADING
    ================================================= */}

    <h1
      className="
        mb-6

        text-4xl
        font-bold

        text-gray-900
      "
    >
      Browse Services
    </h1>


    {/* =================================================
        SEARCH + FILTER
    ================================================= */}

    <div
      className="
        mb-6

        flex
        gap-4
      "
    >

      {/* SEARCH */}

      <div
        className="
          flex

          h-14

          flex-1

          items-center

          rounded-xl

          border
          border-gray-200

          bg-[#F1F3F5]

          px-5

          shadow-[0_8px_18px_rgba(0,0,0,0.15)]

          transition-all
          duration-300

          focus-within:-translate-y-1

          focus-within:shadow-[0_15px_30px_rgba(0,0,0,0.20)]
        "
      >

        <Search
          size={23}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search for services..."
          className="
            ml-4

            w-full

            bg-transparent

            text-base

            text-gray-900

            outline-none

            placeholder:text-gray-400
          "
        />

      </div>


      {/* FILTER */}

      <button
        className="
          flex

          h-14

          items-center
          justify-center

          gap-3

          rounded-xl

          border
          border-gray-200

          bg-[#F1F3F5]

          px-6

          text-base
          font-medium
          text-gray-700

          shadow-[0_8px_18px_rgba(0,0,0,0.15)]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1

          hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]
        "
      >

        <SlidersHorizontal size={21} />

        <span>
          Filters
        </span>

      </button>

    </div>


    {/* =================================================
        CATEGORY BUTTONS
    ================================================= */}

   <div
  className="
    flex
    gap-4
    overflow-x-auto
    pb-2
  "
>

      {/* ALL */}

      <button
        onClick={() =>
          setSelectedCategory("All")
        }
        className={`
          shrink-0

          rounded-xl

          px-7
          py-3.5

          text-base
          font-semibold

          whitespace-nowrap

          transition-all
          duration-300

          ${
            selectedCategory === "All"
              ? `
                bg-purple-600
                text-white

                -translate-y-1

                shadow-[0_10px_22px_rgba(124,58,237,0.35)]
              `
              : `
                bg-[#F1F3F5]
                text-gray-700

                shadow-[0_8px_18px_rgba(0,0,0,0.14)]

                hover:-translate-y-1

                hover:shadow-[0_15px_28px_rgba(0,0,0,0.20)]
              `
          }
        `}
      >
        All
      </button>


      {/* CATEGORIES */}

      {categories.map((category) => (

        <button
          key={category.name}
          onClick={() =>
            setSelectedCategory(
              category.name
            )
          }
          className={`
            flex

            shrink-0

            items-center

            gap-2.5

            rounded-xl

            px-7
            py-3.5

            text-base
            font-semibold

            whitespace-nowrap

            transition-all
            duration-300

            ${
              selectedCategory === category.name
                ? `
                  bg-purple-600
                  text-white

                  -translate-y-1

                  shadow-[0_10px_22px_rgba(124,58,237,0.35)]
                `
                : `
                  bg-[#F1F3F5]
                  text-gray-700

                  shadow-[0_8px_18px_rgba(0,0,0,0.14)]

                  hover:-translate-y-1

                  hover:shadow-[0_15px_28px_rgba(0,0,0,0.20)]
                `
            }
          `}
        >

          <span className="text-base">
            {category.icon}
          </span>

          {category.name}

        </button>

      ))}

    </div>


    {/* =================================================
        COUNT
    ================================================= */}

    <p
      className="
        mt-4

        text-base
        font-medium

        text-gray-500
      "
    >
      {filteredServices.length} services found
    </p>

  </div>
</div>


      {/* =================================================
          SERVICES
      ================================================= */}

      <div
        className="
          w-full

          bg-white

          px-5
          py-8

          sm:px-6

          lg:px-8
        "
      >

        <div
          className="
            grid

            grid-cols-1

            gap-7

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {filteredServices.map(
            (service) => (

              <ServiceCard13
                key={service.id}
                {...service}
                onClick={() =>
                  openService(service)
                }
              />

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default BrowseServices12;