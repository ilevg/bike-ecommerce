import styles from './About.module.scss'

import BrandCarousel from '../../UI/brandCarousel/BrandCarousel'
import PagesTitle from '../../components/pagesTitle/PagesTitle'

import titleBgImage from '../../assets/img/titlesBg/about.png'
import SectionContact from './sectionContact/SectionContact'
import SectionMain from './sectionMain/SectionMain'

const DeliveryPay = () => {
  return (
    <>
      <PagesTitle img={titleBgImage} pageName='About Us' />
      <div className={styles.about}>

      </div>
      <SectionMain />
      <SectionContact />
      <BrandCarousel />
    </>
  )
}

export default DeliveryPay
