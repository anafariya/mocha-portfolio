import React from 'react';

function Navbar() {
  return (
    <div className='w-full px-18 py-8'>
        <div className='logo' style={{ position: 'relative' }}>
            <img className='h-20' style={{ position: 'absolute' }} src='src/components/AF_Logo.png' alt="" />
        </div>
    </div>
  )
} 

export default Navbar;
