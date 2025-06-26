import styles from '../assets/App.module.css'
import React from 'react'
import ButtonReservation from './ButtonReservation'
export default function CallToAction() {
    return (
        <section className={styles.callToAction}>
            <ButtonReservation />
        </section>
    )
}