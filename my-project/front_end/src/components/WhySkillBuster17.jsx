import { Zap, CheckCircle2 } from "lucide-react";

function WhySkillBuster17() {

  const features = [
    "Budget-friendly rates from skilled students",
    "Build full remote teams at fraction of cost",
    "Access premium templates marketplace",
    "Post projects & get quality proposals",
    "Help students gain real-world experience",
    "Verified portfolios & skill ratings",
  ];

  return (

    <div className="w-full">

      <div
        className="
          w-full
          rounded-3xl
          bg-gradient-to-br
          from-violet-700
          via-purple-700
          to-purple-600
          text-white
          shadow-lg
          p-6
          lg:p-8
        "
      >


        {/* Header */}

        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >

          <Zap
            size={28}
            strokeWidth={2.5}
          />

          <h2
            className="
              text-2xl
              lg:text-3xl
              font-bold
            "
          >
            Why SkillBuster?
          </h2>

        </div>



        {/* Features - Same as Mobile */}
        <div
          className="
            flex
            flex-col
            gap-4
          "
        >

          {
            features.map((item,index)=>(

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <CheckCircle2
                  size={22}
                  className="
                    mt-1
                    shrink-0
                  "
                />


                <p
                  className="
                    text-sm
                    lg:text-base
                    font-semibold
                    leading-6
                  "
                >
                  {item}
                </p>


              </div>

            ))
          }

        </div>




        {/* Divider */}

        <div
          className="
            border-t
            border-white/30
            my-6
          "
        />



        {/* Footer */}

        <div
          className="
            flex
            flex-wrap
            gap-2
            text-xs
            lg:text-sm
            font-medium
            text-white/90
          "
        >

          <span>
            Small 10% commission
          </span>

          <span>•</span>

          <span>
            Quality control
          </span>

          <span>•</span>

          <span>
            Trust & safety guaranteed
          </span>

        </div>


      </div>

    </div>

  );
}

export default WhySkillBuster17;