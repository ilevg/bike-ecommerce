import React from 'react'
import Button from '../../UI/button/Button'
import styles from './ProductCard.module.scss'
import click from '../../assets/img/click.png'
import { Link } from 'react-router-dom'



const ProductCard = ({ product }) => {

    const productImg = product.images[0]?.src

    const countryAttr = product.attributes.find(attr => attr.name.toLowerCase() === "country")
    const productCountry = countryAttr && countryAttr.options[0].toLowerCase()
    const wordpressSiteUrl = process.env.REACT_APP_WORDPRESS_SITE_URL
    const stockStatus = product.stock_status === 'instock' ? 'In stock' : 'Sold out'

    let flagPath = ''
    switch (productCountry) {
        case 'usa':
            flagPath = `${wordpressSiteUrl}/assets/flags/usa.png`
            break;
        case 'france':
            flagPath = `${wordpressSiteUrl}/assets/flags/france.png`
            break;
        case 'italy':
            flagPath = `${wordpressSiteUrl}/assets/flags/italy.png`
            break;
        case 'spain':
            flagPath = `${wordpressSiteUrl}/assets/flags/spain.png`
            break;
        case 'switzerland':
            flagPath = `${wordpressSiteUrl}/assets/flags/swiss.png`
            break;
    }

    return (
        <div className={styles.card}>
            <Link to={`/catalog/${product.slug}`}>
                <img className={`${flagPath ? styles.cardFlagImg : styles.cardFlagImgHidden}`} src={flagPath} />
                <div className={styles.cardImgWrapper}>
                    <img className={styles.cardProductImg} src={productImg} alt={product.name} />
                    <span className={styles.cardProductInfo}>{stockStatus}</span>
                </div>
                <div className={styles.cardDesc}>
                    <span className={styles.cardDescText}>{product.name}</span>
                </div>

                <span className={styles.cardPrice}>
                    {`${product.price} $`}
                    {
                        product.price < product.regular_price && <span className={styles.cardPriceReg}>{`${product.regular_price} $`}</span>
                    }
                </span>

                <div className={styles.cardBtn} >
                    <Button
                        width='100%'
                        text='In 1 Click'
                        imgUrl={click}
                        alt='click'
                    />
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
