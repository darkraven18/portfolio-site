import React from 'react';
import DownwardsArrow from '../homepage/DownwardsArrow';
import Heading from './Heading';
import SkillSets from './SkillSets';

function Skills() {
    return (
        <div id="skills" className='flex justify-center items-center relative w-full h-screen'>
            <Heading/>
            <SkillSets/>
            <DownwardsArrow target="#home"/>
        </div>
    );
}
export default Skills;