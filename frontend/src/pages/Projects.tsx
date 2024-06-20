import React from 'react';
import Project from '../components/Project';
import HeaderElement from '../components/HeaderElement';

const Projects: React.FC = () => {
  return (
    <HeaderElement>
      <h1 className="text-4xl font-bold mb-4">Completed Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Projelerin listesi buraya gelecek */}
        <div className="bg-white rounded-lg shadow-md p-4">
          { <Project title='Project Title' description='Project description goes here.'/> }
        </div>
        {/* Diğer projeler */}
      </div>
    </HeaderElement>
  );
}

export default Projects;

