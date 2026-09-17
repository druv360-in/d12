import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bell,
  BriefcaseBusiness,
  Check,
  CreditCard,
  Globe,
  Lock,
  Palette,
  Shield,
  Trash2,
  User,
  Eye,
  X,
  Plus,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SidebarMenu24 from "./SidebarMenu24";
import Header01 from "./Header01";
import BottomMenu05 from "./BottomMenu05";


// ============================================================
// THEME OPTION
// ============================================================

function ThemeOption({
  title,
  description,
  selected,
  onClick,
  icon,
  darkMode,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        border-2
        p-4
        text-left
        transition-all
        duration-300
        sm:p-5

        ${
          selected
            ? darkMode
              ? "border-[#7C3AED] bg-[#241A42] shadow-[0_8px_20px_rgba(109,40,217,0.18)]"
              : "border-[#6D28D9] bg-[#F3EEFF] shadow-[0_8px_20px_rgba(109,40,217,0.12)]"
            : darkMode
            ? "border-transparent bg-[#120D29] hover:bg-[#1B1436]"
            : "border-transparent bg-[#F8F9FA] hover:bg-[#F3EEFF]"
        }

        hover:-translate-y-1
      `}
    >
      {/* ICON */}
      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full

          ${
            selected
              ? darkMode
                ? "bg-[#302050] text-purple-300"
                : "bg-white text-[#6D28D9]"
              : darkMode
              ? "bg-[#241B3D] text-gray-300"
              : "bg-gray-200 text-gray-600"
          }
        `}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="min-w-0 flex-1">
        <h3
          className={`
            text-base
            font-semibold
            sm:text-lg

            ${darkMode ? "text-white" : "text-gray-900"}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            mt-1
            text-sm

            ${darkMode ? "text-gray-400" : "text-gray-500"}
          `}
        >
          {description}
        </p>
      </div>

      {/* CHECK */}
      {selected && (
        <Check
          size={22}
          className={
            darkMode
              ? "shrink-0 text-purple-400"
              : "shrink-0 text-[#6D28D9]"
          }
        />
      )}
    </button>
  );
}


// ============================================================
// TOGGLE
// ============================================================

