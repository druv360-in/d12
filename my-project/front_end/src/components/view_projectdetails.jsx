import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  CircleDollarSign,
  CircleAlert,
  Zap,
  FileText,
  Info,
  Paperclip,
  MessageCircle,
  ChevronRight,
  Layers3,
  UserPlus,
  CheckCircle2,
  Activity,
  Wallet,
} from "lucide-react";

import SidebarMenu24 from "./SidebarMenu24";
import Header01 from "./Header01";
import BottomMenu05 from "./BottomMenu05";

const requirements = [
  "User authentication and authorization (JWT)",
  "Product catalog with advanced search and filters",
  "Shopping cart and multi-step checkout system",
  "Payment gateway integration (Stripe + Razorpay)",
  "Admin dashboard for product and order management",
  "Order tracking with real-time status updates",
  "Automated email notifications for orders",
  "Responsive design for mobile and desktop",
  "SEO-optimized pages with meta tags",
  "Performance score of 90+ on Lighthouse",
];

const activities = [
  {
    icon: Layers3,
    tone: "purple",
    title: "You — Project created and published",
    date: "May 1, 2026 · 10:00 AM",
  },
  {
    icon: UserPlus,
    tone: "green",
    title: "You — Hired Sarah Johnson as the lead developer",
    date: "May 3, 2026 · 2:30 PM",
  },
  {
    icon: Activity,
    tone: "blue",
    title: "Sarah Johnson — Submitted database schema for review",
    date: "May 10, 2026 · 11:15 AM",
  },
  {
    icon: CheckCircle2,
    tone: "green",
    title: "You — Approved the database schema design",
    date: "May 11, 2026 · 9:00 AM",
  },
  {
    icon: Wallet,
    tone: "yellow",
    title: "You — Released ₹2,000 for the initial milestone",
    date: "May 15, 2026 · 3:45 PM",
  },
  {
    icon: Activity,
    tone: "blue",
    title: "Sarah Johnson — User authentication system completed and tested",
    date: "May 20, 2026 · 5:00 PM",
  },
  {
    icon: MessageCircle,
    tone: "purple",
    title: "Sarah Johnson — Sent a progress update with screenshots",
    date: "May 25, 2026 · 1:20 PM",
  },
  {
    icon: Activity,
    tone: "blue",
    title:
      "Sarah Johnson — Product catalog UI 60% complete, sharing preview",
    date: "Jun 1, 2026 · 4:10 PM",
  },
];

const toneStyles = {
  purple: {
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    line: "bg-violet-200",
  },
  green: {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    line: "bg-emerald-200",
  },
  blue: {
    iconBg: "bg-blue-100",
    iconText: "text-blue-500",
    line: "bg-blue-200",
  },
  yellow: {
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    line: "bg-amber-200",
  },
};

function DetailCard({ children, className = "" }) {
  return (
    <section
      className={`
        rounded-[24px]
        border
        border-gray-200
        bg-white
        shadow-[0_5px_18px_rgba(15,23,42,0.08)]
        ${className}
      `}
    >
      {children}
    </section>
  );
}

function SectionTitle({
  icon: Icon,
  iconClass = "text-violet-600",
  children,
}) {
  return (
    <div className="mb-6 flex items-center gap-3.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50">
        <Icon
          size={21}
          strokeWidth={2.1}
          className={iconClass}
        />
      </div>

      <h2 className="text-[22px] font-bold tracking-[-0.01em] text-gray-900">
        {children}
      </h2>
    </div>
  );
}

