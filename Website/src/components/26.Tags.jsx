import React from 'react'

function Tags() {
  return (
    <div className='w-150 p-6 m-6 bg-[rgb(31,41,55)] text-white'>
        <div>
            <h1 className=' text-lg font-bold'>Tags</h1>
            <ul className='flex gap-3 mt-2'>
                <li className='border rounded p-2'>React</li>
                <li className='border rounded p-2'>Tailwind</li>
                <li className='border rounded p-2'>Template</li>
                <li className='border rounded p-2'>Business</li>
            </ul>
        </div>
    </div>
  )
}

export default Tags