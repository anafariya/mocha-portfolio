import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='w-full h-screen text-red'>
      <Navbar />
      <img src="./joy.jpg" alt="" style={{ height: '250px' }} />
    </div>
  );
}

export default App;
