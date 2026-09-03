import { Star, Clock } from "lucide-react";


function ServiceCard13({
  image,
  avatar,
  seller,
  university,
  title,
  tags,
  rating,
  reviews,
  days,
  price,
}) {


return (

<div
className="
w-full

bg-gray-50

rounded-3xl

overflow-hidden

border
border-gray-200

shadow-sm
"
>



{/* Image */}

<img
src={image}
alt={title}

className="
w-full

h-56

object-cover

sm:h-64

"
/>





<div
className="
p-5
"
>




{/* Seller */}

<div
className="
flex
items-center
gap-3

mb-5
"
>


<img
src={
avatar ||
"https://i.pravatar.cc/100"
}

alt={seller}

className="
w-12
h-12

rounded-full

object-cover

"
/>



<div
className="
min-w-0
"
>


<h3
className="
text-lg
font-bold
text-gray-900

truncate
"
>
{seller}
</h3>



<p
className="
text-sm
text-gray-500

truncate
"
>
{university}
</p>


</div>


</div>






{/* Title */}

<h2
className="
text-xl

font-bold

text-gray-900

leading-snug

mb-5

line-clamp-2
"
>
{title}
</h2>






{/* Tags */}

<div
className="
flex
flex-wrap
gap-2

mb-5
"
>


{
tags.map((tag,index)=>(


<span

key={index}

className="
rounded-full

bg-purple-100

px-3
py-1.5

text-xs

font-medium

text-purple-700
"

>

{tag}

</span>


))
}


</div>







{/* Rating + Delivery */}

<div
className="
flex

items-center

gap-5

text-sm

text-gray-600

mb-5
"
>



<div
className="
flex
items-center
gap-1
"
>

<Star

size={18}

fill="#fbbf24"

color="#fbbf24"

/>


<span className="font-medium">
{rating}
</span>


<span>
({reviews})
</span>


</div>






<div
className="
flex
items-center
gap-1
"
>

<Clock

size={18}

className="text-gray-400"

/>


<span>
{days} days
</span>


</div>



</div>








{/* Price */}

<div
className="
border-t
border-gray-200

pt-4

flex

items-center

justify-between
"
>


<span
className="
text-sm
text-gray-500
"
>
Starting at
</span>



<p
className="
text-xl

font-bold

text-purple-700
"
>

₹{price}

</p>


</div>



</div>



</div>


);


}


export default ServiceCard13;