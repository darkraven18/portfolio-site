import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

function DownwardsArrow({target}) {
    return (
        <div className='absolute text-green bottom-1 w-full flex justify-center'>
            <a href={target}>
                <ChevronDoubleDownIcon  className="z-30 opacity-75 cursor-pointer hover:opacity-100 hover:scale-125 transition-colors duration-600 ease-in-out h-8 w-8" />
            </a>
        </div>
    );
}
export default DownwardsArrow;