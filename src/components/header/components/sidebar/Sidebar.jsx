import React from 'react'
import styles from './Sidebar.module.scss'
import LinkTag from '../../../../UI/linkTag/LinkTag'
import DropdownField from '../../../../UI/dropdownField/DropdownField'
import { fetchNavLinks } from '../../../../services/apiService'
import logo from '../../../../assets/img/logo/logo-black.png'

const navLinks = await fetchNavLinks()

const renderListLinks = (subcategories) => (
    subcategories && subcategories.map((subcategory) => (
        <li key={subcategory}>
            <LinkTag to='/' text={subcategory} color='gray' />
        </li>
    ))
) 

// const renderListLinks = () => (
//     <li>
//         <input type="range" id="range" name="range"></input>
//         <label htmlFor="range">"range"</label>
//     </li>
// )



const Sidebar = ({ isOpen, menuToggle }) => {
    const classToogle = isOpen ? `${styles.sidebarWrapper} ${styles.fadeIn}` : `${styles.sidebarWrapper} ${styles.fadeOut}`

    return (
        <div className={classToogle} >
            <div className={styles.sidebarBg} onClick={menuToggle}></div>
            <div className={styles.sidebar}>
                <img className={styles.navMobLogo} src={logo} alt="logo" />
                <div className={styles.sidebarIcon} onClick={menuToggle}>
                </div>

                <div className={styles.sidebarItems}>
                    <div className={styles.sidebarMob}>
                        <DropdownField navLinks={navLinks} renderChildren={renderListLinks} />
                    </div>
                    <h2 className={styles.sidebarTitle}>INFORMATION</h2>

                    <ul className={styles.sidebarList}>
                        <li>
                            <LinkTag to='/about' text='About us' color='black'></LinkTag>
                        </li>
                        <li>
                            <LinkTag to='/storage' text='Storage' color='black'></LinkTag>
                        </li>
                        <li>
                            <LinkTag to='/terms' text='User agreement' color='black'></LinkTag>
                        </li>
                        <li>
                            <LinkTag to='/deliverypay' text='Delivery and payment' color='black'></LinkTag>
                        </li>
                        <li>
                            <LinkTag to='/blog' text='Blog' color='black'></LinkTag>
                        </li>
                        <li>
                            <LinkTag to='/contact' text='Contacts' color='black'></LinkTag>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
