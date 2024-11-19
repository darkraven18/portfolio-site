import React from 'react';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

function UpwardsArrow({target}) {
    return (
        <div className='absolute text-green bottom-1 w-full flex justify-center'>
            <a href={target}>
                <ChevronDoubleUpIcon  className="z-30 opacity-75 cursor-pointer hover:opacity-100 hover:scale-125 transition-colors duration-600 ease-in-out h-8 w-8" />
            </a>
        </div>
    );
}
export default UpwardsArrow;