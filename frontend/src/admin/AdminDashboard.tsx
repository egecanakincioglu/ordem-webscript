import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import './style/AdminDashboard.scss';

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <DashboardContent />
      </div>
    </div>
  );
}

export default AdminDashboard;
