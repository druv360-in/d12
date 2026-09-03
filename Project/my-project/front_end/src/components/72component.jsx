import React from "react";
import {
  CheckCircle,
  Lock,
  Clock
} from "lucide-react";


const statusConfig = {

  Released:{
    icon:<CheckCircle className="w-5 h-5 text-emerald-600"/>,
    box:"bg-emerald-50 border-emerald-200",
    badge:"bg-white text-emerald-700"
  },


  "In Escrow":{
    icon:<Lock className="w-5 h-5 text-amber-600"/>,
    box:"bg-amber-50 border-amber-200",
    badge:"bg-white text-amber-700"
  },


  Pending:{
    icon:<Clock className="w-5 h-5 text-violet-600"/>,
    box:"bg-violet-50 border-violet-200",
    badge:"bg-white text-violet-700"
  }

};



export default function SeventyTwoComponent({
  item
}){


  const config =
    statusConfig[item.status] || statusConfig.Pending;



  return(

    <div className="relative flex gap-4">


      {/* Timeline Icon */}

      <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">

        {config.icon}

      </div>



      {/* Card */}

      <div className={`flex-1 rounded-2xl border p-4 ${config.box}`}>



        <div className="flex justify-between items-start">


          <div>

            <h3 className="font-bold text-gray-900">
              {item.label}
            </h3>


            <p className="text-sm text-gray-600 mt-1">
              {item.desc}
            </p>

          </div>



          <span className={`text-xs font-bold px-3 py-1 rounded-full ${config.badge}`}>

            {item.status}

          </span>


        </div>




        <div className="flex justify-between items-center mt-4">


          <p className="text-xl font-bold text-gray-900">
            ₹{item.amount}
          </p>


          <p className="text-sm text-gray-500">
            Due {item.due}
          </p>


        </div>



        {
          item.approvedOn &&

          <div className="flex gap-2 items-center mt-3 text-sm font-semibold text-emerald-700">

            <CheckCircle className="w-4 h-4"/>

            Approved & released on {item.approvedOn}

          </div>

        }



      </div>


    </div>

  )

}