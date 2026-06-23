import { useState, useRef } from "react";
import { Search } from "lucide-react";

function OrdersSearchBar154({ onSearch }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  }

  return (
    <div className="bg-[#F8FAFC] rounded-xl border border-gray-200/60 shadow-sm p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search orders, clients, or gigs..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-slate-700 placeholder:text-gray-400 focus:border-[#672AC9] focus:ring-2 focus:ring-[#672AC9]/20 outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default OrdersSearchBar154;