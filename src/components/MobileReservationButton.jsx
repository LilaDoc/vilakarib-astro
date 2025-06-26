import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/App.module.css';

const MobileReservationButton = () => {
  const [isDark, setIsDark] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const sections = [
        { id: 'hero', dark: false },
        { id: 'reservation', dark: false },
      ];

      let found = false;
      for (let section of sections) {
        const sectionElement = document.getElementById(section.id);
        if (!sectionElement) continue;
        const sectionRect = sectionElement.getBoundingClientRect();
        if (
          buttonCenterY >= sectionRect.top &&
          buttonCenterY <= sectionRect.bottom &&
          buttonCenterX >= sectionRect.left &&
          buttonCenterX <= sectionRect.right
        ) {
          setIsDark(section.dark);
          found = true;
          break;
        }
      }
      if (!found) setIsDark(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <a href="https://www.airbnb.com/l/iMnOLylu">
      <button 
        ref={buttonRef} 
        className={`${styles.mobileReservationButton} ${isDark ? styles.dark : ''}`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="24px" 
          viewBox="0 -960 960 960" 
          width="24px"
        >
          <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
        </svg>
      </button>
    </a>
  );
};

export default MobileReservationButton;


