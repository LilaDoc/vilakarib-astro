import React, { forwardRef } from 'react';
import styles from '../assets/App.module.css'

const Video = forwardRef((props, ref) => {
    return (
        <video
          ref={ref}
          className={styles.video}
          src="/videos/website.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
    );
});

export default Video;