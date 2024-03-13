import React from 'react'
import AboutSectionTitle from '../ui/aboutSectionTitle/AboutSectionTitle'
import styles from './SectionMain.module.scss'
import LinkTag from '../../../UI/linkTag/LinkTag'
import { mainCardInfo } from './data/MainCardInfo'

import cardBg from '../../../assets/img/about/about-card-bg.png'
import aboutMainImg from '../../../assets/img/about/about-main-img-bike.png'


const SectionMain = () => {
    return (
        <>
            <div className='container'>
                <h1 className={styles.mainTitle}>A <span className={styles.mainTitleBike}>BICYCLE</span>  IS NOT JUST A MEANS OF TRANSPORTATION!</h1>

                <div className={styles.mainCard}>
                    {
                        mainCardInfo.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <h3 className={styles.mainCardTitle}>{item.title}</h3>
                                <p className={styles.mainCardDesc}>{item.desc}</p>
                                <LinkTag to={item.link} text='More iformation' />
                                <img className={styles.mainCardBg} src={cardBg} alt="card-bg" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.mainAbout}>
                <div className={styles.mainAboutItems}>
                    <div className={styles.mainAboutItemsWrapp}>
                        <h2 className={styles.mainAboutTitle}>A FEW WORDS ABOUT US</h2>

                        <p className={styles.mainAboutDesc}>A bicycle is not just a means of transportation. We, the World-Bike team, are confident in this. For us, a bicycle is a whole life full of freedom, drive, adventure and new discoveries.</p>
                        <p className={styles.mainAboutDesc}>We sincerely love what we do and try to make the bike an integral part of your life.</p>
                    </div>
                </div>
                <img className={styles.mainAboutImg} src={aboutMainImg} alt="Bike" />
            </div>
        </>



    )
}

export default SectionMain
