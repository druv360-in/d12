import {
  Home,
  MessageCircle,
  Briefcase,
  Mail,
  Shield,
  ChevronRight,
  Search,
  X,
} from "lucide-react";


function MenuPage({ isOpen, onClose }) {

  return (

    <>


      {/* Blur Background Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0
          z-[200]
          bg-black/30
          backdrop-blur-md
          transition-all duration-300

          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />





      {/* Side Menu */}
      <aside
        className={`
          fixed
          top-0
          left-0

          h-screen
          w-[85%]
          md:w-[350px]
          max-w-[350px]

          bg-white
          z-[300]

          shadow-2xl
          rounded-r-3xl

          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >





        {/* Menu Header */}
        <div className="
          h-20
          flex
          items-center
          justify-between
          px-4
          sm:px-5
          border-b
        ">


          <h2 className="
            text-xl
            font-bold
            text-slate-900
          ">
            Menu
          </h2>



          <button
            onClick={onClose}
            className="
              w-10
              h-10
              rounded-full
              bg-gray-100
              flex
              items-center
              justify-center
            "
          >

            <X size={22}/>

          </button>


        </div>








        {/* Scroll Menu Content */}
        <div className="
          px-4
          sm:px-6
          pt-8
          space-y-7
          overflow-y-auto
          h-[calc(100vh-80px)]
        ">




          {/* Search */}
          <div className="relative">


            <Search
              size={20}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />


            <input

              placeholder="Search services..."

              className="
                w-full
                h-12
                rounded-2xl
                border
                border-gray-200
                pl-12
                pr-4
                outline-none
                focus:border-purple-500
                bg-white
              "

            />


          </div>







          {/* Home */}
          <button
            onClick={onClose}
            className="
              flex
              items-center
              gap-4
              text-gray-700
              font-medium
            "
          >

            <Home
              size={22}
              className="text-purple-600"
            />

            Home

          </button>







          {/* Chats */}
          <button
            className="
              flex
              items-center
              justify-between
              w-full
              text-gray-700
              font-medium
            "
          >

            <div className="
              flex
              items-center
              gap-4
            ">


              <MessageCircle
                size={22}
                className="text-purple-600"
              />


              Chats


            </div>



            <span className="
              w-6
              h-6
              rounded-full
              bg-purple-600
              text-white
              text-xs
              flex
              items-center
              justify-center
            ">
              3
            </span>


          </button>








          {/* Freelancer Card */}
          <div className="
            rounded-3xl
            bg-gradient-to-r
            from-purple-700
            to-violet-600
            p-5
            text-white
          ">


            <div className="
              flex
              justify-between
              items-center
            ">


              <div>

                <h3 className="
                  text-lg
                  font-semibold
                ">
                  Switch to Freelancer Mode
                </h3>


                <p className="
                  text-sm
                  text-purple-100
                  mt-2
                ">
                  Manage gigs & earn money
                </p>


              </div>



              <ChevronRight size={24}/>


            </div>


          </div>








          {/* Projects */}
          <button className="
            flex
            items-center
            gap-4
            text-gray-700
            font-medium
          ">


            <Briefcase
              size={22}
              className="text-purple-600"
            />


            Projects


          </button>





          <hr />






          {/* Contact */}
          <button className="
            flex
            items-center
            gap-4
            text-gray-700
            font-medium
          ">


            <Mail
              size={22}
              className="text-purple-600"
            />


            Contact Us


          </button>






          {/* Terms */}
          <button className="
            flex
            items-center
            gap-4
            text-gray-700
            font-medium
          ">


            <Shield
              size={22}
              className="text-purple-600"
            />


            Terms & Conditions


          </button>




        </div>


      </aside>


    </>

  );

}


export default MenuPage;
