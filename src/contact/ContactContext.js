import React from 'react';
import ContactText from './ContactText';
import ContactBar from './ContactBar';

function ContactContext() {
    return (
        <div className='flex mt-[120px] md:mt-[120px] h-screen-minus-120 text-green flex-col pl-[0%] md:pl-[0%] justify-center items-center w-full overflow-y-clip'>
            <ContactText/>
            <ContactBar/>
            <div className='font-crimson text-sm dark:text-black text-white'>Made with love and sweat by Ujjwal Ravi &copy; 2024</div>
        </div>
    );
}
export default ContactContext;