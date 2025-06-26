import React from 'react';
import styles from '../assets/App.module.css'

export default function Location() {
    return (
        <section className={styles.locationSection} id="location">
            <div className={styles.locationContainer}>
                {/* <div className={styles.locationTitle}>
                    <h3 className={styles.playfairDisplay}><span className="capitalize">L</span>ocalisation</h3>
                </div> */}
                <div className={styles.locationContent}>
                    <img src="/images/map.png" alt="Map" className={styles.locationImage} />
                </div>
            </div>
        </section>
    )
}