import React from 'react';

function Profile() {
    return (
        <div className='flex justify-start items-center basis-3/6 h-full'>
            <img className="w-full max-w-[320px] md:max-w-[500px] aspect-square object-cover" src="profile.png" alt="ME!" />
        </div>
    );
}
export default Profile;