function ViewProjectDetails() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const project = {
    title: "E-Commerce Website Development",
    description:
      "Build a modern, scalable e-commerce platform with full payment integration, product management, and an admin dashboard. The platform should support multiple vendors and provide a seamless shopping experience.",
    status: "in-progress",
    category: "Web Development",
    priority: "High Priority",
    budget: "$ 5,000 Budget",
    progress: 45,
    startDate: "1 May 2026",
    deadline: "15 Jul 2026",
    daysElapsed: "141 days",
    daysRemaining: "-65 days",
    timelineElapsed: "188%",
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb]">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="lg:pl-[272px] xl:pl-[272px]">

        {/* Mobile / Tablet Header */}
        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* ===================================================
            PAGE HEADER
        ==================================================== */}

        <header
          className="
            sticky
            top-0
            z-40
            border-b
            border-gray-200
            bg-white
          "
        >
          <div
            className="
              mx-auto
              flex
              min-h-[76px]
              w-full
              max-w-[1240px]
              items-center
              justify-between
              gap-5
              px-5
              sm:px-7
              lg:px-6
              xl:px-7
            "
          >

            {/* Left */}

            <div className="flex min-w-0 items-center gap-4">

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-50
                  text-gray-600
                  transition
                  hover:bg-violet-100
                  hover:text-violet-700
                "
              >
                <ArrowLeft size={21} />
              </button>

              <div className="min-w-0">
                <h1 className="text-[19px] font-bold leading-tight text-gray-900">
                  Project Details
                </h1>

                <p className="mt-1 text-[13px] leading-tight text-gray-500">
                  View full project information
                </p>
              </div>

            </div>

            {/* Right */}

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="
                flex
                shrink-0
                items-center
                gap-2.5
                rounded-full
                border
                border-gray-200
                bg-white
                px-3
                py-2.5
                shadow-[0_2px_8px_rgba(15,23,42,0.05)]
                transition
                hover:border-violet-200
                hover:shadow-md
              "
            >

              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                alt="John Doe"
                className="
                  h-9
                  w-9
                  rounded-full
                  border
                  border-white
                  object-cover
                  shadow-sm
                "
              />

              <div className="hidden text-left sm:block">
                <p className="text-[13px] font-semibold leading-tight text-gray-800">
                  John Doe
                </p>

                <p className="mt-0.5 text-[11px] leading-tight text-gray-500">
                  View Profile
                </p>
              </div>

              <ChevronRight
                size={17}
                className="text-gray-400"
              />

            </button>

          </div>
        </header>

        {/* ===================================================
            PAGE BODY
        ==================================================== */}

        <main className="px-4 pb-28 pt-6 sm:px-6 lg:px-6 xl:px-8">

          <div className="mx-auto w-full max-w-[1240px] space-y-6">

            {/* =================================================
                PROJECT SUMMARY
            ================================================== */}

            {/* =================================================
    PROJECT SUMMARY
================================================== */}

<DetailCard className="p-6 sm:p-7">

  <div className="flex flex-col gap-5">

    {/* Project Title */}
    <h1 className="text-[26px] sm:text-[28px] font-bold leading-tight tracking-[-0.02em] text-gray-900">
      E-Commerce Website Development
    </h1>

    {/* Description */}
    <p className="text-[16px] sm:text-[17px] font-medium leading-[1.75] text-gray-600">
      Build a modern, responsive e-commerce platform with product
      management, shopping cart, secure checkout, payment integration,
      and an admin dashboard.
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2.5">
      <span className="rounded-full bg-violet-50 px-4 py-2 text-[13px] font-semibold text-violet-700">
        Web Development
      </span>

      <span className="rounded-full bg-blue-50 px-4 py-2 text-[13px] font-semibold text-blue-700">
        E-Commerce
      </span>

      <span className="rounded-full bg-green-50 px-4 py-2 text-[13px] font-semibold text-green-700">
        Full Stack
      </span>
    </div>

    {/* Progress */}
    <div className="mt-2">

      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[14px] font-semibold text-gray-700">
          Project Progress
        </span>

        <span className="text-[14px] font-bold text-violet-600">
          65%
        </span>
      </div>

      <div className="h-[10px] w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-violet-600"
          style={{ width: "65%" }}
        />
      </div>

    </div>

  </div>

