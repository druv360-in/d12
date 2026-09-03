import {
  UsersRound,
  BriefcaseBusiness,
  DollarSign,
  Trophy,
} from "lucide-react";


export default function DashboardStats16() {


  const stats = [
    {
      icon: UsersRound,
      color: "text-violet-600",
      title: "Team Size",
      value: "3",
      subtitle: "All active",
      subtitleColor: "text-emerald-500",
    },

    {
      icon: BriefcaseBusiness,
      color: "text-violet-600",
      title: "Active Orders",
      value: "2",
      subtitle: "In progress",
      subtitleColor: "text-violet-600",
    },

    {
      icon: DollarSign,
      color: "text-emerald-500",
      title: "Total Spent",
      value: "$14,960",
      subtitle: "This month",
      subtitleColor: "text-gray-400",
    },

    {
      icon: Trophy,
      color: "text-yellow-500",
      title: "Savings",
      value: "60%",
      subtitle: "vs Fiverr/Upwork",
      subtitleColor: "text-violet-700",
    },
  ];



  return (

    <div className="w-full">


      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >


        {stats.map((item,index)=>{

          const Icon = item.icon;


          return (

            <div
              key={index}
              className="
                w-full
                min-h-44
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                flex
                flex-col
                justify-between
              "
            >


              {/* Top */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <Icon
                  size={28}
                  className={`${item.color} shrink-0`}
                />


                <h3
                  className="
                    text-sm
                    sm:text-base
                    font-medium
                    text-gray-600
                  "
                >
                  {item.title}
                </h3>


              </div>



              {/* Bottom */}

              <div>


                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-black
                  "
                >
                  {item.value}
                </h2>



                <p
                  className={`
                    mt-2
                    text-xs
                    sm:text-sm
                    font-medium
                    ${item.subtitleColor}
                  `}
                >
                  {item.subtitle}
                </p>


              </div>



            </div>

          );

        })}


      </div>


    </div>

  );
}