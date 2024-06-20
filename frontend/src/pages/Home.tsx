import React from 'react';
import Hero from '../components/Hero';
import ServiceBox from '../components/ServiceBox';
import service1Image from '../assets/ordem1.jpg';
import service2Image from '../assets/ordem2.jpg';
import service3Image from '../assets/ordem3.jpg';
import '../style/Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <div className="content-container">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold">Hoşgeldiniz</h2>
          <p>Bu, anasayfa içeriğidir.</p>
          
          <div className="services-grid">
            <ServiceBox
              title="Hizmet 1"
              description="Hizmet 1'in açıklaması buraya gelecek."
              image={service1Image}
            />
            <ServiceBox
              title="Hizmet 2"
              description="Hizmet 2'nin açıklaması buraya gelecek."
              image={service2Image}
            />
            <ServiceBox
              title="Hizmet 3"
              description="Hizmet 3'ün açıklaması buraya gelecek."
              image={service3Image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
