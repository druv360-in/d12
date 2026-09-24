import React, { useState } from "react";
import {
  X,
  AlertCircle,
  ChevronRight,
  MessageSquare,
  RotateCcw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CancelOrder({
  orderNumber = "#1",
  service = "Modern Website Development",
  price = "$299",
  status = "pending",
  image,
  onClose,
  onRequestRevision,
  onContactFreelancer,
}) {
  const [reason, setReason] = useState("");

  const navigate = useNavigate();

  const handleConfirmCancellation = () => {
    if (!reason.trim()) {
      alert("Please tell us why you're cancelling this order.");
      return;
    }

    onClose();
    navigate("/orders");
  };

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* =====================================================
          BLURRED + DARK BACKGROUND
      ===================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-slate-900/35
          backdrop-blur-[9px]
        "
      />

      {/* =====================================================
          MODAL CENTER WRAPPER
      ===================================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
          px-4
          py-5
          sm:px-6
        "
      >

        {/* ===================================================
            MODAL CARD
        =================================================== */}
        <div
          className="
            relative
            flex
            h-[88vh]
            max-h-[760px]
            w-full
            max-w-[600px]
            flex-col
            overflow-hidden
            rounded-[24px]
            bg-white
            shadow-[0_25px_70px_rgba(0,0,0,0.35)]
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}
          <div
            className="
              flex
              h-[70px]
              shrink-0
              items-center
              justify-between
              border-b
              border-gray-200
              bg-white
              px-7
            "
          >

            <h2
              className="
                text-[24px]
                font-bold
                tracking-[-0.4px]
                text-[#111827]
              "
            >
              Cancel Order
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center
                rounded-full
                bg-[#f2f1fa]
                text-gray-500
                transition-all
                duration-200
                hover:bg-[#e9e6f7]
                hover:text-gray-700
              "
            >
              <X size={21} strokeWidth={2} />
            </button>

          </div>

          {/* =================================================
              SCROLLABLE CONTENT
          ================================================= */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              px-7
              py-7
              [&::-webkit-scrollbar]:w-[5px]
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#6d28d9]
            "
          >

            {/* =================================================
                IMPORTANT NOTICE
            ================================================= */}
            <section
              className="
                rounded-[17px]
                border
                border-red-100
                bg-[#fff1f1]
                px-5
                py-5
              "
            >
              <div className="flex items-start gap-4">

                <div className="mt-[1px] shrink-0 text-red-500">
                  <AlertCircle
                    size={22}
                    strokeWidth={2.2}
                  />
                </div>

                <div>

                  <h3
                    className="
                      text-[17px]
                      font-bold
                      text-red-700
                    "
                  >
                    Important Notice
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      leading-[1.6]
                      text-red-600
                    "
                  >
                    Cancelling this order may affect your relationship
                    with the freelancer and could incur cancellation fees
                    depending on the progress made.
                  </p>

                </div>

              </div>
            </section>

            {/* =================================================
                ORDER / SERVICE CARD
            ================================================= */}
            <section
              className="
                mt-6
                rounded-[17px]
                border
                border-gray-200
                bg-white
                px-5
                py-5
              "
            >

              <div className="flex items-center gap-4">

                {image ? (
                  <img
                    src={image}
                    alt={service}
                    className="
                      h-[70px]
                      w-[70px]
                      shrink-0
                      rounded-[14px]
                      object-cover
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-[70px]
                      w-[70px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      bg-[#f3efff]
                      text-[#6d28d9]
                    "
                  >
                    <RotateCcw size={27} />
                  </div>
                )}

                <div className="min-w-0 flex-1">

                  <h3
                    className="
                      truncate
                      text-[17px]
                      font-bold
                      text-[#111827]
                    "
                  >
                    {service}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-[15px]
                      text-gray-500
                    "
                  >
                    Order {orderNumber}
                  </p>

                </div>

                <div className="shrink-0 text-right">

                  <p
                    className="
                      text-[17px]
                      font-bold
                      text-[#6d28d9]
                    "
                  >
                    {price}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      text-gray-400
                    "
                  >
                    {status}
                  </p>

                </div>

              </div>

            </section>

            {/* =================================================
                REASON
            ================================================= */}
            <section className="mt-6">

              <label
                htmlFor={`cancel-reason-${orderNumber}`}
                className="
                  block
                  text-[17px]
                  font-bold
                  text-[#111827]
                "
              >
                Reason for Cancellation
                <span className="ml-1 text-red-500">*</span>
              </label>

              <textarea
                id={`cancel-reason-${orderNumber}`}
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                placeholder="Please tell us why you're cancelling this order..."
                className="
                  mt-3
                  h-[145px]
                  w-full
                  resize-none
                  rounded-[15px]
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-5
                  text-[15px]
                  leading-[1.6]
                  text-gray-700
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  focus:border-[#8b5cf6]
                  focus:ring-4
                  focus:ring-purple-100
                "
              />

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-[1.5]
                  text-gray-400
                "
              >
                Your feedback helps us improve the platform and assist
                the freelancer.
              </p>

            </section>

            {/* =================================================
                CANCELLATION POLICY
            ================================================= */}
            <section
              className="
                mt-6
                rounded-[17px]
                border
                border-gray-200
                bg-[#fafafa]
                px-5
                py-4
              "
            >

              <h3
                className="
                  text-[16px]
                  font-bold
                  text-[#111827]
                "
              >
                Cancellation Policy
              </h3>

              <ul className="mt-3 space-y-3">

                <li
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-[1.55]
                    text-[#64748b]
                  "
                >
                  <span
                    className="
                      mt-[7px]
                      h-[6px]
                      w-[6px]
                      shrink-0
                      rounded-full
                      bg-gray-400
                    "
                  />

                  <span>
                    If work has not started: Full refund
                  </span>
                </li>

                <li
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-[1.55]
                    text-[#64748b]
                  "
                >
                  <span
                    className="
                      mt-[7px]
                      h-[6px]
                      w-[6px]
                      shrink-0
                      rounded-full
                      bg-gray-400
                    "
                  />

                  <span>
                    If work is in progress: Partial refund based on work
                    completed
                  </span>
                </li>

                <li
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-[1.55]
                    text-[#64748b]
                  "
                >
                  <span
                    className="
                      mt-[7px]
                      h-[6px]
                      w-[6px]
                      shrink-0
                      rounded-full
                      bg-gray-400
                    "
                  />

                  <span>
                    Refund will be processed within 5-7 business days
                  </span>
                </li>

                <li
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-[1.55]
                    text-[#64748b]
                  "
                >
                  <span
                    className="
                      mt-[7px]
                      h-[6px]
                      w-[6px]
                      shrink-0
                      rounded-full
                      bg-gray-400
                    "
                  />

                  <span>
                    Mutual cancellation is recommended for best outcome
                  </span>
                </li>

              </ul>

            </section>

            {/* =================================================
                ALTERNATIVES
            ================================================= */}
            <section
              className="
                mt-6
                rounded-[17px]
                bg-[#f5f0ff]
                px-5
                py-5
              "
            >

              <h3
                className="
                  text-[17px]
                  font-bold
                  text-[#111827]
                "
              >
                Consider These Alternatives
              </h3>

              {/* REQUEST REVISION */}
              <button
                type="button"
                onClick={onRequestRevision}
                className="
                  mt-4
                  flex
                  min-h-[70px]
                  w-full
                  items-center
                  justify-between
                  rounded-[15px]
                  bg-white
                  px-4
                  text-left
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >

                <div className="min-w-0">

                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-[#111827]
                    "
                  >
                    Request a Revision
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[13px]
                      text-gray-500
                    "
                  >
                    Ask the freelancer to make changes
                  </p>

                </div>

                <ChevronRight
                  size={21}
                  className="shrink-0 text-gray-400"
                />

              </button>

              {/* CONTACT FREELANCER */}
              <button
                type="button"
                onClick={onContactFreelancer}
                className="
                  mt-3
                  flex
                  min-h-[70px]
                  w-full
                  items-center
                  justify-between
                  rounded-[15px]
                  bg-white
                  px-4
                  text-left
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f3efff]
                      text-[#6d28d9]
                    "
                  >
                    <MessageSquare size={17} />
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-[15px]
                        font-semibold
                        text-[#111827]
                      "
                    >
                      Contact the Freelancer
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[13px]
                        text-gray-500
                      "
                    >
                      Discuss your concerns directly
                    </p>

                  </div>

                </div>

                <ChevronRight
                  size={21}
                  className="shrink-0 text-gray-400"
                />

              </button>

            </section>

            <div className="h-3" />

          </div>

          {/* =================================================
              FOOTER BUTTONS
          ================================================= */}
          <div
            className="
              shrink-0
              border-t
              border-gray-100
              bg-white
              px-7
              py-5
            "
          >

            <div className="grid grid-cols-2 gap-4">

              {/* KEEP ORDER */}
              <button
                type="button"
                onClick={onClose}
                className="
                  flex
                  h-[57px]
                  items-center
                  justify-center
                  rounded-[17px]
                  bg-[#f4f1ff]
                  text-[15px]
                  font-semibold
                  text-[#64748b]
                  transition-all
                  duration-200
                  hover:bg-[#ebe6ff]
                "
              >
                Keep Order
              </button>

              {/* CONFIRM CANCELLATION */}
              <button
                type="button"
                onClick={handleConfirmCancellation}
                className="
                  flex
                  h-[57px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[17px]
                  bg-[#f4f1ff]
                  text-[15px]
                  font-semibold
                  text-[#94a3b8]
                  transition-all
                  duration-200
                  hover:bg-red-50
                  hover:text-red-500
                "
              >
                <X
                  size={19}
                  strokeWidth={2}
                />

                Confirm Cancellation
              </button>

            </div>

            <p
              className="
                mt-3
                text-center
                text-[12px]
                leading-[1.4]
                text-[#94a3b8]
              "
            >
              This action cannot be undone. Please ensure you've tried
              other options first.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CancelOrder;