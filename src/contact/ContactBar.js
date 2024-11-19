import React from 'react';
import ContactIcon from './ContactIcon';

function ContactBar() {
    return (
        <div className='md:mt-[280px] mt-[150px] w-full h-[120px] flex flex-row justify-center items-center gap-8'>
            <ContactIcon iconAddress='devicon-github-plain' iconName='github' url='https://github.com/darkraven18'/>
            <ContactIcon iconAddress='devicon-linkedin-plain' iconName='linkedin' url='https://www.linkedin.com/in/ujjwal-ravi/'/>
            <ContactIcon iconAddress='devicon-google-plain' iconName='gmail' url='mailto:ravi.ujjwal18@gmail.com'/>
        </div>
    );
}
export default ContactBar;