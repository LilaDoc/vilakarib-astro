import React from 'react';
import styles from '../assets/App.module.css';

const VideoScreen = (props) => {
  return (
    <div className={styles.videoScreen}>
      <div className={styles.videoScreenContent}>
        <button onClick={() => props.setVideoOpen(false)}>
          <img src="/vilakarib/images/close.svg" alt="Close" />
        </button>
        <video
          src="/vilakarib/videos/website.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoScreen;