import React from 'react';
import styles from '../assets/App.module.css'
import Caroussel from './Caroussel'
import AroundCard from './AroundCard'
import ButtonReservationBlack from './ButtonReservationBlack'

export default function About() {
  return (
    <>
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCarousel}>
            <Caroussel />
        </div>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <h3 className={styles.playfairDisplay}><span className="capitalize">B</span>ienvenue à la Villa des K&apos;ribean,</h3>
            <p className={styles.playfairDisplay}>Une retraite d&apos;exception au cœur d&apos;un environnement paisible.<br/>
            Nos deux chambres, la salle de bain moderne et le jardin vous garantissent tout le confort nécessaire pour un séjour mémorable. <br/><br/>
            Venez explorer notre havre de paix, où le confort contemporain et la chaleur humaine se combinent pour offrir une expérience d&apos;hébergement inoubliable.
            </p>
          </div>
          <div className={styles.cardText}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/images/person.svg" alt="About" className={styles.icon} />
                </div>
                <p>4-6</p>
                <p>VOYAGEURS</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/images/bed.svg" alt="About" className={styles.icon} />
                </div>
                <p>2</p>
                <p>CHAMBRES</p> 
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/images/shower.svg" alt="About" className={styles.icon} />
                </div>
                <p>1</p>
                <p>SDB</p>
              </div>
            </div>
          </div>

        <div className={styles.aboutServices}>
          <div className={styles.aboutServicesContent}>
              <div className={styles.aboutServicesList}>
                <div className={styles.aboutServicesItem }>
                    <div className={styles.aboutServicesItemImage}>
                    <img src="/images/wifi.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    WIFI
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/clim.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    CLIMATISATION
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/water.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    CITERNE D'EAU
                  </p>
                </div>
              </div>
              <div className={styles.aboutServicesList}>
              <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/car.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    PARKING
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/yard.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    JARDIN & TERRASSSE
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/bebechambre.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    LIT BÉBÉ
                  </p>
                </div>
              </div>
              <div className={styles.aboutServicesList}>
              <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/lavelinge.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    LAVE-LINGE
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/tv.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    TV
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <img src="/images/cafe.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    MACHINE À CAFÉ
                  </p>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutServicesContainer}>
        {/* <div className={styles.aboutServicesTitle}>
            <h3 className={styles.playfairDisplay}><span className="capitalize">A</span> votre disposition</h3>
        </div> */}

      </div>
{/* 
        <Video className={styles.noDisplay}/> */}
        <div className={styles.reservation} id="reservation">
          <div className={styles.reservationContent}>
            <ButtonReservationBlack/>
          </div>
        </div>

      <div className={styles.around}>
        <div className={styles.aroundContainer}>
          <div className={styles.aroundTitle}>
            <h3 className={styles.playfairDisplay}><span className="capitalize">V</span>isitez la Guadeloupe</h3>
          </div>
          <div className={styles.aroundCards}>
            <AroundCard link="https://fr.guadeloupe-tourisme.com/100/plage-des-alizes-le-moule/" image="/vilakarib/images/beach.jpg" text="La plage des Alizés, idéale pour petits et grands : baignade paisible, jeux sur le sable et couchers de soleil magiques." distance="2,6km" title="Plage des Alizées" />
            <AroundCard link="https://rhum-damoiseau.com/" image="/vilakarib/images/decouverte.jpg" text="Partez à la rencontre du rhum local : distillerie traditionnelle, parfums envoûtants et savoir-faire créole à découvrir absolument." distance="3km" title="Distillerie Damoiseau" />
            <AroundCard link="https://www.tripadvisor.fr/Attraction_Review-g147305-d148906-Reviews-Cascade_aux_Ecrevisses-Parc_National_Basse_Terre_Island_Guadeloupe.html" image="/vilakarib/images/aventure.jpg" text="Plongez au cœur de la forêt tropicale : la cascade des Écrevisses vous offre fraîcheur, beauté sauvage et sérénité pure." distance="50km" title="Cascade des écrevisses"/>
          </div>
        </div>
      </div>
    </section>

    </>
    )
}