import React, { useState } from 'react'
import styles from './FilterDropdown.module.scss'

const FilterDropdownField = ({ title, renderChildren }) => {

    const [isOpenState, setIsOpenState] = useState(false)

    const dropdownToggle = () => {
        setIsOpenState(!isOpenState)
    }
    
    const arrowIcon = isOpenState ? 'ᐱ' : 'ᐯ'
    const openClassToggle = isOpenState ? `${styles.dropdownItems} ${styles.dropdownItemsOpen}` : `${styles.dropdownItems} ${styles.dropdownItemsClose}`

    return (
        < ul key={title} className={styles.dropdown}>
            <ul className={styles.title} onClick={dropdownToggle} >
                <li>{title}</li>
                <li className={styles.navMobArrows}>{arrowIcon}</li>
            </ul>

            {(
                <ul key={title} className={openClassToggle}>
                    {renderChildren}
                </ul>
            )}
        </ul >
    )
}
export default FilterDropdownField