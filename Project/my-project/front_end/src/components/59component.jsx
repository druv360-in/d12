import React from "react";
import { Calendar, DollarSign, CheckCircle, Clock } from "lucide-react";


const FiftyNineComponent = ({ project }) => {


  const progressWidth = `${project.progress}%`;

  return (
    <div

      className="
        bg-white
        rounded-3xl
        p-6
        lg:p-8
        shadow-sm
        border
        border-gray-100
      "

    >
      {/* Header */}

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
          mb-5
        "

      >

        <h2

          className="
            text-2xl
            lg:text-4xl
            font-bold
            text-gray-900
            leading-tight
          "
        >

          {project.title}

        </h2>
        <span
          className="
            px-4
            py-2
            rounded-full
            bg-emerald-50
            text-emerald-600
            text-sm
            lg:text-base
            font-semibold
            capitalize
          "

        >

          {project.status}
        </span>

      </div>
      {/* Description */}
      <p

        className="
          text-base
          lg:text-lg
          text-gray-500
          mb-6
          leading-relaxed
        "

      >
        {project.description}


      </p>

      {/* Stats Cards */}
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-4
          lg:gap-5
          mb-6
        "

      >
        {/* Deadline */}
        <div

          className="
            bg-violet-50
            rounded-2xl
            p-5
          "

        >


          <div

            className="
              flex
              items-center
              gap-3
              mb-3
            "

          >

            <Calendar
              className="text-violet-700"
              size={24}
            />
            <p className="text-sm lg:text-base text-gray-500">
              Deadline
            </p>

          </div>
          <p
            className="
              text-lg
              lg:text-2xl
              font-bold
              text-gray-900
            "

          >

            {project.deadline}


          </p>


        </div>
        {/* Budget */}
        <div

          className="
            bg-emerald-50
            rounded-2xl
            p-5
          "

        >


          <div className="flex items-center gap-3 mb-3">

            <DollarSign
              className="text-emerald-600"
              size={24}
            />

            <p className="text-sm lg:text-base text-gray-500">
              Budget
            </p>

          </div>


          <p className="text-lg lg:text-2xl font-bold text-gray-900">

            ${project.budget}

          </p>


        </div>
        {/* Progress */}


        <div

          className="
            bg-violet-50
            rounded-2xl
            p-5
          "

        >


          <div className="flex items-center gap-3 mb-3">

            <CheckCircle
              className="text-violet-700"
              size={24}
            />


            <p className="text-sm lg:text-base text-gray-500">
              Progress
            </p>


          </div>
          <p className="text-lg lg:text-2xl font-bold text-gray-900">

            {project.progress}%

          </p>


        </div>

        {/* Days Left */}


        <div

          className="
            bg-amber-50
            rounded-2xl
            p-5
          "

        >


          <div className="flex items-center gap-3 mb-3">


            <Clock
              className="text-amber-600"
              size={24}
            />


            <p className="text-sm lg:text-base text-gray-500">
              Days Left
            </p>


          </div>

          <p className="text-lg lg:text-2xl font-bold text-gray-900">

            {project.daysLeft} days

          </p>


        </div>

      </div>

      {/* Progress Bar */}

      <div>

        <div

          className="
            flex
            justify-between
            items-center
            mb-3
          "

        >

          <p

            className="
              text-base
              lg:text-lg
              text-gray-500
              font-medium
            "

          >

            Overall Progress


          </p>
          <p

            className="
              text-base
              lg:text-lg
              font-bold
              text-violet-700
            "

          >

            {project.progress}%
          </p>

        </div>

        <div

          className="
            w-full
            bg-violet-100
            rounded-full
            h-4
          "

        >


          <div

            className="
              bg-violet-700
              h-4
              rounded-full
              transition-all
              duration-500
            "

            style={{
              width: progressWidth
            }}

          />


        </div>

      </div>

    </div>

  );

};

export default FiftyNineComponent;