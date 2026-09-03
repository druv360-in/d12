import { Star, Zap } from "lucide-react";
import FreelancerCard19 from "./FreelancerCard19";


function FeaturedFreelancers18() {


  const freelancers = [
    {
      id: 1,
      firstName: "Emma",
      lastName: "Thompson",
      school: "Stanford University",
      rating: 4.9,
      projects: 89,
      rate: "$35/hr",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },

    {
      id: 2,
      firstName: "Marcus",
      lastName: "Johnson",
      school: "MIT",
      rating: 4.8,
      projects: 76,
      rate: "$40/hr",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
  ];



  return (

    <div
      className="
        w-full
        bg-white
        rounded-3xl
        p-5
        shadow-sm
      "
    >



      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-5
        "
      >


        <div
          className="
            flex
            items-center
            gap-3
            text-slate-800
            text-xl
            font-bold
          "
        >

          <Star
            size={24}
            className="text-yellow-500"
            fill="currentColor"
          />


          <span>
            Featured Freelancers
          </span>


        </div>





        {/* Premium Badge */}

        <div
          className="
            flex
            items-center
            gap-2
            bg-amber-100
            text-amber-800
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          "
        >

          <Zap
            size={16}
          />

          <span>
            Premium
          </span>


        </div>


      </div>








      {/* Freelancer Cards */}

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {
          freelancers.map((freelancer)=>(

            <FreelancerCard19

              key={freelancer.id}

              freelancer={freelancer}

            />

          ))
        }


      </div>







      {/* Footer */}

      <p
        className="
          text-slate-400
          text-sm
          text-center
          mt-5
        "
      >

        Featured listings get 5× more visibility. Want to feature your services?

      </p>




    </div>

  );

}


export default FeaturedFreelancers18;