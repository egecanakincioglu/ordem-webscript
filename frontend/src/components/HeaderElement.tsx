import React, { ReactNode } from 'react';

interface HeaderElementProps {
  children: ReactNode;
}

const HeaderElement: React.FC<HeaderElementProps> = (props) => {
  return (
    <div className="container mx-auto p-4 mt-16">
      {props.children}
    </div>
  );
};

export default HeaderElement;
