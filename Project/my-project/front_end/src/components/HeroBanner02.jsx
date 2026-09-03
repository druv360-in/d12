import { Sparkles } from "lucide-react";

function HeroBanner02() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-none
        lg:rounded-2xl

        bg-gradient-to-r
        from-purple-700
        via-purple-600
        to-violet-500

        px-8
        py-8
        min-h-[230px]

        shadow-lg
      "
    >

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
        "
      >

        {/* Text */}
        <div className="max-w-xl">

          <h2
            className="
              mb-3
              text-4xl
              font-bold
              text-white
            "
          >
            Hey, Welcome! <span>👋</span>
          </h2>


          <p
            className="
              text-lg
              text-white/90
            "
          >
            Discover talented student freelancers for your next project
          </p>


        </div>



        {/* Icon */}
        <button
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/20
            text-white
            backdrop-blur-sm
            transition
            hover:bg-white/30
          "
        >
          <Sparkles size={28}/>
        </button>


      </div>



      {/* Decorative blur */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          bg-white/10
          blur-3xl
        "
      />


      <div
        className="
          absolute
          -bottom-10
          left-20
          h-32
          w-32
          rounded-full
          bg-pink-400/10
          blur-3xl
        "
      />


    </section>
  );
}

export default HeroBanner02;