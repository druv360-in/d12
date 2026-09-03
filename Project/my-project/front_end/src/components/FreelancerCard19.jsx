import { Star } from "lucide-react";


function FreelancerCard19({ freelancer }) {

  return (

    <div
      className="
        w-full
        bg-yellow-50
        border
        border-yellow-300
        rounded-2xl
        p-5
        flex
        items-start
        gap-4
      "
    >


      {/* Avatar */}

      <div className="relative shrink-0">

        <img
          src={freelancer.avatar}
          alt={freelancer.firstName}
          className="
            w-16
            h-16
            rounded-xl
            object-cover
          "
        />


        <div
          className="
            absolute
            -top-1
            -right-1
            w-6
            h-6
            bg-amber-400
            rounded-full
            flex
            items-center
            justify-center
            border-2
            border-yellow-50
          "
        >

          <Star
            size={12}
            fill="white"
            color="white"
          />

        </div>


      </div>







      {/* Details */}

      <div
        className="
          flex
          flex-1
          justify-between
          gap-3
          min-w-0
        "
      >



        <div className="min-w-0">


          <h3
            className="
              text-slate-900
              text-lg
              font-bold
              leading-tight
            "
          >

            {freelancer.firstName} {freelancer.lastName}

          </h3>




          <p
            className="
              text-slate-400
              text-sm
              mt-1
            "
          >

            {freelancer.school}

          </p>





          <div
            className="
              flex
              items-center
              gap-2
              mt-3
            "
          >

            <Star
              size={16}
              fill="#f59e0b"
              color="#f59e0b"
            />


            <span
              className="
                text-slate-700
                text-sm
                font-semibold
              "
            >

              {freelancer.rating}

            </span>



            <span className="text-slate-300">
              •
            </span>



            <span
              className="
                text-slate-500
                text-sm
              "
            >

              {freelancer.projects} projects

            </span>


          </div>



        </div>







        {/* Rate */}

        <div
          className="
            shrink-0
            text-violet-600
            text-lg
            font-bold
          "
        >

          {freelancer.rate}

        </div>



      </div>



    </div>

  );
}


export default FreelancerCard19;