import React from 'react';
import MenuOptions from './MenuOptions';
import ToggleTheme from './ToggleTheme';

function MenuBar({ isDarkMode, toggleTheme }) {
    return (
        <div className='flex text-3xl text-green flex-row justify-end items-center gap-6 pr-[5%] pl-4 basis-1/2'>
            <MenuOptions option="About" />
            <MenuOptions option="Skills" />
            <MenuOptions option="Work" />
            <MenuOptions option="Contact" />
            <MenuOptions option="Resume" />
            <ToggleTheme isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
    );
}
export default MenuBar;