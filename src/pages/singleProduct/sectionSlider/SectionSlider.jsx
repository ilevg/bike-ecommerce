import React from 'react'
import ProductSlider from '../../../components/productSlider/ProductSlider'
import { newProductsList } from '../helpers/createNewProductsList'
import styles from './SectionSlider.module.scss'

const SectionSlider = () => {
    return (
        <div className={styles.slider}>
            <div className="container">
                <h2>new releases</h2>
                <div className={styles.sliderWrapper}>
                    <ProductSlider productList={newProductsList} />
                </div>
            </div>
        </div>
    )
}

export default SectionSlider
