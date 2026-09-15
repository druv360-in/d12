import React, { useState } from "react";
import {
  Globe,
  Lock,
  Zap,
  CheckCircle2,
} from "lucide-react";

function VisibilitySettings72({ onVisibilityChange }) {
  const [selected, setSelected] = useState("public");

  const handleSelect = (value) => {
    setSelected(value);
    if (onVisibilityChange) onVisibilityChange(value);
  };

  const baseCard =
    "flex justify-between items-center p-4 rounded-2xl border-2 cursor-pointer transition";

  return (
    <div className="bg-white p-4 rounded-2xl shadow border border-slate-100">

      {/* Title */}
      <h3 className="text-sm font-bold text-slate-900 mb-4">
        Visibility Settings
      </h3>

      <div className="flex flex-col gap-3">

        {/* PUBLIC */}
        <div
          onClick={() => handleSelect("public")}
          className={`${baseCard} ${
            selected === "public"
              ? "border-violet-500 bg-violet-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <Globe
              size={20}
              className={
                selected === "public"
                  ? "text-violet-600"
                  : "text-slate-500"
              }
            />

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">
                Public
              </span>
              <span className="text-xs text-slate-500">
                Everyone can see this project
              </span>
            </div>
          </div>

          {selected === "public" && (
            <CheckCircle2 size={20} className="text-violet-600" />
          )}
        </div>

        {/* PRIVATE */}
        <div
          onClick={() => handleSelect("private")}
          className={`${baseCard} ${
            selected === "private"
              ? "border-violet-500 bg-violet-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <Lock
              size={20}
              className={
                selected === "private"
                  ? "text-violet-600"
                  : "text-slate-500"
              }
            />

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">
                Private
              </span>
              <span className="text-xs text-slate-500">
                Only invited freelancers
              </span>
            </div>
          </div>

          {selected === "private" && (
            <CheckCircle2 size={20} className="text-violet-600" />
          )}
        </div>

        {/* FEATURED */}
        <div
          onClick={() => handleSelect("featured")}
          className={`${baseCard} ${
            selected === "featured"
              ? "border-yellow-400 bg-yellow-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <Zap
              size={20}
              className={
                selected === "featured"
                  ? "text-yellow-500"
                  : "text-slate-500"
              }
            />

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">
                Featured
              </span>
              <span className="text-xs text-slate-500">
                Premium placement (+₹49)
              </span>
            </div>
          </div>

          {selected === "featured" && (
            <CheckCircle2 size={20} className="text-yellow-500" />
          )}
        </div>
      </div>
    </div>
  );
}

export default VisibilitySettings72;