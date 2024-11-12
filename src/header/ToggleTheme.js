import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function ToggleTheme({isDarkMode, toggleTheme}) {
    return (
        <div className={isDarkMode ? 'text-[#F9D71C]' : 'text-black'}>
            <button onClick={toggleTheme} className="opacity-75 p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:opacity-100 hover:scale-110 transition-colors duration-600 ease-in-out" aria-label="Toggle theme">
                {isDarkMode ? (
                    <SunIcon className="w-6 h-6" />
                ) : (
                    <MoonIcon className="w-6 h-6" />
                )}
            </button>
        </div>
    );
}
export default ToggleTheme;