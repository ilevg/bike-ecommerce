import React from 'react'
import styles from './Checkout.module.scss'
import classNames from 'classnames'

import PagesTitle from '../../components/pagesTitle/PagesTitle'
import titleBgImage from '../../assets/img/titlesBg/about.png'

import LinkTag from '../../UI/linkTag/LinkTag'
import Button from '../../UI/button/Button'


const Cart = () => {
  return (
    <>
      <PagesTitle img={titleBgImage} pageName='Checkout page' />
      <div className={classNames(styles.checkout, 'container')}>
        <div className={styles.details}>
          <div className={styles.deliveryDetails}>
            <h3 className={styles.subtitle} >1 Delivery Details</h3>
            <form>
              <div className={styles.inputsCont}>
                <input className={styles.input} type="text" placeholder='First Name*' />
                <input className={styles.input} type="text" placeholder='Last Name*' />
              </div>
              <div className={styles.inputsCont}>
                <input className={styles.input} type="text" placeholder='City*' />
                <input className={styles.input} type="text" placeholder='Street*' />
                <input className={styles.input} type="text" placeholder='Bld.*' />
                <input className={styles.input} type="text" placeholder='Flat' />
              </div>
              <div className={styles.inputsCont}>
                <input className={styles.input} type="text" placeholder='Phone number*' />
                <input className={styles.input} type="text" placeholder='E-mail*' />
              </div>
              <textarea className={styles.textarea} name="" id="" cols="30" rows="10" placeholder='Order comments'></textarea>
            </form>
          </div>

          <div className={styles.payDetails}>
            <h3 className={styles.subtitle} >2 Payment Details</h3>
            <span className={styles.paySubtitle}>Shipping method</span>
            <div>
              <input className={styles.checkbox} type="checkbox" name="deliveryCur" id="deliveryCur" placeholder='Courier delivery' />
              <label className={styles.checkboxLable} htmlFor="deliveryCur">Payment online, on the website</label>
            </div>
            <div>
              <input className={styles.checkbox} type="checkbox" name="deliveryPickup" id="deliveryPickup" placeholder='Pickup' />
              <label className={styles.checkboxLable} htmlFor="deliveryPickup">Payment online, on the website</label>
            </div>

            <span className={styles.paySubtitle}>Pay method</span>
            <div>
              <input  className={styles.checkbox} type="checkbox" name="payWeb" id="payWeb" placeholder='Payment online, on the website' />
              <label className={styles.checkboxLable} htmlFor="payWeb">Payment online, on the website</label>
            </div>
            <div>
              <input className={styles.checkbox} type="checkbox" name="payCardCur" id="payCardCur" placeholder='Payment to the courier by card' />
              <label className={styles.checkboxLable} htmlFor="payCardCur">Payment online, on the website</label>
            </div>
            <div>
              <input className={styles.checkbox} type="checkbox" name="payCashCur" id="payCashCur" placeholder='Payment to the courier in cash' />
              <label className={styles.checkboxLable} htmlFor="payCashCur">Payment online, on the website</label>
            </div>
            <div>
              <input className={styles.checkbox} type="checkbox" name="payStore" id="payStore" placeholder='Payment in the store' />
              <label className={styles.checkboxLable} htmlFor="payStore">Payment online, on the website</label>
            </div>
          </div>
        </div>

        <div className={styles.orderDetails}>
          <h3 className={styles.subtitle} >3 Your Order</h3>
          <div className={styles.deliveryInfo}>
            <h4 className={styles.deliverySubtitle}>Courier delivery</h4>
            <div className={styles.infoItemCont}>
              <span>Address:</span>
              <span>London, Scryde str, 25/23</span>
            </div>
            <div className={styles.infoItemCont}>
              <span>Name:</span>
              <span>Dile Sneike</span>
            </div>
            <div className={styles.infoItemCont}>
              <span>Phone number:</span>
              <span>1-3267-67-66</span>
            </div>
            <div className={styles.infoItemCont}>
              <span>E-mail:</span>
              <span>deli@gmail.com</span>
            </div>
          </div>


          <div className={styles.total}>
            <div className={styles.totalPriceCont}>
              <span>Total of 3 products</span>
              <span className={styles.totalPrice}>7234 $</span>
            </div>

            <Button width='346px' text='Confirm the order' />

            <span className={styles.termsCont}>
              Your personal data will be used to process your orders, simplify your work with the site and for other purposes described in our 
              <a className={styles.terms} href="/terms"> privacy policy.</a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
