import React from "react"

function Component129() {
    return (
        <div className="mx-6 my-4 p-6 bg-[#0d1117] border border-gray-800 rounded-3xl space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-white font-bold text-xl">My Gigs</h2>
                <a href="#" className="text-blue-400 text-sm font-medium hover:underline flex items-center gap-1">
                    Manage All
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>

            <div className="flex flex-col items-center justify-center py-10 px-4 rounded-2xl space-y-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package"><path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/></svg>
                </div>
                <div className="text-center">
                    <p className="text-gray-400 font-medium">No gigs yet</p>
                    <button className="text-[#8b5cf6] text-sm font-semibold hover:underline mt-1 bg-transparent border-0 cursor-pointer">
                        + Create your first gig
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Component129
