import React from "react";
import { FiArrowLeft } from "react-icons/fi";

function EditProfilePageHeader147() {
  return (
    <div className="w-full bg-[#F8F8FA] p-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Back Button */}
        <button className="w-auto rounded-full px-4 py-2 bg-[#ECEAF5] flex items-center justify-center shadow-sm hover:bg-[#E4E2EF] transition">
          <FiArrowLeft className="text-lg text-gray-500" />
        </button>

        {/* Title */}
        <h1 className="text-lg font-bold text-[#111827]">
          Edit Profile
        </h1>
      </div>

      {/* Save Button */}
      <button className="px-4 py-2 rounded-full bg-[#6D28D9] text-white text-md font-semibold shadow-lg hover:bg-[#5B21B6] transition">
        Save
      </button>
    </div>
  );
}

export default EditProfilePageHeader147;