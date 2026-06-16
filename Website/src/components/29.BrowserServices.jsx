import React from 'react'

function BrowserServices() {
  return (
    <div className='w-150 p-6 m-6 border rounded-2xl text-white bg-[rgb(31,41,55)]'>
        <div>
            <h1 className='text-xl font-bold mb-2'>Browse Services</h1>
        </div>
        <div className='flex items-center mb-4'>
            <button aria-placeholder=' Search for Services' className='placeholder: Search for Services border w-[70%] p-4 bg-white rounded '><img src="" alt="" /></button>
            <button className='ml-5 border rounded p-1 '><img src="" alt="" /> Filter</button>
        </div>
        <div className='space-x-3 mt-2 overflow-x-scroll flex '>
            <button className='border rounded-lg p-2 '>All</button>
            <button className='border rounded-lg p-2 '>Video Editing</button>
            <button className='border rounded-lg p-2 '>Graphic Design</button>
            <button className='border rounded-lg p-2 '>Coding</button>
            <button className='border rounded-lg p-2 '>Content Writing</button>
            <button className='border rounded-lg p-2 '>Social Media</button>
            <button className='border rounded-lg p-2 '>Digital Marketing</button>
        </div>
    </div>
  )
}

export default BrowserServices