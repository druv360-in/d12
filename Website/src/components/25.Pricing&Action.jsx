import React from 'react'

function PricingAction() {
  return (
    <div className='w-150 p-6 m-6 border rounded-2xl bg-[rgb(31,41,55)]'>
      <div className='items-center text-white'>
        <div className='flex gap-2 items-center'>
          <h1 className=' text-[rgb(129,140,248)] text-2xl'>$41 </h1>
          <del className='text-lg'>$99</del>
        </div>
        <p className='text-[#72A074]'>Save 50% - Limited Time Offer!</p>
        <div className='grid grid-cols-3 items-center mt-3 w-full gap-3 text-lg'>
          <p className='border rounded-2xl h-24 text-center flex flex-col justify-center items-center'>4.9 <br /><p>Rating</p></p>
          <p className='border rounded-2xl h-24 text-center flex flex-col justify-center items-center'>342 <br /><p>Sales</p></p>
          <p className='border rounded-2xl h-24 text-center flex flex-col justify-center items-center'>2.1k <br /><p>Views</p></p>
        </div>
        <div className='flex flex-col justify-center items-center mt-6 space-y-4'>
          <button className='border text-center w-full rounded-2xl p-3 bg-blue-500 font-semibold transition-all duration-300 ease-in-out hover:scale-110'>Buy Now</button>
          <button className='border text-center w-full rounded-2xl p-3 text-blue-500 font-semibold transition-all duration-300 ease-in-out hover:scale-110'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default PricingAction;