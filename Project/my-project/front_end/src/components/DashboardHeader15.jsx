import {
  Briefcase,
  Users,
  PlayCircle,
  PlusCircle,
  FileText,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";


function DashboardHeader15() {

  const navigate = useNavigate();
  const location = useLocation();

  const current = location.pathname;


  const menuItems = [
    {
      name:"Overview",
      path:"/projects",
      icon:Briefcase
    },
    {
      name:"My Team",
      path:"/team",
      icon:Users
    },
    {
      name:"Ongoing Projects",
      path:"/ongoing-projects",
      icon:PlayCircle
    },
    {
      name:"Post Project",
      path:"/project-setup-page",
      icon:PlusCircle
    },
    {
      name:"Projects",
      path:"/my-projects",
      icon:FileText
    },
    {
      name:"Templates",
      path:"/templates",
      icon:ShoppingBag
    },
    {
      name:"Orders",
      path:"/orders",
      icon:CheckCircle
    }
  ];


return (

<div className="w-full">


{/* ================= Banner ================= */}

<div
className="
w-full
bg-gradient-to-r
from-violet-700
to-purple-600
px-5
py-10
lg:px-10
"
>

<h1
className="
text-3xl
lg:text-5xl
font-bold
text-white
"
>
Client Dashboard
</h1>


<p
className="
mt-3
text-purple-100
text-base
lg:text-xl
"
>
Manage your team, projects, and orders
</p>


</div>





{/* ================= Sticky Menu ================= */}


<div
className="
sticky
top-0
z-50
bg-white/95
backdrop-blur-md
shadow-md
border-b
border-gray-200
"
>


<div
className="
overflow-x-auto
px-5
py-4
lg:px-10
"
>


<div
className="
flex
gap-3
w-max
"
>


{
menuItems.map((item)=>{


const Icon=item.icon;

const active=current===item.path;


return(

<button

key={item.name}

onClick={()=>navigate(item.path)}

className={`
flex
items-center
gap-2
px-6
py-3
rounded-2xl
font-semibold
whitespace-nowrap
transition-all

${
active
?
"bg-violet-700 text-white shadow-lg"
:
"bg-gray-100 text-gray-700 hover:bg-violet-100"
}

`}

>

<Icon size={20}/>

{item.name}


</button>


)

})

}


</div>


</div>



{/* progress */}

<div
className="
mx-5
lg:mx-10
mb-3
h-1
bg-gray-200
rounded-full
overflow-hidden
"
>

<div
className="
h-full
w-64
bg-violet-600
rounded-full
"
/>


</div>


</div>


</div>

)

}


export default DashboardHeader15;