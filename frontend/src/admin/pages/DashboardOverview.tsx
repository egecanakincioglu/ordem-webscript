// DashboardOverview.tsx

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Page A', visits: 4000, interactions: 2400 },
  { name: 'Page B', visits: 3000, interactions: 1398 },
  { name: 'Page C', visits: 2000, interactions: 9800 },
  { name: 'Page D', visits: 2780, interactions: 3908 },
  { name: 'Page E', visits: 1890, interactions: 4800 },
  { name: 'Page F', visits: 2390, interactions: 3800 },
  { name: 'Page G', visits: 3490, interactions: 4300 },
];

const DashboardOverview: React.FC = () => {
  return (
    <div className="dashboard-overview">
      <h1>Dashboard Genel Bakış</h1>
      <p>Özet veriler ve grafikler burada olacak.</p>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" name="Ziyaretler" />
          <Line type="monotone" dataKey="interactions" stroke="#82ca9d" name="Etkileşimler" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardOverview;