</DetailCard>
            {/* =================================================
                DEADLINE & TIMING
            ================================================== */}

            <DetailCard className="p-6 sm:p-7">

              <SectionTitle
                icon={Clock3}
                iconClass="text-violet-600"
              >
                Deadline &amp; Timing
              </SectionTitle>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Start Date */}

                <div
                  className="
                    rounded-[18px]
                    border
                    border-violet-100
                    bg-violet-50/80
                    px-5
                    py-5
                  "
                >
                  <div className="flex items-start gap-3">

                    <CalendarDays
                      size={18}
                      className="mt-0.5 shrink-0 text-violet-500"
                    />

                    <div>
                      <p className="text-[11px] font-medium text-gray-500">
                        Start Date
                      </p>

                      <p className="mt-1 text-[15px] font-semibold text-gray-900">
                        {project.startDate}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Deadline */}

                <div
                  className="
                    rounded-[18px]
                    border
                    border-rose-100
                    bg-rose-50/80
                    px-5
                    py-5
                  "
                >
                  <div className="flex items-start gap-3">

                    <CalendarDays
                      size={18}
                      className="mt-0.5 shrink-0 text-rose-500"
                    />

                    <div>
                      <p className="text-[11px] font-medium text-gray-500">
                        Deadline
                      </p>

                      <p className="mt-1 text-[15px] font-semibold text-gray-900">
                        {project.deadline}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Days Elapsed */}

                <div
                  className="
                    rounded-[18px]
                    border
                    border-emerald-100
                    bg-emerald-50/80
                    px-5
                    py-5
                  "
                >
                  <div className="flex items-start gap-3">

                    <Zap
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />

                    <div>
                      <p className="text-[11px] font-medium text-gray-500">
                        Days Elapsed
                      </p>

                      <p className="mt-1 text-[15px] font-semibold text-gray-900">
                        {project.daysElapsed}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Days Remaining */}

                <div
                  className="
                    rounded-[18px]
                    border
                    border-amber-100
                    bg-amber-50/80
                    px-5
                    py-5
                  "
                >
                  <div className="flex items-start gap-3">

                    <Clock3
                      size={18}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />

                    <div>
                      <p className="text-[11px] font-medium text-gray-500">
                        Days Remaining
                      </p>

                      <p className="mt-1 text-[15px] font-semibold text-gray-900">
                        {project.daysRemaining}
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Timeline */}

              <div className="mt-6">

                <div className="mb-2 flex items-center justify-between text-[11px] text-gray-400">
                  <span>1 May</span>
                  <span>15 Jul</span>
                </div>

                <div className="h-[9px] overflow-hidden rounded-full bg-gray-200">

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-violet-600
                      via-violet-500
                      to-amber-500
                    "
                    style={{ width: "100%" }}
                  />

                </div>

                <p className="mt-2 text-center text-[12px] text-gray-500">
                  {project.timelineElapsed} of timeline elapsed
                </p>

              </div>

            </DetailCard>

            {/* =================================================
                PROJECT REQUIREMENTS
            ================================================== */}

          
