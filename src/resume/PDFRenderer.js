import React from 'react';

function PDFRenderer() {
    return (
        <div className='text-white flex justify-center items-end w-screen text-3xl h-[95%]'>
            <object data="Ujjwal's Resume.pdf" type="application/pdf" className="w-[90%] h-full flex flex-col justify-center items-center">
                <p className='text-center'>Your browser does not support PDFs.</p><p><a className='text-green underline underline-offset-4 text-center' href="Ujjwal's Resume.pdf">Download the Resume!</a>.</p>
            </object>
        </div>
    );
}
export default PDFRenderer;