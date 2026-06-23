import React from "react";
import { FiMessageSquare, FiPaperclip, FiSend } from "react-icons/fi";

// Import the message component
import ProjectChatMessageCard from "./projectChatMessageCard109(1).jsx";

function ProjectChatSection109() {
  return (
    <div className="w-full max-w-md bg-[#1E293B] rounded-3xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FiMessageSquare className="text-[#60A5FA] text-2xl" />
        <h2 className="text-white text-xl font-bold">
          Project Chat
        </h2>
      </div>

      {/* Messages */}
      <div className="bg-[#0F172A] rounded-3xl p-4 h-72 overflow-y-auto space-y-4">
        <ProjectChatMessageCard />

        <ProjectChatMessageCard
          name="Marcus Johnson"
          time="1 hour ago"
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
          message="Updated the checkout flow design. Please review!"
        />
      </div>

      {/* Message Input */}
      <div className="mt-5 flex items-center bg-[#1F2937] border border-[#2C3A4F] rounded-full px-2 py-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
        />

        <button className="text-gray-300 text-xl mr-2 hover:text-white transition">
          <FiPaperclip />
        </button>

        <button className="flex items-center px-4 py-2 justify-center rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 transition">
          <FiSend />
        </button>
      </div>
    </div>
  );
}

export default ProjectChatSection109;