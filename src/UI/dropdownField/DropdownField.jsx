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
        const { linkText, subcategories } = link
        return (
            < li className={styles.navMobItem} key={linkText}>
                <ul
                    className={isOpenState[index] ? `${styles.navMobSubcategory} ${styles.subcategoryActive}` : styles.navMobSubcategory}
                    onClick={() => dropdownToggle(index)}
                    key={linkText}
                >
                    <li>{linkText}</li>
                    <li className={styles.navMobArrows}>{isOpenState[index] ? 'ᐱ' : 'ᐯ'}</li>
                </ul>

                {(
                    <ul className={isOpenState[index] ? `${styles.navMobLinks} ${styles.navMobOpen}` : `${styles.navMobLinks} ${styles.navMobClose}`}>
                        {subcategories && subcategories.length > 0 ? renderChildren(subcategories) : renderChildren()}
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
