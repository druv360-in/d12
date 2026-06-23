import React from "react";

function ProjectChatMessageCard({
  name = "Emma Thompson",
  time = "10 min ago",
  image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  message = "The API integration is almost complete. Will push the update soon!",
}) {
  return (
    <div className="bg-[#1E293B] rounded-2xl p-4">
      <div className="flex items-center gap-2">
        <img
          src={image}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />

        <div>
          <h3 className="text-white text-sm font-semibold">
            {name}
          </h3>
          <p className="text-gray-400 text-xs">
            {time}
          </p>
        </div>
      </div>

      <p className="text-gray-200 text-md leading-8 mt-3">
        {message}
      </p>
    </div>
  );
}

export default ProjectChatMessageCard;