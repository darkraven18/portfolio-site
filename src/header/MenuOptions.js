import React from 'react';

function MenuOptions({option}) {
    return (
        <div className='cursor-pointer opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-white hover:scale-110 transition duration-600 ease-in-out'>
            <b>
                {option}
            </b>
        </div>
    );
}
export default MenuOptions;