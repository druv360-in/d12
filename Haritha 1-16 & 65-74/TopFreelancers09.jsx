import TopFreelancerCard10 from "./TopFreelancerCard10";

function TopFreelancers09() {
  const freelancers = [
    {
      id: 1,
      avatar: "	https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      name: "Emma Thompson",
      university: "Stanford University",
      rating: 4.9,
      projects: 89,
      rate: 35,
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      name: "Marcus Johnson",
      university: "MIT",
      rating: 4.8,
      projects: 76,
      rate: 40,
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      name: "Sophia Chen",
      university: "UC Berkeley",
      rating: 5,
      projects: 112,
      rate: 45,
    },
  ];

  return (
    <section className="top-freelancers">
      <h3 className="section-title">Top Freelancers</h3>
      <div className="freelancers-list">
        {freelancers.map((freelancer) => (
          <TopFreelancerCard10 key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </section>
  );
}

export default TopFreelancers09;