import React, { useState } from "react";

import {
  ArrowLeft,
  Clock3,
  Paperclip,
  Image as ImageIcon,
  Send,
  CheckCheck,
  Search,
  MoreVertical,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import SidebarMenu24 from "../components/SidebarMenu24";

const EMMA_AVATAR =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80";

const JOHN_AVATAR =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80";

function EmmaChat() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "emma",
      text: "Hi! I've started working on your project. I'll send you an initial concept soon.",
      time: "9:15 AM",
    },
    {
      id: 2,
      sender: "john",
      text: "Great! Looking forward to seeing it. Please make sure the color palette matches our brand guidelines.",
      time: "9:32 AM",
    },
    {
      id: 3,
      sender: "emma",
      text: "Of course! Could you share your brand guidelines document or the specific hex codes you'd like me to use?",
      time: "9:45 AM",
    },
    {
      id: 4,
      sender: "john",
      text: "I'll send them over now. Also, the deadline is firm — March 13th.",
      time: "9:50 AM",
    },
    {
      id: 5,
      sender: "emma",
      text: "Understood. I've uploaded the initial concept to the deliverables section. Please take a look and let me know your thoughts!",
      time: "11:20 AM",
    },
  ]);

  const quickReplies = [
    "How's the progress?",
    "Looks great!",
    "Can you revise this?",
    "When will it be ready?",
  ];

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const newMessage = {
      id: Date.now(),
      sender: "john",
      text: trimmedMessage,
      time: "Now",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const handleQuickReply = (reply) => {
    const newMessage = {
      id: Date.now(),
      sender: "john",
      text: reply,
      time: "Now",
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#fafafa] text-slate-900">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN AREA
      ====================================================== */}
      <div className="lg:pl-[287px]">
        {/* ===================================================
            TOP HEADER
        ==================================================== */}
        <header
          className="
            fixed
            left-0
            right-0
            top-0
            z-40
            h-[94px]
            border-b
            border-[#e5e7eb]
            bg-white
            lg:left-[287px]
          "
        >
          <div className="flex h-full items-center justify-between px-13 sm:px-15">
            {/* LEFT */}
            <div className="flex items-center gap-7">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="
                  flex
                  h-[39px]
                  w-[39px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f2f2ff]
                  text-[#7c8497]
                  transition-all
                  duration-200
                  hover:bg-[#e8e7ff]
                  hover:text-[#5b21b6]
                  hover:shadow-sm
                "
              >
                <ArrowLeft
                  size={21}
                  strokeWidth={2}
                />
              </button>

              <img
                src={EMMA_AVATAR}
                alt="Emma Thompson"
                className="
                  h-[46px]
                  w-[46px]
                  shrink-0
                  rounded-full
                  object-cover
                "
              />

              <div className="leading-tight">
                <h1
                  className="
                    text-[25px]
                    font-bold
                    tracking-[-0.3px]
                    text-[#111827]
                  "
                >
                  Emma Thompson
                </h1>

                <div className="mt-[3px] flex items-center gap-1.5">
                  <span className="h-[9px] w-[8px] rounded-full bg-[#10b981]" />

                  <span className="text-[14px] font-medium text-[#7c8497]">
                    Online
                  </span>

                  <span className="text-[12px] text-[#c4c7cf]">
                    •
                  </span>

                  <span className="text-[14px] font-medium text-[#9ca3af]">
                    Order #1
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT PROFILE */}
            <button
              type="button"
              className="
                flex
                h-[52px]
                items-center
                gap-3
                rounded-[18px]
                border
                border-[#e5e7eb]
                bg-white
                px-3
                shadow-[0_3px_12px_rgba(0,0,0,0.07)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <div className="relative">
                <img
                  src={JOHN_AVATAR}
                  alt="John Doe"
                  className="
                    h-[34px]
                    w-[34px]
                    rounded-full
                    border-2
                    border-[#6d28d9]
                    object-cover
                  "
                />

                <span
                  className="
                    absolute
                    bottom-[-1px]
                    right-[-1px]
                    h-[8px]
                    w-[8px]
                    rounded-full
                    border
                    border-white
                    bg-[#22c55e]
                  "
                />
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-[13px] font-semibold leading-tight text-[#111827]">
                  John Doe
                </p>

                <p className="mt-[3px] text-[13px] text-[#7c8497]">
                  View Profile
                </p>
              </div>

              <span className="text-[26px] text-[#c5c8d0]">
                
              </span>
            </button>
          </div>
        </header>

        {/* ===================================================
            DEADLINE BAR
        ==================================================== */}
        <div
          className="
            fixed
            left-0
            right-0
            top-[94px]
            z-30
            h-[52px]
            border-b
            border-[#e3dff0]
            bg-[#f3edff]
            lg:left-[340px]
          "
        >
          <div className="flex h-full items-center justify-between px-8 sm:px-14">
            <div className="flex items-center gap-2">
              <Clock3
                size={16}
                strokeWidth={2}
                className="text-[#6d28d9]"
              />

              <span className="text-[15px] font-medium text-[#6d28d9]">
                Deadline: Mar 13, 2026
              </span>

              <span className="mx-2 text-[#c4b5fd]">
                •
              </span>

              <span className="text-[14px] font-medium text-[#6d28d9]">
                $299 • Active Order
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate("/order1")}
              className="
                text-[14px]
                font-semibold
                text-[#5b21b6]
                transition-colors
                hover:text-[#7c3aed]
              "
            >
              View Details
            </button>
          </div>
        </div>

        {/* ===================================================
            CHAT CONTENT
        ==================================================== */}
        <main
          className="
            fixed
            bottom-0
            left-0
            right-0
            top-[147px]
            overflow-hidden
            bg-[#fafafa]
            lg:left-[334px]
          "
        >
          {/* MESSAGE AREA */}
          <div
            className="
              absolute
              inset-0
              bottom-[90px]
              overflow-y-auto
              px-5
              pb-8
              pt-4
              sm:px-7
            "
          >
            {/* TODAY */}
            <div className="flex justify-center">
              <span
                className="
                  rounded-full
                  bg-[#f2f0ff]
                  px-[13px]
                  py-[5px]
                  text-[16px]
                  font-medium
                  text-[#7c8497]
                "
              >
                Today
              </span>
            </div>

            {/* MESSAGES */}
            <div className="mt-[18px] space-y-[20px]">
              {messages.map((item) => {
                const isEmma = item.sender === "emma";

                return (
                  <div
                    key={item.id}
                    className={`flex w-full ${
                      isEmma
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    <div
                      className={`flex max-w-[82%] items-end gap-2 ${
                        isEmma
                          ? "flex-row"
                          : "flex-row-reverse"
                      }`}
                    >
                      {/* EMMA AVATAR */}
                      {isEmma && (
                        <img
                          src={EMMA_AVATAR}
                          alt="Emma Thompson"
                          className="
                            mb-[17px]
                            h-[31px]
                            w-[31px]
                            shrink-0
                            rounded-full
                            object-cover
                          "
                        />
                      )}

                      <div
                        className={`flex flex-col ${
                          isEmma
                            ? "items-start"
                            : "items-end"
                        }`}
                      >
                        <div
                          className={`
                            rounded-[16px]
                            px-[16px]
                            py-[14px]
                            text-[18px]
                            leading-[1.55]
                            ${
                              isEmma
                                ? "rounded-bl-[7px] border border-[#ededed] bg-white text-[#111827] shadow-[0_2px_7px_rgba(0,0,0,0.04)]"
                                : "rounded-br-[7px] bg-gradient-to-r from-[#6522c8] to-[#7432e8] text-white shadow-[0_7px_16px_rgba(109,40,217,0.25)]"
                            }
                          `}
                        >
                          {item.text}
                        </div>

                        <div
                          className={`mt-[4px] flex items-center gap-1 ${
                            isEmma
                              ? "justify-start"
                              : "justify-end"
                          }`}
                        >
                          {!isEmma && (
                            <CheckCheck
                              size={12}
                              strokeWidth={1.8}
                              className="text-[#7c3aed]"
                            />
                          )}

                          <span className="text-[11px] text-[#9ca3af]">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              BOTTOM INPUT AREA
          ================================================== */}
          <div
            className="
              absolute
              bottom-5
              left-5
              right-0
              z-20
              border-t
              border-[#e5e7eb]
              bg-white
            "
          >
            {/* QUICK REPLIES */}
            <div
              className="
                flex
                gap-4
                overflow-x-auto
                px-9
                pb-[10px]
                pt-[9px]
                sm:px-7
              "
            >
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleQuickReply(reply)}
                  className="
                    shrink-0
                    rounded-full
                    border
                    border-[#e5e7eb]
                    bg-white
                    px-[14px]
                    py-[9px]
                    text-[16px]
                    font-medium
                    text-[#6d28d9]
                    transition-all
                    duration-200
                    hover:border-[#c4b5fd]
                    hover:bg-[#f7f3ff]
                  "
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* INPUT */}
            <div
              className="
                flex
                items-center
                gap-4
                px-6
                pb-[10px]
                pt-[4px]
                sm:px-9
              "
            >
              {/* ATTACH */}
              <button
                type="button"
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f4f1ff]
                  text-[#7c8497]
                  transition-all
                  duration-200
                  hover:bg-[#ebe5ff]
                  hover:text-[#6d28d9]
                "
              >
                <Paperclip
                  size={18}
                  strokeWidth={2}
                />
              </button>

              {/* IMAGE */}
              <button
                type="button"
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f4f1ff]
                  text-[#7c8497]
                  transition-all
                  duration-200
                  hover:bg-[#ebe5ff]
                  hover:text-[#6d28d9]
                "
              >
                <ImageIcon
                  size={18}
                  strokeWidth={2}
                />
              </button>

              {/* TEXT INPUT */}
              <div
                className="
                  flex
                  h-[50px]
                  flex-1
                  items-center
                  rounded-[18px]
                  bg-[#f5f2ff]
                  px-[10px]
                "
              >
                <input
                  type="text"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="
                    h-[45px]
                    w-full
                    rounded-[12px]
                    border
                    border-[#e2e2e8]
                    bg-white
                    px-[13px]
                    text-[12px]
                    text-gray-700
                    outline-none
                    placeholder:text-[#9ca3af]
                    focus:border-[#c4b5fd]
                    focus:ring-1
                    focus:ring-[#ddd6fe]
                  "
                />
              </div>

              {/* SEND */}
              <button
                type="button"
                onClick={sendMessage}
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#c9a9f2]
                  text-white
                  shadow-[0_5px_12px_rgba(139,92,246,0.20)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#b993ed]
                  hover:shadow-md
                "
              >
                <Send
                  size={18}
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmmaChat;