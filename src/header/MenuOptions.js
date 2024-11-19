import React from 'react';

function MenuOptions({ toggleMenu , option }) {
    const link=`#${option.toLowerCase()}`;
    return (
        <a href={link} onClick={toggleMenu}  className= {option === 'Resume' ? 'p-2 border-solid border-2 border-green hover:border-white transition duration-600 ease-in-out hover:scale-110': 'hover:scale-110 transition duration-600'}>
            <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white transition duration-600 ease-in-out'>
                <b>
                    {option}
                </b>
            </div>
        </a>
    );
}
export default MenuOptions;