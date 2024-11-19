import React from 'react';

function ContactContext() {
    return (
        <div className='flex mt-[120px] md:mt-[120px] h-screen-minus-120 text-green flex-col pl-[0%] md:pl-[0%] justify-center items-center w-full overflow-y-clip'>
            <div className='font-crimson text-center text-2xl md:text-2xl pr-[3%] pl-[3%] md:pr-[35%] md:pl-[35%]'>
                <p>Let’s Work Together!</p>I’m passionate about building solutions and exploring opportunities that push the boundaries of what’s possible. If you’re looking for a dedicated developer to join your team, collaborate on a project, or simply want to connect and discuss ideas, feel free to reach out. Your message could be the start of something extraordinary!
            </div>
            <div className='md:mt-[280px] mt-[150px] w-full h-[120px] flex flex-row justify-center items-center gap-8'>
                <div title='github' className='opacity-75 hover:opacity-100 transition duration-600 ease-in-out hover:scale-125 flex justify-center items-center p-1'>
                    <i className="devicon-github-plain colored text-6xl md:text-6xl"></i>
                </div>
                <div title='linkedin' className='opacity-75 hover:opacity-100 transition duration-600 ease-in-out hover:scale-125 flex justify-center items-center p-1'>
                    <i className="devicon-linkedin-plain colored text-6xl md:text-6xl"></i>
                </div>
                <div title='gmail' className='opacity-75 hover:opacity-100 transition duration-600 ease-in-out hover:scale-125 flex justify-center items-center p-1'>
                    <i className="devicon-google-plain colored text-6xl md:text-6xl"></i>
                </div>
            </div>
            <div className='font-crimson text-sm dark:text-black text-white'>Made with love and sweat by Ujjwal Ravi &copy; 2024</div>
        </div>
    );
}
export default ContactContext;