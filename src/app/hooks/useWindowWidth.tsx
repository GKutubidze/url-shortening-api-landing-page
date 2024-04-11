'use client'
import { useState, useEffect } from 'react';

const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width on mount
    setWindowWidth(window.innerWidth);

    // Event listener to update width on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once after mount

  return windowWidth;
};

export default useWindowWidth;
