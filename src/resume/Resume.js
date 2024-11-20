import React, { useContext } from 'react';
import CloseButton from './CloseButton';
import PDFRenderer from './PDFRenderer';
import { ToggleResume } from '../context/ToggleResume';

function Resume() {
    const { resume } = useContext(ToggleResume);
    return (
        <div className={resume ? 'fixed w-screen h-screen bg-black bg-opacity-95 z-[50] flex flex-col justify-center items-center' : 'z-10 hidden'}>
            <CloseButton/>
            <PDFRenderer/>
        </div>
    );
}
export default Resume;