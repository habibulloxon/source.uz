import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', style = {} }) => {
  // Default styles for the container
  const defaultStyle: React.CSSProperties = {
    maxWidth: '1200px', // Maximum width of the container
    margin: '0 auto', // Centers the container
    padding: '0 20px', // Adds some padding on the sides
    ...style, // Spreads any style prop passed to override or add new styles
  };

  return (
    <div className={className} style={defaultStyle}>
      {children}
    </div>
  );
};

export default Container;
