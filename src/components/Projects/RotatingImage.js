import React, { useState, useEffect } from "react";

function RotatingImage({ images, interval = 1000 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img 
      src={images[currentImageIndex]} 
      alt="rotating-project" 
      style={{
        width: '100%',
        height: '280px',
        objectFit: 'contain',
        transition: 'opacity 0.3s ease-in-out',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}
    />
  );
}

export default RotatingImage;
