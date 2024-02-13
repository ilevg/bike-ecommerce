import React from 'react'
import ProductSlider from '../../../../components/productSlider/ProductSlider'
import { newProductsList } from '../../helpers/createNewProductsList'
import HomeSectionTitle from '../../ui/homeSectionTitle/HomeSectionTitle'
import styles from './SectionSlider.module.scss'

const SectionSlider = () => {
    return (
        <div className={styles.slider}>
            <div className="container">
                <HomeSectionTitle titleText='new releases' />
                <div className={styles.sliderWrapper}>
                    <ProductSlider productList={newProductsList} />
                </div>
            </div>
        </div>
    )
}

export default SectionSlider
