import React from 'react';
import MenuOptions from './MenuOptions';
import ToggleTheme from './ToggleTheme';

function MobileMenu({ toggleMenu, isDarkMode, toggleTheme }) {
    return (
        <div className="text-4xl fixed bg-black dark:bg-white text-green z-20 h-[100vh] dark:bg-opacity-75 bg-opacity-75 w-full">
            <div className='flex flex-col mt-[140px] gap-8 justify-center items-center flex-grow'>
                <MenuOptions toggleMenu={toggleMenu}  option="About" />
                <MenuOptions toggleMenu={toggleMenu} option="Skills" />
                <MenuOptions toggleMenu={toggleMenu} option="Work" />
                <MenuOptions toggleMenu={toggleMenu} option="Contact" />
                <MenuOptions toggleMenu={toggleMenu} option="Resume" />
                <ToggleTheme toggleMenu={toggleMenu} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}
export default MobileMenu;