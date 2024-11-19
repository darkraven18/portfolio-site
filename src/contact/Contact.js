import React from 'react';
import UpwardsArrow from './UpwardsArrow';
import Heading from './Heading';
import ContactContext from './ContactContext';

function Contact() {
    return (
        <div id="contact" className='relative w-full h-screen'>
            <Heading/>
            <ContactContext/>
            <UpwardsArrow target="#home"/>
        </div>
    );
}
export default Contact;