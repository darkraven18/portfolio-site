import React from 'react';

function ContactIcon({iconName, iconAddress, url}) {
    return (
        <a href={url} title={iconName} className='opacity-75 hover:opacity-100 transition duration-600 ease-in-out hover:scale-125 flex justify-center items-center p-1'>
            <i className={iconAddress+" text-6xl md:text-6xl"}></i>
        </a>
    );
}
export default ContactIcon;