import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Users,
  MapPin,
  BriefcaseBusiness,
  MessageCircle,
  Eye,
  Bookmark,
  Check,
  X,
  ChevronRight,
  Award,
} from "lucide-react";

import SidebarMenu24 from "./SidebarMenu24";
import Header01 from "./Header01";
import BottomMenu05 from "./BottomMenu05";

const proposals = [
  {
    id: 1,
    submitted: "Submitted 2 hours ago",
    name: "Priya Sharma",
    level: "Top Rated",
    rating: "4.9",
    reviews: "87",
    location: "Mumbai, India",
    jobs: "134 jobs",
    skills: ["React", "Node.js", "MongoDB"],
    bidAmount: "₹45,000",
    delivery: "14d",
    jobsDone: "134",
    status: "Pending",
    coverLetter:
      "I've delivered 20+ e-commerce platforms with a focus on conversion optimization. My previous client saw a 38% increase ...",
    hasShortlist: true,
    hasAccept: true,
    hasReject: true,
  },
  {
    id: 2,
    submitted: "Submitted 5 hours ago",
    name: "Arjun Mehta",
    level: "Level 2",
    rating: "4.8",
    reviews: "52",
    location: "Bangalore, India",
    jobs: "78 jobs",
    skills: ["UI/UX", "Figma", "Sketch"],
    bidAmount: "₹38,000",
    delivery: "10d",
    jobsDone: "78",
    status: "Shortlisted",
    coverLetter:
      "As a UI/UX specialist with 3 years of experience, I can create an intuitive experience that drives conversions. I'll sta...",
    hasShortlist: false,
    hasAccept: true,
    hasReject: true,
  },
  {
    id: 3,
    submitted: "Submitted 1 day ago",
    name: "Sneha Patel",
    level: "Top Rated",
    rating: "5.0",
    reviews: "31",
    location: "Pune, India",
    jobs: "45 jobs",
    skills: ["Full Stack", "React", "PostgreSQL"],
    bidAmount: "₹52,000",
    delivery: "18d",
    jobsDone: "45",
    status: "Accepted",
    coverLetter:
      "I specialize in full-stack development with React and PostgreSQL. My apps consistently score 95+ on Lighthouse performan...",
    hasShortlist: false,
    hasAccept: false,
    hasReject: false,
    goToProject: true,
  },
  {
    id: 4,
    submitted: "Submitted 2 days ago",
    name: "Rohan Gupta",
    level: "Level 1",
    rating: "4.6",
    reviews: "23",
    location: "Delhi, India",
    jobs: "29 jobs",
    skills: ["Python", "Django", "AWS"],
    bidAmount: "₹30,000",
    delivery: "25d",
    jobsDone: "29",
    status: "Rejected",
    coverLetter:
      "I have solid experience building backend services with Django and deploying on AWS. I can set up CI/CD pipelines, automa...",
    hasShortlist: false,
    hasAccept: false,
    hasReject: false,
  },
  {
    id: 5,
    submitted: "Submitted 2 days ago",
    name: "Kavya Reddy",
    level: "Level 2",
    rating: "4.7",
    reviews: "41",
    location: "Hyderabad, India",
    jobs: "63 jobs",
    skills: ["React", "TypeScript", "GraphQL"],
    bidAmount: "₹42,000",
    delivery: "16d",
    jobsDone: "63",
    status: "Shortlisted",
    coverLetter:
      "TypeScript and GraphQL are my daily drivers. I've shipped production apps for startups in fintech and edtech. I focus on...",
    hasShortlist: false,
    hasAccept: true,
    hasReject: true,
  },
  {
    id: 6,
    submitted: "Submitted 3 days ago",
    name: "Vikram Singh",
    level: "Level 1",
    rating: "4.5",
    reviews: "19",
    location: "Chennai, India",
    jobs: "22 jobs",
    skills: ["Vue.js", "Laravel", "MySQL"],
    bidAmount: "₹28,000",
    delivery: "20d",
    jobsDone: "22",
    status: "Pending",
    coverLetter:
      "I specialize in Vue.js frontends paired with Laravel backends. My previous project for a retail client reduced page load...",
    hasShortlist: true,
    hasAccept: true,
    hasReject: true,
  },
];

