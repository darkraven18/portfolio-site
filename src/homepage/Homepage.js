import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import SideBrand from './SideBrand';
import DownwardsArrow from './DownwardsArrow';
import HomePageContent from './HomePageContent';

function Homepage() {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  useEffect(() => {
    const phrases = ["Software Developer", "Full Stack Developer", "Creative Coder"];
    const word = phrases[index % 3];
    async function typeWord() {
      let curr = "";
      await delay(500);
      for (const char of word) {
        curr = curr + char;
        setCurrentText(curr);
        await delay(80);
      }
      await delay(1500);
      for (let i = 0; i < word.length; i++) {
        curr = curr.substring(0, curr.length - 1);
        setCurrentText(curr);
        await delay(40);
      }
      await delay(1000);
      setIndex(index + 1)
    }
    typeWord();
  }, [index]);
  return (
    <div id="home" className='relative h-screen w-screen min-h-screen'>
      <Header />
      <HomePageContent currentText={currentText} />
      <SideBrand />
      <DownwardsArrow target="#about"/>
    </div>
  );
}
export default Homepage;