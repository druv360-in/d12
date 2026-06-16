import React from 'react'
import '../index.css'

function LicenceInformation() {
  return (
    <div className='w-150 p-6 m-6 border rounded-2xl text-white bg-[rgb(31,41,55)]'>
        <div className=''>
            <h1 className='text-2xl'>License Information</h1>
        </div>
        <div className='mt-3'>
            <p className='text-lg'>This template comes with a commercial license. You can use it for personal and commercial projects.</p>
            <button className='text-blue-500 mt-2 '>Read full license →</button> 
        </div>
        
    </div>
  )
}

export default LicenceInformation;