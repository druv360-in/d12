import React from "react";
import SeventyTwoComponent from "./72component.jsx";

const trackerData = {
  Large: {
    title: "Milestone Tracker",
    total: 3,
    completed: 1,
    items: [
      {
        id: 1,
        label: "Milestone 1",
        desc: "UI/UX Design & Wireframes",
        amount: "24,000",
        due: "Jun 10, 2026",
        status: "Released",
        approvedOn: "Jun 12, 2026"
      },
      {
        id: 2,
        label: "Milestone 2",
        desc: "Frontend Development",
        amount: "24,000",
        due: "Jun 25, 2026",
        status: "In Escrow"
      },
      {
        id: 3,
        label: "Milestone 3",
        desc: "Backend + Deployment",
        amount: "24,000",
        due: "Jul 15, 2026",
        status: "Pending"
      }
    ]
  },

  Medium: {
    title: "Installment Tracker",
    total: 2,
    completed: 1,
    items: [
      {
        id: 1,
        label: "Installment 1",
        desc: "Initial Concepts & Revisions",
        amount: "9,000",
        due: "Jun 8, 2026",
        status: "Released",
        approvedOn: "Jun 9, 2026"
      },
      {
        id: 2,
        label: "Installment 2",
        desc: "Final Delivery & Brand Guide",
        amount: "9,000",
        due: "Jun 20, 2026",
        status: "In Escrow"
      }
    ]
  },

  Small: {
    title: "Payment Status",
    total: 1,
    completed: 0,
    items: [
      {
        id: 1,
        label: "Full Payment",
        desc: "Complete project delivery - 5 edited reels",
        amount: "4,500",
        due: "Jun 18, 2026",
        status: "In Escrow"
      }
    ]
  }
};


export default function SeventyOneComponent({
  selectedPlan = "Large"
}) {

  const data = trackerData[selectedPlan];

  const progress =
    Math.round((data.completed / data.total) * 100);


  return (
    <div className="bg-white rounded-2xl mx-4 mt-4 p-5 shadow-sm border border-gray-100">


      {/* Header */}
      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold text-gray-900">
          {data.title}
        </h2>


        <span className="bg-violet-50 text-violet-700 text-sm font-semibold px-3 py-1 rounded-full">
          {data.completed}/{data.total} complete
        </span>

      </div>



      {/* Progress */}

      <div className="mb-6">

        <div className="flex justify-between text-sm text-gray-500 mb-2">

          <span>Progress</span>

          <span>{progress}%</span>

        </div>


        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-violet-700 to-amber-400 rounded-full transition-all duration-500"
            style={{
              width:`${progress}%`
            }}
          />

        </div>

      </div>



      {/* Timeline */}

      <div className="relative">

        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200"/>


        <div className="space-y-5">

          {
            data.items.map((item)=>(
              <SeventyTwoComponent
                key={item.id}
                item={item}
              />
            ))
          }

        </div>


      </div>


    </div>
  );
}