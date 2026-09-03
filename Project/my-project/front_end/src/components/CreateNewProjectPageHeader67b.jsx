import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateNewProjectPageHeader67b() {
  const navigate = useNavigate();

  return (
    <div
      className="
        w-full
        bg-gray-100
        py-4
      "
    >

      <div
        className="
          w-full
          rounded-2xl
          bg-white
          border
          border-gray-100
          shadow-sm
          px-5
          py-5
          flex
          items-center
          gap-4
        "
      >

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-gray-100
            text-gray-700
            hover:bg-gray-200
            transition
          "
        >
          <ArrowLeft size={22} />
        </button>



        {/* Title */}

        <div className="flex-1">

          <h1
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-gray-900
            "
          >
            Create New Project
          </h1>


          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            Fill in the details to start your project
          </p>

        </div>


      </div>

    </div>
  );
}

export default CreateNewProjectPageHeader67b;