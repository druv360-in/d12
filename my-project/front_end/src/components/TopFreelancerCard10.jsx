import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TopFreelancerCard10({ freelancer }) {

  const navigate = useNavigate();


  return (
    <div
      onClick={() =>
        navigate(`/profile/${freelancer.id}`, {
          state: { freelancer },
        })
      }

      className="
        w-full

        bg-[#F1F3F5]

        border
        border-gray-200/50

        rounded-3xl

        p-6

        flex

        gap-5

        shadow-sm

        cursor-pointer
      "
    >


      {/* Avatar */}
      <img
        src={freelancer.avatar}
        alt={freelancer.name}

        className="
          w-20
          h-20

          rounded-2xl

          object-cover

          shrink-0
        "
      />






      {/* Details */}
      <div
        className="
          flex
          flex-1

          justify-between

          gap-4

          min-w-0
        "
      >


        {/* Left Details */}
        <div
          className="
            min-w-0
            flex-1
          "
        >



          {/* Name */}
          <h4
            className="
              text-xl

              font-bold

              text-gray-900

              whitespace-nowrap
            "
          >
            {freelancer.name}
          </h4>





          {/* University */}
          <p
            className="
              mt-1

              text-sm

              text-gray-500

              truncate
            "
          >
            {freelancer.university}
          </p>







          {/* Rating + Projects */}
          <div
            className="
              mt-3

              flex

              items-center

              gap-5
            "
          >


            {/* Rating */}
            <div
              className="
                flex

                items-center

                gap-2

                text-sm

                font-semibold

                text-gray-600

                whitespace-nowrap
              "
            >

              <Star
                size={18}
                fill="#fbbf24"
                color="#fbbf24"
              />

              {freelancer.rating}

            </div>





            {/* Projects */}
            <div
              className="
                text-sm

                font-semibold

                text-gray-600

                whitespace-nowrap
              "
            >
              {freelancer.projects} projects
            </div>


          </div>


        </div>









        {/* Rate */}
        <div
          className="
            flex

            shrink-0

            flex-col

            items-end

            justify-center
          "
        >

          <span
            className="
              text-sm

              text-gray-400
            "
          >
            From
          </span>



          <span
            className="
              text-1xl

             

              text-purple-600

              whitespace-nowrap
            "
          >
            ₹{freelancer.rate}/hr
          </span>


        </div>



      </div>


    </div>
  );
}


export default TopFreelancerCard10;