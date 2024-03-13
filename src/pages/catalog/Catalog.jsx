import React from 'react'
import PagesTitle from '../../components/pagesTitle/PagesTitle'
import ProductCard from '../../components/productCard/ProductCard'
import { fetchProducts } from '../../services/apiService'

import styles from './Catalog.module.scss'
import titleBgImage from '../../assets/img/titlesBg/about.png'
import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const productsList = await fetchProducts()
const Catalog = () => {
  const location = useLocation()
  const [ catalogType, setCatalogType ] = useState('');

  useEffect(() => {
    const path = location.pathname;
    const catalogTypeFormated = path.substring(1).charAt(0).toUpperCase() + path.substring(2)
    setCatalogType(catalogTypeFormated);
    }, [location.pathname])

  return (
    <div>
      <PagesTitle img={titleBgImage} pageName={catalogType} />
      <div className="container">
        <div className={styles.catalog}>
          <div className={styles.catalogFilters}>
            Only in stock
            <input type="checkbox" name="" id="" />
          </div>
          <div className={styles.catalogProducts}>
            <div className={styles.catalogSort}>
              Sortting
            </div>
            <div className={styles.catalogProductsCont}>
              {
                productsList.map(product => (
                  <div  key={product.id} className={styles.catalogProduct}>
                    <ProductCard product={product} />
                  </div>
                ))
              }
            </div>
          </div>

        </div>
        <div className={styles.catalogProductsPagination}>
          1, 2, 3, 4, 5, 6, 7, 8 ... 100
        </div>
      </div>
    </div>
  )
}

export default Catalog
