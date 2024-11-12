import './App.css';
import React from 'react';
import About from './about/About';
import Skills from './skills/Skills';
import Homepage from './homepage/Homepage';

function App() {
 return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-black dark:bg-white overflow-x-hidden">
      <Homepage />
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
