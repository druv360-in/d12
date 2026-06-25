import React from "react"

function Component131() {
    return (
        <div className="sticky top-0 z-50 bg-amber-50 px-2 py-4  flex justify-between items-center">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </button>
                <p className="text-blue-300 text-sm">Create New Gig<br/>Set up your service offering</p>
            </div>

            <div className="flex items-center gap-2">
                <button className="px-5 py-2.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                    Cancel
                </button>
                <button className="px-5 py-2.5 text-sm font-semibold text-white bg-[#161b22] border border-gray-800 rounded-xl hover:bg-gray-800 transition-colors">
                    Save Draft
                </button>
                <button className="px-6 py-2.5 text-sm font-bold text-white bg-green-700 border border-green-800 rounded-xl ">
                    Publish Gig
                </button>
            </div>
        </div>
    )
}

export default Component131
