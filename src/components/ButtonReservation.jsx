import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/App.module.css';

const ButtonReservation = () => {
  const [isDark, setIsDark] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      // Liste des sections et leur mode dark
      const sections = [
        { id: 'hero', dark: false },
        { id: 'reservation', dark: false },
        // Ajoute ici d'autres sections si besoin, ex:
        // { id: 'about', dark: true },
        // { id: 'contact', dark: true },
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
      if (!found) setIsDark(true); // dark par défaut si aucune section trouvée
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
    <div ref={buttonRef} className={`${styles.callToActionContainer} ${isDark ? styles.dark : ''}`}>
      <h2>
        <a href="https://www.airbnb.com/l/iMnOLylu">
          Réservez <span className={styles.callToActionSpan}>votre séjour</span>
        </a>
      </h2>
    </div>
  );
};

export default ButtonReservation;


