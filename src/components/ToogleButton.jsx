import styles from './ToogleButton.module.css';
import React from 'react';
import { useState } from 'react';
import ToogleList from './ToogleList';

const ToogleButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <>
        <div className={styles.toogleButtonContainer}>
            <button onClick={handleClick} className={styles.toogleButton}>MENU</button>
            <div className={`${styles.toogleListWrapper} ${isOpen ? styles.open : ''}`}>
                <ToogleList />
            </div>
        </div>
        </>
    )
}

export default ToogleButton;