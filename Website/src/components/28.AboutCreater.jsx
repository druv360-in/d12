import React from 'react'
import Emma from '../assets/person/Emma.jpg'

function AboutCreater() {
  return (
    <div className='w-150 p-6 m-6 border rounded-2xl text-white bg-[rgb(31,41,55)]'>
        <div>
            <h1 className='text-xl m-1 font-bold'>About the Creator</h1>
            <div className='flex justify-center gap-4'>
                <img className='w-20 h-20 object-cover overflow-hidden flex rounded-full' src={Emma} alt="Emma Thompson" />
                <div className='grid grid-rows-3'>
                    <p className=''>Emma Thompson</p>
                    <p>Standford University</p>
                    <p>⭐4.9 . 89 projects</p>
                    <p className='mt-4 text-lef'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam illo debitis ipsam tempore possimus consequuntur quibusdam</p>
                    <div className='flex items-center justify-center'>
                        <button className='text-blue-500 mt-2 border-amber-50 bg-white font-semibold w-full rounded-2xl p-2'>View Profile</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCreater