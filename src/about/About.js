import React from 'react';
import DownwardsArrow from '../homepage/DownwardsArrow';
import AboutContent from './AboutContent';
import Heading from './Heading';

function About() {
    return (
        <div id="about" className='relative w-full h-screen'>
            <Heading/>
            <AboutContent/>
            <DownwardsArrow target="#skills"/>
        </div>
    );
}
export default About;