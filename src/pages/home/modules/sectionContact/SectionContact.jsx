import React from 'react'
import HomeSectionTitle from '../../ui/homeSectionTitle/HomeSectionTitle'
import styles from './SectionContact.module.scss'

import mail from '../../../../assets/img/footer/mail.png'
import phone from '../../../../assets/img/footer/phone.png'
import navigator from '../../../../assets/img/footer/navigator.png'


const SectionContact = () => {
    return (
        <div >
            <div className="container">
                <HomeSectionTitle titleText='contact' />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.5610513692445!2d-0.14353338687849773!3d51.54539567858985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae2989f1b99%3A0x506c6806cea82bb9!2s147%20Kentish%20Town%20Rd%2C%20London%20NW1%208PR%2C%20UK!5e1!3m2!1sen!2spl!4v1706894215511!5m2!1sen!2spl"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <div className="container">
                <ul className={styles.contactList}>
                    <li className={styles.contantListItem}>
                        <img className={styles.cantactIcon} src={phone} alt="phone" />
                        <div>
                            <a href="tel:+13242342343">+1(324)234-23-43</a>
                            <div>
                                <a href="tel:+13242652356">+1(324)265-23-56</a>
                            </div>
                        </div>
                    </li>

                    <li className={styles.contantListItem}>
                        <img className={styles.cantactIcon} src={navigator} alt="navigator" />
                        <div>
                            <span>London,<br />Centrum str, 7/8</span>
                        </div>
                    </li>

                    <li className={styles.contantListItem}>
                        <img className={styles.cantactIcon} src={mail} alt="mail" />
                        <a href="mailto:worlbike@mail.com">worlbike@mail.com</a>
                    </li>

                    <li className={styles.contantListItem}>
                        <img className={styles.cantactIcon} src={navigator} alt="navigator" />
                        <div>
                            <span>Seven days a week<br />10:00-20:00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SectionContact
