import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage';
import "./index.css"
import About from './components/About/About';
function App() {
  return (
    <div className='w-full h-full text-red bg-red-200'>
      <Navbar />
      <LandingPage/>
      <About/>
    </div>
  );
}

export default App;
