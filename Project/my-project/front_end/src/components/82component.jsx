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
    type: "active"
  },
  {
    id: 2,
    orderNo: "Order #2",
    company: "Sarah's Bakery",
    amount: "$149",
    deadline: "2026-03-12",
    status: "pending",
    type: "active"
  },
  {
    id: 3,
    orderNo: "Order #3",
    company: "Fitness Influencer",
    amount: "$99",
    deadline: "2026-03-07",
    status: "completed",
    type: "completed"
  }
];



const EightyTwoComponent = ({
  onView,
  onContact
}) => {


  const [activeTab,setActiveTab] = useState("active");



  const filteredOrders = ordersData.filter(
    (order)=>order.type === activeTab
  );


  const activeCount = ordersData.filter(
    (order)=>order.type==="active"
  ).length;


  const completedCount = ordersData.filter(
    (order)=>order.type==="completed"
  ).length;



  return (

    <div
      className="
        w-full
        pb-20
      "
    >


      {/* Tabs */}

      <div
        className="
          flex
          gap-3
          mb-6
          bg-gray-50
          p-1.5
          rounded-2xl
        "
      >


        <button
          onClick={()=>setActiveTab("active")}

          className={`
            flex-1
            py-3
            rounded-2xl
            font-bold
            text-sm
            md:text-base
            transition

            ${
              activeTab==="active"
              ?
              "bg-violet-700 text-white shadow-lg"
              :
              "text-gray-700 hover:bg-gray-100"
            }
          `}
        >

          Active ({activeCount})

        </button>





        <button
          onClick={()=>setActiveTab("completed")}

          className={`
            flex-1
            py-3
            rounded-2xl
            font-bold
            text-sm
            md:text-base
            transition

            ${
              activeTab==="completed"
              ?
              "bg-violet-700 text-white shadow-lg"
              :
              "text-gray-700 hover:bg-gray-100"
            }
          `}
        >

          Completed ({completedCount})

        </button>


      </div>





      {/* Single Column Cards */}

      <div
        className="
          flex
          flex-col
          gap-5
          w-full
        "
      >


        {
          filteredOrders.length > 0 ? (

            filteredOrders.map((order)=>(

              <EightyThreeComponent

                key={order.id}

                order={order}

                onView={onView}

                onContact={onContact}

              />

            ))

          ) : (

            <div
              className="
                text-center
                py-12
                text-gray-500
              "
            >

              No {activeTab} orders found

            </div>

          )
        }


      </div>



    </div>

  );

};


export default EightyTwoComponent;