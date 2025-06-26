import React, { useEffect, useState, useRef } from 'react';
import styles from '../assets/App.module.css';

const VideoButton = (props) => {
  const [isDark, setIsDark] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const heroRect = hero.getBoundingClientRect();
      // Si le haut ET le bas de Hero sont visibles dans le viewport
      if (
        heroRect.top >= 0 &&
        heroRect.bottom <= window.innerHeight
      ) {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
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
    <div
      ref={buttonRef}
      className={`${styles.videoButtonContainer} ${isDark ? styles.dark : ''}`}
    >
      <button className={styles.videoButton} onClick={() => props.setVideoOpen(true)}>
      <div className={styles.videoButtonImageIcon}>
          {/* <img src={videoImage} alt="video" className={styles.videoButtonImage} /> */}
          <span className={`material-symbols-outlined ${styles.videoButtonIcon}`}>play_arrow</span>
        </div>
        <span className={`${styles.videoButtonText} ${styles.callToActionSpan}`}>Découvrez l'expérience</span>
      </button>
    </div>
  );
};

export default VideoButton;