const statusStyles = {
  Pending: "bg-violet-50 text-violet-600",
  Shortlisted: "bg-amber-50 text-amber-600",
  Accepted: "bg-emerald-50 text-emerald-600",
  Rejected: "bg-rose-50 text-rose-500",
};

/*
  Proposal action states:

  normal
    → Shortlist | Accept | Reject

  shortlisted
    → Accept | Reject

  accepted
    → Go to Project | Reject
*/

const initialProposalActionState = proposals.reduce((acc, proposal) => {
  if (proposal.goToProject || proposal.status === "Accepted") {
    acc[proposal.id] = "accepted";
  } else if (
    proposal.status === "Shortlisted" &&
    proposal.hasShortlist === false
  ) {
    acc[proposal.id] = "shortlisted";
  } else {
    acc[proposal.id] = "normal";
  }

  return acc;
}, {});

function ProjectProposal() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  /*
    Each proposal has an independent action state.
  */
  const [proposalActionState, setProposalActionState] = useState(
    initialProposalActionState
  );

  // ============================================================
  // SHORTLIST
  // ============================================================

  const handleShortlist = (proposalId) => {
    setProposalActionState((prev) => ({
      ...prev,
      [proposalId]: "shortlisted",
    }));
  };

  // ============================================================
  // ACCEPT
  // ============================================================

  const handleAccept = (proposalId) => {
    setProposalActionState((prev) => ({
      ...prev,
      [proposalId]: "accepted",
    }));
  };

  // ============================================================
  // GO TO PROJECT
  //
  // /projects is the route for DashboardPage.jsx
  // ============================================================

  const handleGoToProject = () => {
    navigate("/projects");
  };

  // ============================================================
  // FILTER + SEARCH
  // ============================================================

  const filteredProposals = useMemo(() => {
    let result = proposals;

    if (activeTab !== "All") {
      result = result.filter(
        (proposal) => proposal.status === activeTab
      );
    }

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();

      result = result.filter((proposal) => {
        return (
          proposal.name.toLowerCase().includes(query) ||
          proposal.skills.some((skill) =>
            skill.toLowerCase().includes(query)
          )
        );
      });
    }

    return result;
  }, [activeTab, searchTerm]);

  return (
    <div className="min-h-screen bg-[#f8f8fb]">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="lg:pl-[229px] xl:pl-[229px]">

        {/* Mobile Header */}
        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* ===================================================
            TOP HEADER
        ==================================================== */}

        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">

          <div className="mx-auto flex min-h-[78px] w-full max-w-[1300px] items-center justify-between px-5 sm:px-7 lg:px-7 xl:px-8">

            {/* Left */}
            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-50
                  text-gray-600
                  transition
                  hover:bg-violet-100
                  hover:text-violet-700
                "
              >
                <ArrowLeft size={22} />
              </button>

              <div>
                <h1 className="text-[27px] font-bold leading-tight text-gray-900">
                  Project Proposals
                </h1>

                <p className="mt-1.5 text-[15px] text-gray-500">
                  6 proposals received
                </p>
              </div>

            </div>

            {/* Right Profile */}
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                bg-white
                px-2
                py-1.5
                shadow-[0_2px_8px_rgba(15,23,42,0.06)]
                transition
                hover:border-violet-200
                hover:shadow-md
              "
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                alt="John Doe"
                className="h-11 w-11 rounded-full object-cover"
              />

              <div className="hidden text-left sm:block">
                <p className="text-[15px] font-semibold leading-tight text-gray-800">
                  John Doe
                </p>

                <p className="text-[12px] leading-tight text-gray-500">
                  View Profile
                </p>
              </div>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />
            </button>

          </div>

        </header>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <main className="px-4 pb-24 pt-6 sm:px-6 lg:px-7 xl:px-8">

          <div className="mx-auto w-full max-w-[1300px] lg:translate-x-[57px] xl:translate-x-[57px]">

            {/* =================================================
                SEARCH
            ================================================== */}

            <div className="relative mb-4">

              <Search
                size={20}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or skill..."
                className="
                  w-full
                  rounded-[16px]
                  border
                  border-gray-200
                  bg-white
                  py-[14px]
                  pl-11
                  pr-4
                  text-[17px]
                  text-gray-700
                  outline-none
                  transition
                  focus:border-violet-300
                  focus:ring-2
                  focus:ring-violet-100
                "
              />

            </div>

            {/* =================================================
                FILTER TABS
            ================================================== */}

            <div className="mb-8 flex flex-wrap items-center gap-4">

              {/* All Proposals */}
              <button
                type="button"
                onClick={() => setActiveTab("All")}
                className="
                  rounded-full
                  bg-violet-600
                  px-4
                  py-2
                  text-[18px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-violet-700
                "
              >
                All Proposals{" "}
                <span className="ml-2 opacity-80">
                  6
                </span>
              </button>

              {/* Shortlisted */}
              <button
                type="button"
                onClick={() => setActiveTab("Shortlisted")}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-[18px]
                  font-semibold
                  transition
                  ${
                    activeTab === "Shortlisted"
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-white text-gray-600 border border-gray-200"
                  }
                `}
              >
                Shortlisted{" "}
                <span
                  className={
                    activeTab === "Shortlisted"
                      ? "ml-2 text-white/80"
                      : "ml-2 text-gray-400"
                  }
                >
                  2
                </span>
              </button>

              {/* Accepted */}
              <button
                type="button"
                onClick={() => setActiveTab("Accepted")}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-[18px]
                  font-semibold
                  transition
                  ${
                    activeTab === "Accepted"
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-white text-gray-600 border border-gray-200"
                  }
                `}
              >
                Accepted{" "}
                <span
                  className={
                    activeTab === "Accepted"
                      ? "ml-2 text-white/80"
                      : "ml-2 text-gray-400"
                  }
                >
                  1
                </span>
              </button>

              {/* Rejected */}
              <button
                type="button"
                onClick={() => setActiveTab("Rejected")}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-[18px]
                  font-semibold
                  transition
                  ${
                    activeTab === "Rejected"
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-white text-gray-600 border border-gray-200"
                  }
                `}
              >
                Rejected{" "}
                <span
                  className={
                    activeTab === "Rejected"
                      ? "ml-2 text-white/80"
                      : "ml-2 text-gray-400"
                  }
                >
                  1
                </span>
              </button>

            </div>

            {/* =================================================
                PROPOSAL CARDS
            ================================================== */}

            <div className="space-y-5">

              {filteredProposals.map((proposal) => {

                const currentAction =
                  proposalActionState[proposal.id] || "normal";

                return (
                  <article
                    key={proposal.id}
                    className="
                      rounded-[24px]
                      border
                      border-gray-200
                      bg-white
                      p-6
                      shadow-[0_2px_8px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >

                    {/* =================================================
                        TOP LINE
                    ================================================== */}

                    <div className="mb-4 flex items-start justify-between gap-4">

                      <p className="text-[15px] text-gray-400">
                        {proposal.submitted}
                      </p>

                      <span
                        className={`
                          rounded-full
                          px-3
                          py-1.5
                          text-[15px]
                          font-semibold
                          ${statusStyles[proposal.status]}
                        `}
                      >
                        {proposal.status}
                      </span>

                    </div>

                    {/* =================================================
                        FREELANCER
                    ================================================== */}

                    <div className="flex items-start gap-4">

                      <div className="relative shrink-0">

                        <img
                          src={`https://i.pravatar.cc/80?img=${proposal.id + 10}`}
                          alt={proposal.name}
                          className="
                            h-14
                            w-14
                            rounded-full
                            object-cover
                          "
                        />

                        {proposal.level === "Top Rated" && (
                          <span
                            className="
                              absolute
                              -right-1
                              -top-1
                              flex
                              h-6
                              w-6
                              items-center
                              justify-center
                              rounded-full
                              bg-amber-400
                              text-white
                            "
                          >
                            <Award size={13} />
                          </span>
                        )}

                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-1.5">

                          <h2 className="text-[19px] font-bold text-gray-900">
                            {proposal.name}
                          </h2>

                          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[15px] font-semibold text-amber-700">
                            {proposal.level}
                          </span>

                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px] text-gray-500">

                          <span className="flex items-center gap-0.5">
                            <span className="text-amber-500">
                              ★
                            </span>
                            {proposal.rating} ({proposal.reviews})
                          </span>

                          <span className="flex items-center gap-0.5">
                            <MapPin size={14} />
                            {proposal.location}
                          </span>

                          <span className="flex items-center gap-0.5">
                            <BriefcaseBusiness size={14} />
                            {proposal.jobs}
                          </span>

                        </div>

                        {/* Skills */}
                        <div className="mt-2 flex flex-wrap gap-2">

                          {proposal.skills.map((skill) => (
                            <span
                              key={skill}
                              className="
                                rounded-full
                                bg-violet-50
                                px-2.5
                                py-1
                                text-[13px]
                                font-medium
                                text-violet-700
                              "
                            >
                              {skill}
                            </span>
                          ))}

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        THREE STATS
                    ================================================== */}

                    <div className="mt-5 grid grid-cols-3 gap-3">

                      {/* Bid */}
                      <div
                        className="
                          rounded-[19px]
                          border
                          border-violet-100
                          bg-violet-50/70
                          px-3
                          py-4
                          text-center
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:shadow-sm
                        "
                      >
                        <p className="text-[17px] font-bold text-violet-700">
                          ₹
                        </p>

                        <p className="mt-0.5 text-[17px] font-bold text-gray-900">
                          {proposal.bidAmount}
                        </p>

                        <p className="mt-0.5 text-[17px] text-gray-400">
                          Bid Amount
                        </p>
                      </div>

                      {/* Delivery */}
                      <div
                        className="
                          rounded-[19px]
                          border
                          border-emerald-100
                          bg-emerald-50/70
                          px-3
                          py-4
                          text-center
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:shadow-sm
                        "
                      >
                        <p className="text-[17px] font-bold text-emerald-500">
                          ◷
                        </p>

                        <p className="mt-0.5 text-[17px] font-bold text-gray-900">
                          {proposal.delivery}
                        </p>

                        <p className="mt-0.5 text-[17px] text-gray-400">
                          Delivery
                        </p>
                      </div>

                      {/* Jobs */}
                      <div
                        className="
                          rounded-[19px]
                          border
                          border-amber-100
                          bg-amber-50/70
                          px-3
                          py-4
                          text-center
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:shadow-sm
                        "
                      >
                        <p className="text-[17px] font-bold text-amber-500">
                          ◷
                        </p>

                        <p className="mt-0.5 text-[17px] font-bold text-gray-900">
                          {proposal.jobsDone}
                        </p>

                        <p className="mt-0.5 text-[17px] text-gray-400">
                          Jobs Done
                        </p>
                      </div>

                    </div>

                    {/* =================================================
                        COVER LETTER
                    ================================================== */}

                    <div className="mt-4">

                      <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                        Cover Letter
                      </p>

                      <p className="mt-1.5 text-[17px] leading-relaxed text-gray-600">
                        {proposal.coverLetter}
                      </p>

                      <button
                        type="button"
                        className="
                          mt-1.5
                          text-[17px]
                          font-medium
                          text-violet-600
                          transition
                          hover:text-violet-800
                        "
                      >
                        Read more ↓
                      </button>

                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gray-100" />

                    {/* =================================================
                        ACTION BUTTONS
                    ================================================== */}

                    <div className="flex flex-wrap items-center gap-1.5">

                      {/* =================================================
                          VIEW PROFILE
                      ================================================== */}

                      <button
                        type="button"
                        onClick={() =>
                          navigate(`/profile/${proposal.id}`, {
                            state: {
                              freelancer: proposal,
                            },
                          })
                        }
                        className="
                          inline-flex
                          items-center
                          gap-1
                          rounded-full
                          border
                          border-gray-200
                          bg-white
                          px-3.5
                          py-2
                          text-[15px]
                          font-medium
                          text-gray-700
                          transition
                          hover:border-violet-200
                          hover:bg-violet-50
                          hover:text-violet-700
                        "
                      >
                        <Eye size={16} />
                        View Profile
                      </button>

                      {/* =================================================
                          MESSAGE
                      ================================================== */}

                      <button
                        type="button"
                        onClick={() => navigate("/chatnotfound")}
                        className="
                          inline-flex
                          items-center
                          gap-1
                          rounded-full
                          bg-violet-50
                          px-3.5
                          py-2
                          text-[15px]
                          font-medium
                          text-violet-700
                          transition
                          hover:bg-violet-100
                        "
                      >
                        <MessageCircle size={14} />
                        Message
                      </button>

                      {/* =================================================
                          SHORTLIST
                          
                          Initial:
                          Shortlist | Accept | Reject
                          
                          After click:
                          Accept | Reject
                      ================================================== */}

                      {proposal.hasShortlist &&
                        currentAction === "normal" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleShortlist(proposal.id)
                            }
                            className="
                              inline-flex
                              items-center
                              gap-1
                              rounded-full
                              bg-amber-50
                              px-3.5
                              py-2
                              text-[15px]
                              font-medium
                              text-amber-700
                              transition
                              hover:bg-amber-100
                            "
                          >
                            <Bookmark size={16} />
                            Shortlist
                          </button>
                        )}

                      {/* =================================================
                          ACCEPT
                          
                          Appears in Shortlist's place after
                          Shortlist is removed.

                          After click:
                          Go to Project | Reject
                      ================================================== */}

                      {proposal.hasAccept &&
                        currentAction !== "accepted" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleAccept(proposal.id)
                            }
                            className="
                              inline-flex
                              items-center
                              gap-1
                              rounded-full
                              bg-emerald-500
                              px-3.5
                              py-2
                              text-[15px]
                              font-semibold
                              text-white
                              transition
                              hover:bg-emerald-600
                            "
                          >
                            <Check size={16} />
                            Accept
                          </button>
                        )}

                      {/* =================================================
                          GO TO PROJECT
                          
                          Replaces Accept in the same position.
                          
                          Order:
                          Go to Project | Reject
                      ================================================== */}

                      {currentAction === "accepted" && (
                        <button
                          type="button"
                          onClick={handleGoToProject}
                          className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-full
                            bg-violet-600
                            px-4
                            py-2
                            text-[15px]
                            font-semibold
                            text-white
                            transition
                            hover:bg-violet-700
                          "
                        >
                          Go to Project
                          <ChevronRight size={15} />
                        </button>
                      )}

                      {/* =================================================
                          REJECT
                          
                          Always comes directly after
                          Accept / Go to Project.
                      ================================================== */}

                      {proposal.hasReject && (
                        <button
                          type="button"
                          className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-full
                            bg-rose-50
                            px-3.5
                            py-2
                            text-[15px]
                            font-medium
                            text-rose-500
                            transition
                            hover:bg-rose-100
                          "
                        >
                          <X size={16} />
                          Reject
                        </button>
                      )}

                    </div>

                  </article>
                );
              })}

              {/* =================================================
                  NO RESULTS
              ================================================== */}

              {filteredProposals.length === 0 && (
                <div
                  className="
                    rounded-[24px]
                    border
                    border-gray-200
                    bg-white
                    px-6
                    py-12
                    text-center
                    shadow-sm
                  "
                >
                  <Users
                    className="mx-auto mb-2 text-gray-300"
                    size={25}
                  />

                  <p className="text-[15px] font-semibold text-gray-600">
                    No proposals found
                  </p>

                  <p className="mt-1 text-[12px] text-gray-400">
                    Try another search or filter.
                  </p>
                </div>
              )}

            </div>

          </div>

        </main>

      </div>

      <BottomMenu05 />

    </div>
  );
}

export default ProjectProposal;