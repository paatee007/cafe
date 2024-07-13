import React from 'react'
import banner2 from './banner2.JPG';


function BannerSection() {
  return (
    <div>
            <div>
                <img className='blur-sm relative' src={banner2} alt='test1'/>
                <div className='text-white justify-center flex top-[220px] shadow-2xl left-[20%] right-[20%] absolute rounded md:top-[400px] bg-gray-300 space-y-10 p-5'>
                    <div className='space-y-5'>
                        <h1 className='text-blue-950 flex justify-center'>
                            Frandan Technology Company 
                        </h1>
                        <div className='flex space-x-5 items-center justify-center'>
                            <button className='bg-blue-500 md:p-3 w-20 md:w-[120px] rounded cursor-pointer'>Contact Us</button>
                            <button className='bg-blue-500 md:p-3 w-[150px] rounded cursor-pointer'>More Information</button>
                        </div>
                    </div>
                </div>
            </div>             
      </div>
  )
}
export default BannerSection
