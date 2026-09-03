import React from "react";
import { Star, Download, ShoppingBag } from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Modern Business Website Template",
    price: "$49",
    desc: "Complete React + Tailwind template with 10+ pages, responsive design, and animations",
    tags: ["React", "Tailwind", "Template"],
    rating: 4.9,
    downloads: 342,
    author: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Social Media Graphics Bundle",
    price: "$29",
    desc: "50+ Instagram post templates, story templates, and highlight covers. Fully customizable.",
    tags: ["Instagram", "Social Media", "Graphics"],
    rating: 4.8,
    downloads: 567,
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Video Intro Templates Pack",
    price: "$39",
    desc: "20 professional video intro templates for YouTube, TikTok, and Instagram. After Effects included.",
    tags: ["Video", "Templates", "After Effects"],
    rating: 5.0,
    downloads: 289,
    author: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "E-commerce Dashboard UI Kit",
    price: "$59",
    desc: "Complete admin dashboard with 40+ components, charts, tables, and responsive layouts",
    tags: ["Dashboard", "UI Kit", "E-commerce"],
    rating: 4.9,
    downloads: 234,
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Landing Page Templates",
    price: "$44",
    desc: "15 high-converting landing page designs for SaaS, startups, and products",
    tags: ["Landing Page", "SaaS", "Conversion"],
    rating: 4.7,
    downloads: 412,
    author: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=2073&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "YouTube Thumbnail Pack",
    price: "$24",
    desc: "100+ eye-catching YouTube thumbnail templates designed for maximum click-through rate",
    tags: ["YouTube", "Thumbnails", "Click-through"],
    rating: 4.8,
    downloads: 678,
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop"
  }
];

const TemplateCard = ({ template, onBuy }) => (
  <div className="bg-white rounded-2xl shadow-sm border-gray-100 overflow-hidden">
    <img src={template.image} alt={template.title} className="w-full h-48 md:h-52 lg:h-56 object-cover" />
    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 flex-1 pr-2">{template.title}</h3>
        <p className="text-xl font-bold text-violet-700 whitespace-nowrap">{template.price}</p>
      </div>
      <p className="text-sm text-gray-600 mb-3">{template.desc}</p>
      <div className="flex gap-2 mb-3 flex-wrap">
        {template.tags.map((tag) => (
          <span key={tag} className="bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="font-semibold">{template.rating}</span></div>
          <div className="flex items-center gap-1 text-gray-500"><Download className="w-4 h-4" /><span>{template.downloads}</span></div>
        </div>
        <p className="text-gray-500 text-xs">by {template.author}</p>
      </div>
      <button onClick={() => onBuy(template.id)} className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-violet-200 transition">
        <ShoppingBag className="w-5 h-5" />Buy Template
      </button>
    </div>
  </div>
);

const SeventyNineComponent = ({ onBuy }) => {
  return (
    <div className="px-4 lg:px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => <TemplateCard key={t.id} template={t} onBuy={onBuy} />)}
      </div>
    </div>
  );
};

export default SeventyNineComponent;