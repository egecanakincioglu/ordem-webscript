import React from 'react';
import '../style/ServiceBox.scss';

interface ServiceBoxProps {
  title: string;
  description: string;
  image: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, image }) => {
  return (
    <div className="service-box">
      <img src={image} alt={title} className="service-image" />
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceBox;
