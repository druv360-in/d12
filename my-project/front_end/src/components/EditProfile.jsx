import React, { useState } from "react";
import { Camera, Plus, X, ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SidebarMenu24 from "./SidebarMenu24";
import BottomMenu05 from "./BottomMenu05";

export default function EditProfile() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // =====================================================
  // PROFILE DATA
  // =====================================================

  const [profile, setProfile] = useState({
    name: "John Anderson",
    username: "john_anderson",
    email: "client@skillbuster.com",
    phone: "+91 98765 43210",
    bio: "Experienced product manager and tech enthusiast. Building great products with talented freelancers.",
    location: "Mumbai, India",
    company: "Tech Startup Inc.",
    github: "",
    linkedin: "https://linkedin.com/in/johnanderson",
    twitter: "https://twitter.com/johnanderson",
    website: "https://johnanderson.com",
    image:
     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  });

  const [skills, setSkills] = useState([
    "Project Management",
    "Product Strategy",
    "Agile",
  ]);

  const [newSkill, setNewSkill] = useState("");

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // ADD SKILL
  // =====================================================

  const handleAddSkill = () => {
    const skill = newSkill.trim();

    if (!skill) return;

    const alreadyExists = skills.some(
      (item) => item.toLowerCase() === skill.toLowerCase()
    );

    if (alreadyExists) {
      setNewSkill("");
      return;
    }

    setSkills((prev) => [...prev, skill]);
    setNewSkill("");
  };

  // =====================================================
  // ENTER KEY
  // =====================================================

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  // =====================================================
  // REMOVE SKILL
  // =====================================================

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((prev) =>
      prev.filter((skill) => skill !== skillToRemove)
    );
  };

  // =====================================================
  // PROFILE PHOTO
  // =====================================================

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setProfile((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  // =====================================================
  // SAVE
  // =====================================================

  const handleSave = () => {
    const updatedProfile = {
      ...profile,
      skills,
    };

    console.log("Updated Profile:", updatedProfile);

    alert("Profile saved successfully!");
  };

  // =====================================================
  // INPUT STYLE
  // ORIGINAL STYLE
  // =====================================================

  const inputClass = `
    w-full
    h-14
    rounded-2xl
    border
    border-gray-200
    bg-white
    px-5
    text-base
    text-gray-900
    outline-none
    shadow-[0_3px_8px_rgba(0,0,0,0.04)]
    transition-all
    duration-200
    placeholder:text-gray-400
    focus:border-purple-400
    focus:ring-4
    focus:ring-purple-100
  `;

  return (
    <div className="min-h-screen w-full bg-white">
      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN CONTENT AREA
          ===================================================== */}

      <div className="min-h-screen bg-white lg:ml-[320px]">

        {/* ===================================================
            EDIT PROFILE HEADER
            ORIGINAL STYLE
            =================================================== */}

        <header
          className="
            sticky
            top-0
            z-40
            flex
            h-[92px]
            items-center
            justify-between
            border-b
            border-gray-200
            bg-white
            px-5
            shadow-[0_4px_12px_rgba(0,0,0,0.03)]
            sm:px-7
            lg:h-[116px]
            lg:px-8
          "
        >
          {/* BACK BUTTON */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#F5F3FC]
              text-gray-500
              transition-all
              duration-200
              hover:bg-[#EEE8FF]
              hover:text-gray-700
            "
          >
            <ArrowLeft size={23} strokeWidth={2} />
          </button>

          {/* TITLE */}

          <h1
            className="
              absolute
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Edit Profile
          </h1>

          {/* RIGHT SIDE */}

          <div className="ml-auto flex items-center gap-3">

            {/* PROFILE PREVIEW */}

          

            {/* SAVE BUTTON */}

            <button
              type="button"
              onClick={handleSave}
              className="
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-purple-600
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_8px_20px_rgba(109,40,217,0.30)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_28px_rgba(109,40,217,0.38)]
                active:scale-95
                sm:px-7
              "
            >
              Save
            </button>
          </div>
        </header>

        {/* ===================================================
            PAGE CONTENT
            ORIGINAL BACKGROUND
            =================================================== */}

        <main
          className="
            min-h-[calc(100vh-92px)]
            bg-gradient-to-br
            from-[#FCF5FB]
            via-[#F9F3FA]
            to-[#F5F5FF]
            px-4
            py-8
            pb-28
            sm:px-6
            lg:min-h-[calc(100vh-116px)]
            lg:px-10
            lg:py-8
            lg:pb-10
          "
        >
          <div className="mx-auto w-full max-w-[1050px] space-y-7">

            {/* =================================================
                PROFILE PHOTO
            ================================================= */}

            <section
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]
                sm:p-7
              "
            >
              <h2 className="text-xl font-bold text-gray-900">
                Profile Photo
              </h2>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  items-start
                  gap-6
                  sm:flex-row
                  sm:items-center
                "
              >
                {/* PHOTO */}

                <div className="relative shrink-0">
                  <img
                    src={profile.image}
                    alt="Profile"
                    className="
                      h-[108px]
                      w-[108px]
                      rounded-2xl
                      object-cover
                      shadow-[0_8px_20px_rgba(0,0,0,0.16)]
                    "
                  />

                  {/* CAMERA */}

                  <label
                    className="
                      absolute
                      -bottom-3
                      -right-3
                      flex
                      h-12
                      w-12
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-violet-600
                      to-purple-700
                      text-white
                      shadow-[0_8px_18px_rgba(109,40,217,0.35)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-105
                      hover:shadow-[0_12px_25px_rgba(109,40,217,0.45)]
                    "
                  >
                    <Camera size={22} />

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <p className="text-base text-gray-500">
                    Upload a new profile photo.
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Recommended size: 400x400px
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                BASIC INFORMATION
            ================================================= */}

            <section
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]
                sm:p-7
              "
            >
              <h2 className="text-xl font-bold text-gray-900">
                Basic Information
              </h2>

              <div className="mt-6 space-y-5">

                {/* FULL NAME */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* USERNAME */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Username
                  </label>

                  <input
                    type="text"
                    name="username"
                    value={profile.username}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* BIO */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Bio
                  </label>

                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    rows={4}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      px-5
                      py-4
                      text-base
                      leading-6
                      text-gray-900
                      outline-none
                      shadow-[0_3px_8px_rgba(0,0,0,0.04)]
                      transition-all
                      duration-200
                      focus:border-purple-400
                      focus:ring-4
                      focus:ring-purple-100
                    "
                  />
                </div>

                {/* LOCATION */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* COMPANY */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={profile.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </section>

            {/* =================================================
                SKILLS
            ================================================= */}

            <section
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]
                sm:p-7
              "
            >
              <h2 className="text-xl font-bold text-gray-900">
                Skills
              </h2>

              {/* SKILL TAGS */}

              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#F3ECFF]
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-purple-600
                      shadow-[0_4px_10px_rgba(109,40,217,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-purple-100
                      hover:shadow-[0_8px_16px_rgba(109,40,217,0.12)]
                    "
                  >
                    <span>{skill}</span>

                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="
                        text-purple-500
                        transition
                        hover:text-purple-800
                      "
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))}
              </div>

              {/* ADD SKILL */}

              <div className="mt-5 flex gap-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={handleSkillKeyDown}
                  placeholder="Add a skill..."
                  className="
                    h-14
                    min-w-0
                    flex-1
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    px-5
                    text-base
                    text-gray-900
                    outline-none
                    shadow-[0_3px_8px_rgba(0,0,0,0.05)]
                    placeholder:text-gray-400
                    focus:border-purple-400
                    focus:ring-4
                    focus:ring-purple-100
                  "
                />

                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    to-purple-700
                    text-white
                    shadow-[0_8px_18px_rgba(109,40,217,0.30)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:shadow-[0_14px_25px_rgba(109,40,217,0.40)]
                    active:scale-95
                  "
                >
                  <Plus size={27} />
                </button>
              </div>
            </section>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <section
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]
                sm:p-7
              "
            >
              <h2 className="text-xl font-bold text-gray-900">
                Social Links
              </h2>

              <div className="mt-6 space-y-5">

                {/* GITHUB */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    GitHub
                  </label>

                  <input
                    type="url"
                    name="github"
                    value={profile.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className={inputClass}
                  />
                </div>

                {/* LINKEDIN */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    LinkedIn
                  </label>

                  <input
                    type="url"
                    name="linkedin"
                    value={profile.linkedin}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* TWITTER */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Twitter
                  </label>

                  <input
                    type="url"
                    name="twitter"
                    value={profile.twitter}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* WEBSITE */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Website
                  </label>

                  <input
                    type="url"
                    name="website"
                    value={profile.website}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </section>

            {/* =================================================
                BOTTOM SAVE
            ================================================= */}

            <div className="flex justify-end pb-8">
              <button
                type="button"
                onClick={handleSave}
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-600
                  px-8
                  py-4
                  text-base
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(109,40,217,0.30)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:shadow-[0_16px_35px_rgba(109,40,217,0.40)]
                  active:scale-95
                "
              >
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
          ===================================================== */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>
    </div>
  );
}