<DetailCard className="p-6 sm:p-7">

  <SectionTitle
    icon={FileText}
    iconClass="text-violet-600"
  >
    Project Requirements
  </SectionTitle>

  <div className="space-y-3.5">

    {requirements.map((item, index) => (
      <div
        key={index}
        className="
          flex
          items-center
          gap-4
          rounded-[18px]
          border
          border-violet-100
          bg-violet-50/55
          px-5
          py-4
        "
      >

        {/* Number */}
        <span
          className="
            flex
            h-[30px]
            w-[30px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-violet-600
            text-[12px]
            font-bold
            text-white
          "
        >
          {index + 1}
        </span>

        {/* Requirement */}
        <p className="text-[16px] font-medium leading-[1.6] text-gray-700">
          {item}
        </p>

      </div>
    ))}

  </div>

</DetailCard>

           
            {/* =================================================
    ADDITIONAL DETAILS
================================================== */}

<DetailCard className="p-6 sm:p-7">

  <SectionTitle
    icon={Info}
    iconClass="text-amber-500"
  >
    Additional Details
  </SectionTitle>

  <div className="space-y-6">

    {/* Tech Stack */}
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
        Tech Stack
      </p>

      <p className="mt-2 text-[16px] font-medium leading-[1.7] text-gray-700">
        React 18, Node.js, MongoDB, Tailwind CSS, Stripe API
      </p>
    </div>

    {/* Deliverables */}
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
        Deliverables
      </p>

      <p className="mt-2 text-[16px] font-medium leading-[1.7] text-gray-700">
        Source code, documentation, deployment guide, 30-day support
      </p>
    </div>

    {/* Communication Preference */}
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
        Communication Preference
      </p>

      <p className="mt-2 text-[16px] font-medium leading-[1.7] text-gray-700">
        Daily updates via chat; weekly video calls on Fridays
      </p>
    </div>

    {/* Special Notes */}
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
        Special Notes
      </p>

      <p className="mt-2 text-[16px] font-medium leading-[1.75] text-gray-700">
        Prefer clean, well-commented code. All components must include
        unit tests. Design should follow the provided Figma prototype.
      </p>
    </div>

    {/* Attachments */}
    <div>

      <p className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-gray-400">
        Attachments
      </p>

      <div className="flex flex-wrap gap-2.5">

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-violet-50
            px-4
            py-2.5
            text-[13px]
            font-medium
            text-violet-700
            transition
            hover:bg-violet-100
          "
        >
          <Paperclip size={15} />
          Project Brief.pdf
        </button>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-violet-50
            px-4
            py-2.5
            text-[13px]
            font-medium
            text-violet-700
            transition
            hover:bg-violet-100
          "
        >
          <Paperclip size={15} />
          Figma Design Link
        </button>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-violet-50
            px-4
            py-2.5
            text-[13px]
            font-medium
            text-violet-700
            transition
            hover:bg-violet-100
          "
        >
          <Paperclip size={15} />
          API Docs.pdf
        </button>

      </div>

    </div>

  </div>

</DetailCard>

            {/* =================================================
                ASSIGNED FREELANCER
            ================================================== */}

            <DetailCard className="p-6 sm:p-7">

              <SectionTitle
                icon={User}
                iconClass="text-violet-600"
              >
                Assigned Freelancer
              </SectionTitle>

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  rounded-[16px]
                  border
                  border-violet-100
                  bg-violet-50/60
                  p-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div className="flex min-w-0 items-center gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                    alt="Sarah Johnson"
                    className="
                      h-16
                      w-16
                      shrink-0
                      rounded-full
                      object-cover
                    "
                  />

                  <div className="min-w-0">

                    <p className="text-[16px] font-bold text-gray-900">
                      Sarah Johnson
                    </p>

                    <p className="mt-1 truncate text-[12px] text-gray-500">
                      sarah.j@university.edu
                    </p>

                    <div className="mt-1.5 flex items-center gap-1">

                      <span className="text-[13px] text-amber-500">
                        ★
                      </span>

                      <span className="text-[12px] font-semibold text-gray-700">
                        4.9
                      </span>

                    </div>

                    <div className="mt-2 flex flex-wrap gap-1.5">

                      <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-medium text-violet-700">
                        React
                      </span>

                      <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-medium text-violet-700">
                        Node.js
                      </span>

                      <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-medium text-violet-700">
                        MongoDB
                      </span>

                    </div>

                  </div>

                </div>

                {/* Freelancer actions */}

                <div className="flex items-center gap-3 self-end sm:self-center">

                  <button
                    type="button"
                    onClick={() => navigate("/chat")}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-600
                      text-white
                      shadow-sm
                      transition
                      hover:bg-violet-700
                    "
                  >
                    <MessageCircle size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/profile")}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      text-gray-400
                      transition
                      hover:border-violet-200
                      hover:text-violet-600
                    "
                  >
                    <ChevronRight size={20} />
                  </button>

                </div>

              </div>

            </DetailCard>

            {/* =================================================
                ACTIVITY LOG
            ================================================== */}

            <DetailCard className="p-6 sm:p-7">

              <SectionTitle
                icon={Activity}
                iconClass="text-violet-600"
              >
                Activity Log
              </SectionTitle>

              <div className="relative">

                {/* Vertical line */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-[17px]
                    top-5
                    w-px
                    bg-violet-100
                  "
                />

                <div className="space-y-5">

                  {activities.map((activity, index) => {

                    const Icon = activity.icon;
                    const tone = toneStyles[activity.tone];

                    return (
                      <div
                        key={index}
                        className="
                          relative
                          flex
                          items-start
                          gap-4
                        "
                      >

                        <div
                          className={`
                            relative
                            z-10
                            flex
                            h-[34px]
                            w-[34px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white
                            ${tone.iconBg}
                          `}
                        >

                          <Icon
                            size={17}
                            className={tone.iconText}
                          />

                        </div>

                        <div className="min-w-0 pt-0.5">

                          <p className="text-[20px] font-semibold leading-relaxed text-gray-800 sm:text-[18px]">
                            {activity.title}
                          </p>

                          <p className="mt-1 text-[15px] text-gray-400">
                            {activity.date}
                          </p>

                        </div>

                      </div>
                    );

                  })}

                </div>

              </div>

            </DetailCard>

          </div>

        </main>

      </div>

      {/* Mobile Bottom Navigation */}

      <BottomMenu05 />

    </div>
  );
}

export default ViewProjectDetails;