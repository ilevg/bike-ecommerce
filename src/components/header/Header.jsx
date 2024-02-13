import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navIcons from '../constants/navIcons'
import styles from './Header.module.scss'
import logo from '../constants/logo'
import { fetchNavLinks } from '../../services/apiService'
import LinkTag from '../../UI/linkTag/LinkTag'
import Sidebar from './components/sidebar/Sidebar'

import BurgerIcon from '../../assets/img/icons/burger-icon.png'
import { useEffect } from 'react'

const navLinks = await fetchNavLinks()

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setIsFixed(true) : setIsFixed(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuToggle = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'visible' : 'hidden';
    document.body.style.marginRight = isOpen ? '0' : `${scrollbarWidth}px`;
  }

  return (
    <>
      <div className={`${isFixed ? styles.headerSpacerVisible : ''}`}></div>
      <header className={`${styles.header} ${isFixed ? styles.headerVisible : ''}`}>
        <div className='container'>
          <div className={styles.headerItems}>

            <Link to={logo.linkRef}>
              <img className={styles.headerLogo} src={logo.src} alt={logo.alt} />
            </Link>

            <ul className={styles.headerList}>
              {navLinks.map(({ linkRef, linkText }) => {
                return <li key={linkRef}>
                  <LinkTag to={linkRef} text={linkText}></LinkTag>
                </li>
              })}
            </ul>

            <ul className={styles.headerIcons}>
              {
                navIcons.map(({ imgLink, alt, linkRef }, index) => (
                  <li key={index} className={styles.headerIcon}>
                    <Link to={linkRef}>
                      <img src={imgLink} alt={alt} />
                    </Link>
                  </li>
                ))
              }
              <button className={styles.headerBurger} onClick={menuToggle}>
                <img className={styles.headerBurgerIcon} src={BurgerIcon} alt='burger-icon' />
              </button>
            </ul>
          </div>
        </div>
        <Sidebar isOpen={isOpen} menuToggle={menuToggle} />
      </header>
    </>
  )
}

export default Header
