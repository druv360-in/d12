import TopFreelancerCard10 from "./TopFreelancerCard10";

function TopFreelancers11() {
  const freelancers = [
    {
      id: 1,

      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",

      name: "Emma Thompson",

      field: "Computer Science",

      university: "Stanford University",

      rating: 4.9,

      projects: 89,

      reviews: 127,

      rate: 35,

      about:
        "Full-stack developer passionate about creating beautiful and functional web applications. 3 years of experience in modern web technologies.",

      skills: [
        "React",
        "Node.js",
        "Python",
        "UI/UX",
      ],
    },

    {
      id: 2,

      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",

      name: "Marcus Johnson",

      field: "Design",

      university: "MIT",

      rating: 4.8,

      projects: 76,

      reviews: 98,

      rate: 40,

      about:
        "Creative designer specializing in brand identity and digital design. Love bringing ideas to life through visual storytelling.",

      skills: [
        "Figma",
        "Adobe Creative Suite",
        "Branding",
        "UI Design",
      ],
    },

    {
      id: 3,

      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",

      name: "Sophia Chen",

      field: "Film & Media",

      university: "UC Berkeley",

      rating: 5.0,

      projects: 112,

      reviews: 145,

      rate: 45,

      about:
        "Award-winning video editor with a passion for storytelling. Experienced in creating engaging content for social media and brands.",

      skills: [
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Motion Graphics",
      ],
    },
  ];

  return (
    <section
      className="
        px-4
        py-8
        lg:px-0
      "
    >
      {/* ==================================================
          HEADING
      ================================================== */}

      <div className="mb-8">
        <h3
          className="
            text-2xl
            font-bold
            text-gray-900
          "
        >
          Top Freelancers
        </h3>
      </div>

      {/* ==================================================
          FREELANCER CARDS
      ================================================== */}

      <div
        className="
          flex
          flex-col
          gap-6
        "
      >
        {freelancers.map((freelancer) => (
          <TopFreelancerCard10
            key={freelancer.id}
            freelancer={freelancer}
          />
        ))}
      </div>
    </section>
  );
}

export default TopFreelancers11;