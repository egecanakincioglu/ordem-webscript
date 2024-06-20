import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCount: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/api/visitor-count')
      .then(response => { console.log(response); setCount(response.data) })
      .catch(error => console.error('Error fetching visitor count:', error));
  }, []);

  return (
    <div className="mt-4">
      {/* <h2 className="text-xl">Total Visitors: {count}</h2> */}
    </div>
  );
}

export default VisitorCount;