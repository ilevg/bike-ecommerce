import React from 'react'
import styles from './Sidebar.module.scss'
import LinkTag from '../../../../UI/linkTag/LinkTag'
import DropdownField from '../../../../UI/dropdownField/DropdownField'
import logo from '../../../../assets/img/logo/logo-black.png'

import { fetchData } from '../../../../services/apiService'
import { linkData } from '../data/linkData'

const { data } = await fetchData('/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer')
const navLinks = data.header.headerMenuItems

const renderListLinks = (children) => (
    children && children.map((subcategory) => {
        return <li key={subcategory.ID}>
            <LinkTag to={subcategory.url} text={subcategory.title} color='gray' />
        </li>
    })
)

const Sidebar = ({ isOpen, menuToggle }) => {
    const classToogle = isOpen ? `${styles.sidebarWrapper} ${styles.fadeIn}` : `${styles.sidebarWrapper} ${styles.fadeOut}`

    return (
        <div className={classToogle} >
            <div className={styles.sidebarBg} onClick={menuToggle}></div>
            <div className={styles.sidebar}>
                <img className={styles.navMobLogo} src={logo} alt="logo" />
                <div className={styles.sidebarIcon} onClick={menuToggle}></div>

                <div className={styles.sidebarItems}>
                    <div className={styles.sidebarMob}>
                        <DropdownField navLinks={navLinks} renderChildren={renderListLinks} />
                    </div>
                    <h2 className={styles.sidebarTitle}>INFORMATION</h2>
                    <ul className={styles.sidebarList}>
                        {
                            linkData.map(link => (
                                <li key={link.route} onClick={menuToggle}>
                                    <LinkTag to={link.route} text={link.text} color='black'></LinkTag>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
