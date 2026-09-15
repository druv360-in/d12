import {
  Mail,
  Globe,
  Calendar,
  Pencil,
  Settings,
} from "lucide-react";

export default function Profile22({
  user = {
    name: "John Anderson",
    email: "client@skillbuster.com",
    location: "Mumbai, India",
    memberSince: "January 2026",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  onEditProfile = () => {},

  onAccountSettings = () => {},
}) {
  return (
    <section className="w-full">

      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <h1
        className="
          mb-5
          text-2xl
          lg:text-3xl
          font-bold
          text-gray-900
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
          shadow-sm
          lg:p-6
        "
      >

        {/* INNER PROFILE AREA */}

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
              lg:flex-row
              lg:items-center
              gap-5
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
                  shadow
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

              <h2
                className="
                  text-2xl
                  lg:text-2xl
                  font-bold
                  text-gray-900
                "
              >
                {user.name}
              </h2>


              {/* EMAIL */}

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


              {/* MEMBER SINCE */}

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
                  sm:flex-row
                  gap-3
                "
              >

                {/* EDIT */}

                <button
                  onClick={onEditProfile}
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
                    shadow-sm
                    transition
                    hover:bg-purple-50
                  "
                >

                  <Pencil size={16} />

                  Edit Profile

                </button>


                {/* SETTINGS */}

                <button
                  onClick={onAccountSettings}
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
                    shadow-sm
                    transition
                    hover:bg-gray-50
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