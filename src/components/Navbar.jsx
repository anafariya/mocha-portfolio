import React from 'react';
import AF_Logo from './AF_Logo.png'; // Importing the logo image

function Navbar() {
  return (
    <div className='w-full fixed z-[999] px-18 py-8 pr-10 flex justify-between items-center'>
        <div className='logo'>
            {/* Adjusted the path and used imported logo */}
            <img className='h-20 rounded-xl' src={AF_Logo} alt="Company Logo" />
        </div>
        <div className='links flex gap-10  '>
            {["Github", "LinkedIn", "Gmail", "Contact"].map((item, index)=>
                <a key={index} className={`text-chocolate-dark capitalize text-lg font-semibold ${index===3 && "ml-32"} `}> {item}</a>
            )}
        </div>
    </div>
  )
} 

export default Navbar;