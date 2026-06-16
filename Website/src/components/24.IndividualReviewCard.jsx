import React from 'react'
import Jessica from '../assets/person/Jessica.jpg'
import Michael from '../assets/person/Michael.jpg'
import Sara from '../assets/person/Sara.jpg'

function IndividualReviewCard() {
  return (
    <div className=' h-fit p-2 m-2'>
      <div className='text-white space-y-6'> 
        <div className='border rounded-xl grid grid-cols-3 p-2 justify-between items-center'>
            <img className='w-14 h-14 object-cover overflow-hidden rounded-full ' src={Sara} alt="Sarah Johnson" />
            <p className=''>Sarah Johnson</p>
            <p>2 days ago</p>
            <p className='mt-2 '>Amazing template! Saved me hours of work. The code quality is excellent and very easy to customize.</p>
        </div>
        <div className='border rounded-xl grid grid-cols-3 p-2 items-center justify-between'>
          <img className='w-14 h-14 object-cover overflow-hidden rounded-full' src={Michael} alt="Michael Chen" />
          <p>Michael Chen</p>
          <p>1 week ago</p>
          <p className='mt-2 '>Best purchase I made this month. The documentation is clear and the design is beautiful.</p>
        </div>
        <div className='border rounded-xl grid grid-cols-3 p-2 items-center justify-between'>
          <img className='w-14 h-14 object-cover overflow-hidden rounded-full' src={Jessica} alt="Jessica Williams" />
          <p>Jessica Williams</p>
          <p>2 weeks ago</p>
          <p className='mt-2 '>Great template overall. Would love to see more color options, but the quality is top-notch.</p>
        </div>
      </div>
    </div>
  )
}

export default IndividualReviewCard