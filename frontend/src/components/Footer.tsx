// Footer.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaXing, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import '../style/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-6">
        <div className="footer-content" style={{ maxWidth: '65%' }}>
          {/* Hizmetler Menüsü */}
          <div className="footer-menu">
            <h2 className="text-2xl font-bold mb-2">Hizmetler</h2>
            <ul className="footer-submenu">
              <li><a href="#h1">Hizmet 1</a></li>
              <li><a href="#h2">Hizmet 2</a></li>
              <li><a href="#h3">Hizmet 3</a></li>
            </ul>
          </div>

          {/* Ortaklar Menüsü */}
          <div className="footer-menu">
            <h2 className="text-2xl font-bold mb-2">Ortaklar</h2>
            <ul className="footer-submenu">
              <li><a href="#o1">Ortak 1</a></li>
              <li><a href="#o2">Ortak 2</a></li>
              <li><a href="#o3">Ortak 3</a></li>
            </ul>
          </div>

          {/* ORDEM Menüsü */}
          <div className="footer-menu">
            <h2 className="text-2xl font-bold mb-2">Kurumsal</h2>
            <ul className="footer-submenu">
              <li><a href="#hak">Hakkımızda</a></li>
              <li><a href="#vv">Vizyon ve Misyon</a></li>
              <li><a href="#if">İş Fırsatları</a></li>
            </ul>
          </div>

          {/* Adres ve İletişim Bilgileri */}
          <div className="footer-contact mt-4">
            <h2 className="text-2xl font-bold mb-2">ORDEM</h2>
            <p className="mb-2">1234 Örnek Sokak</p>
            <p className="mb-2">Şehir, Ülke ZIP</p>
            <p className="mb-2">Email: info@ordem.com</p>
            <p className="mb-2">Telefon: +123 456 7890</p>
            <div className="footer-social-links mt-4">
              <a href="#facebook" className="footer-social-link">
                <FaFacebook size={16} />
              </a>
              <a href="#instagram" className="footer-social-link">
                <FaInstagram size={16} />
              </a>
              <a href="#twitter" className="footer-social-link">
                <FaTwitter size={16} />
              </a>
              <a href="#linkedin" className="footer-social-link">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
        {/* Telif Hakkı Kısmı */}
        <div className="footer-copyright mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} ORDEM. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
