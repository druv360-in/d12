import React from "react";

function Component126() {
  return (
    <div className="bg-[#0d1117] m-4 p-8 rounded-3xl border border-gray-800 shadow-xl max-w-sm">
      <h1 className="font-bold text-white text-xl tracking-tight mb-8">Quick Actions</h1>
      
      <div className="flex flex-col gap-6">

        <div className="w-full h-32 bg-violet-600 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus mb-2">
            <path d="M5 12h14"/><path d="M12 5v14"/>
          </svg>
          <p className="text-white text-sm font-bold">Create New Gig</p>
        </div>

        <div className="w-full h-32 bg-blue-600 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search mb-2">
            <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>
          </svg>
          <p className="text-white text-sm font-bold">Browse Projects</p>
        </div>

        <div className="w-full h-32 bg-green-700 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet mb-2">
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
          </svg>
          <p className="text-white text-sm font-bold">Withdraw Earnings</p>
        </div>

        <div className="w-full h-32 bg-violet-600 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star mb-2">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
          </svg>
          <p className="text-white text-sm font-bold">Edit Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Component126;