import React from 'react'
import styles from './OrderHistory.module.scss'
import bikeImg from '../../../../assets/img/delete/image68.png'
import { useState } from 'react'
import classNames from 'classnames'

const OrderHistory = () => {
    const [isOpen, setIsOpen] = useState(false)
    const productInfoOpen = () => {
        setIsOpen(!isOpen)
    }
    const arrowIcon = isOpen ? 'ᐱ' : 'ᐯ'

    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>order history</h3>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <span>Date</span>
                    <span>Order Number</span>
                    <span>Order Price</span>
                    <span className={styles.orderStatus}>Status</span>
                </div>
                <div className={styles.productCont} onClick={productInfoOpen}>
                    <span>22.01.2023</span>
                    <span>3243243253</span>
                    <span>4555 $</span>
                    <span className={styles.orderStatus}>New order</span>
                    <span >{arrowIcon}</span>
                </div>
                <div colSpan={5} className={isOpen ? styles.productOpen : styles.productClose}>
                    <div >
                        <div className={styles.product}>
                            <img className={styles.img} src={bikeImg} alt="qweeqw" />
                            <span className={styles.productName}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</span>

                            <div className={styles.productPrice}>
                                <span>4 656 $</span>
                                <div className={styles.productOldPrice}>7 655 $</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.productCont, styles.productContSec)} onClick={productInfoOpen}>
                    <span>22.01.2023</span>
                    <span>3243243253</span>
                    <span>4555 $</span>
                    <span className={styles.orderStatus}>New order</span>
                    <span >{arrowIcon}</span>
                </div>

                <div colSpan={5} className={isOpen ? styles.productOpen : styles.productClose}>
                    <div >
                        <div className={styles.product}>
                            <img className={styles.img} src={bikeImg} alt="qweeqw" />
                            <span className={styles.productName}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</span>

                            <div className={styles.productPrice}>
                                <span>4 656 $</span>
                                <div className={styles.productOldPrice}>7 655 $</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div colSpan={5} className={isOpen ? styles.productOpen : styles.productClose}>
                    <div >
                        <div className={styles.product}>
                            <img className={styles.img} src={bikeImg} alt="qweeqw" />
                            <span className={styles.productName}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</span>

                            <div className={styles.productPrice}>
                                <span>4 656 $</span>
                                <div className={styles.productOldPrice}>7 655 $</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div colSpan={5} className={isOpen ? styles.productOpen : styles.productClose}>
                    <div >
                        <div className={styles.product}>
                            <img className={styles.img} src={bikeImg} alt="qweeqw" />
                            <span className={styles.productName}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</span>

                            <div className={styles.productPrice}>
                                <span>4 656 $</span>
                                <div className={styles.productOldPrice}>7 655 $</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderHistory
