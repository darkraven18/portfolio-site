import React, { useContext } from 'react';
import { ToggleResume } from '../context/ToggleResume';

function CloseButton() {
    const { setResume } = useContext(ToggleResume);
    function closeResume() {
        setResume(false)
    }
    return (
        <div onClick={closeResume} className='cursor-pointer text-white opacity-75 hover:opacity-100 hover:text-green flex flex-row justify-end items-center w-screen text-3xl mr-8 h-[5%] transition duration-600 ease-in-out'>x</div>
    );
}
export default CloseButton;