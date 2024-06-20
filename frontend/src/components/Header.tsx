import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.scss';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollY > 50 ? 'header-blue' : 'header-transparent'}`}>
      <nav className="container mx-auto flex justify-between items-center p-6">
        <Link to="/" className="font-bold">ORDEM</Link>
        <div className="flex-1 flex justify-center space-x-4">
          <Link to="/" className="font-bold">Anasayfa</Link>
          <Link to="/projects" className="font-bold">Kurumsal</Link>
          <Link to="/upcoming-projects" className="font-bold">Hizmetler</Link>
          <Link to="/contact" className="font-bold">Referanslar</Link>
          <Link to="/team" className="font-bold">İletişim</Link>
        </div>
        <div>
          <Link to="/account" className="font-bold">Hesabım</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
