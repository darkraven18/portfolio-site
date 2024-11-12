import React from 'react';
import ProfileText from './ProfileText';
import ProfileSubtext from './ProfileSubtext';

function ProfileContent({ currentText }) {
    return (
        <div className='text-3xl pl-[7%] md:pl-[10%] md:text-5xl text-white dark:text-black font-serif basis-3/6 h-full flex flex-col justify-center items-center'>
            <ProfileText currentText={currentText} />
            <ProfileSubtext />
        </div>
    );
}
export default ProfileContent;