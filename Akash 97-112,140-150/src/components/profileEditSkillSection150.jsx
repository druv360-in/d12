import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

function ProfileEditSkillsSection150() {
  const [skills, setSkills] = useState([
    "Project Management",
    "Product Strategy",
    "Agile",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() === "") return;

    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-md bg-[#1E293B] rounded-3xl p-8">
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-8">
        Skills
      </h2>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-4 mb-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#F3EEF8] text-[#7C83FF] px-3 py-2 rounded-full text-md font-semibold"
          >
            <span>{skill}</span>

            <button
              onClick={() => removeSkill(index)}
              className="hover:text-red-500 transition"
            >
              <FiX />
            </button>
          </div>
        ))}
      </div>

      {/* Input + Add Button */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill..."
          className="flex-1 bg-[#1A2437] border border-[#2C3A4F] rounded-3xl px-4 py-3 text-white text-md placeholder-gray-400 outline-none"
        />

        <button
          onClick={addSkill}
          className="rounded-3xl bg-[#7C83FF] px-4 py-3 text-white flex items-center justify-center text-xl hover:bg-[#6D74F5] transition"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

export default ProfileEditSkillsSection150;