import React from "react";
import {
  Mail,
  Globe,
  Calendar,
  Pencil,
  Settings,
} from "lucide-react";

export default function Profile22({
  user = {
    name: "Alex Johnson",
    email: "freelancer@skillbuster.com",
    location: "New Delhi, India",
    memberSince: "March 2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  onEditProfile = () => {},
  onAccountSettings = () => {},
}) {
  return (
    <div className="w-full bg-gray-50">
      <section className="mx-auto w-full max-w-screen-xl px-4 pt-2 pb-6 sm:px-6 lg:px-8">

        {/* Page Title */}
        <h1
          className="
            mb-5
            text-3xl
            font-bold
            text-gray-900
          "
        >
          My Account
        </h1>

        {/* Profile Card */}
        <div
          className="
            rounded-3xl
            bg-gradient-to-br
            from-purple-50
            via-pink-50
            to-white
            p-6
            shadow-sm
          "
        >

          {/* Avatar */}
          <div className="relative mb-5 w-fit">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-2xl object-cover"
            />

            <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M11.7 3.5L5.3 9.9L2.3 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {user.name}
          </h2>

          <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
            <Mail size={17} />
            <span>{user.email}</span>
          </div>

          <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
            <Globe size={17} />
            <span>{user.location}</span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={17} className="text-purple-600" />
            <span>Member since {user.memberSince}</span>
          </div>
                    {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">

            <button
              onClick={onEditProfile}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-purple-200
                bg-white
                py-3
                font-semibold
                text-purple-700
                shadow-sm
                transition-all
                hover:bg-purple-50
              "
            >
              <Pencil size={16} />
              <span>Edit Profile</span>
            </button>

            <button
              onClick={onAccountSettings}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-gray-200
                bg-white
                py-3
                font-semibold
                text-gray-700
                shadow-sm
                transition-all
                hover:bg-gray-50
              "
            >
              <Settings size={16} />
              <span>Account Settings</span>
            </button>

          </div>

        </div>

      </section>
    </div>
  );
}