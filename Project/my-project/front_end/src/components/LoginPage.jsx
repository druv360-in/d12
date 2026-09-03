import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Zap,
  Briefcase,
  Code2,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  ChevronRight,
} from "lucide-react";

function LoginPage() {
  const navigate = useNavigate();

  // client | freelancer | admin
  const [selectedRole, setSelectedRole] = useState("client");

  const [email, setEmail] = useState("client@skillbuster.com");
  const [password, setPassword] = useState("client123");
  const [showPassword, setShowPassword] = useState(false);

  /*
   * ============================================================
   * ROLE THEMES
   * ============================================================
   */
  const themes = {
    client: {
      mainColor: "#7C3AED",
      hoverColor: "#6D28D9",
      lightBG: "#EEF2FF",
      borderColor: "#7C3AED",
      iconColor: "#5B21B6",

      buttonClass:
        "bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] hover:from-[#4C1D95] hover:to-[#6D28D9]",

      demoEmail: "client@skillbuster.com",
      demoPassword: "client123",
      roleName: "Client",
      description: "Post projects & hire talent",
      icon: Briefcase,
      iconBackground: "#5B21B6",
    },

    freelancer: {
      mainColor: "#059669",
      hoverColor: "#047857",
      lightBG: "#ECFDF5",
      borderColor: "#059669",
      iconColor: "#059669",

      buttonClass:
        "bg-[#0F766E] hover:bg-[#115E59]",

      demoEmail: "freelancer@skillbuster.com",
      demoPassword: "freelancer123",
      roleName: "Freelancer",
      description: "Find work & grow your career",
      icon: Code2,
      iconBackground: "#059669",
    },

    admin: {
      mainColor: "#D4AF37",
      hoverColor: "#B8941F",
      lightBG: "#FFFBEB",
      borderColor: "#D4AF37",
      iconColor: "#D4AF37",

      buttonClass:
        "bg-[#D4AF37] hover:bg-[#B8941F]",

      demoEmail: "admin@skillbuster.com",
      demoPassword: "admin123",
      roleName: "Admin",
      description: "Manage the platform",
      icon: ShieldCheck,
      iconBackground: "#D4AF37",
    },
  };

  /*
   * ============================================================
   * ROLE OPTIONS
   * ============================================================
   */
  const roles = [
    {
      id: "client",
      name: "Client",
      description: "Post projects & hire talent",
      icon: Briefcase,
    },
    {
      id: "freelancer",
      name: "Freelancer",
      description: "Find work & grow your career",
      icon: Code2,
    },
    {
      id: "admin",
      name: "Admin",
      description: "Manage the platform",
      icon: ShieldCheck,
    },
  ];

  const theme = themes[selectedRole];

  /*
   * ============================================================
   * ROLE CHANGE
   * ============================================================
   */
  const handleRoleChange = (role) => {
    setSelectedRole(role);

    // Automatically fill credentials for selected role
    setEmail(themes[role].demoEmail);
    setPassword(themes[role].demoPassword);

    setShowPassword(false);
  };

  /*
   * ============================================================
   * DEMO ACCOUNT
   * ============================================================
   */
  const handleDemoAccount = () => {
    setEmail(theme.demoEmail);
    setPassword(theme.demoPassword);
  };

  /*
   * ============================================================
   * SIGN IN
   * ============================================================
   */
  const handleSignIn = () => {
    if (selectedRole === "client") {
      navigate("/app");
    }

    // Freelancer/Admin navigation can be added later.
  };

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

      {/* =========================================================
          CENTERED WHITE CARD
      ========================================================== */}
      <div
        className="
          w-full
          max-w-[455px]
          bg-white
          rounded-3xl
          border border-slate-100
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          px-5
          py-7
          sm:px-7
          sm:py-8
        "
      >

        {/* =======================================================
            FIXED SKILLBUSTER LOGO
        ======================================================== */}
        <div className="flex justify-center mb-6">
          <div
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              text-white
              shadow-[0_10px_25px_rgba(124,58,237,0.25)]
            "
            style={{
              background:
                "linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)",
            }}
          >
            <Zap
              size={24}
              strokeWidth={2.8}
              fill="currentColor"
            />

            <span className="text-lg sm:text-xl font-bold">
              SkillBuster
            </span>
          </div>
        </div>

        {/* =======================================================
            HEADING
        ======================================================== */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-[32px] font-bold text-slate-900">
            Welcome Back!
          </h1>

          <p className="mt-1.5 text-sm sm:text-base text-slate-500">
            Sign in to continue your journey
          </p>
        </div>

        {/* =======================================================
            SELECT YOUR ROLE
        ======================================================== */}
        <div className="mb-2">
          <p className="text-xs font-bold tracking-wide text-slate-500">
            SELECT YOUR ROLE
          </p>
        </div>

        {/* =======================================================
            ROLE CARDS
        ======================================================== */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5">

          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            const roleTheme = themes[role.id];

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleChange(role.id)}
                className={`
                  relative
                  min-h-[128px]
                  sm:min-h-[132px]
                  rounded-2xl
                  p-3
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                  ease-in-out

                  ${
                    isSelected
                      ? "border-2 shadow-md"
                      : "border border-slate-200 bg-slate-50 hover:bg-slate-100"
                  }
                `}
                style={
                  isSelected
                    ? {
                        backgroundColor: roleTheme.lightBG,
                        borderColor: roleTheme.borderColor,
                      }
                    : {}
                }
              >

                {/* =================================================
                    CHECKMARK
                ================================================== */}
                {isSelected && (
                  <div
                    className="
                      absolute
                      top-2
                      right-2
                      w-6
                      h-6
                      rounded-full
                      border-2
                      border-white
                      shadow-md
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                    "
                    style={{
                      backgroundColor: roleTheme.mainColor,
                    }}
                  >
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </div>
                )}

                {/* =================================================
                    ICON CIRCLE
                ================================================== */}
                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mb-2
                    text-white
                    transition-all
                    duration-300
                    ease-in-out
                  "
                  style={{
                    backgroundColor: isSelected
                      ? roleTheme.iconBackground
                      : "#E2E8F0",

                    color: isSelected
                      ? "#FFFFFF"
                      : "#94A3B8",
                  }}
                >
                  <Icon size={21} />
                </div>

                {/* Role Name */}
                <span
                  className="
                    text-sm
                    font-bold
                    transition-colors
                    duration-300
                  "
                  style={{
                    color: isSelected
                      ? roleTheme.mainColor
                      : "#334155",
                  }}
                >
                  {role.name}
                </span>

                {/* Role Description */}
                <span className="mt-0.5 text-[10px] leading-tight text-slate-400">
                  {role.description}
                </span>

              </button>
            );
          })}

        </div>

        {/* =======================================================
            DEMO ACCOUNT
        ======================================================== */}
        <div
          className="
            w-full
            rounded-2xl
            px-4
            py-3
            mb-6
            transition-all
            duration-300
            ease-in-out
          "
          style={{
            backgroundColor: theme.lightBG,
          }}
        >
          <div className="flex items-center gap-3">

            {/* Demo Icon */}
            <div
              className="
                w-9
                h-9
                shrink-0
                rounded-lg
                bg-white
                flex
                items-center
                justify-center
              "
            >
              {(() => {
                const DemoIcon = theme.icon;

                return (
                  <DemoIcon
                    size={18}
                    style={{
                      color: theme.mainColor,
                    }}
                  />
                );
              })()}
            </div>

            {/* Demo Details */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800">
                Demo {theme.roleName} Account
              </p>

              <p className="text-xs text-slate-500 truncate">
                {theme.demoEmail} • {theme.demoPassword}
              </p>
            </div>

            {/* Auto-filled */}
            <button
              type="button"
              onClick={handleDemoAccount}
              className="
                shrink-0
                text-[11px]
                font-semibold
                text-slate-700
                bg-white
                px-2.5
                py-1.5
                rounded-full
                hover:bg-slate-50
                transition-all
                duration-300
              "
            >
              Auto-filled
            </button>

          </div>
        </div>

        {/* =======================================================
            LOGIN FORM
        ======================================================== */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >

          {/* =====================================================
              EMAIL
          ====================================================== */}
          <div className="mb-4">

            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Email Address
            </label>

            <div
              className="
                relative
                flex
                items-center
                h-[52px]
                bg-white
                border
                border-slate-200
                rounded-xl
                shadow-sm
                transition-all
                duration-300
                focus-within:border-violet-500
                focus-within:ring-2
                focus-within:ring-violet-100
              "
            >
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  text-slate-400
                "
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  w-full
                  h-full
                  pl-11
                  pr-4
                  rounded-xl
                  outline-none
                  text-sm
                  text-slate-700
                  placeholder:text-slate-400
                  bg-transparent
                "
              />
            </div>

          </div>

          {/* =====================================================
              PASSWORD
          ====================================================== */}
          <div className="mb-3">

            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Password
            </label>

            <div
              className="
                relative
                flex
                items-center
                h-[52px]
                bg-white
                border
                border-slate-200
                rounded-xl
                shadow-sm
                transition-all
                duration-300
                focus-within:border-violet-500
                focus-within:ring-2
                focus-within:ring-violet-100
              "
            >
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  text-slate-400
                "
              />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="
                  w-full
                  h-full
                  pl-11
                  pr-12
                  rounded-xl
                  outline-none
                  text-sm
                  text-slate-700
                  placeholder:text-slate-400
                  bg-transparent
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((previous) => !previous)
                }
                className="
                  absolute
                  right-4
                  text-slate-400
                  hover:text-slate-600
                  transition-colors
                  duration-300
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          {/* =====================================================
              FORGOT PASSWORD
          ====================================================== */}
          <div className="flex justify-end mb-5">

            <button
              type="button"
              className="
                text-sm
                font-semibold
                transition-colors
                duration-300
              "
              style={{
                color: theme.mainColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  theme.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  theme.mainColor;
              }}
            >
              Forgot Password?
            </button>

          </div>

          {/* =====================================================
              SIGN IN BUTTON
          ====================================================== */}
          <button
            type="submit"
            className={`
              w-full
              h-[52px]
              rounded-lg
              text-white
              font-bold
              text-sm
              flex
              items-center
              justify-center
              gap-2
              shadow-sm
              transition-all
              duration-300
              ease-in-out
              active:scale-[0.99]
              ${theme.buttonClass}
            `}
          >
            Sign in as {theme.roleName}

            <ChevronRight size={18} />
          </button>

        </form>

        {/* =======================================================
            DIVIDER
        ======================================================== */}
        <div className="flex items-center gap-4 my-6">

          <div className="flex-1 h-px bg-slate-200" />

          <span className="text-xs text-slate-400 whitespace-nowrap">
            Or continue with
          </span>

          <div className="flex-1 h-px bg-slate-200" />

        </div>

        {/* =======================================================
            GOOGLE / FACEBOOK
        ======================================================== */}
        <div className="grid grid-cols-2 gap-3">

          {/* Google */}
          <button
            type="button"
            className="
              h-12
              rounded-xl
              border
              border-slate-200
              bg-white
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-semibold
              text-slate-700
              hover:bg-slate-50
              transition-all
              duration-300
            "
          >
            <span className="text-lg font-bold text-red-500">
              G
            </span>

            Google
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="
              h-12
              rounded-xl
              border
              border-slate-200
              bg-white
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-semibold
              text-slate-700
              hover:bg-slate-50
              transition-all
              duration-300
            "
          >
            <span
              className="
                w-5
                h-5
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                text-xs
                font-bold
              "
            >
              f
            </span>

            Facebook
          </button>

        </div>

        {/* =======================================================
            SIGN UP
        ======================================================== */}
        <p className="text-center text-sm text-slate-500 mt-7">
          Don't have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="
              font-bold
              transition-colors
              duration-300
            "
            style={{
              color: theme.mainColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                theme.hoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                theme.mainColor;
            }}
          >
            Sign Up
          </button>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
