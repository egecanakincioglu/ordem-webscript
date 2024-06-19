import React, { useState, useEffect } from 'react';
import VisitorCount from '../components/VisitorCount';
import '../style/Home.css';

import ordem1 from "../assets/ordem1.jpg"
import ordem2 from "../assets/ordem2.jpg"
import ordem3 from "../assets/ordem3.jpg"

const slides = [
  {
    imageUrl: ordem1,
    title: 'Sistemi Baştan Yarattık',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageUrl: ordem2,
    title: 'Öncü Altyapı Sistemleri',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    imageUrl: ordem3,
    title: 'Tüm Marmaraya Hizmet Veriyoruz',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="slide-container relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.imageUrl} alt={slide.title} className="slide-image w-full h-auto rounded-lg shadow-lg mb-4" />
            <div className={`slide-content ${index === currentSlide ? 'active' : ''}`}>
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <VisitorCount />
    </div>
  );
};

export default Home;
