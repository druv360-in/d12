import React, { useState } from "react";
import EightyThreeComponent from "./83component";

const ordersData = [
  {
    id: 1,
    orderNo: "Order #1",
    company: "Tech Startup Co.",
    amount: "$299",
    deadline: "2026-03-13",
    status: "in-progress",
    type: "active",
  },
  {
    id: 2,
    orderNo: "Order #2",
    company: "Sarah's Bakery",
    amount: "$149",
    deadline: "2026-03-12",
    status: "pending",
    type: "active",
  },
  {
    id: 3,
    orderNo: "Order #3",
    company: "Fitness Influencer",
    amount: "$99",
    deadline: "2026-03-07",
    status: "completed",
    type: "completed",
  },
];

const EightyTwoComponent = ({
  onView,
  onContact,
}) => {
  const [activeTab, setActiveTab] = useState("active");

  const filteredOrders = ordersData.filter(
    (order) => order.type === activeTab
  );

  const activeCount = ordersData.filter(
    (order) => order.type === "active"
  ).length;

  const completedCount = ordersData.filter(
    (order) => order.type === "completed"
  ).length;

  return (
    <div
      className="
        w-full
        pb-20
      "
    >

      {/* =====================================================
          ORDER TABS
      ====================================================== */}

      <div
        className="
          mb-7
          flex
          gap-4
          rounded-[20px]
          bg-gray-50
          p-2
        "
      >

        {/* Active */}
        <button
          type="button"
          onClick={() => setActiveTab("active")}
          className={`
            flex-1
            rounded-[18px]
            py-3.5
            text-[16px]
            font-bold
            transition-all
            duration-200
            md:py-4
            md:text-[18px]

            ${
              activeTab === "active"
                ? `
                  bg-violet-700
                  text-white
                  shadow-lg
                `
                : `
                  text-gray-700
                  hover:bg-white
                  hover:text-violet-700
                `
            }
          `}
        >
          Active ({activeCount})
        </button>


        {/* Completed */}
        <button
          type="button"
          onClick={() => setActiveTab("completed")}
          className={`
            flex-1
            rounded-[18px]
            py-3.5
            text-[16px]
            font-bold
            transition-all
            duration-200
            md:py-4
            md:text-[18px]

            ${
              activeTab === "completed"
                ? `
                  bg-violet-700
                  text-white
                  shadow-lg
                `
                : `
                  text-gray-700
                  hover:bg-white
                  hover:text-violet-700
                `
            }
          `}
        >
          Completed ({completedCount})
        </button>

      </div>


      {/* =====================================================
          ORDER CARDS
      ====================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          gap-6
        "
      >

        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="
                w-full
                transition-all
                duration-200
                hover:-translate-y-0.5
              "
            >
              <EightyThreeComponent
                order={order}
                onView={onView}
                onContact={onContact}
              />
            </div>
          ))
        ) : (
          <div
            className="
              rounded-[24px]
              border
              border-gray-200
              bg-white
              px-6
              py-14
              text-center
              text-[16px]
              text-gray-500
              shadow-sm
              md:text-[18px]
            "
          >
            No {activeTab} orders found
          </div>
        )}

      </div>

    </div>
  );
};

export default EightyTwoComponent;