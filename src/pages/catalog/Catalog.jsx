import React, { useState, useEffect, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';
import PagesTitle from '../../components/pagesTitle/PagesTitle'
import ProductCard from '../../components/productCard/ProductCard'
import Select from '../../components/select/Select'
import FilterDropdownField from './components/filterDropdown/FilterDropdown'
import DropdownChildren from './components/dropdownChildren/DropdownChildren'
import styles from './Catalog.module.scss'
import classNames from 'classnames'
import titleBgImage from '../../assets/img/titlesBg/about.png'
import { ListproductsContext } from '../../context'
import { itemsForFilterField } from './data'

const PAGE_SIZE = 12

const Catalog = () => {
  // const uniqueKey = uuidv4();

  const location = useLocation()
  const [catalogType, setCatalogType] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [products] = useContext(ListproductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const path = location.pathname;
    const catalogTypeFormated = path.substring(1).charAt(0).toUpperCase() + path.substring(2)
    setCatalogType(catalogTypeFormated);

    const fetchAndSetProducts = () => {
      let filtered = catalogTypeFormated === 'Trade-in'
        ?
        products.slice()
        :
        products.slice().filter(product =>  product.categories[0] && product.categories[0].name === catalogTypeFormated)
      setFilteredProducts(filtered)
    }

    fetchAndSetProducts()
    setCurrentPage(1)
    setActivePage(1)
  }, [location.pathname, products])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    setActivePage(pageNumber)
  }

  const pagesLength = Math.ceil(filteredProducts.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  const currentList = filteredProducts.slice(startIndex, endIndex)


  return (
    <div>
      <PagesTitle img={titleBgImage} pageName={catalogType} />
      <div className="container">
        <div className={styles.catalogSort}>
          <div className={styles.catalogStock}>
            <span>Only in stock</span>
            <input className={styles.catalogInput} type="checkbox" name="stock" id="stock" />
          </div>
          <Select />
        </div>

        <div className={styles.catalog}>

          <div className={styles.catalogFilters}>
            {
              itemsForFilterField.map((item, index) => (
                <FilterDropdownField
                  key={index}
                  title={item.title}
                  renderChildren={DropdownChildren(item)}
                />
              ))
            }
          </div>

          <div className={styles.catalogProductsCont}>
            {
              currentList.map(product => (
                <div key={product.id} className={styles.catalogProduct}>
                  <ProductCard product={product} />
                </div>
              ))
            }
          </div>
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.paginBtnArrow}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={activePage === 1}
          >≪</button>
          {Array.from({ length: pagesLength }, (_, index) => (

            <button
              className={classNames(styles.paginBtn, activePage === index + 1 && styles.activePage)}
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={styles.paginBtnArrow}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={activePage === pagesLength}
          >≫</button>
        </div>
      </div>
    </div>
  )
}

export default Catalog
