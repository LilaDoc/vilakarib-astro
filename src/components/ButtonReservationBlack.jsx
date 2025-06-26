import React from 'react';
import styles from '../assets/App.module.css';

const ButtonReservation = () => {
  return (
    <div className={styles.callToActionContainerBlack}>
      <h2><a href="https://www.airbnb.com/l/iMnOLylu">Réservez <span className={styles.callToActionSpan}>votre séjour</span></a></h2>
    </div>
  );
};

export default ButtonReservation;


