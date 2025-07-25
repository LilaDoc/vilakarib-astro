import React from 'react';
import styles from '../assets/App.module.css';

const MobileVideoButton= (props)=> {

  return (
    <div onClick={() => props.setVideoOpen(true)} className={styles.mobileVideoButton}>
      <svg xmlns="http://www.w3.org/2000/svg" height="52px" viewBox="0 -960 960 960" width="52px" fill="currentColor">
        <path d="m380-300 280-180-280-180v360ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
      </svg>
    </div>
  );
};

export default MobileVideoButton;