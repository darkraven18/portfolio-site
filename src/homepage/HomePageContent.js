import React from 'react';
import Profile from './ProfileImage';
import ProfileContent from './ProfileContent';

function HomePageContent({ currentText }) {
    return (
        <div className='flex text-green flex-col md:flex-row pl-[0%] md:pl-[0%] justify-start items-center w-full h-screen-minus-120 overflow-y-clip'>
            <ProfileContent currentText={currentText} />
            <Profile />
        </div>
    );
}
export default HomePageContent;