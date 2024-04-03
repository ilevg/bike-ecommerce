import React from 'react'
import styles from './Cart.module.scss'
import PagesTitle from '../../components/pagesTitle/PagesTitle'
import titleBgImage from '../../assets/img/titlesBg/about.png'
import LinkTag from '../../UI/linkTag/LinkTag'
import bikeImg from '../../assets/img/delete/image68.png'
import classNames from 'classnames'
import ProductSlider from '../../components/productSlider/ProductSlider'
import { Link } from 'react-router-dom'
import { useSortProducts } from '../../hooks/useSortProducts'

const Cart = () => {
  const sortProductsForSlider = useSortProducts('', 8)

  return (
    <>
      <PagesTitle img={titleBgImage} pageName='Cart' />
      <div className={classNames(styles.cart, 'container')}>
        <div className={styles.cartProductCont}>
          <div className={styles.cartEmpty}>
            <LinkTag text='Go back to shopping' to='/trade-in' color='black' />
            <button className={styles.cartEmptyBtn} type='button'>Empty the cart</button>
          </div>


          <div className={styles.cartProduct}>
            <div className={styles.productNameCont}>
              <img className={styles.productImg} src={bikeImg} alt="qweeqw" />
              <span className={styles.cartProductName}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</span>
            </div>
            <div className={styles.productPriceCont}>
              <div>
                <div className={styles.productQuantityCont}>
                  <span className={styles.productDecr}>-</span>
                  <span className={styles.productQuantity}>0</span>
                  <span className={styles.productIncr}>+</span>
                </div>
              </div>
              <div className={styles.cartProductPrice}>
                <span>4 656 $</span>
                <div className={styles.productOldPrice}>7 655 $</div>
              </div>
            </div>
            <div className={styles.sidebarIcon} onClick=''></div>
          </div>


          <div className={styles.cartProduct}>
            <div className={styles.productNameCont}>
              <img className={styles.productImg} src={bikeImg} alt="qweeqw" />
              <span className={styles.cartProductName}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</span>
            </div>

            <div className={styles.productPriceCont}>
              <div>
                <div className={styles.productQuantityCont}>
                  <span className={styles.productDecr}>-</span>
                  <span className={styles.productQuantity}>0</span>
                  <span className={styles.productIncr}>+</span>
                </div>
              </div>
              <div className={styles.cartProductPrice}>
                <span>4 656 $</span>
                <div className={styles.productOldPrice}>7 655 $</div>
              </div>
            </div>
            <div className={styles.sidebarIcon} onClick=''></div>
          </div>
        </div>


        <div className={styles.price}>

          <div className={styles.priceCont}>
            <span className={styles.priceSubtitle}>Order number</span>
            <span>789563678</span>
          </div>

          <div className={styles.priceCont}>
            <div>
              <span className={styles.priceSubtitle}>Order amount</span>
              <div className={styles.priceSubtitle}>(without discount)</div>
            </div>
            <span>2344 $</span>
          </div>

          <div className={styles.priceCont}>
            <span className={styles.priceSubtitle}>Discount</span>
            <span>345 $</span>
          </div>

          <div className={classNames(styles.priceCont, styles.priceTotal)}>
            <span>Total</span>
            <span>1999 $</span>
          </div>
          <Link className={styles.checkoutLink} to='/checkout'>Go to Checkout</Link>
        </div>

      </div>
      <div className={classNames("container", styles.sliderCont)}>
        <h2 className={styles.sliderTitle}>Other Products</h2>
        <ProductSlider productList={sortProductsForSlider} />
      </div>
    </>

  )
}

export default Cart
