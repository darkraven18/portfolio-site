import './App.css';
import React from 'react';
import About from './about/About';
import Skills from './skills/Skills';
import Homepage from './homepage/Homepage';
import Contact from './contact/Contact';
import Resume from './resume/Resume';
import { ToggleResumeProvider } from './context/ToggleResume';
import 'devicon/devicon.min.css';

function App() {

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-black dark:bg-white overflow-x-hidden">
      <ToggleResumeProvider>
        <Homepage />
        <About />
        <Skills />
        <Contact />
        <Resume />
      </ToggleResumeProvider>
    </div>
  );
}

export default App;
