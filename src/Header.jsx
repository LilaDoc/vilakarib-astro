import styles from './App.module.css'
import ButtonReservation from './ButtonReservation';
import VideoButton from './VideoButton';

const Header = (props) => {
    return (
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className={styles.logo}>
            <VideoButton videoOpen={props.videoOpen} setVideoOpen={props.setVideoOpen} />
          </div>
              <ButtonReservation />
        </nav>
      </header>
    );
  };
  
  export default Header;