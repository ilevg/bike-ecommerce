import React, { useState, useEffect } from 'react'
import styles from './DropdownField.module.scss'


const DropdownField = ({ navLinks, renderChildren }) => {
    const [isOpenState, setIsOpenState] = useState({})

    useEffect(() => {
        const initialState = navLinks.reduce((acc, index) => {
            acc[index] = false
            return acc
        }, {})
        setIsOpenState(initialState)
    }, [navLinks])

    const dropdownToggle = (index) => {
        setIsOpenState(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }))
    }

    const renderSubcategory = (link, index) => {
        const { title, children } = link
        return (
            < li className={styles.navMobItem} key={index}>
                <ul
                    className={isOpenState[index] ? `${styles.navMobSubcategory} ${styles.subcategoryActive}` : styles.navMobSubcategory}
                    onClick={() => dropdownToggle(index)}
                    key={index}
                >
                    <li>{title}</li>
                    <li className={styles.navMobArrows}>{isOpenState[index] ? 'ᐱ' : 'ᐯ'}</li>
                </ul>

                {(
                    <ul className={isOpenState[index] ? `${styles.navMobLinks} ${styles.navMobOpen}` : `${styles.navMobLinks} ${styles.navMobClose}`}>
                        {children && children.length > 0 ? renderChildren(children) : renderChildren()}
                    </ul>
                )}

            </li >
        )
    }

    return (
        <div>
            <ul className={styles.navMob}>
                {navLinks.map(renderSubcategory)}
            </ul>
        </div>
    )
}
export default DropdownField
