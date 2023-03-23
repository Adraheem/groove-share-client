import React from 'react';

interface IProps {
  className?: string;
  children: React.ReactNode
}

function Container({className, children}: IProps) {
  return (
    <div className={`px-5 max-w-screen-2xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;
