import React from 'react';
import '../style/Hero.scss';
import VideoPlayer from './VideoPlayer';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      { <VideoPlayer path='https://github.com/Wyntine/assets/raw/main/construction-trim-nologo-18mb.mp4'/> }
      <div className="overlay">
        <h1 className="text-4xl font-bold">Güven Süreklilik İnovasyon</h1>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">KEŞFET</button>
      </div>
    </div>
  );
};

export default Hero;
