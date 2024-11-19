import React from 'react';

function SkillIcons({iconName, iconAddress}) {
    return (
        <div title={iconName} className='opacity-75 hover:opacity-100 transition duration-600 ease-in-out hover:scale-110 flex justify-center items-center p-1'>
            <i className={iconAddress+" colored text-6xl md:text-8xl"}></i>
        </div>
    );
}
export default SkillIcons;