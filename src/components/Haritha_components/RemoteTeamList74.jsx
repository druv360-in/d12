import TeamMemberCard75 from "./TeamMemberCard75";

function RemoteTeamList74() {
  const members = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Full-Stack Developer",
      university: "Stanford University",
      hours: 156,
      earned: 5460,
      since: "Jan 2026",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      university: "MIT",
      hours: 98,
      earned: 3920,
      since: "Feb 2026",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "Video Editor",
      university: "UC Berkeley",
      hours: 124,
      earned: 5580,
      since: "Jan 2026",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-lg font-bold text-slate-900 mb-4">
        Your Remote Team ({members.length})
      </h2>

      <div className="flex flex-col gap-5">
        {members.map((member) => (
          <TeamMemberCard75 key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default RemoteTeamList74;