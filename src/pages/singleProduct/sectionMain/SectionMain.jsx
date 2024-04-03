import styles from './SectionMain.module.scss'
import Button from '../../../UI/button/Button'
import SingleProductImgSlider from '../../../components/singleProductImgSlider/SingleProductImgSlider'
import { useContext } from 'react';
import classNames from 'classnames';
import { SingleProductContext } from '../../../context/index';


const SectionMain = () => {
  const [singleProduct, setSingleProduct] = useContext(SingleProductContext);
  const productImages = singleProduct && singleProduct.images

  const productAttributes = singleProduct && singleProduct.attributes;
  const findAttribute = (attrName) => {
    const pro = productAttributes && productAttributes.filter(attr => attr['name'] === attrName)
    const attribute = pro && pro[0].options[0]
    return attribute
  }

  const article = findAttribute('Article number')
  const brand = findAttribute('Brand')
  const description = singleProduct.description && singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "")
  const truncDesc = description && description.length > 50
        ? `${description.substring(0, 150)}...`
        : description
  const stockStatus = singleProduct.stock_status === 'instock' ? 'In stock' : 'Sold out'

  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        <SingleProductImgSlider productImages={productImages} />
      </div>
      {
        singleProduct &&
        <div className={styles.info}>
          <h2 className={styles.name}>{singleProduct.name}</h2>
          <span className={styles.brand}>{brand}</span>
          <span className={styles.article}>Article number: {article}</span>
          <span className={classNames(styles.stock, singleProduct.stock_status === 'instock' ? styles.stockGreen : styles.stockRed)}>{stockStatus}</span>

          <span className={styles.cardPrice}>
            {`${singleProduct.price} $`}
            {
              singleProduct.price < singleProduct.regular_price && <span className={styles.cardPriceReg}>{`${singleProduct.regular_price} $`}</span>
            }
          </span>

          <span className={styles.desc}>{truncDesc}</span>

          <div className={styles.productButtons}>
            <div className={styles.productQuantityCont}>
              <span className={styles.productDecr}>-</span>
              <span className={styles.productQuantity}>0</span>
              <span className={styles.productIncr}>+</span>
            </div>
            <Button width='180px' text='To cart' />
          </div>

        </div>
      }
     
    </div>
  )
}

export default SectionMain
