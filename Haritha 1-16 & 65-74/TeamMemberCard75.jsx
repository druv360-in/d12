import { Clock3, DollarSign, CalendarDays } from "lucide-react";

function TeamMemberCard75({
  member
}) {
  return (
    <div className="team-member-card75">
      <div className="team-member-header75">
        <img
          src={member.image}
          alt={member.name}
          className="team-member-avatar75"
        />

        <div className="team-member-info75">
          <h3>{member.name}</h3>
          <p className="role75">{member.role}</p>
          <p className="university75">{member.university}</p>
        </div>

        <span className="status75">active</span>
      </div>

      <div className="team-stats75">
        <div className="stat-card75">
          <Clock3 size={14} />
          <span>Total Hours</span>
          <strong>{member.hours}</strong>
        </div>

        <div className="stat-card75">
          <DollarSign size={14} />
          <span>Total Earned</span>
          <strong>${member.earned}</strong>
        </div>

        <div className="stat-card75">
          <CalendarDays size={14} />
          <span>Since</span>
          <strong>{member.since}</strong>
        </div>
      </div>

      <div className="team-actions75">
        <button className="profile-btn75">
          View Profile
        </button>

        <button className="message-btn75">
          Message
        </button>
      </div>
    </div>
  );
}

export default TeamMemberCard75;