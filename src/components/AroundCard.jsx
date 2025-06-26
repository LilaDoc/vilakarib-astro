import React from 'react';
import styles from '../assets/App.module.css';

export default function AroundCard(props) {
  return (
  <a href={props.link}>
    <div className={styles.aroundCard}>
      <div className={styles.aroundCardImage}>
        <div className={styles.aroundImage}>
          <img src={props.image} alt="About" />
        </div>
      </div>
      <div className={styles.aroundCardContent}>
          <div className={styles.aroundCardTitle}>
            <h4>{props.title}</h4>
          </div>
          <div className={styles.aroundText}>
            <p>
              {props.text}
            </p>
          </div>
          <div className={styles.aroundDistance}>
            <p>{props.distance}</p>
          </div>
      </div>
    </div>
  </a>
  )
}

