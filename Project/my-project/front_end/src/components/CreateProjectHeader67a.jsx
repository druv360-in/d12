import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateProjectHeader67a() {

  const navigate = useNavigate();

  return (
    <div
      className="
        sticky
        top-0
        z-50
        bg-white
        px-4
        py-6

        lg:px-0
        lg:py-8
        border-b
        border-gray-200
      "
    >

      <div className="flex items-start gap-4">

        <button
          onClick={() => navigate(-1)}
          className="
            h-12
            w-12
            flex
            items-center
            justify-center
            text-gray-600
            shrink-0
          "
        >
          <ArrowLeft size={26}/>
        </button>



        <div>

          <h1
            className="
              text-3xl
              font-bold
              text-gray-900
            "
          >
            Create Project
          </h1>


          <p
            className="
              mt-2
              text-base
              text-gray-500
              whitespace-nowrap
            "
          >
            Post your project and get proposals from skilled students
          </p>


        </div>


      </div>


    </div>
  );
}

export default CreateProjectHeader67a;
