import React from 'react';
import MenuOptions from './MenuOptions';
import ToggleTheme from './ToggleTheme';

function MobileMenu({ isDarkMode, toggleTheme }) {
    return (
        <div className="text-4xl fixed bg-black text-green z-20 h-[100vh] bg-opacity-75 w-full">
            <div className='flex flex-col mt-[140px] gap-8 justify-center items-center flex-grow'>
                <MenuOptions option="About" />
                <MenuOptions option="Skills" />
                <MenuOptions option="Work" />
                <MenuOptions option="Contact" />
                <MenuOptions option="Resume" />
                <ToggleTheme isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}
export default MobileMenu;