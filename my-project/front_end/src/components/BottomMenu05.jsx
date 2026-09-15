import {
  Home,
  Search,
  MessageCircle,
  Briefcase,
  User,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";


function BottomMenu05() {

  const navigate = useNavigate();
  const location = useLocation();

  const projectRoutes = [
    "/projects",
    "/my-projects",
    "/ongoing-projects",
    "/create-new-project",
    "/project-setup-page",
    "/payments",
    "/templates",
    "/orders",
  ];



  const menus = [

    {
      name: "Home",
      icon: Home,
      path: "/",
    },

    {
      name: "Explore",
      icon: Search,
      path: "/browse-services",
    },

    {
      name: "Chats",
      icon: MessageCircle,
      path: "/chat",
    },

    {
      name: "Projects",
      icon: Briefcase,
      path: "/projects",
    },

    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },

  ];





  return (

    <nav
      className="
        fixed
        bottom-0
        left-0
        z-50
        w-full
        border-t
        border-gray-200
        bg-white
        shadow-lg
        lg:hidden
      "
    >


      <div
        className="
          flex
          h-16
          items-center
          justify-around
        "
      >



        {
          menus.map((menu)=>{


            const Icon = menu.icon;



            const active =

              // Home always selected
              menu.path === "/"

              ?

              true


              :

              // Chat active for chat pages
              menu.path === "/chat"

              ?

              location.pathname.startsWith("/chat")


              :

              // Projects active for all project related pages
              menu.path === "/projects"

              ?

              projectRoutes.some(
                (route)=>
                  location.pathname === route ||
                  location.pathname.startsWith(`${route}/`)
              )


              :

              // Other menus
              location.pathname.startsWith(menu.path);







            return (

              <button

                key={menu.name}

                onClick={()=>navigate(menu.path)}

                className="
                  flex
                  flex-1
                  flex-col
                  items-center
                  justify-center
                "

              >



                <div

                  className={`

                    rounded-full
                    p-2
                    transition-all


                    ${
                      active
                      ?
                      "bg-purple-600 text-white"
                      :
                      "text-gray-400"
                    }

                  `}

                >

                  <Icon size={22}/>

                </div>





                <span

                  className={`

                    mt-1
                    text-[10px]


                    ${
                      active
                      ?
                      "font-semibold text-purple-600"
                      :
                      "text-gray-400"
                    }

                  `}

                >

                  {menu.name}

                </span>



              </button>

            );


          })

        }



      </div>


    </nav>

  );

}


export default BottomMenu05;
