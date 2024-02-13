import React from 'react'
import Button from '../../UI/button/Button'
import styles from './ProductCard.module.scss'
import click from '../../assets/img/click.png'

const ProductCard = ({product}) => {
    return (
        <div className={styles.card}>
            <img className={`${product.countryFlag ? styles.cardFlagImg : styles.cardFlagImgHidden}`} src={product.countryFlag} />
            <div className={styles.cardImgWrapper}>
                <img className={styles.cardProductImg} src={product.imagePath} alt={product.name} />
                <span className={styles.cardProductInfo}>In stock</span>
            </div>
            <div className={styles.cardDesc}>
                <span className={styles.cardDescText}>{product.name}</span>
            </div>
            <span className={styles.cardPrice}>{`${product.price} $`}</span>
            <div className={styles.cardBtn} >
                <Button
                    width='274px' 
                    text='In 1 Click' 
                    imgUrl={click}
                    alt='click'
                />
            </div>
            
        </div>
    )
}

export default ProductCard
