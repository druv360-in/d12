function ActionCard21({ 
  icon: Icon, 
  title, 
  subtitle, 
  iconColor 
}) {


  return (

    <button
      className="
        w-full
        bg-white
        border
        border-gray-100
        rounded-2xl
        p-5
        flex
        flex-col
        items-start
        gap-4
        text-left
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >


      {/* Icon */}

      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-gray-50
          flex
          items-center
          justify-center
        "
      >

        <Icon
          size={28}
          color={iconColor}
          strokeWidth={2}
        />

      </div>





      {/* Text */}

      <div
        className="
          flex
          flex-col
          gap-1
        "
      >

        <div
          className="
            text-slate-800
            text-base
            font-semibold
          "
        >

          {title}

        </div>



        <div
          className="
            text-slate-400
            text-sm
          "
        >

          {subtitle}

        </div>


      </div>


    </button>

  );

}


export default ActionCard21;