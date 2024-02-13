import React from 'react'
import PagesTitle from '../../components/pagesTitle/PagesTitle'
import titleBgImage from '../../assets/img/titlesBg/contacts.png'

import styles from './Contact.module.scss'
import ContactAbout from './contactAbout/ContactAbout'
import ContactForm from './contactForm/ContactForm'
import BrandCarousel from '../../UI/brandCarousel/BrandCarousel'
import ContactQuestion from './contactQuestion/ContactQuestion'

const Contact = () => {
    return (
        <div >
            <div className={styles.contactTitleWrapp}>
                <PagesTitle img={titleBgImage} pageName='Contact' />
            </div>
            <ContactAbout />
            <ContactForm />
            <ContactQuestion />
            <BrandCarousel />
        </div>
    )
}

export default Contact
