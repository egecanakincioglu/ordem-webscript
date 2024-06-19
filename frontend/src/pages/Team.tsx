import React from 'react';
import Person from '../components/Person';

const Team: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Teknik kadronun üyeleri */}
        <div className="bg-white rounded-lg shadow-md p-4">
          { <Person fullName='John Doe' role='CEO & Founder' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/> }
        </div>
        {/* Diğer ekip üyeleri */}
      </div>
    </div>
  );
}

export default Team;
