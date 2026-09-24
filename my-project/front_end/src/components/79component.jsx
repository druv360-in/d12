import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Star,
  Download,
  Heart,
  LayoutTemplate,
  Code2,
  Smartphone,
  BriefcaseBusiness,
  ShoppingBag,
  Palette,
} from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Modern Portfolio Website",
    description:
      "A clean and professional portfolio template for developers, designers, and creative professionals.",
    category: "Web Development",
    price: "₹499",
    rating: "4.9",
    reviews: 128,
    downloads: "1.2k",
    creator: "Arjun Mehta",
    creatorRole: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    icon: Code2,
    popular: true,
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description:
      "Complete modern e-commerce interface with product listings, shopping cart, checkout, and customer pages.",
    category: "E-Commerce",
    price: "₹799",
    rating: "4.8",
    reviews: 96,
    downloads: "890",
    creator: "Priya Sharma",
    creatorRole: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    icon: ShoppingBag,
    popular: true,
  },
  {
    id: 3,
    title: "Mobile App UI Kit",
    description:
      "A polished mobile application UI kit with ready-to-use screens for modern app projects.",
    category: "UI/UX Design",
    price: "₹599",
    rating: "4.9",
    reviews: 74,
    downloads: "670",
    creator: "Sneha Patel",
    creatorRole: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
    icon: Smartphone,
    popular: false,
  },
  {
    id: 4,
    title: "Business Dashboard",
    description:
      "Professional admin dashboard template with analytics, reports, statistics, tables, and management screens.",
    category: "Business",
    price: "₹699",
    rating: "4.7",
    reviews: 63,
    downloads: "540",
    creator: "Marcus Johnson",
    creatorRole: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    icon: BriefcaseBusiness,
    popular: false,
  },
  {
    id: 5,
    title: "Creative Agency Website",
    description:
      "Bold and modern agency website template designed for creative studios, agencies, and freelancers.",
    category: "Web Design",
    price: "₹549",
    rating: "4.8",
    reviews: 81,
    downloads: "720",
    creator: "Kavya Reddy",
    creatorRole: "Creative Designer",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80",
    icon: Palette,
    popular: true,
  },
  {
    id: 6,
    title: "SaaS Landing Page",
    description:
      "Conversion-focused SaaS landing page with pricing, features, testimonials, and call-to-action sections.",
    category: "Landing Page",
    price: "₹399",
    rating: "4.9",
    reviews: 112,
    downloads: "1.1k",
    creator: "Vikram Singh",
    creatorRole: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
    icon: LayoutTemplate,
    popular: false,
  },
];

const categories = [
  "All Templates",
  "Web Development",
  "E-Commerce",
  "UI/UX Design",
  "Business",
  "Web Design",
  "Landing Page",
];

function SeventyNineComponent() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All Templates");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedTemplates, setLikedTemplates] = useState([]);

  const toggleLike = (id) => {
    setLikedTemplates((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredTemplates = useMemo(() => {
    let result = templates;

    if (activeCategory !== "All Templates") {
      result = result.filter(
        (template) => template.category === activeCategory
      );
    }

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();

      result = result.filter(
        (template) =>
          template.title.toLowerCase().includes(query) ||
          template.description.toLowerCase().includes(query) ||
          template.category.toLowerCase().includes(query) ||
          template.creator.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchTerm]);

  return (
    <section className="px-4 lg:px-6">
      {/* Marketplace Header */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <LayoutTemplate size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Browse Templates
                </h2>

                <p className="text-sm text-gray-500">
                  Ready-to-use templates for your next project
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[360px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search templates..."
              className="
                h-11
                w-full
                rounded-xl
                border border-gray-200
                bg-gray-50
                pl-11
                pr-4
                text-sm
                text-gray-700
                outline-none
                transition-all
                focus:border-violet-300
                focus:bg-white
                focus:ring-2
                focus:ring-violet-100
              "
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  shrink-0
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? "bg-violet-600 text-white shadow-sm"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section Heading */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Featured Templates
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Explore professionally designed templates created by skilled
            creators.
          </p>
        </div>

        <span className="hidden rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600 sm:block">
          {filteredTemplates.length} Templates
        </span>
      </div>

      {/* Template Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTemplates.map((template) => {
            const Icon = template.icon;
            const isLiked = likedTemplates.includes(template.id);

            return (
              <article
                key={template.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-200
                  hover:shadow-lg
                "
              >
                {/* Image */}
                <div className="relative h-[190px] overflow-hidden bg-gray-100">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Popular */}
                  {template.popular && (
                    <div className="absolute left-3 top-3 rounded-full bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                      Popular
                    </div>
                  )}

                  {/* Like */}
                  <button
                    type="button"
                    onClick={() => toggleLike(template.id)}
                    aria-label="Save template"
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-500
                      shadow-md
                      backdrop-blur-sm
                      transition-all
                      hover:scale-105
                    "
                  >
                    <Heart
                      size={17}
                      className={
                        isLiked
                          ? "fill-rose-500 text-rose-500"
                          : "text-gray-500"
                      }
                    />
                  </button>

                  {/* Category */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <Icon size={14} className="text-violet-600" />

                    <span className="text-xs font-semibold text-gray-700">
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Title + Price */}
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-violet-700">
                      {template.title}
                    </h4>

                    <span className="shrink-0 text-lg font-bold text-gray-900">
                      {template.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {template.description}
                  </p>

                  {/* Rating / Downloads */}
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />

                      <span className="font-semibold text-gray-700">
                        {template.rating}
                      </span>

                      <span>({template.reviews})</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <Download size={14} />
                      {template.downloads} downloads
                    </span>
                  </div>

                  {/* Creator */}
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                          {template.creator
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-gray-800">
                            {template.creator}
                          </p>

                          <p className="truncate text-xs text-gray-400">
                            {template.creatorRole}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Buy Template Button */}
                    <button
                      type="button"
                      onClick={() => navigate("/template")}
                      className="
                        mt-4
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        py-3
                        font-medium
                        text-white
                        transition-all
                        hover:shadow-lg
                        active:scale-95
                      "
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Buy Template
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* No Results */
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-violet-500">
            <Search size={24} />
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-800">
            No templates found
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Try another search term or choose a different category.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("All Templates");
            }}
            className="
              mt-5
              rounded-xl
              bg-violet-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-violet-700
            "
          >
            View All Templates
          </button>
        </div>
      )}
    </section>
  );
}

export default SeventyNineComponent;