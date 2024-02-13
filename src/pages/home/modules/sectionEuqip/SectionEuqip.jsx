import React from 'react'
import ProductSlider from '../../../../components/productSlider/ProductSlider'
import { newProductsList } from '../../helpers/createNewProductsList'
import HomeSectionTitle from '../../ui/homeSectionTitle/HomeSectionTitle'
import styles from './SectionEuqip.module.scss'

const SectionEuqip = () => {
    return (
        <div className={styles.euqipSection}>
            <div className="container">
                <HomeSectionTitle titleText='euqipments' />
                <ProductSlider productList={newProductsList} />
            </div>
        </div>
    )
}

export default SectionEuqip
