import React from 'react';
import AF_Logo from './AF_Logo.png'; // Importing the logo image

function Navbar() {
  // Array of links with labels and corresponding URLs
  const links = [
    { label: "Github", url: "https://github.com/anafariya" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/anafariya/" },
    { label: "Gmail", url: "mailto:anafariya@gmail.com" },
    { label: "Projects", url: "/projectSection" } // Update this with the actual contact page URL
  ];

  return (
    <div className='w-full fixed z-50 px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center'>
      <div className='logo'>
        <img className='ml-4 sm:ml-6 md:ml-8 h-20 rounded-xl' src={AF_Logo} alt="Company Logo" />
      </div>
      <div className='links flex gap-10'>
        {links.map((link, index) =>
          <a key={index} href={link.url} className={`text-chocolate-dark capitalize text-lg font-semibold ${index === 3 && "md:ml-32"}`}>{link.label}</a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
