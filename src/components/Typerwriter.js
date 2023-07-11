import React, { useState, useEffect } from 'react';
const Typerwriter = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 2000); // Adjust the delay between each item as per your preference
      return () => {
        clearInterval(timer);
      };
    }, [items]);
  
    return (
      <h1 className='w-fit inline'>
        {items.map((item, index) => (
          <span key={index}>
            {index === currentIndex ? item : ''}
          </span>
        ))}
      </h1>
    );
  };
export default Typerwriter;