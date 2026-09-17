import {
  Mail,
  Globe,
  Calendar,
  Pencil,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile22({
  user = {
    name: "John Anderson",
    email: "client@skillbuster.com",
    location: "Mumbai, India",
    memberSince: "January 2026",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
}) {
  const navigate = useNavigate();

  // =====================================================
  // EDIT PROFILE
  // =====================================================

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  // =====================================================
  // ACCOUNT SETTINGS
  // =====================================================

  const handleAccountSettings = () => {
    navigate("/account-settings");
  };

  return (
    <section className="w-full">

      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <h1
        className="
          mb-5
          text-2xl
          font-bold
          text-gray-900
          lg:text-3xl
        "
      >
        My Account
      </h1>

      {/* =====================================================
          PROFILE CARD
      ===================================================== */}

      <div
        className="
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-[0_8px_20px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_16px_35px_rgba(0,0,0,0.14)]
          lg:p-6
        "
      >

        {/* =================================================
            INNER PROFILE AREA
        ================================================= */}

        <div
          className="
            rounded-2xl
            bg-gradient-to-br
            from-purple-50
            via-pink-50
            to-white
            p-5
            lg:p-6
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
            "
          >

            {/* =================================================
                AVATAR
            ================================================= */}

            <div className="relative w-fit shrink-0">

              <img
                src={user.avatar}
                alt={user.name}
                className="
                  h-24
                  w-24
                  rounded-2xl
                  object-cover
                  shadow-[0_8px_18px_rgba(0,0,0,0.14)]
                "
              />

              {/* VERIFIED */}

              <div
                className="
                  absolute
                  -bottom-2
                  -right-2
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-[0_5px_12px_rgba(0,0,0,0.12)]
                "
              >
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
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

            {/* =================================================
                USER INFORMATION
            ================================================= */}

            <div className="min-w-0 flex-1">

              {/* NAME */}

              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                "
              >
                {user.name}
              </h2>

              {/* =================================================
                  EMAIL + LOCATION
              ================================================= */}

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-2
                  text-sm
                  text-gray-600
                "
              >

                {/* EMAIL */}

                <div className="flex items-center gap-2">

                  <Mail
                    size={16}
                    className="text-gray-500"
                  />

                  <span>
                    {user.email}
                  </span>

                </div>

                {/* LOCATION */}

                <div className="flex items-center gap-2">

                  <Globe
                    size={16}
                    className="text-gray-500"
                  />

                  <span>
                    {user.location}
                  </span>

                </div>

              </div>

              {/* =================================================
                  MEMBER SINCE
              ================================================= */}

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-600
                "
              >

                <Calendar
                  size={16}
                  className="text-purple-600"
                />

                <span>
                  Member since {user.memberSince}
                </span>

              </div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                {/* =================================================
                    EDIT PROFILE
                ================================================= */}

                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-purple-200
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-purple-700
                    shadow-[0_5px_12px_rgba(109,40,217,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-purple-50
                    hover:shadow-[0_10px_20px_rgba(109,40,217,0.16)]
                    active:scale-95
                  "
                >
                  <Pencil size={16} />

                  Edit Profile
                </button>

                {/* =================================================
                    ACCOUNT SETTINGS
                ================================================= */}

                <button
                  type="button"
                  onClick={handleAccountSettings}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-gray-700
                    shadow-[0_5px_12px_rgba(0,0,0,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-gray-50
                    hover:shadow-[0_10px_20px_rgba(0,0,0,0.12)]
                    active:scale-95
                  "
                >
                  <Settings size={16} />

                  Account Settings
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}