function Toggle({ enabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle"
      className={`
        relative
        h-10
        w-[62px]
        shrink-0
        rounded-full
        transition-all
        duration-300

        ${
          enabled
            ? "bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] shadow-[0_6px_16px_rgba(109,40,217,0.25)]"
            : "bg-gray-300"
        }
      `}
    >
      <span
        className={`
          absolute
          top-1
          h-8
          w-8
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300

          ${enabled ? "right-1" : "left-1"}
        `}
      />
    </button>
  );
}


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AccountSettings() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ----------------------------------------------------------
  // ACCOUNT MODE
  // ----------------------------------------------------------

  const [accountMode, setAccountMode] = useState("client");


  // ----------------------------------------------------------
  // ACTIVE TAB
  // ----------------------------------------------------------

  const [activeTab, setActiveTab] = useState("appearance");


  // ----------------------------------------------------------
  // NOTIFICATIONS
  // ----------------------------------------------------------

  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    orders: true,
    marketing: false,
  });


  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------

  const [theme, setTheme] = useState(
    localStorage.getItem("skillbuster-theme") || "light"
  );


  // ----------------------------------------------------------
  // LANGUAGE
  // ----------------------------------------------------------

  const [language, setLanguage] = useState("English");


  // ----------------------------------------------------------
  // SECURITY
  // ----------------------------------------------------------

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [showTwoFactorModal, setShowTwoFactorModal] =
    useState(false);

  const [showDisableTwoFactorModal, setShowDisableTwoFactorModal] =
    useState(false);

  const [showPasswordModal, setShowPasswordModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);


  // ----------------------------------------------------------
  // PASSWORD
  // ----------------------------------------------------------

  const [passwordData, setPasswordData] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });


  // ----------------------------------------------------------
  // PAYMENT
  // ----------------------------------------------------------

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "VISA",
      number: "•••• 4242",
      expires: "12/26",
      default: true,
    },
  ]);

  const [showPaymentForm, setShowPaymentForm] = useState(false);


  // ==========================================================
  // THEME APPLICATION
  // ==========================================================

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (systemDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }

    localStorage.setItem("skillbuster-theme", theme);
  }, [theme]);


  // ==========================================================
  // THEME CHANGE
  // ==========================================================

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };


  // ==========================================================
  // BACK
  // ==========================================================

  const handleBack = () => {
    navigate(-1);
  };


  // ==========================================================
  // TWO FACTOR
  // ==========================================================

  const handleTwoFactorClick = () => {
    if (twoFactorEnabled) {
      setShowDisableTwoFactorModal(true);
    } else {
      setShowTwoFactorModal(true);
    }
  };


  const enableTwoFactor = () => {
    setTwoFactorEnabled(true);
    setShowTwoFactorModal(false);
  };


  const disableTwoFactor = () => {
    setTwoFactorEnabled(false);
    setShowDisableTwoFactorModal(false);
  };


  // ==========================================================
  // PASSWORD
  // ==========================================================

  const handlePasswordUpdate = () => {
    if (
      !passwordData.current ||
      !passwordData.newPassword ||
      !passwordData.confirm
    ) {
      alert("Please fill in all password fields.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirm) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password updated successfully.");

    setPasswordData({
      current: "",
      newPassword: "",
      confirm: "",
    });

    setShowPasswordModal(false);
  };


  // ==========================================================
  // DELETE ACCOUNT
  // ==========================================================

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);

    alert("Your account has been deleted.");

    navigate("/login");
  };


  // ==========================================================
  // ADD PAYMENT
  // ==========================================================

  const handleAddPayment = () => {
    const newCard = {
      id: Date.now(),
      type: "VISA",
      number: "•••• 5555",
      expires: "12/28",
      default: false,
    };

    setPaymentMethods((prev) => [...prev, newCard]);

    setShowPaymentForm(false);
  };


  // ==========================================================
  // TABS
  // ==========================================================

  const tabs = [
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell size={18} />,
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: <Palette size={18} />,
    },
    {
      id: "language",
      label: "Language",
      icon: <Globe size={18} />,
    },
    {
      id: "security",
      label: "Security",
      icon: <Shield size={18} />,
    },
    {
      id: "payments",
      label: "Payment Methods",
      icon: <CreditCard size={18} />,
    },
  ];


  // ==========================================================
  // DARK MODE VARIABLE
  // ==========================================================

  const isDark = theme === "dark";


  return (
    <div
      className={`
        min-h-screen
        w-full
        overflow-x-hidden
        transition-colors
        duration-300

        ${
          isDark
            ? "bg-[#0F0A1F] text-white"
            : "bg-[#FAF7FC] text-gray-900"
        }
      `}
    >

      {/* ======================================================
          SIDEBAR
          ====================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />


      {/* ======================================================
          MAIN AREA
          ====================================================== */}

      <div className="min-h-screen lg:ml-[320px]">


        {/* ====================================================
            MOBILE HEADER
            ==================================================== */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>


        {/* ====================================================
            DESKTOP HEADER
            ==================================================== */}

        <header
          className={`
            sticky
            top-0
            z-40
            hidden
            h-[92px]
            items-center
            border-b
            px-8
            lg:flex

            ${
              isDark
                ? "border-[#30254A] bg-[#120D29]"
                : "border-gray-200 bg-white"
            }
          `}
        >

          {/* BACK BUTTON */}

          <button
            type="button"
            onClick={handleBack}
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300
              hover:-translate-y-1

              ${
                isDark
                  ? "bg-[#241B3D] text-gray-300 hover:bg-[#30254A]"
                  : "bg-[#F4F0FB] text-gray-600 hover:bg-purple-50"
              }
            `}
          >
            <ArrowLeft size={22} />
          </button>


          {/* TITLE */}

          <h1
            className={`
              ml-5
              text-2xl
              font-bold

              ${
                isDark
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            Account Settings
          </h1>


          {/* PROFILE */}

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className={`
              ml-auto
              flex
              items-center
              gap-3
              rounded-2xl
              border
              px-3
              py-2
              transition-all
              duration-300
              hover:-translate-y-1

              ${
                isDark
                  ? "border-[#30254A] bg-[#19132F]"
                  : "border-gray-200 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.07)]"
              }
            `}
          >

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                alt="John Doe"
                className="
                  h-11
                  w-11
                  rounded-full
                  border-2
                  border-purple-600
                  object-cover
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-white
                  bg-green-500
                "
              />

            </div>


            <div className="text-left">

              <p
                className={`
                  text-sm
                  font-bold
                  ${
                    isDark
                      ? "text-white"
                      : "text-gray-900"
                  }
                `}
              >
                John Doe
              </p>

              <p
                className={`
                  text-xs
                  ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                  }
                `}
              >
                View Profile
              </p>

            </div>


            <ChevronRight
              size={18}
              className={
                isDark
                  ? "text-gray-400"
                  : "text-gray-400"
              }
            />

          </button>

        </header>


        {/* ====================================================
            CONTENT
            ==================================================== */}

        <main
          className={`
            min-h-[calc(100vh-92px)]
            px-4
            py-6
            pb-24
            sm:px-6
            lg:px-8
            lg:pb-10
          `}
        >

          <div className="mx-auto w-full max-w-[1180px]">


            {/* =================================================
                ACCOUNT MODE
                ================================================= */}

            <section
              className={`
                rounded-3xl
                border
                p-5
                shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                sm:p-7

                ${
                  isDark
                    ? "border-[#30254A] bg-[#19132F]"
                    : "border-gray-200 bg-white"
                }
              `}
            >

              <h2
                className={`
                  mb-5
                  text-xl
                  font-bold
                  sm:text-2xl

                  ${
                    isDark
                      ? "text-white"
                      : "text-gray-900"
                  }
                `}
              >
                Account Mode
              </h2>


              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* CLIENT */}

                <button
                  type="button"
                  onClick={() => setAccountMode("client")}
                  className={`
                    rounded-2xl
                    border-2
                    p-5
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1

                    ${
                      accountMode === "client"
                        ? isDark
                          ? "border-[#7C3AED] bg-[#241A42] shadow-[0_8px_20px_rgba(109,40,217,0.20)]"
                          : "border-[#6D28D9] bg-[#F3EEFF] shadow-[0_8px_20px_rgba(109,40,217,0.12)]"
                        : isDark
                        ? "border-[#30254A] bg-[#120D29]"
                        : "border-gray-200 bg-white hover:border-purple-200 hover:bg-purple-50"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl

                        ${
                          accountMode === "client"
                            ? "bg-[#6D28D9] text-white"
                            : isDark
                            ? "bg-[#30254A] text-gray-300"
                            : "bg-gray-200 text-gray-500"
                        }
                      `}
                    >
                      <User size={28} />
                    </div>


                    <div className="min-w-0 flex-1">

                      <h3
                        className={`
                          text-lg
                          font-bold

                          ${
                            isDark
                              ? "text-white"
                              : "text-gray-900"
                          }
                        `}
                      >
                        Client Mode
                      </h3>

                      <p
                        className={`
                          mt-1
                          text-sm

                          ${
                            isDark
                              ? "text-gray-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        Hire freelancers & post projects
                      </p>

                    </div>


                    {accountMode === "client" && (
                      <Check
                        size={24}
                        className="shrink-0 text-[#6D28D9]"
                      />
                    )}

                  </div>

                </button>


                {/* FREELANCER */}

                <button
                  type="button"
                  onClick={() => setAccountMode("freelancer")}
                  className={`
                    rounded-2xl
                    border-2
                    p-5
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1

                    ${
                      accountMode === "freelancer"
                        ? isDark
                          ? "border-[#7C3AED] bg-[#241A42]"
                          : "border-[#6D28D9] bg-[#F3EEFF]"
                        : isDark
                        ? "border-[#30254A] bg-[#120D29]"
                        : "border-gray-200 bg-white hover:border-purple-200 hover:bg-purple-50"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl

                        ${
                          accountMode === "freelancer"
                            ? "bg-[#6D28D9] text-white"
                            : isDark
                            ? "bg-[#30254A] text-gray-300"
                            : "bg-gray-200 text-gray-500"
                        }
                      `}
                    >
                      <BriefcaseBusiness size={28} />
                    </div>


                    <div className="min-w-0 flex-1">

                      <h3
                        className={`
                          text-lg
                          font-bold
                          ${
                            isDark
                              ? "text-white"
                              : "text-gray-900"
                          }
                        `}
                      >
                        Freelancer Mode
                      </h3>

                      <p
                        className={`
                          mt-1
                          text-sm
                          ${
                            isDark
                              ? "text-gray-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        Offer services & earn money
                      </p>

                    </div>


                    {accountMode === "freelancer" && (
                      <Check
                        size={24}
                        className="shrink-0 text-[#6D28D9]"
                      />
                    )}

                  </div>

                </button>

              </div>


              <p
                className={`
                  mt-5
                  text-center
                  text-sm

                  ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                  }
                `}
              >
                Switch between client and freelancer modes to
                access different features
              </p>

            </section>


            {/* =================================================
                TABS
                ================================================= */}

            <div
              className={`
                mt-6
                flex
                w-full
                overflow-x-auto
                rounded-3xl
                border
                p-1
                shadow-[0_8px_20px_rgba(0,0,0,0.06)]

                ${
                  isDark
                    ? "border-[#30254A] bg-[#19132F]"
                    : "border-gray-200 bg-white"
                }
              `}
              style={{
                scrollbarWidth: "none",
              }}
            >

              {tabs.map((tab) => {

                const selected =
                  activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex
                      min-w-[145px]
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        selected
                          ? "bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] text-white shadow-[0_8px_20px_rgba(109,40,217,0.25)]"
                          : isDark
                          ? "text-gray-300 hover:bg-[#241B3D]"
                          : "text-gray-700 hover:bg-purple-50"
                      }
                    `}
                  >
                    {tab.icon}

                    <span>
                      {tab.label}
                    </span>
                  </button>
                );
              })}

            </div>


            {/* =================================================
                NOTIFICATIONS
                ================================================= */}

            {activeTab === "notifications" && (
              <section
                className={`
                  mt-6
                  rounded-3xl
                  border
                  p-5
                  shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                  sm:p-7

                  ${
                    isDark
                      ? "border-[#30254A] bg-[#19132F]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >

                <div className="space-y-4">

                  {[
                    {
                      key: "push",
                      title: "Push Notifications",
                      description:
                        "Receive push notifications on your device",
                    },
                    {
                      key: "email",
                      title: "Email Notifications",
                      description:
                        "Receive email updates about your activity",
                    },
                    {
                      key: "orders",
                      title: "Order Updates",
                      description:
                        "Get notified about order status changes",
                    },
                    {
                      key: "marketing",
                      title: "Marketing Communications",
                      description:
                        "Receive news, tips, and offers",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className={`
                        flex
                        items-center
                        justify-between
                        gap-4
                        rounded-2xl
                        p-4
                        sm:p-5

                        ${
                          isDark
                            ? "bg-[#120D29]"
                            : "bg-[#FAFAFA]"
                        }
                      `}
                    >

                      <div className="min-w-0">

                        <h3
                          className={`
                            font-semibold
                            ${
                              isDark
                                ? "text-white"
                                : "text-gray-900"
                            }
                          `}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`
                            mt-1
                            text-sm
                            ${
                              isDark
                                ? "text-gray-400"
                                : "text-gray-500"
                            }
                          `}
                        >
                          {item.description}
                        </p>

                      </div>


                      <Toggle
                        enabled={
                          notifications[item.key]
                        }
                        onClick={() =>
                          setNotifications((prev) => ({
                            ...prev,
                            [item.key]:
                              !prev[item.key],
                          }))
                        }
                      />

                    </div>
                  ))}

                </div>

              </section>
            )}


            {/* =================================================
                APPEARANCE
                ================================================= */}

            {activeTab === "appearance" && (
              <section
                className={`
                  mt-6
                  rounded-3xl
                  border
                  p-5
                  shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                  sm:p-7

                  ${
                    isDark
                      ? "border-[#30254A] bg-[#19132F]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >

                <div className="space-y-2">

                  {/* LIGHT MODE */}

                  <ThemeOption
                    title="Light Mode"
                    description="Use light theme"
                    selected={theme === "light"}
                    onClick={() =>
                      handleThemeChange("light")
                    }
                    icon={<Palette size={21} />}
                    darkMode={isDark}
                  />


                  {/* DARK MODE */}

                  <ThemeOption
                    title="Dark Mode"
                    description="Use dark theme"
                    selected={theme === "dark"}
                    onClick={() =>
                      handleThemeChange("dark")
                    }
                    icon={<Palette size={21} />}
                    darkMode={isDark}
                  />


                  {/* SYSTEM DEFAULT */}

                  <ThemeOption
                    title="System Default"
                    description="Use system theme preference"
                    selected={theme === "system"}
                    onClick={() =>
                      handleThemeChange("system")
                    }
                    icon={<Palette size={21} />}
                    darkMode={isDark}
                  />

                </div>

              </section>
            )}


            {/* =================================================
                LANGUAGE
                ================================================= */}

            {activeTab === "language" && (
              <section
                className={`
                  mt-6
                  rounded-3xl
                  border
                  p-5
                  shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                  sm:p-7

                  ${
                    isDark
                      ? "border-[#30254A] bg-[#19132F]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >

                <div className="space-y-3">

                  {[
                    {
                      name: "English",
                      subtitle: "Default language",
                      code: "US",
                    },
                    {
                      name: "Malayalam",
                      subtitle: "മലയാളം",
                      code: "IN",
                    },
                    {
                      name: "Hindi",
                      subtitle: "हिंदी",
                      code: "IN",
                    },
                  ].map((item) => {

                    const selected =
                      language === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() =>
                          setLanguage(item.name)
                        }
                        className={`
                          flex
                          w-full
                          items-center
                          gap-4
                          rounded-2xl
                          border-2
                          p-4
                          text-left
                          transition-all
                          duration-300
                          hover:-translate-y-1

                          ${
                            selected
                              ? isDark
                                ? "border-[#7C3AED] bg-[#241A42]"
                                : "border-[#6D28D9] bg-[#F3EEFF]"
                              : isDark
                              ? "border-transparent bg-[#120D29]"
                              : "border-transparent bg-[#FAFAFA]"
                          }
                        `}
                      >

                        <div
                          className={`
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            text-sm
                            font-semibold

                            ${
                              selected
                                ? "bg-purple-100 text-purple-700"
                                : "bg-gray-200 text-gray-600"
                            }
                          `}
                        >
                          {item.code}
                        </div>


                        <div className="flex-1">

                          <h3
                            className={`
                              font-semibold
                              ${
                                isDark
                                  ? "text-white"
                                  : "text-gray-900"
                              }
                            `}
                          >
                            {item.name}
                          </h3>

                          <p
                            className={`
                              mt-1
                              text-sm
                              ${
                                isDark
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }
                            `}
                          >
                            {item.subtitle}
                          </p>

                        </div>


                        {selected && (
                          <Check
                            size={22}
                            className="text-[#6D28D9]"
                          />
                        )}

                      </button>
                    );
                  })}

                </div>

              </section>
            )}


            {/* =================================================
                SECURITY
                ================================================= */}

            {activeTab === "security" && (
              <section
                className={`
                  mt-6
                  rounded-3xl
                  border
                  p-5
                  shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                  sm:p-7

                  ${
                    isDark
                      ? "border-[#30254A] bg-[#19132F]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >

                <div className="space-y-4">

                  {/* CHANGE PASSWORD */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPasswordModal(true)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:-translate-y-1

                      ${
                        isDark
                          ? "bg-[#120D29] hover:bg-[#241B3D]"
                          : "bg-[#FAFAFA] hover:bg-purple-50"
                      }
                    `}
                  >

                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        ${
                          isDark
                            ? "bg-[#30254A] text-purple-300"
                            : "bg-purple-50 text-[#6D28D9]"
                        }
                      `}
                    >
                      <Lock size={21} />
                    </div>


                    <div className="flex-1">

                      <h3
                        className={`
                          font-semibold
                          ${
                            isDark
                              ? "text-white"
                              : "text-gray-900"
                          }
                        `}
                      >
                        Change Password
                      </h3>

                      <p
                        className={`
                          mt-1
                          text-sm
                          ${
                            isDark
                              ? "text-gray-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        Update your password
                      </p>

                    </div>


                    <ChevronRight
                      size={21}
                      className="text-gray-400"
                    />

                  </button>


                  {/* TWO FACTOR */}

                  <div
                    className={`
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      p-5

                      ${
                        isDark
                          ? "bg-[#120D29]"
                          : "bg-[#FAFAFA]"
                      }
                    `}
                  >

                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        ${
                          isDark
                            ? "bg-[#30254A] text-purple-300"
                            : "bg-purple-50 text-[#6D28D9]"
                        }
                      `}
                    >
                      <Shield size={21} />
                    </div>


                    <div className="flex-1">

                      <h3
                        className={`
                          font-semibold
                          ${
                            isDark
                              ? "text-white"
                              : "text-gray-900"
                          }
                        `}
                      >
                        Two-Factor Authentication
                      </h3>

                      <p
                        className={`
                          mt-1
                          text-sm
                          ${
                            isDark
                              ? "text-gray-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        {twoFactorEnabled
                          ? "Enabled"
                          : "Disabled"}
                      </p>

                    </div>


                    <Toggle
                      enabled={twoFactorEnabled}
                      onClick={handleTwoFactorClick}
                    />

                  </div>


                  {/* LOGIN ACTIVITY */}

                  <div
                    className={`
                      rounded-2xl
                      p-5

                      ${
                        isDark
                          ? "bg-[#120D29]"
                          : "bg-[#FAFAFA]"
                      }
                    `}
                  >

                    <div className="flex items-start gap-4">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-green-50
                          text-green-600
                        "
                      >
                        <Eye size={21} />
                      </div>


                      <div className="flex-1">

                        <h3
                          className={`
                            font-semibold
                            ${
                              isDark
                                ? "text-white"
                                : "text-gray-900"
                            }
                          `}
                        >
                          Login Activity
                        </h3>

                        <p
                          className={`
                            mt-1
                            text-sm
                            ${
                              isDark
                                ? "text-gray-400"
                                : "text-gray-500"
                            }
                          `}
                        >
                          View recent login sessions
                        </p>


                        <div className="mt-5 space-y-3">

                          <div className="flex justify-between gap-5">

                            <span className="text-sm text-gray-500">
                              Last login
                            </span>

                            <span
                              className={`
                                text-right
                                text-sm
                                ${
                                  isDark
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }
                              `}
                            >
                              Today at 9:30 AM
                            </span>

                          </div>


                          <div className="flex justify-between gap-5">

                            <span className="text-sm text-gray-500">
                              Device
                            </span>

                            <span
                              className={`
                                text-right
                                text-sm
                                ${
                                  isDark
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }
                              `}
                            >
                              Chrome on Windows
                            </span>

                          </div>


                          <div className="flex justify-between gap-5">

                            <span className="text-sm text-gray-500">
                              Location
                            </span>

                            <span
                              className={`
                                text-right
                                text-sm
                                ${
                                  isDark
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }
                              `}
                            >
                              India
                            </span>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* DELETE */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowDeleteModal(true)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border-2
                      border-red-200
                      bg-red-50
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-red-100
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-red-100
                        text-red-600
                      "
                    >
                      <Trash2 size={21} />
                    </div>


                    <div className="flex-1">

                      <h3 className="font-semibold text-red-700">
                        Delete Account
                      </h3>

                      <p className="mt-1 text-sm text-red-600">
                        Permanently delete your account
                      </p>

                    </div>


                    <ChevronRight
                      size={21}
                      className="text-red-500"
                    />

                  </button>

                </div>

              </section>
            )}


            {/* =================================================
                PAYMENT METHODS
                ================================================= */}

            {activeTab === "payments" && (
              <section
                className={`
                  mt-6
                  rounded-3xl
                  border
                  p-5
                  shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                  sm:p-7

                  ${
                    isDark
                      ? "border-[#30254A] bg-[#19132F]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >

                <div className="space-y-4">

                  {paymentMethods.map((card) => (
                    <div
                      key={card.id}
                      className={`
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        p-5

                        ${
                          isDark
                            ? "border-[#30254A] bg-[#241B3D]"
                            : "border-purple-100 bg-[#FAF7FC]"
                        }
                      `}
                    >

                      <div
                        className="
                          flex
                          h-10
                          w-14
                          items-center
                          justify-center
                          rounded-md
                          bg-[#5B21B6]
                          text-xs
                          font-bold
                          text-white
                        "
                      >
                        {card.type}
                      </div>


                      <div className="flex-1">

                        <p
                          className={`
                            font-semibold
                            ${
                              isDark
                                ? "text-white"
                                : "text-gray-900"
                            }
                          `}
                        >
                          {card.number}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Expires {card.expires}
                        </p>

                      </div>


                      {card.default && (
                        <span
                          className="
                            rounded-full
                            bg-green-50
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-green-600
                          "
                        >
                          Default
                        </span>
                      )}

                    </div>
                  ))}


                  {/* ADD PAYMENT */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPaymentForm(true)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border-2
                      border-dashed
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:-translate-y-1

                      ${
                        isDark
                          ? "border-[#4A3B69] text-purple-300 hover:bg-[#241B3D]"
                          : "border-gray-200 text-[#6D28D9] hover:bg-purple-50"
                      }
                    `}
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-purple-50
                        text-[#6D28D9]
                      "
                    >
                      <Plus size={22} />
                    </div>

                    <span className="font-semibold">
                      Add New Payment Method
                    </span>

                  </button>


                  {/* PROTECTION */}

                  <div
                    className={`
                      rounded-2xl
                      p-5

                      ${
                        isDark
                          ? "bg-[#241B3D]"
                          : "bg-[#F3EEFF]"
                      }
                    `}
                  >

                    <h3
                      className={`
                        font-semibold
                        ${
                          isDark
                            ? "text-purple-200"
                            : "text-[#4C1D95]"
                        }
                      `}
                    >
                      Payment Protection
                    </h3>

                    <p
                      className={`
                        mt-2
                        text-sm
                        ${
                          isDark
                            ? "text-purple-300"
                            : "text-[#5B21B6]"
                        }
                      `}
                    >
                      All payments are secured with SSL
                      encryption. Your payment information is
                      never stored on our servers.
                    </p>

                  </div>

                </div>

              </section>
            )}

          </div>

        </main>

      </div>


      {/* ======================================================
          MOBILE BOTTOM NAV
          ====================================================== */}

      <div className="lg:hidden">
        <BottomMenu05 />
      </div>


      {/* ======================================================
          ENABLE TWO FACTOR MODAL
          ====================================================== */}

      {showTwoFactorModal && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
          "
        >

          <div
            className={`
              relative
              w-full
              max-w-[520px]
              rounded-3xl
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]

              ${
                isDark
                  ? "bg-[#19132F]"
                  : "bg-white"
              }
            `}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() =>
                setShowTwoFactorModal(false)
              }
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-500
                transition-all
                hover:bg-gray-200
              "
            >
              <X size={18} />
            </button>


            <h2
              className={`
                pr-10
                text-2xl
                font-bold
                ${
                  isDark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Enable Two-Factor Authentication
            </h2>


            <p
              className={`
                mt-5
                text-base
                leading-7
                ${
                  isDark
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              `}
            >
              Two-factor authentication adds an extra layer
              of security to your account by requiring a code
              from your phone in addition to your password.
            </p>


            <div className="mt-7 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowTwoFactorModal(false)
                }
                className="
                  flex-1
                  rounded-2xl
                  bg-purple-50
                  px-5
                  py-3.5
                  font-semibold
                  text-gray-600
                  transition-all
                  hover:-translate-y-1
                  hover:bg-purple-100
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={enableTwoFactor}
                className="
                  flex-1
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#5B21B6]
                  to-[#7C3AED]
                  px-5
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(109,40,217,0.25)]
                  transition-all
                  hover:-translate-y-1
                "
              >
                Enable
              </button>

            </div>

          </div>

        </div>
      )}


      {/* ======================================================
          DISABLE TWO FACTOR MODAL
          ====================================================== */}

      {showDisableTwoFactorModal && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
          "
        >

          <div
            className={`
              relative
              w-full
              max-w-[520px]
              rounded-3xl
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]

              ${
                isDark
                  ? "bg-[#19132F]"
                  : "bg-white"
              }
            `}
          >

            <button
              type="button"
              onClick={() =>
                setShowDisableTwoFactorModal(false)
              }
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-500
                hover:bg-gray-200
              "
            >
              <X size={18} />
            </button>


            <h2
              className={`
                pr-10
                text-2xl
                font-bold
                ${
                  isDark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Disable Two-Factor Authentication
            </h2>


            <p
              className={`
                mt-5
                text-base
                leading-7
                ${
                  isDark
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              `}
            >
              Are you sure you want to disable two-factor
              authentication? This will make your account
              less secure.
            </p>


            <div className="mt-7 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowDisableTwoFactorModal(false)
                }
                className="
                  flex-1
                  rounded-2xl
                  bg-purple-50
                  px-5
                  py-3.5
                  font-semibold
                  text-gray-600
                  hover:bg-purple-100
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={disableTwoFactor}
                className="
                  flex-1
                  rounded-2xl
                  bg-[#D4382F]
                  px-5
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(212,56,47,0.20)]
                  transition-all
                  hover:-translate-y-1
                "
              >
                Disable
              </button>

            </div>

          </div>

        </div>
      )}


      {/* ======================================================
          CHANGE PASSWORD MODAL
          ====================================================== */}

      {showPasswordModal && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
          "
        >

          <div
            className={`
              relative
              w-full
              max-w-[520px]
              rounded-3xl
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]

              ${
                isDark
                  ? "bg-[#19132F]"
                  : "bg-white"
              }
            `}
          >

            <button
              type="button"
              onClick={() =>
                setShowPasswordModal(false)
              }
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-500
                hover:bg-gray-200
              "
            >
              <X size={18} />
            </button>


            <h2
              className={`
                text-2xl
                font-bold
                ${
                  isDark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Change Password
            </h2>


            <div className="mt-6 space-y-4">

              <div>

                <label
                  className={`
                    mb-2
                    block
                    text-sm
                    font-medium
                    ${
                      isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  `}
                >
                  Current Password
                </label>

                <input
                  type="password"
                  value={passwordData.current}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      current: e.target.value,
                    }))
                  }
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    px-4
                    outline-none
                    transition
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100

                    ${
                      isDark
                        ? "border-[#30254A] bg-[#120D29] text-white"
                        : "border-gray-200 bg-white text-gray-900"
                    }
                  `}
                />

              </div>


              <div>

                <label
                  className={`
                    mb-2
                    block
                    text-sm
                    font-medium
                    ${
                      isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  `}
                >
                  New Password
                </label>

                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    px-4
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100

                    ${
                      isDark
                        ? "border-[#30254A] bg-[#120D29] text-white"
                        : "border-gray-200 bg-white text-gray-900"
                    }
                  `}
                />

              </div>


              <div>

                <label
                  className={`
                    mb-2
                    block
                    text-sm
                    font-medium
                    ${
                      isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  `}
                >
                  Confirm New Password
                </label>

                <input
                  type="password"
                  value={passwordData.confirm}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      confirm: e.target.value,
                    }))
                  }
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    px-4
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100

                    ${
                      isDark
                        ? "border-[#30254A] bg-[#120D29] text-white"
                        : "border-gray-200 bg-white text-gray-900"
                    }
                  `}
                />

              </div>

            </div>


            <div className="mt-7 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowPasswordModal(false)
                }
                className="
                  flex-1
                  rounded-2xl
                  bg-purple-50
                  px-5
                  py-3.5
                  font-semibold
                  text-gray-600
                  hover:bg-purple-100
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={handlePasswordUpdate}
                className="
                  flex-1
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#5B21B6]
                  to-[#7C3AED]
                  px-5
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(109,40,217,0.25)]
                  transition-all
                  hover:-translate-y-1
                "
              >
                Update Password
              </button>

            </div>

          </div>

        </div>
      )}


      {/* ======================================================
          DELETE ACCOUNT MODAL
          ====================================================== */}

      {showDeleteModal && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
          "
        >

          <div
            className="
              relative
              w-full
              max-w-[520px]
              rounded-3xl
              bg-white
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-red-50
                text-red-500
              "
            >
              <AlertTriangle size={26} />
            </div>


            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Delete Account
            </h2>


            <p className="mt-5 text-base leading-7 text-gray-500">
              This action cannot be undone. All your data,
              projects, messages, and account information will
              be permanently deleted.
            </p>


            <div className="mt-7 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowDeleteModal(false)
                }
                className="
                  flex-1
                  rounded-2xl
                  bg-purple-50
                  px-5
                  py-3.5
                  font-semibold
                  text-gray-600
                  hover:bg-purple-100
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={handleDeleteAccount}
                className="
                  flex-1
                  rounded-2xl
                  bg-[#D4382F]
                  px-5
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(212,56,47,0.20)]
                  transition-all
                  hover:-translate-y-1
                "
              >
                Delete Account
              </button>

            </div>

          </div>

        </div>
      )}


      {/* ======================================================
          ADD PAYMENT MODAL
          ====================================================== */}

      {showPaymentForm && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
          "
        >

          <div
            className={`
              relative
              w-full
              max-w-[520px]
              rounded-3xl
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]

              ${
                isDark
                  ? "bg-[#19132F]"
                  : "bg-white"
              }
            `}
          >

            <button
              type="button"
              onClick={() =>
                setShowPaymentForm(false)
              }
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-500
                hover:bg-gray-200
              "
            >
              <X size={18} />
            </button>


            <h2
              className={`
                text-2xl
                font-bold
                ${
                  isDark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              Add New Payment Method
            </h2>


            <p
              className={`
                mt-3
                text-sm
                ${
                  isDark
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              `}
            >
              Add a payment method to use for your
              SkillBuster purchases.
            </p>


            <div className="mt-7 space-y-4">

              <input
                placeholder="Card number"
                className={`
                  h-13
                  w-full
                  rounded-xl
                  border
                  px-4
                  outline-none
                  focus:border-purple-500

                  ${
                    isDark
                      ? "border-[#30254A] bg-[#120D29] text-white placeholder:text-gray-500"
                      : "border-gray-200 bg-white text-gray-900"
                  }
                `}
              />


              <div className="grid grid-cols-2 gap-3">

                <input
                  placeholder="MM / YY"
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    px-4
                    outline-none
                    focus:border-purple-500

                    ${
                      isDark
                        ? "border-[#30254A] bg-[#120D29] text-white placeholder:text-gray-500"
                        : "border-gray-200 bg-white text-gray-900"
                    }
                  `}
                />

                <input
                  placeholder="CVV"
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    px-4
                    outline-none
                    focus:border-purple-500

                    ${
                      isDark
                        ? "border-[#30254A] bg-[#120D29] text-white placeholder:text-gray-500"
                        : "border-gray-200 bg-white text-gray-900"
                    }
                  `}
                />

              </div>

            </div>


            <div className="mt-7 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowPaymentForm(false)
                }
                className="
                  flex-1
                  rounded-2xl
                  bg-purple-50
                  px-5
                  py-3.5
                  font-semibold
                  text-gray-600
                  hover:bg-purple-100
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={handleAddPayment}
                className="
                  flex-1
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#5B21B6]
                  to-[#7C3AED]
                  px-5
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(109,40,217,0.25)]
                  transition-all
                  hover:-translate-y-1
                "
              >
                Add Payment
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}