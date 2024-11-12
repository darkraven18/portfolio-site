import React from 'react';

function ProfileText({currentText}) {
    return (
        <div className='w-full max-w-[60rem] leading-loose'>
            Hey, I'm <p className='text-green text-4xl md:text-6xl font-crimson'> Ujjwal Ravi</p>
            I'm a <span className="text-green text-4xl md:text-6xl font-crimson">{currentText}</span>
            <span className="text-green text-4xl md:text-6xl font-crimson">|</span>
        </div>
    );
}
export default ProfileText;