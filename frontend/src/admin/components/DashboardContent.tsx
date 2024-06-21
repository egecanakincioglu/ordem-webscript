import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import DashboardOverview from '../pages/DashboardOverview'; 

const DashboardContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      <Route path="/dashboard/overview" element={<DashboardOverview />} />
    </Routes>
  );
}

export default DashboardContent;
