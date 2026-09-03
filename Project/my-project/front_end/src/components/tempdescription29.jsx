// tempdescription29.jsx
import React from "react";

export default function TempDescription29({ 
  title = "Template Description",
  shortDesc = "Complete React + Tailwind template with 10+ pages, responsive design, and animations",
  longDesc = "This premium template is perfect for businesses looking to create a professional online presence quickly. Built with modern technologies and best practices, it provides a solid foundation for your next project. The template is fully responsive, accessible, and optimized for performance."
}) {
  return (
    <div className="px-4 py-4">
      <div className="bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-4">
          {shortDesc}
        </p>

        <p className="text-gray-500 text-base leading-relaxed">
          {longDesc}
        </p>
      </div>
    </div>
  );
}