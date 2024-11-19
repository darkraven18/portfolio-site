import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import MobileMenu from './MobileMenu';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
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

    return (
        <div className='fixed z-50 bg-black/95 dark:bg-white/95 basis-[120px] w-full flex flex-row'>
            <Logo />
            {isMobile ? (
                <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>

            ) : (
                <div className='flex text-3xl text-green flex-row justify-end items-center gap-6 pr-[5%] pl-4 basis-1/2'>
                    <MenuBar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
                </div>
            )}
            {isMenuOpen && (
                <MobileMenu toggleMenu={toggleMenu} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
            )}
        </div>
    );
}
export default Header;