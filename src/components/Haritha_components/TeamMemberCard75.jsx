import { Clock3, DollarSign, CalendarDays } from "lucide-react";

function TeamMemberCard75({ member }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg">

      {/* Header */}
      <div className="flex items-start gap-3">

        <img
          src={member.image}
          alt={member.name}
          className="w-14 h-14 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h3 className="text-base font-bold text-slate-900">
            {member.name}
          </h3>

          <p className="text-sm text-violet-600 font-medium">
            {member.role}
          </p>

          <p className="text-xs text-slate-400">
            {member.university}
          </p>
        </div>

        <span className="text-xs font-semibold bg-green-100 text-green-600 px-3 py-1 rounded-full">
          active
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mt-4">

        <div className="bg-violet-50 rounded-xl p-3 flex flex-col gap-1">
          <Clock3 size={14} className="text-violet-600" />
          <span className="text-[11px] text-slate-500">Hours</span>
          <strong className="text-sm text-slate-900">{member.hours}</strong>
        </div>

        <div className="bg-green-50 rounded-xl p-3 flex flex-col gap-1">
  <DollarSign size={14} className="text-violet-600" />
  <span className="text-[11px] text-slate-500">Earned</span>
  <strong className="text-sm text-slate-900">
    ${member.earned}
  </strong>
</div>
        <div className="bg-violet-50 rounded-xl p-3 flex flex-col gap-1">
          <CalendarDays size={14} className="text-violet-600" />
          <span className="text-[11px] text-slate-500">Since</span>
          <strong className="text-sm text-slate-900">
            {member.since}
          </strong>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 mt-4">

        <button className="bg-violet-100 text-violet-600 font-semibold text-sm py-2 rounded-full hover:bg-violet-200 transition">
          View Profile
        </button>

        <button className="bg-pink-100 text-pink-600 font-semibold text-sm py-2 rounded-full hover:bg-pink-200 transition">
          Message
        </button>

      </div>
    </div>
  );
}

export default TeamMemberCard75;