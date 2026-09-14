import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Paperclip,
  Image as ImageIcon,
} from "lucide-react";

const FiftyComponent = ({ avatar, paymentCard }) => {
  const messagesContainerRef = useRef(null);

  // =====================================================
  // AUTO SCROLL TO PAYMENT CARD
  // =====================================================

  useEffect(() => {
    if (paymentCard && messagesContainerRef.current) {
      setTimeout(() => {
        messagesContainerRef.current.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [paymentCard]);

  // =====================================================
  // MESSAGES
  // =====================================================

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "other",
      text:
        "Hi! I saw your portfolio website project. I'm very interested and confident I can deliver exactly what you need.",
      time: "10:00 AM",
    },

    {
      id: 2,
      sender: "me",
      text:
        "Great! I checked your profile and your previous work looks fantastic. Let's discuss the details.",
      time: "10:04 AM",
    },

    {
      id: 3,
      sender: "other",
      text:
        "I can complete it in 7-10 days. The design will be fully responsive, modern, and optimised for conversions.",
      time: "10:06 AM",
    },

    {
      id: 4,
      sender: "me",
      text:
        "That sounds perfect. What's your process once we agree on payment?",
      time: "10:09 AM",
    },

    {
      id: 5,
      sender: "other",
      text:
        "Once the escrow payment is secured, I'll start immediately and share progress updates every 2 days.",
      time: "10:12 AM",
    },
  ]);

  const [input, setInput] = useState("");

  // =====================================================
  // SEND MESSAGE
  // =====================================================

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "me",
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setInput("");
  };

  return (
    <div
      className="
        w-full
        h-[calc(100vh-220px)]
        flex
        flex-col
        overflow-hidden

        /* Remove parent's horizontal spacing */
        -mx-12
        w-[calc(100%+6rem)]
      "
    >
      {/* =====================================================
          MESSAGES AREA
          ===================================================== */}

      <div
        ref={messagesContainerRef}
        className="
          flex-1
          overflow-y-auto
          space-y-4
          px-0
          py-4
          pb-6
        "
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`
              flex
              items-end
              gap-2
              px-0

              ${
                msg.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >
            {/* =================================================
                AVATAR
                ================================================= */}

            {msg.sender === "other" && (
              <img
                src={avatar}
                alt="profile"
                className="
                  w-8
                  h-8
                  rounded-full
                  object-cover
                  mb-5
                  shrink-0
                "
              />
            )}

            {/* =================================================
                MESSAGE BUBBLE
                ================================================= */}

            <div
              className="
                max-w-[80%]
                flex
                flex-col
              "
            >
              <div
                className={`
                  px-4
                  py-3
                  rounded-3xl
                  text-sm
                  leading-5

                  ${
                    msg.sender === "me"
                      ? "bg-violet-600 text-white rounded-br-md"
                      : "bg-white text-gray-900 rounded-bl-md shadow-sm"
                  }
                `}
              >
                <p
                  className="
                    text-sm
                    font-normal
                  "
                >
                  {msg.text}
                </p>

                {/* Time */}

                <div
                  className={`
                    text-[10px]
                    mt-2
                    text-right

                    ${
                      msg.sender === "me"
                        ? "text-violet-100"
                        : "text-gray-400"
                    }
                  `}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* =================================================
            PAYMENT CARD
            ================================================= */}

        {paymentCard && (
          <div className="w-full">
            {paymentCard}
          </div>
        )}
      </div>

      {/* =====================================================
          MESSAGE INPUT
          ===================================================== */}

      <div
        className="
          bg-white
          px-3
          py-3
          flex
          items-center
          gap-2
          border-t
          border-gray-200
          shrink-0
        "
      >
        {/* Attachment */}

        <button
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <Paperclip
            size={20}
            className="text-gray-500"
          />
        </button>

        {/* Image */}

        <button
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <ImageIcon
            size={20}
            className="text-gray-500"
          />
        </button>

        {/* Input */}

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleSend()
          }
          placeholder="Type a message..."
          className="
            flex-1
            bg-gray-100
            rounded-full
            px-4
            py-2.5
            text-sm
            outline-none
            min-w-0
          "
        />

        {/* Send */}

        <button
          onClick={handleSend}
          className="
            w-10
            h-10
            rounded-full
            bg-violet-600
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <Send
            size={20}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default FiftyComponent;