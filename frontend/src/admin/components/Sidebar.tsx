import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Yönetim Paneli</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/users">Kullanıcılar</Link></li>
        <li><Link to="/dashboard/settings">Ayarlar</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
