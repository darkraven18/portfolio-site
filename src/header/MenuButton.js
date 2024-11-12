import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function MenuButton({toggleMenu, isMenuOpen}) {
    return (
        <div data-id="zoomed-button" className='flex text-green flex-row justify-end items-center pr-[15%] md:pr-[20%] pl-1 basis-1/2'>
            {isMenuOpen ? (
                <XMarkIcon className="z-30 opacity-75 cursor-pointer hover:opacity-100 hover:scale-110 transition-colors duration-600 ease-in-out h-6 w-6" onClick={toggleMenu} />
            ) : (
                <Bars3Icon className="opacity-75 cursor-pointer hover:opacity-100 hover:scale-110 transition-colors duration-600 ease-in-out h-6 w-6" onClick={toggleMenu} />
            )}
        </div>
    );
}
export default MenuButton;