import React, { useEffect, useState } from 'react';


  export const headerStyleFunction = () => {

  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scroll hacia abajo
        setScrollDirection('down');
        console.log('down')
      } else {
        // Scroll hacia arriba
        setScrollDirection('up');
        console.log('up')
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const headerStyle = {
    transform: scrollDirection === 'down' ? 'translateY(-20%)' : 'translateY(20%)',
    transition: 'transform 0.3s ease-in-out',
    // Agrega otros estilos según tus necesidades
  };

  return headerStyle
}
