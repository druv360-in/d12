import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ServiceCard13 from "./13ServiceCard";


function BrowseServices12() {


const services = [

{
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
avatar:"https://i.pravatar.cc/100?img=12",
seller:"You",
university:"Your Gig",
title:"I will design a modern responsive website UI in Figma",
category:"Graphic Design",
tags:["Figma","UI Design","Web Design"],
rating:4.9,
reviews:11,
days:3,
price:2500
},


{
image:"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200",
avatar:"https://i.pravatar.cc/100?img=15",
seller:"You",
university:"Your Gig",
title:"I will create professional video edits for YouTube and social media",
 category:"Video Editing",
tags:["Video Editing","YouTube","Reels"],
rating:4.8,
reviews:22,
days:2,
price:1500
},


{
image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
avatar:"https://i.pravatar.cc/100?img=22",
seller:"You",
university:"Your Gig",
title:"I will build a full stack web application using React and Node",
category:"Coding",
tags:["React","Node.js","Full Stack"],
rating:5,
reviews:7,
days:7,
price:5000
},


{
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
avatar:"https://i.pravatar.cc/100?img=32",
seller:"Emma Thompson",
university:"Stanford University",
category:"Coding",
title:"Modern Website Development",
tags:["React","Tailwind","Responsive"],
rating:4.9,
reviews:45,
days:5,
price:299
},


{
image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
avatar:"https://i.pravatar.cc/100?img=45",
seller:"Marcus Johnson",
university:"MIT",
category:"Graphic Design",
title:"Professional Logo Design",
tags:["Branding","Logo","Identity"],
rating:4.8,
reviews:67,
days:3,
price:149
},


{
image:"https://images.unsplash.com/photo-1574717024453-3540567c8a23?w=1200",
avatar:"https://i.pravatar.cc/100?img=48",
seller:"Sophia Chen",
university:"UC Berkeley",
title:"Social Media Video Editing",
category:"Video Editing",
tags:["Video","Social Media","Editing"],
rating:5,
reviews:89,
days:2,
price:99
},


{
image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
avatar:"https://i.pravatar.cc/100?img=52",
seller:"Alex Rivera",
university:"NYU",
title:"Instagram Growth Strategy",
category:"Social Media",
tags:["Instagram","Growth","Strategy"],
rating:4.7,
reviews:34,
days:7,
price:199
},


{
image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200",
avatar:"https://i.pravatar.cc/100?img=55",
seller:"Emily Davis",
university:"Harvard University",
title:"UI UX Design For Mobile Application",
category:"Graphic Design",
tags:["UI UX","Prototype","Mobile"],
rating:4.8,
reviews:41,
days:7,
price:399
}

];



const categories=[

{
name:"Video Editing",
icon:"🎬"
},

{
name:"Graphic Design",
icon:"🎨"
},

{
name:"Coding",
icon:"💻"
},

{
name:"Content Writing",
icon:"✍️"
},

{
name:"Social Media",
icon:"📱"
},

{
name:"Digital Marketing",
icon:"📊"
}

];


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === selectedCategory
        );


return (

<div className="w-full bg-gray-100">


{/* Sticky Top Section */}

<div
className="
sticky
top-0
z-40
bg-white
border-b
border-gray-200
"
>


<div
className="
mx-auto
max-w-screen-xl
px-4
py-5
sm:px-6
lg:px-8
"
>


<h1
className="
text-3xl
font-bold
text-gray-900
mb-5
"
>
Browse Services
</h1>




{/* Search */}

<div
className="
flex
gap-3
mb-5
"
>


<div
className="
flex-1
flex
items-center
bg-gray-100
rounded-xl
px-4
h-14
"
>

<Search
size={22}
className="text-gray-500"
/>


<input

placeholder="Search for services..."

className="
ml-3
bg-transparent
outline-none
w-full
text-base
"

/>


</div>




<button

className="
h-14
w-14
rounded-xl
bg-gray-100
flex
items-center
justify-center
"

>

<SlidersHorizontal size={22}/>

</button>


</div>





{/* Category Cards */}

<div

className="
flex
gap-3
overflow-x-auto
pb-2
"

>

<button
  onClick={() => setSelectedCategory("All")}
  className={`
    flex
    items-center
    gap-2
    rounded-xl
    px-6
    py-3
    font-semibold
    text-sm
    whitespace-nowrap

    ${
      selectedCategory === "All"
        ? "bg-purple-600 text-white"
        : "bg-gray-100 text-gray-700"
    }
  `}
>
  All
</button>



{
categories.map((cat)=>(


<button
  key={cat.name}
  onClick={() => setSelectedCategory(cat.name)}
  className={`
    flex
    items-center
    gap-2
    rounded-xl
    px-6
    py-3
    font-semibold
    text-sm
    whitespace-nowrap
    transition

    ${
      selectedCategory === cat.name
        ? "bg-purple-600 text-white"
        : "bg-gray-100 text-gray-700"
    }
  `}
>


<span>{cat.icon}</span>

{cat.name}


</button>


))
}



</div>



<p
className="
mt-4
text-sm
text-gray-500
"
>
{filteredServices.length} services found

</p>



</div>


</div>






{/* Service Cards */}

<div

className="
mx-auto
max-w-screen-xl
px-4
py-6
sm:px-6
lg:px-8
"

>


<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{

filteredServices.map((service,index)=>(


<ServiceCard13

key={index}

{...service}

/>


))


}


</div>


</div>




</div>

);

}


export default BrowseServices12;