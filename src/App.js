import './App.css';
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  const toggleMenu = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkScheme);
    if (!prefersDarkScheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const checkWidth = () => {
      console.log('Width change to : ' + window.innerWidth)
      if (window.innerWidth < 1130) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMenuOpen(false);
      }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [])


  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  useEffect(() => {
    const phrases = ["Software Developer", "Web Enthusiast", "Creative Coder"];
    const word=phrases[index%3];
    async function typeWord(){
    let curr="";
    for(const char of word){
      curr=curr+char;
      setCurrentText(curr);
      await delay(120);
    }
    await delay(1500);
    for (let i = 0; i < word.length; i++) {
      curr = curr.substring(0, curr.length - 1);
      setCurrentText(curr);
      await delay(100);
    }
    await delay(1000);
    setIndex(index+1)
    }
    typeWord();
  }, [index]);



  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-black dark:bg-white overflow-x-hidden">
      <div className='basis-[120px] w-full flex flex-row'>
        <div className='cursor-default font-reenie flex text-green text-8xl font-mono items-center justify-start basis-1/2 pr-4 pl-8 hover:scale-105 transition duration-600 ease-in-out'>
          &lt;Ujjwal/&gt;
        </div>
        {isMobile ? (
          <div data-id="zoomed-button" className='flex text-green flex-row justify-end items-center pr-4 pl-1 basis-1/2'>
            <Bars3Icon className="opacity-75 cursor-pointer hover:opacity-100 hover:scale-110 transition-colors duration-600 ease-in-out h-6 w-6" onClick={toggleMenu} />
          </div>

        ) : (
          <div className='flex text-3xl text-green flex-row justify-end items-center gap-6 pr-4 pl-4 basis-1/2'>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>About</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Skills</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Work</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Contact</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Resume</b></div>
            <div className={isDarkMode ? 'text-[#F9D71C]' : 'text-black'}>
              <button onClick={toggleTheme} className="opacity-75 p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:opacity-100 hover:scale-110 transition-colors duration-600 ease-in-out" aria-label="Toggle theme">
                {isDarkMode ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className='bg-[#D3D3D3] text-green pt-4 pb-4 gap-4 bg-opacity-25 z-40 w-full h-screen-minus-120'>
          <div className='flex flex-col justify-center items-center flex-grow'>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>About</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Skills</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Work</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Contact</b></div>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'><b>Resume</b></div>
            <div className={isDarkMode ? 'text-[#F9D71C]' : 'text-black'}>
              <button onClick={toggleTheme} className="opacity-75 p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:opacity-100 hover:scale-110 transition-colors duration-600 ease-in-out" aria-label="Toggle theme">
                {isDarkMode ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className='flex text-green flex-row justify-start items-center w-full h-screen-minus-120'>
        <div className='text-4xl text-white dark:text-black font-serif basis-2/6 h-full pl-4 flex flex-col justify-center items-center'>
          <div className='min-w-[30rem] leading-loose'>Hey, I'm <p className='text-green text-5xl font-crimson'> Ujjwal Ravi</p>
            I'm a <span className="text-green text-5xl font-crimson">{currentText}</span>
            <span className="text-green text-5xl font-crimson">|</span>
          </div>
        </div>
        <div className='flex justify-left items-center basis-3/6 h-full'>
          <img style={{height:"30rem",width:"30rem"}} src="profile.png" alt="ME!" />
        </div>
        <div className='absolute right-0 top-20 flex text-white dark:text-black opacity-5 hover:opacity-20 flex-row justify-end items-start text-[10rem] basis-1/6 h-full inline-block overflow-x-clip'>
          <span className='-z-50 right-0 font-bold inline-block mr-[-4.5rem] mt-4' style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}>UDEV</span>
        </div>
      </div>
      <div className='bg-green w-full h-screen'></div>
    </div>
  );
}

export default App;
