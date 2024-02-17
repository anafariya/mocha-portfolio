import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage';
import "./index.css"
function App() {
  return (
    <div className='w-full h-full text-red bg-red-200'>
      <Navbar />
      <LandingPage/>
    </div>
  );
}

export default App;
