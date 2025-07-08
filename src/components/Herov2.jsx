import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/New_Hero.module.css';
import Video from './Video';
import Arrow from './Down-arrow';
import VideoScreen from './VideoScreen';
import VideoButton from './VideoButton';
import CallToAction from './CallToAction';
import MobileReservationButton from './MobileReservationButton';
import MobileVideoButton from './MobileVideoButton';
// Ajout du hook personnalisé
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible];
};

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  // Ajout des états nécessaires
  const [imageLoaded, setImageLoaded] = useState(false);
  const [heroTitleRef, isHeroTitleVisible] = useElementOnScreen({
    threshold: 0.4,
    rootMargin: '100px 0px 0px 0px'
  });

  const [heroSubtitleRef, isHeroSubtitleVisible] = useElementOnScreen({
    threshold: 0.4,
    rootMargin: '100px 0px 0px 0px'
  });
  
  // Correction de useelement et ajout de la logique d'apparition
  return (
    <>
    {videoOpen && <VideoScreen videoOpen={videoOpen} setVideoOpen={setVideoOpen} />}
    <section className={styles.hero} id="hero">
      <MobileReservationButton />
      <div className={`${styles.backgroundVideo} `}
             onLoad={() => setImageLoaded(true)}>
            <Video />
      </div>
        {/* <div className={`${styles.backgroundImage} ${styles.hidden}`}>
            <img src="/images/hero.png" alt="Guadeloupe" />
        </div> */}
      <div className={styles.heroArrowTitleContainer}>
        <div className={styles.heroTitlesContainer}>
            <div className={styles.heroTitleContainer}>
                <h1 
                  ref={heroTitleRef}
                  className={`${styles.heroTitle} ${(isHeroTitleVisible && imageLoaded) ? styles.showApparition : styles.hiddenApparition} playfairDisplay`}
                >   
                    <span className="capitalize">V</span>ILLA DES K'RIBEAN
                </h1>
            </div>
            {/* <MobileVideoButton setVideoOpen={setVideoOpen} /> */}
            <div className={styles.heroSubtitleContainer}>
                    <h2 
                      ref={heroSubtitleRef}
                      className={`${styles.heroSubtitle} ${(isHeroSubtitleVisible && imageLoaded) ? styles.showApparition : styles.hiddenApparition}`}
                    >
                        LOCATION DE VACANCES AU MOULE
                    </h2>
                    {/* <CallToAction /> */}
                    <VideoButton videoOpen={videoOpen} setVideoOpen={setVideoOpen} />
            </div>
            <div className={`${styles.heroArrow} ${styles.hidden}`}>
                <a href="#about"><Arrow color="#ffffff" width="100" height="100" /></a>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;