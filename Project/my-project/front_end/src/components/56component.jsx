import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import FiftySevenComponent from "./57component.jsx";

const FiftySixComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "Web Development", "UI/UX Design", "Graphic Design", "Video Editing", "Content Writing"];
  
  const freelancers = [
    { id: 1, name: "Emma Thompson", university: "Stanford University", rating: 4.9, projects: 89, responseTime: "< 1hr", skills: ["React", "Node.js", "Python", "UI/UX"], price: 35, avatar: "https://i.pravatar.cc/80?img=1" },
    { id: 2, name: "Marcus Johnson", university: "MIT", rating: 4.8, projects: 76, responseTime: "< 1hr", skills: ["Figma", "Adobe Creative Suite", "Branding", "UI Design"], price: 40, avatar: "https://i.pravatar.cc/80?img=2" },
    { id: 3, name: "Sophia Chen", university: "UC Berkeley", rating: 5.0, projects: 112, responseTime: "< 1hr", skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"], price: 45, avatar: "https://i.pravatar.cc/80?img=3" },
    { id: 4, name: "Alex Rivera", university: "NYU", rating: 4.7, projects: 64, responseTime: "< 1hr", skills: ["Social Media Strategy", "Content Creation", "SEO", "Analytics"], price: 30, avatar: "https://i.pravatar.cc/80?img=4" },
  ];

  const filtered = freelancers.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.skills.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
    f.university.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, skill, or university..." 
          className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm outline-none"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
        {filters.map(filter => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === filter ? "bg-violet-700 text-white" : "bg-gray-100 text-gray-600"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500">{filtered.length} freelancers available</p>

      {/* Cards List - 57 inside 56 */}
      <div className="space-y-4">
        {filtered.map(freelancer => (
          <FiftySevenComponent 
            key={freelancer.id} 
            freelancer={freelancer}
            onHire={(id) => alert(`Hire ${id}`)}
            onViewProfile={(id) => alert(`View ${id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default FiftySixComponent;