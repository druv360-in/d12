import React, { useRef } from "react";
import { Upload } from "lucide-react";

const SixtySevenComponent = ({
  onFileSelect,
  acceptedTypes = ".pdf,.doc,.docx,.png,.jpg,.jpeg,.mp4"
}) => {

  const fileInputRef = useRef(null);


  const handleChooseClick = () => {
    fileInputRef.current?.click();
  };


  const handleFileChange = (e) => {

    const files = Array.from(e.target.files);

    if(files.length > 0 && onFileSelect){
      onFileSelect(files);
    }

  };


  const handleDrop = (e) => {

    e.preventDefault();

    const files = Array.from(e.dataTransfer.files);

    if(files.length > 0 && onFileSelect){
      onFileSelect(files);
    }

  };


  return (

    <div
      className="
        bg-white
        rounded-3xl
        p-7
        lg:p-10
        shadow-sm
        border
        border-gray-100
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

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-violet-50
            flex
            items-center
            justify-center
          "
        >

          <Upload
            className="
              w-6
              h-6
              text-violet-700
            "
          />

        </div>


        <h2
          className="
            text-xl
            lg:text-2xl
            font-bold
            text-gray-900
          "
        >
          File Sharing
        </h2>


      </div>





      {/* Upload Area */}

      <div
        onDrop={handleDrop}
        onDragOver={(e)=>e.preventDefault()}

        className="
          border-2
          border-dashed
          border-gray-200
          rounded-3xl
          p-10
          lg:p-14
          text-center
          hover:border-violet-300
          transition
        "
      >


        <Upload
          className="
            w-14
            h-14
            text-gray-400
            mx-auto
            mb-5
          "
        />


        <p
          className="
            text-lg
            lg:text-xl
            font-semibold
            text-gray-700
            mb-2
          "
        >
          Upload files
        </p>


        <p
          className="
            text-sm
            lg:text-base
            text-gray-400
          "
        >
          PDF, DOC, PNG, JPG, MP4
        </p>


      </div>





      {/* Hidden Input */}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes}
        onChange={handleFileChange}
        className="hidden"
      />






      {/* Button */}

      <button
        onClick={handleChooseClick}

        className="
          mt-6
          w-full
          bg-violet-700
          hover:bg-violet-800
          text-white
          font-bold
          text-base
          lg:text-lg
          py-4
          lg:py-5
          rounded-2xl
          shadow-lg
          transition
        "
      >

        Choose Files

      </button>




    </div>

  );

};


export default SixtySevenComponent;