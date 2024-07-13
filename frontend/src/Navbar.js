import React from 'react'
import logo2 from './logo2.png'

function Navbar() {
  return (
    <div className='bg-white shadow-xl sticky top-0 z-50 p-5 flex justify-around text-blue-950'>
      <div>
        <img className='w-[55px] cursor-pointer shadow-xl' src={logo2} alt='logo'/>
      </div>
      
      
      <div className='md:flex hidden items-center space-x-5'>
        <div>
        <h1>About Us</h1>
        </div>
        <div>
        <h1>Contact Us</h1>
        </div>
        <div>
        <h1>Homepage</h1>
        </div>
      </div>

    </div>
  )
}

export default Navbar
