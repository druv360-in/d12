import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ProfileTopBox() {
  return (
    <Link
      to="/profile"
      className="
        hidden lg:flex
        fixed
        top-4
        right-6
        z-50
        items-center
        gap-3
        bg-white
        border border-slate-200
        rounded-2xl
        px-3 py-2
        shadow-sm
        hover:shadow-md
        transition-all
        duration-200
      "
    >
      {/* Profile Image */}
      <div className="relative shrink-0">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="John Doe"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Online status */}
        <span
          className="
            absolute
            bottom-0
            right-0
            w-3
            h-3
            bg-green-500
            border-2
            border-white
            rounded-full
          "
        />
      </div>

      {/* Name */}
      <div className="leading-tight min-w-[90px]">
        <p className="text-sm font-bold text-slate-800">
          John Doe
        </p>

        <p className="text-xs text-slate-500">
          View Profile
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={18}
        className="text-slate-400"
      />
    </Link>
  );
}

export default ProfileTopBox;