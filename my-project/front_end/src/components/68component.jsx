import React, { useState } from "react";
import {
  MessageSquare,
  Paperclip,
  Send,
} from "lucide-react";

const SixtyEightComponent = () => {
  /* =========================================================
     CHAT MESSAGES
  ========================================================= */

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Emma Thompson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      message:
        "The API integration is almost complete. Will push the update soon!",
      timeAgo: "10 min ago",
    },

    {
      id: 2,
      name: "Marcus Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      message:
        "Updated the checkout flow design. Please review!",
      timeAgo: "1 hour ago",
    },
  ]);

  const [input, setInput] = useState("");

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: "You",
      avatar:
        "https://i.pravatar.cc/80?img=5",
      message: input.trim(),
      timeAgo: "Now",
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      newMessage,
    ]);

    setInput("");
  };

  /* =========================================================
     ENTER KEY
  ========================================================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* =========================================================
     ATTACH FILE
  ========================================================= */

  const handleAttachFile = () => {
    console.log("Attach file");
  };

  return (
    <div
      className="
        w-full
        bg-white
        rounded-3xl
        px-6
        py-6
        shadow-sm
        border
        border-gray-100
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-3
          mb-5
        "
      >
        <MessageSquare
          className="
            w-6
            h-6
            text-violet-700
          "
          strokeWidth={2}
        />

        <h2
          className="
            text-xl
            lg:text-2xl
            font-bold
            text-gray-900
          "
        >
          Project Chat
        </h2>
      </div>

      {/* =====================================================
          MESSAGE AREA
      ===================================================== */}

      <div
        className="
          relative
          bg-gray-50
          rounded-2xl
          px-4
          py-4
          mb-4
          h-[255px]
          overflow-y-auto

          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-violet-700
        "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#6d28d9 transparent",
        }}
      >
        <div
          className="
            flex
            flex-col
            gap-3
          "
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="
                bg-white
                rounded-2xl
                px-3
                py-3
                shadow-sm
                border
                border-gray-100
              "
            >
              {/* =================================================
                  USER INFORMATION
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-2.5
                  mb-2
                "
              >
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="
                    w-7
                    h-7
                    rounded-full
                    object-cover
                    shrink-0
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-[13px]
                      font-medium
                      text-gray-900
                      leading-4
                    "
                  >
                    {msg.name}
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-400
                      leading-4
                    "
                  >
                    {msg.timeAgo}
                  </p>
                </div>
              </div>

              {/* =================================================
                  MESSAGE TEXT
              ================================================= */}

              <p
                className="
                  text-sm
                  text-gray-600
                  leading-5
                "
              >
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          MESSAGE INPUT
      ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-2
          bg-white
          border
          border-gray-200
          rounded-xl
          px-3
          py-2
          shadow-sm
        "
      >
        {/* Input */}

        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="
            flex-1
            min-w-0
            bg-transparent
            text-sm
            text-gray-700
            placeholder-gray-400
            focus:outline-none
            px-1
          "
        />

        {/* Attachment */}

        <button
          type="button"
          onClick={handleAttachFile}
          className="
            w-8
            h-8
            shrink-0
            flex
            items-center
            justify-center
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          <Paperclip
            className="
              w-5
              h-5
              text-gray-400
            "
            strokeWidth={2}
          />
        </button>

        {/* Send */}

        <button
          type="button"
          onClick={handleSend}
          className="
            w-9
            h-9
            shrink-0
            rounded-full
            bg-violet-700
            hover:bg-violet-800
            flex
            items-center
            justify-center
            transition
          "
        >
          <Send
            className="
              w-4
              h-4
              text-white
            "
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
};

export default SixtyEightComponent;