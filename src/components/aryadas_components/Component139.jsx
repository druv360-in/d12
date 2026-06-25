import React from "react";

function Component139() {
  return (
    <div>
      <div className="bg-[#f3f4f6] p-6 m-4 rounded-2xl gap-4">
        <div className="flex items-center bg-[#4b5563] px-3 py-2 rounded-full">
        
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        <input
          type="text"
          placeholder="Search proposals..."
          className="bg-transparent outline-none text-sm text-white placeholder-gray-300 w-full"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <button className="px-4 py-1 text-xs rounded-full bg-indigo-500 text-white">
          All
        </button>
        <button className="px-4 py-1 text-xs rounded-full bg-gray-300 text-gray-600">
          Pending
        </button>
        <button className="px-4 py-1 text-xs rounded-full bg-gray-300 text-gray-600">
          Accepted
        </button>
      </div>
    </div>

      <div className="relative m-4 bg-[#f5f6f8] rounded-2xl p-4 shadow-md">
        <span className="absolute top-4 right-4 text-xl font-bold text-[#4a4aff]">
          $150
        </span>
        <div className="flex justify-center mt-6">
          <span className="flex items-center gap-1 text-xs bg-green-300 text-green-700 px-3 py-1 rounded-full">  
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Accepted
          </span>
        </div>
        <h3 className="mt-4 text-sm text-gray-500">
          Client Content Creator
        </h3>

        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          I have 3 years of experience creating youtube...
        </p>

        <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
          <span>$ 150</span>
          <span>Submitted Jun 1, 2026</span>
        </div>

      </div>

      <div className="relative m-4 bg-[#f5f6f8] rounded-2xl p-4 shadow-md">

      
        <span className="absolute top-4 right-4 text-xl font-bold text-[#4a4aff]">
          $200
        </span>

  
        <div className="flex justify-center mt-6">
          <span className="flex items-center gap-1 text-xs bg-red-400 text-red-600 px-3 py-1 rounded-full">
            
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>

            Rejected
          </span>
        </div>

        <h3 className="mt-4 text-sm text-gray-500">
          Client Content Rejection
        </h3>

        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          I have 3 years of experience creating youtube...
        </p>

        <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
          <span>$ 200</span>
          <span>Submitted Jun 11, 2026</span>
        </div>

      </div>
    <div className="relative m-4 gap-4 bg-[#f5f6f8] rounded-2xl p-4 shadow-md">
      

      <span className="absolute top-4 right-4 text-xl font-bold text-[#4a4aff]">
        $300
      </span>

  
      <div className="flex justify-center mt-6">
        <span className="flex items-center gap-1 text-xs bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock4-icon lucide-clock-4"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Pending
        </span>
      </div>

      <h3 className="mt-4 text-sm  text-gray-400">
        Client Marketing Agency
      </h3>

  
      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
        I can create engaging social media graphics...
      </p>

  
      <div className="flex justify-between items-center mt-6 text-xs text-gray-400">
        <span>$ 300</span>
        <span>Submitted Jun 3, 2026</span>
      </div>
    </div>
    </div>
  );
}

export default Component139;