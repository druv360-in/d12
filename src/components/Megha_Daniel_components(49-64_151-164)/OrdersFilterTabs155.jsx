// OrdersFilterTabs155.jsx
import { useState, useMemo } from "react";
import OrderCard157 from "./OrderCard157";

const ALL_ORDERS = [
  {
    id: "SB-001",
    client: { name: "Alex Thompson", avatar: "", orderedOn: "Jun 1, 2026" },
    title: "Social Media Video Editing Package",
    gig: "Professional Video Editing",
    status: "Active",
    progress: 65,
    deadline: "2 days",
    messages: 3,
    price: 250,
  },
  {
    id: "SB-002",
    client: { name: "Sarah Chen", avatar: "", orderedOn: "May 28, 2026" },
    title: "Logo Design with Brand Guidelines",
    gig: "Custom Logo Design",
    status: "Delivered",
    progress: 100,
    deadline: "Review pending",
    messages: 0,
    price: 180,
  },
  {
    id: "SB-003",
    client: { name: "Mike Johnson", avatar: "", orderedOn: "May 20, 2026" },
    title: "Full-Stack E-Commerce Website",
    gig: "Web Development",
    status: "Pending",
    progress: 20,
    deadline: "5 days",
    messages: 1,
    price: 500,
  },
  {
    id: "SB-004",
    client: { name: "Emma Wilson", avatar: "", orderedOn: "May 10, 2026" },
    title: "SEO Content Writing Package",
    gig: "Content Writing",
    status: "Cancelled",
    progress: 0,
    deadline: "N/A",
    messages: 0,
    price: 120,
  },
  {
    id: "SB-005",
    client: { name: "David Lee", avatar: "", orderedOn: "Jun 5, 2026" },
    title: "UI/UX Design for Mobile App",
    gig: "Mobile App Design",
    status: "Active",
    progress: 40,
    deadline: "4 days",
    messages: 2,
    price: 350,
  },
];

function OrdersFilterTabs155() {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [search, setSearch] = useState("");

  const tabs = useMemo(() => [
    { name: "All Orders", count: ALL_ORDERS.length },
    { name: "Active",     count: ALL_ORDERS.filter((o) => o.status === "Active").length },
    { name: "Delivered",  count: ALL_ORDERS.filter((o) => o.status === "Delivered").length },
    { name: "Pending",    count: ALL_ORDERS.filter((o) => o.status === "Pending").length },
    { name: "Cancelled",  count: ALL_ORDERS.filter((o) => o.status === "Cancelled").length },
  ], []);

  const filtered = useMemo(() => {
    const byTab = activeTab === "All Orders"
      ? ALL_ORDERS
      : ALL_ORDERS.filter((o) => o.status === activeTab);

    if (!search.trim()) return byTab;
    const q = search.toLowerCase();
    return byTab.filter(
      (o) =>
        o.title.toLowerCase().includes(q) ||
        o.client.name.toLowerCase().includes(q) ||
        o.gig.toLowerCase().includes(q)
    );
  }, [activeTab, search]);

  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#1E2835] px-4 py-3 transition-colors duration-300">
        <div className="relative">
          <svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" strokeWidth={2} />
            <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search orders, clients, or gigs..."
            className="w-full bg-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 pl-9 pr-4 py-1.5 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Tab Pills */}
      <div className="bg-[#F8FAFC] dark:bg-slate-900 rounded-xl border border-gray-200/60 dark:border-slate-800/80 shadow-sm p-2 transition-colors duration-300">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {tab.name}

                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white dark:bg-slate-950 text-gray-700 dark:text-slate-300"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Order Cards */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <p className="text-slate-400 text-sm text-center py-8">No orders found.</p>
        ) : (
          filtered.map((order) => <OrderCard157 key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
}

export default OrdersFilterTabs155;