import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  RefreshCw,
  CheckCircle2,
  Circle,
  MessageSquare,
  DollarSign,
  Clock3,
  CalendarDays,
  FileText,
  Upload,
  AlertCircle,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SidebarMenu24 from "./SidebarMenu24";
import RequestRevision from "./requestrevision";
import CancelOrder from "./cancelorder";

function Order1() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showRevision, setShowRevision] = useState(false);
  const [showCancelOrder, setShowCancelOrder] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#faf7ff] text-slate-900">

      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="lg:pl-[341px] xl:pl-[341px]">

        {/* =======================================================
            TOP HEADER
        ======================================================= */}
        <header className="sticky top-0 z-40 h-[92px] border-b border-gray-200 bg-white">
          <div className="flex h-full items-center justify-between px-6 lg:px-8">

            {/* BACK + TITLE */}
            <div className="flex items-center gap-4">

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-[#f3f0ff]
                  text-gray-500
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#e8e1ff]
                  hover:text-gray-700
                  hover:shadow-md
                "
              >
                <ArrowLeft size={23} strokeWidth={2} />
              </button>

              <div className="leading-tight">
                <h1 className="text-[22px] font-bold text-[#111827]">
                  Order #1
                </h1>

                <p className="mt-1 text-[14px] font-medium text-[#9ca3af]">
                  Active Order Details
                </p>
              </div>

            </div>

            {/* PROFILE */}
            <button
              type="button"
              className="
                flex h-[58px]
                items-center gap-3
                rounded-[19px]
                border border-gray-200
                bg-white
                px-5
                shadow-[0_3px_12px_rgba(0,0,0,0.08)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                alt="John Doe"
                className="
                  h-[38px] w-[38px]
                  rounded-full
                  border-2 border-purple-600
                  object-cover
                "
              />

              <div className="hidden text-left sm:block">
                <p className="text-[14px] font-semibold leading-tight text-gray-800">
                  John Doe
                </p>

                <p className="mt-1 text-[12px] leading-tight text-gray-500">
                  View Profile
                </p>
              </div>

              <ChevronRight
                size={19}
                className="text-gray-400"
                strokeWidth={2}
              />
            </button>

          </div>
        </header>

        {/* =======================================================
            PAGE CONTENT
        ======================================================= */}
        <main className="px-4 py-8 sm:px-6 lg:px-7">

          <div className="mx-auto w-full max-w-[1450px] space-y-7">

            {/* ===================================================
                STATUS BANNER
            =================================================== */}
            <section
              className="
                rounded-[24px]
                bg-gradient-to-r
                from-[#2f80ed]
                via-[#6658f5]
                to-[#9b18f5]
                px-[36px]
                py-[38px]
                text-white
                shadow-[0_8px_20px_rgba(91,66,230,0.20)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_32px_rgba(91,66,230,0.28)]
              "
            >
              <div className="flex items-center gap-4">

                <RefreshCw
                  size={28}
                  strokeWidth={2.3}
                  className="shrink-0"
                />

                <h2 className="text-[26px] font-bold">
                  In Progress
                </h2>

              </div>

              <p className="mt-4 text-[17px] font-medium leading-relaxed text-white/90">
                Your order is being worked on. Delivery by March 13, 2026
              </p>
            </section>

            {/* ===================================================
                ORDER PROGRESS
            =================================================== */}
            <section
              className="
                rounded-[24px]
                bg-white
                px-[36px]
                py-[38px]
                shadow-[0_6px_20px_rgba(0,0,0,0.07)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_32px_rgba(0,0,0,0.11)]
              "
            >

              <h2 className="text-[26px] font-bold text-[#111827]">
                Order Progress
              </h2>

              <div className="relative mt-[38px] pb-5">

                <div
                  className="
                    absolute
                    left-[62px]
                    right-[62px]
                    top-[22px]
                    h-[3px]
                    rounded-full
                    bg-gray-200
                  "
                />

                <div
                  className="
                    absolute
                    left-[62px]
                    top-[22px]
                    h-[3px]
                    w-[41%]
                    rounded-full
                    bg-gradient-to-r
                    from-[#a855f7]
                    to-[#ec4899]
                  "
                />

                <div className="relative grid grid-cols-4">

                  <ProgressStep
                    active
                    label="Order"
                    secondLabel="Placed"
                    date="Mar 8"
                  />

                  <ProgressStep
                    active
                    label="In Progress"
                    date="Mar 10"
                  />

                  <ProgressStep
                    label="Review"
                    date="Mar 12"
                  />

                  <ProgressStep
                    label="Delivered"
                    date="Mar 13"
                  />

                </div>

              </div>
            </section>

            {/* ===================================================
                FREELANCER
            =================================================== */}
            <section
              className="
                rounded-[24px]
                bg-white
                px-[36px]
                py-[38px]
                shadow-[0_6px_20px_rgba(0,0,0,0.07)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_32px_rgba(0,0,0,0.11)]
              "
            >

              <div className="flex items-center justify-between gap-8">

                <div>

                  <h2 className="text-[26px] font-bold text-[#111827]">
                    Your Freelancer
                  </h2>

                  <div className="mt-[23px] flex items-center gap-6">

                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                      alt="Emma Thompson"
                      className="
                        h-[88px]
                        w-[88px]
                        rounded-[17px]
                        object-cover
                        shadow-sm
                      "
                    />

                    <div>

                      <p className="text-[22px] font-bold text-[#111827]">
                        Emma Thompson
                      </p>

                      <p className="mt-[5px] text-[15px] font-medium text-[#4f23b8]">
                        Stanford University
                      </p>

                      <div className="mt-[8px] flex items-center gap-2">

                        <span className="text-[20px] leading-none text-[#eab308]">
                          ★
                        </span>

                        <span className="text-[15px] font-semibold text-gray-700">
                          4.9
                        </span>

                        <span className="text-[14px] text-gray-400">
                          (127 reviews)
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* MESSAGE BUTTON */}
                <button
                  type="button"
                  onClick={() => navigate("/emmachat")}
                  className="
                    flex h-[54px]
                    items-center justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#5d21c7]
                    to-[#7737e9]
                    px-8
                    text-[16px]
                    font-semibold
                    text-white
                    shadow-[0_5px_13px_rgba(109,40,217,0.25)]
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <MessageSquare size={20} strokeWidth={2} />
                  Message
                </button>

              </div>
            </section>

            {/* ===================================================
                SERVICE DETAILS
            =================================================== */}
            <section
              className="
                rounded-[24px]
                bg-white
                px-[36px]
                py-[38px]
                shadow-[0_6px_20px_rgba(0,0,0,0.07)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_32px_rgba(0,0,0,0.11)]
              "
            >

              <h2 className="text-[26px] font-bold text-[#111827]">
                Service Details
              </h2>

              <div className="mt-[25px] flex items-center gap-7">

                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=300&q=80"
                  alt="Modern Website Development"
                  className="
                    h-[115px]
                    w-[150px]
                    shrink-0
                    rounded-[14px]
                    object-cover
                    shadow-sm
                  "
                />

                <div className="min-w-0">

                  <h3 className="text-[24px] font-bold text-[#111827]">
                    Modern Website Development
                  </h3>

                  <p className="mt-[9px] max-w-[1050px] text-[15px] leading-[1.75] text-gray-500">
                    I will create a fully responsive, modern website using
                    React and Tailwind CSS. Includes 5 pages, mobile
                    optimization, and clean code.
                  </p>

                </div>

              </div>

              <div className="mt-[28px] grid grid-cols-1 gap-5 sm:grid-cols-3">

                <InfoBox
                  icon={<DollarSign size={25} strokeWidth={2} />}
                  label="Amount"
                  value="$299"
                  type="purple"
                />

                <InfoBox
                  icon={<Clock3 size={25} strokeWidth={2} />}
                  label="Delivery"
                  value="5 days"
                  type="purple"
                />

                <InfoBox
                  icon={<CalendarDays size={25} strokeWidth={2} />}
                  label="Deadline"
                  value="Mar 13"
                  type="pink"
                />

              </div>

            </section>

            {/* ===================================================
                MILESTONES
            =================================================== */}
            <section
              className="
                rounded-[24px]
                bg-white
                px-[36px]
                py-[38px]
                shadow-[0_6px_20px_rgba(0,0,0,0.07)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_32px_rgba(0,0,0,0.11)]
              "
            >

              <h2 className="text-[26px] font-bold text-[#111827]">
                Milestones
              </h2>

              <div className="mt-[23px] space-y-[14px]">

                <Milestone
                  completed
                  title="Initial concept submitted"
                  date="Mar 9"
                />

                <Milestone
                  completed
                  title="First draft review"
                  date="Mar 10"
                />

                <Milestone
                  title="Revisions applied"
                  date="Mar 12"
                />

                <Milestone
                  title="Final delivery"
                  date="Mar 13"
                />

              </div>

            </section>

            {/* ===================================================
                DELIVERABLES
            =================================================== */}
            <section
              className="
                rounded-[24px]
                bg-white
                px-[36px]
                py-[38px]
                shadow-[0_6px_20px_rgba(0,0,0,0.07)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_32px_rgba(0,0,0,0.11)]
              "
            >

              <div className="flex items-center justify-between">

                <h2 className="text-[26px] font-bold text-[#111827]">
                  Deliverables
                </h2>

                <span className="text-[14px] font-medium text-gray-400">
                  1 file uploaded
                </span>

              </div>

              <div
                className="
                  mt-[22px]
                  flex
                  min-h-[84px]
                  items-center
                  justify-between
                  rounded-[18px]
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-[18px]
                  transition-all duration-200
                  hover:border-purple-200
                  hover:bg-purple-50/30
                  hover:shadow-md
                "
              >

                <div className="flex min-w-0 items-center gap-4">

                  <div
                    className="
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[10px]
                      bg-[#f4efff]
                      text-[#6d28d9]
                    "
                  >
                    <FileText size={26} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-[16px] font-semibold text-gray-800">
                      initial_concept_v1.zip
                    </p>

                    <p className="mt-[5px] text-[13px] text-gray-400">
                      Uploaded Mar 9 · 4.2 MB
                    </p>

                  </div>

                </div>

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    text-[#6d28d9]
                    transition-all duration-200
                    hover:scale-105
                    hover:bg-[#f4efff]
                  "
                >
                  <Upload size={21} strokeWidth={2} />
                </button>

              </div>

              <p className="mt-[16px] text-center text-[13px] text-gray-400">
                More files will appear as the freelancer delivers work
              </p>

            </section>

            {/* ===================================================
                ACTION BUTTONS
            =================================================== */}
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* CONTACT FREELANCER */}
              <button
                type="button"
                onClick={() => navigate("/emmachat")}
                className="
                  flex
                  h-[66px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#5c21c7]
                  to-[#7936e9]
                  text-[16px]
                  font-semibold
                  text-white
                  shadow-[0_7px_16px_rgba(109,40,217,0.25)]
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <MessageSquare size={22} strokeWidth={2} />
                Contact Freelancer
              </button>

              {/* REQUEST REVISION */}
              <button
                type="button"
                onClick={() => setShowRevision(true)}
                className="
                  flex
                  h-[66px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[18px]
                  border
                  border-gray-200
                  bg-white
                  text-[16px]
                  font-semibold
                  text-[#e87500]
                  shadow-[0_3px_9px_rgba(0,0,0,0.04)]
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-orange-200
                  hover:bg-orange-50
                  hover:shadow-md
                "
              >
                <AlertCircle size={22} strokeWidth={2} />
                Request Revision
              </button>

            </section>

            {/* ===================================================
                CANCEL ORDER
            =================================================== */}
            <button
              type="button"
              onClick={() => setShowCancelOrder(true)}
              className="
                flex
                h-[66px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-[18px]
                border
                border-gray-200
                bg-white
                text-[16px]
                font-semibold
                text-red-500
                shadow-[0_3px_9px_rgba(0,0,0,0.04)]
                transition-all duration-200
                hover:-translate-y-1
                hover:border-red-200
                hover:bg-red-50
                hover:shadow-md
              "
            >
              <XCircle size={22} strokeWidth={2} />
              Cancel Order
            </button>

            <div className="h-8" />

          </div>
        </main>
      </div>

      {/* =========================================================
          REQUEST REVISION MODAL
      ========================================================= */}
      {showRevision && (
        <RequestRevision
          freelancer="Emma Thompson"
          orderNumber="#1"
          service="Modern Website Development"
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
          onClose={() => setShowRevision(false)}
        />
      )}

      {/* =========================================================
          CANCEL ORDER MODAL
      ========================================================= */}
      {showCancelOrder && (
        <CancelOrder
          orderNumber="#1"
          service="Modern Website Development"
          price="$299"
          status="pending"
          image="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=300&q=80"
          onClose={() => setShowCancelOrder(false)}
          onRequestRevision={() => {
            setShowCancelOrder(false);
            setShowRevision(true);
          }}
          onContactFreelancer={() => {
            setShowCancelOrder(false);
            navigate("/emmachat");
          }}
        />
      )}

    </div>
  );
}

/* =============================================================
   PROGRESS STEP
============================================================= */

function ProgressStep({
  active = false,
  label,
  secondLabel,
  date,
}) {
  return (
    <div className="flex flex-col items-center">

      <div
        className={`
          relative
          z-10
          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          transition-all duration-300
          ${
            active
              ? "border-[#d946ef] bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-white shadow-[0_5px_14px_rgba(217,70,239,0.28)]"
              : "border-gray-200 bg-white text-gray-300"
          }
        `}
      >
        {active ? (
          <CheckCircle2
            size={23}
            strokeWidth={2}
          />
        ) : (
          <Circle
            size={10}
            fill="currentColor"
            strokeWidth={0}
          />
        )}
      </div>

      <div className="mt-[13px] text-center">

        <p
          className={`
            text-[17px]
            font-bold
            leading-[1.4]
            ${
              active
                ? "text-[#6d28d9]"
                : "text-gray-600"
            }
          `}
        >
          {label}
        </p>

        {secondLabel && (
          <p className="text-[17px] font-bold leading-[1.4] text-gray-600">
            {secondLabel}
          </p>
        )}

        <p className="mt-[6px] text-[14px] font-medium text-gray-400">
          {date}
        </p>

      </div>

    </div>
  );
}

/* =============================================================
   INFO BOX
============================================================= */

function InfoBox({
  icon,
  label,
  value,
  type = "purple",
}) {
  const isPink = type === "pink";

  return (
    <div
      className={`
        flex
        min-h-[125px]
        flex-col
        items-center
        justify-center
        rounded-[19px]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-md
        ${
          isPink
            ? "bg-[#fff0f6] text-[#ec4899] hover:bg-[#ffe8f2]"
            : "bg-[#f4effd] text-[#6d28d9] hover:bg-[#eee7ff]"
        }
      `}
    >
      <div>{icon}</div>

      <p className="mt-[7px] text-[14px] font-medium text-gray-500">
        {label}
      </p>

      <p className="mt-[4px] text-[21px] font-bold text-gray-800">
        {value}
      </p>
    </div>
  );
}

/* =============================================================
   MILESTONE
============================================================= */

function Milestone({
  completed = false,
  title,
  date,
}) {
  return (
    <div
      className="
        flex
        min-h-[46px]
        items-center
        justify-between
        gap-5
        rounded-[15px]
        px-3
        transition-all duration-200
        hover:bg-gray-50
      "
    >

      <div className="flex min-w-0 items-center gap-5">

        <div
          className={`
            flex
            h-[40px]
            w-[40px]
            shrink-0
            items-center
            justify-center
            rounded-full
            ${
              completed
                ? "bg-[#10a77a] text-white shadow-sm"
                : "bg-[#f0edfb] text-gray-400"
            }
          `}
        >
          {completed ? (
            <CheckCircle2
              size={23}
              strokeWidth={2.4}
            />
          ) : (
            <Circle
              size={10}
              fill="currentColor"
              strokeWidth={0}
            />
          )}
        </div>

        <p
          className={`
            text-[17px]
            font-semibold
            ${
              completed
                ? "text-gray-800"
                : "text-gray-500"
            }
          `}
        >
          {title}
        </p>

      </div>

      <span
        className={`
          shrink-0
          text-[14px]
          font-medium
          ${
            completed
              ? "text-gray-500"
              : "text-gray-400"
          }
        `}
      >
        {date}
      </span>

    </div>
  );
}

export default Order1;