import React from 'react';
import AboutImage from './AboutImage';
import AboutText from './AboutText';

function AboutContent() {
    return (
        <div className='flex mt-[200px] md:mt-[120px] h-screen-minus-120 text-green flex-col md:flex-row pl-[0%] md:pl-[0%] justify-start items-center w-full h-screen overflow-y-clip'>
            <AboutImage/>
            <AboutText/>
        </div>
    );
}
export default AboutContent;