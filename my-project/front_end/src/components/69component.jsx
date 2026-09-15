import React, { useState } from "react";
import { X } from "lucide-react";


const SixtyNineComponent = ({
  isOpen,
  onClose,
  onAddTask
}) => {


  const [form,setForm] = useState({

    taskName:"",
    description:"",
    priority:"Medium",
    status:"To Do",
    assignee:"",
    startDate:"",
    dueDate:"",
    notes:""

  });



  if(!isOpen) return null;



  const handleChange=(e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };




  const handleSubmit=()=>{

    if(!form.taskName.trim()) return;


    onAddTask({

      id:Date.now(),

      title:form.taskName,

      description:form.description,

      priority:form.priority.toLowerCase(),

      status:form.status,

      assignee:form.assignee,

      startDate:form.startDate,

      dueDate:form.dueDate,

      notes:form.notes

    });


    onClose();

  };





return (

<div
className="
fixed
inset-0
z-50
bg-black/40
backdrop-blur-sm
flex
items-center
justify-center
p-4
"
>


<div
className="
bg-white
rounded-3xl
w-full
max-w-2xl
shadow-2xl
max-h-[90vh]
flex
flex-col
"
>



{/* Header */}

<div
className="
flex
items-center
justify-between
px-7
py-5
border-b
border-gray-100
"
>

<div>

<h2
className="
text-xl
lg:text-2xl
font-bold
text-gray-900
"
>
Add New Task
</h2>


<p
className="
text-sm
text-gray-400
mt-1
"
>
Create and assign project task
</p>

</div>




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
hover:bg-gray-200
"

>

<X className="w-5 h-5 text-gray-600"/>

</button>



</div>







{/* Form */}

<div
className="
overflow-y-auto
px-7
py-6
space-y-5
"
>




{/* Task Name */}

<div>

<label className="text-sm font-semibold text-gray-700">
Task Name *
</label>


<input

name="taskName"

value={form.taskName}

onChange={handleChange}

placeholder="e.g Design landing page"

className="
mt-2
w-full
border
border-gray-200
rounded-2xl
px-5
py-4
text-base
focus:outline-none
focus:ring-2
focus:ring-violet-500
"

/>

</div>







{/* Description */}

<div>

<label className="text-sm font-semibold text-gray-700">
Description
</label>


<textarea

name="description"

value={form.description}

onChange={handleChange}

rows="4"

placeholder="Describe the task..."

className="
mt-2
w-full
border
border-gray-200
rounded-2xl
px-5
py-4
resize-none
focus:outline-none
focus:ring-2
focus:ring-violet-500
"

/>


</div>








{/* Priority Status */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-5
"
>


<div>

<label className="text-sm font-semibold text-gray-700">
Priority
</label>


<select

name="priority"

value={form.priority}

onChange={handleChange}

className="
mt-2
w-full
border
border-gray-200
rounded-2xl
px-5
py-4
bg-white
"

>

<option>Low</option>
<option>Medium</option>
<option>High</option>


</select>


</div>





<div>

<label className="text-sm font-semibold text-gray-700">
Status
</label>


<select

name="status"

value={form.status}

onChange={handleChange}

className="
mt-2
w-full
border
border-gray-200
rounded-2xl
px-5
py-4
bg-white
"

>

<option>To Do</option>
<option>In Progress</option>
<option>Completed</option>


</select>


</div>


</div>







{/* Freelancer */}

<div>

<label className="text-sm font-semibold text-gray-700">
Assigned Freelancer
</label>


<input

name="assignee"

value={form.assignee}

onChange={handleChange}

placeholder="Emma Thompson"

className="
mt-2
w-full
border
border-gray-200
rounded-2xl
px-5
py-4
"

/>


</div>








{/* Dates */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-5
"
>


<input

type="date"

name="startDate"

value={form.startDate}

onChange={handleChange}

className="
border
border-gray-200
rounded-2xl
px-5
py-4
"

/>



<input

type="date"

name="dueDate"

value={form.dueDate}

onChange={handleChange}

className="
border
border-gray-200
rounded-2xl
px-5
py-4
"

/>



</div>







{/* Notes */}

<textarea

name="notes"

value={form.notes}

onChange={handleChange}

rows="3"

placeholder="Additional notes..."

className="
w-full
border
border-gray-200
rounded-2xl
px-5
py-4
resize-none
"

/>





</div>







{/* Footer */}

<div
className="
flex
justify-end
gap-4
px-7
py-5
border-t
border-gray-100
"
>


<button

onClick={onClose}

className="
px-7
py-3
rounded-xl
font-semibold
text-gray-600
bg-gray-100
"

>

Cancel

</button>



<button

onClick={handleSubmit}

disabled={!form.taskName.trim()}

className="
px-8
py-3
rounded-xl
bg-violet-700
text-white
font-semibold
shadow-lg
disabled:opacity-50
"

>

Add Task

</button>



</div>




</div>

</div>

);


};


export default SixtyNineComponent;