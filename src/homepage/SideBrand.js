import React from 'react';

function SideBrand() {
    return (
        <div className='fixed right-0 top-20 flex text-white dark:text-black opacity-5 hover:opacity-20 flex-row justify-end items-start text-[10rem] h-full inline-block overflow-x-clip'>
            <span className='-z-50 right-0 font-bold inline-block mr-[-4.5rem] mt-4' style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}>UDEV</span>
        </div>
    );
}
export default SideBrand;