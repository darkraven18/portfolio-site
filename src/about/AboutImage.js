import React from 'react';

function AboutImage() {
    return (
        <div className='md:h-full h-[20%] md:w-[50%] w-full flex justify-center items-center'>
                <img className="w-full max-w-[320px] md:max-w-[500px] aspect-square object-cover" src="about.png" alt="About!" />
        </div>
    );
}
export default AboutImage;