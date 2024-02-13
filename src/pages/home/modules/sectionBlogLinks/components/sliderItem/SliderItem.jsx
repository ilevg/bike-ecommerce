import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SliderItem.module.scss'

const SliderItem = ({ item }) => {
    return (
        <div className={styles.item}>
            <span className={styles.itemDesc}>{item.title}</span>
            <Link to={item.link} className={styles.itemLink}>Read more</Link>
        </div>
    )
}

export default SliderItem
