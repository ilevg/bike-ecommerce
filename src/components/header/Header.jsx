import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import navIcons from '../constants/navIcons';
import styles from './Header.module.scss';
import logo from '../constants/logo';
import { fetchData } from '../../services/apiService'
import LinkTag from '../../UI/linkTag/LinkTag';
import Sidebar from './components/sidebar/Sidebar';
import BurgerIcon from '../../assets/img/icons/burger-icon.png';
// import { ListproductsContext } from '../../context';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  // const [products, setProducts] = useContext(ListproductsContext);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
        const { data } = await fetchData('/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer')
        setNavLinks(data.header.headerMenuItems);
    };
    fetchLinks();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setIsFixed(true) : setIsFixed(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'visible' : 'hidden';
    document.body.style.marginRight = isOpen ? '0' : `${window.innerWidth - document.documentElement.clientWidth}px`;
  };

  // const onClickProductsListChange = (category) => {
  //   const filteredProducts = products.filter(product => product.categories[0].name === category);
  //   setProducts(filteredProducts);
  // };

  // useEffect(() => {
  //   onClickProductsListChange('Bicycles');
  // }, []);

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
              {navLinks.map(({ ID, url, title }) => (
                <li key={ID}>
                  <LinkTag to={url} text={title}></LinkTag>
                </li>
              ))}
            </ul>

            <ul className={styles.headerIcons}>
              {navIcons.map(({ imgLink, alt, linkRef }, index) => (
                <li key={index} className={styles.headerIcon}>
                  <Link to={linkRef}>
                    <img src={imgLink} alt={alt} />
                  </Link>
                </li>
              ))}
              <button className={styles.headerBurger} onClick={menuToggle}>
                <img className={styles.headerBurgerIcon} src={BurgerIcon} alt='burger-icon' />
              </button>
            </ul>
          </div>
        </div>
        <Sidebar isOpen={isOpen} menuToggle={menuToggle} />
      </header>
    </>
  );
};

export default Header;
