import {
  Calendar,
  Upload,
  Tag,
  DollarSign,
  Zap,
  User,
  Users,
} from "lucide-react";

import { useState, useRef } from "react";


export default function PostProject() {


  const [budgetType,setBudgetType] = useState("fixed");
  const [teamType,setTeamType] = useState("solo");

  const [skills,setSkills] = useState([
    "Content Writing",
    "Video Editing"
  ]);

  const [skillInput,setSkillInput] = useState("");

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const [budgetFixed,setBudgetFixed] = useState("");
  const [budgetMin,setBudgetMin] = useState("");
  const [budgetMax,setBudgetMax] = useState("");

  // File upload state
  const [files,setFiles] = useState([]);

  const fileInputRef = useRef(null);



  const categories=[
    "Video Editing",
    "Graphic Design",
    "Coding",
    "Content Writing",
    "Social Media",
    "Digital Marketing",
  ];


  const suggestedSkills=[
    "React",
    "Node.js",
    "Python",
    "Figma",
    "UI/UX",
    "SEO"
  ];



  const addSkill=(skill)=>{

    if(skill && !skills.includes(skill))
    {
      setSkills([...skills,skill]);
      setSkillInput("");
    }

  };


  const removeSkill=(skill)=>{

    setSkills(
      skills.filter(
        item=>item!==skill
      )
    );

  };


  // File upload handler
  const handleFileChange=(e)=>{

    const selectedFiles=Array.from(e.target.files);

    setFiles((previousFiles)=>[
      ...previousFiles,
      ...selectedFiles.filter(
        (newFile)=>
          !previousFiles.some(
            (existingFile)=>
              existingFile.name===newFile.name &&
              existingFile.size===newFile.size
          )
      )
    ]);

    // Allows selecting the same file again
    e.target.value="";

  };


  const removeFile=(index)=>{

    setFiles((previousFiles)=>
      previousFiles.filter(
        (_,fileIndex)=>fileIndex!==index
      )
    );

  };




return (

<div
className="
w-full
space-y-6
"
>



{/* TITLE */}

<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">

<label className="mb-3 block text-base font-bold text-gray-900">
Project Title *
</label>


<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="e.g., Need a Full-Stack Developer for E-commerce"

className="
w-full
rounded-xl
border
border-gray-200
bg-white
px-4
py-4
text-base
outline-none
focus:border-purple-500
"

/>

<p className="mt-2 text-xs text-gray-400">
{title.length}/100 characters
</p>


</div>





{/* CATEGORY */}

<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">

<label className="mb-3 block text-base font-bold">
Category *
</label>


<select

className="
w-full
rounded-xl
border
border-gray-200
bg-white
px-4
py-4
text-base
outline-none
"

>

<option>
Select a category
</option>


{
categories.map(cat=>(

<option key={cat}>
{cat}
</option>

))
}


</select>


</div>







{/* DESCRIPTION */}


<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">


<label className="mb-3 block text-base font-bold">
Project Description *
</label>



<textarea

rows={8}

value={description}

onChange={(e)=>setDescription(e.target.value)}

placeholder="Describe your project in detail. Include requirements, expectations, deliverables..."

className="
w-full
resize-none
rounded-xl
border
border-gray-200
bg-white
px-4
py-4
text-base
outline-none
focus:border-purple-500
"

/>



<div className="mt-3 flex justify-between">

<span className="text-xs text-gray-400">
{description.length}/2000
</span>


<button className="flex items-center gap-1 text-sm text-purple-600">

<Zap size={15}/>

AI Enhance

</button>


</div>


</div>







{/* SKILLS */}


<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">


<label className="mb-3 block text-base font-bold">
Skills Required *
</label>



<div className="flex gap-3">


<div className="relative flex-1">


<Tag
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
/>


<input

value={skillInput}

onChange={(e)=>setSkillInput(e.target.value)}

placeholder="Type skill and press Enter"

className="
w-full
rounded-xl
border
border-gray-200
bg-white
py-4
pl-12
pr-4
outline-none
"

/>


</div>



<button

onClick={()=>addSkill(skillInput)}

className="
rounded-xl
bg-purple-600
px-6
text-white
"

>

Add

</button>


</div>





<div className="mt-5 flex flex-wrap gap-3">


{
skills.map(skill=>(

<span

key={skill}

className="
rounded-full
bg-purple-100
px-4
py-2
text-sm
text-purple-700
"

>

{skill}

<button
onClick={()=>removeSkill(skill)}
className="ml-2"
>
×
</button>


</span>


))
}



</div>



<p className="mt-5 text-sm text-gray-500">
Suggested Skills
</p>


<div className="mt-3 flex flex-wrap gap-3">


{
suggestedSkills.map(skill=>(

<button

key={skill}

onClick={()=>addSkill(skill)}

className="
rounded-full
border
border-gray-200
bg-white
px-4
py-2
text-sm
"

>

+ {skill}

</button>


))
}


</div>


</div>










{/* BUDGET */}


<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">


<label className="mb-4 block text-base font-bold">
Budget *
</label>



<div className="mb-5 flex gap-4">


<button

onClick={()=>setBudgetType("fixed")}

className={`px-6 py-3 rounded-full ${
budgetType==="fixed"
?
"bg-purple-600 text-white"
:
"bg-white"
}`}

>

Fixed Price

</button>



<button

onClick={()=>setBudgetType("range")}

className={`px-6 py-3 rounded-full ${
budgetType==="range"
?
"bg-purple-600 text-white"
:
"bg-white"
}`}

>

Budget Range

</button>


</div>



<div className="relative">


<DollarSign
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
/>


<input

type="number"

placeholder="₹ 1000"

className="
w-full
rounded-xl
border
bg-white
py-4
pl-12
"

/>

</div>


</div>










{/* DEADLINE */}


<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">


<label className="mb-3 block text-base font-bold">
Project Deadline *
</label>



<div className="relative">


<Calendar
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
/>


<input

type="date"

className="
w-full
rounded-xl
border
bg-white
py-4
pl-12
"

/>


</div>


</div>









{/* ATTACHMENT */}


<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">


<label className="mb-3 block text-base font-bold">
Attachments
</label>


{/* Hidden file input */}

<input
ref={fileInputRef}
type="file"
multiple
className="hidden"
onChange={handleFileChange}
/>


<div className="
rounded-2xl
border-2
border-dashed
border-gray-200
bg-white
p-10
text-center
">


<Upload
className="
mx-auto
mb-3
text-gray-400
"
/>


<p>
Upload project files
</p>


<button
type="button"
onClick={()=>fileInputRef.current?.click()}
className="
mt-4
rounded-xl
bg-purple-600
px-6
py-3
text-white
"
>
Choose Files
</button>


</div>


{/* Selected files */}

{files.length > 0 && (

<div className="mt-4 space-y-2">

{files.map((file,index)=>(

<div
key={`${file.name}-${file.size}-${index}`}
className="
flex
items-center
justify-between
rounded-xl
border
border-gray-200
bg-white
px-4
py-3
"
>

<span className="truncate text-sm text-gray-700">
{file.name}
</span>


<button
type="button"
onClick={()=>removeFile(index)}
className="
ml-3
shrink-0
text-sm
text-red-500
"
>
Remove
</button>


</div>

))}

</div>

)}


</div>









{/* TEAM */}


<div className="rounded-3xl bg-gray-50 p-6 shadow-sm">


<label className="mb-4 block text-base font-bold">
Team Preference
</label>



<div className="grid grid-cols-2 gap-5">



<button

onClick={()=>setTeamType("solo")}

className={`
rounded-2xl
border-2
p-6

${
teamType==="solo"
?
"border-purple-600 bg-purple-50"
:
"border-gray-200 bg-white"
}

`}

>


<User
className="mx-auto mb-3 text-purple-600"
/>


<p className="font-bold">
Solo Freelancer
</p>


<p className="text-sm text-gray-500">
One talented student
</p>


</button>





<button

onClick={()=>setTeamType("team")}

className={`
rounded-2xl
border-2
p-6

${
teamType==="team"
?
"border-purple-600 bg-purple-50"
:
"border-gray-200 bg-white"
}

`}

>


<Users
className="mx-auto mb-3 text-purple-600"
/>


<p className="font-bold">
Team Collaboration
</p>


<p className="text-sm text-gray-500">
Multiple freelancers
</p>


</button>


</div>


</div>





</div>

);

}
