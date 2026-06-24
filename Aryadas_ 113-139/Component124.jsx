import React from "react"

function Component124() {
    return (
        <div className="p-8 text-white bg-[#0d1117] rounded-3xl relative overflow-hidden flex flex-col justify-between max-w-sm border border-gray-800 shadow-2xl">

            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Freelancer<br />Dashboard</h1>
                <p className="text-gray-400 text-base leading-relaxed ">
                    Manage your gigs, orders, and earnings
                </p>
            </div>

            <div className="mt-8 flex items-end justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Status:</span>
                    <div className="bg-[#ecfdf5] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-emerald-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
                        fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                        className="lucide lucide-power">
                            <path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>
                        </svg>
                        <span className="text-sm font-bold text-[#059669]">Online</span>
                    </div>
                </div>

                {/* Progress Box */}
                <div className="bg-[#eef2ff] p-4 rounded-3xl flex flex-col items-center justify-center shadow-lg transform translate-y-2 translate-x-2">
                    <span className="text-2xl font-bold text-[#6366f1]">87%</span>
                    <span className="text-xs font-bold text-[#6366f1]/70 uppercase tracking-tighter">Complete</span>
                </div>
            </div>
        </div>
    )
}

export default Component124
