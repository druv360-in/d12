import React, { useState } from "react";
import {
  X,
  AlertCircle,
  CheckCircle2,
  Send,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function RequestRevision({
  freelancer = "Emma Thompson",
  orderNumber = "#1",
  service = "Modern Website Development",
  avatar,
  onClose,
}) {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");

  const defaultAvatar =
    freelancer === "Marcus Johnson"
      ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
      : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80";

  const handleSubmit = () => {
    if (!description.trim()) return;

    onClose();

    if (freelancer === "Marcus Johnson") {
      navigate("/marcuschat");
    } else {
      navigate("/emmachat");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* =====================================================
          BACKGROUND OVERLAY + BLUR
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
          MODAL WRAPPER
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
        "
      >

        {/* ===================================================
            MODAL
        =================================================== */}
        <div
          className="
            relative
            flex
            h-[88vh]
            max-h-[720px]
            w-full
            max-w-[600px]
            flex-col
            overflow-hidden
            rounded-[24px]
            bg-white
            shadow-[0_25px_70px_rgba(0,0,0,0.30)]
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
              border-[#e5e7eb]
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
              Request Revision
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
                bg-[#f4f1ff]
                text-[#7c8497]
                transition-all
                duration-200
                hover:bg-[#ebe5ff]
                hover:text-[#5b21b6]
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
              scrollbar-thin
              scrollbar-thumb-[#7c3aed]
              scrollbar-track-transparent
            "
          >

            {/* =================================================
                REVISION REQUEST INFORMATION CARD
            ================================================= */}
            <section
              className="
                rounded-[17px]
                border
                border-[#eadfd2]
                bg-[#fff8ef]
                px-5
                py-5
              "
            >
              <div className="flex items-start gap-4">

                <div
                  className="
                    mt-[1px]
                    flex
                    h-[23px]
                    w-[23px]
                    shrink-0
                    items-center
                    justify-center
                    text-[#f97316]
                  "
                >
                  <AlertCircle
                    size={23}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      leading-tight
                      text-[#c2410c]
                    "
                  >
                    Revision Request
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      leading-[1.6]
                      text-[#ea580c]
                    "
                  >
                    Please describe what needs to be changed or
                    improved. Be specific to help the freelancer
                    understand your requirements.
                  </p>
                </div>

              </div>
            </section>

            {/* =================================================
                FREELANCER / ORDER / SERVICE CARD
            ================================================= */}
            <section
              className="
                mt-6
                rounded-[17px]
                border
                border-[#e2e5ea]
                bg-white
                px-5
                py-5
              "
            >
              <div className="flex items-center gap-4">

                <img
                  src={avatar || defaultAvatar}
                  alt={freelancer}
                  className="
                    h-[56px]
                    w-[56px]
                    shrink-0
                    rounded-full
                    object-cover
                  "
                />

                <div className="min-w-0">

                  <p
                    className="
                      text-[18px]
                      font-bold
                      leading-tight
                      text-[#111827]
                    "
                  >
                    {freelancer}
                  </p>

                  <p
                    className="
                      mt-[5px]
                      text-[15px]
                      font-medium
                      text-[#64748b]
                    "
                  >
                    Order {orderNumber}
                  </p>

                </div>

              </div>

              <p
                className="
                  mt-4
                  text-[15px]
                  font-semibold
                  text-[#111827]
                "
              >
                {service}
              </p>
            </section>

            {/* =================================================
                WHAT NEEDS TO BE REVISED
            ================================================= */}
            <section className="mt-6">

              <label
                htmlFor="revision-description"
                className="
                  block
                  text-[17px]
                  font-bold
                  text-[#111827]
                "
              >
                What needs to be revised?{" "}
                <span className="text-[#111827]">*</span>
              </label>

              <textarea
                id="revision-description"
                value={description}
                maxLength={1000}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                placeholder="Please describe the changes you'd like to see in detail..."
                className="
                  mt-3
                  min-h-[165px]
                  w-full
                  resize-none
                  rounded-[14px]
                  border
                  border-[#dfe3e8]
                  bg-white
                  px-5
                  py-5
                  text-[15px]
                  leading-[1.6]
                  text-[#374151]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-[#94a3b8]
                  focus:border-[#a78bfa]
                  focus:ring-2
                  focus:ring-[#ede9fe]
                "
              />

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-[1.5]
                  text-[#94a3b8]
                "
              >
                Be clear and specific about what you want
                changed. Include examples if possible.
              </p>

            </section>

            {/* =================================================
                REVISION GUIDELINES
            ================================================= */}
            <section
              className="
                mt-6
                rounded-[17px]
                border
                border-[#e7e1f0]
                bg-[#f7f3fc]
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
                Revision Guidelines
              </h3>

              <div className="mt-4 space-y-3">

                {/* GUIDELINE 1 */}
                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={19}
                    strokeWidth={2}
                    className="
                      shrink-0
                      text-[#6d28d9]
                    "
                  />

                  <p
                    className="
                      text-[14px]
                      font-medium
                      text-[#64748b]
                    "
                  >
                    Most services include 1-2 free revisions
                  </p>

                </div>

                {/* GUIDELINE 2 */}
                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={19}
                    strokeWidth={2}
                    className="
                      shrink-0
                      text-[#6d28d9]
                    "
                  />

                  <p
                    className="
                      text-[14px]
                      font-medium
                      text-[#64748b]
                    "
                  >
                    Revisions must be within the original project
                    scope
                  </p>

                </div>

                {/* GUIDELINE 3 */}
                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={19}
                    strokeWidth={2}
                    className="
                      shrink-0
                      text-[#6d28d9]
                    "
                  />

                  <p
                    className="
                      text-[14px]
                      font-medium
                      text-[#64748b]
                    "
                  >
                    Turnaround time may vary based on complexity
                  </p>

                </div>

              </div>

            </section>

          </div>

          {/* =================================================
              FOOTER
          ================================================= */}
          <div
            className="
              flex
              shrink-0
              gap-4
              border-t
              border-[#e5e7eb]
              bg-white
              px-7
              py-5
            "
          >

            {/* CANCEL */}
            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-[56px]
                flex-1
                items-center
                justify-center
                rounded-[16px]
                bg-[#f3efff]
                text-[15px]
                font-semibold
                text-[#475569]
                transition-all
                duration-200
                hover:bg-[#ebe5ff]
              "
            >
              Cancel
            </button>

            {/* SEND REVISION REQUEST */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!description.trim()}
              className="
                flex
                h-[56px]
                flex-1
                items-center
                justify-center
                gap-2
                rounded-[16px]
                bg-[#f1edfc]
                text-[15px]
                font-semibold
                text-[#94a3b8]
                transition-all
                duration-200
                disabled:cursor-not-allowed
                disabled:opacity-100
                enabled:bg-[#6d28d9]
                enabled:text-white
                enabled:shadow-[0_5px_14px_rgba(109,40,217,0.22)]
                enabled:hover:-translate-y-0.5
                enabled:hover:bg-[#5b21b6]
              "
            >
              <Send
                size={19}
                strokeWidth={2}
              />

              Send Revision Request
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RequestRevision;