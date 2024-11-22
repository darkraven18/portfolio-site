import React, { useContext } from 'react';
import { ToggleResume } from '../context/ToggleResume';

function MenuOptions({ toggleMenu, option }) {
    const { resume, setResume } = useContext(ToggleResume); 
    const link = `#${option.toLowerCase()}`;
    function buttonClick() {
        if(toggleMenu!=null){
            toggleMenu();
        }
        if(option === 'Resume'){
            setResume(!resume);
        }
    }
    return (
        <a href={link} onClick={buttonClick} className={option === 'Resume' ? 'p-2 border-solid border-2 border-green hover:border-white dark:border-black transition duration-600 ease-in-out hover:scale-110' : 'hover:scale-110 transition duration-600'}>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white dark:decoration-black transition duration-600 ease-in-out'>
                <b>
                    {option}
                </b>
            </div>
        </a>
    );
}
export default MenuOptions;