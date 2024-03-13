import styles from './SectionMain.module.scss'
import Button from '../../../UI/button/Button'
import SingleProductImgSlider from '../../../components/singleProductImgSlider/SingleProductImgSlider'
import { ListproductsContext } from '../../../context';
import { useContext } from 'react';

const SectionMain = () => {
  const [product, setProduct] = useContext(ListproductsContext);

  return (
    <div>
      <div>
        <SingleProductImgSlider />
      </div>


      {
        product &&
        <div>
          <h2>{product.name}</h2>
          <span>{product.brand}</span>
          <span>{product.article}</span>
          <span>In stock</span>
          <span>5500 $</span>
          <span>Professional racing hardtail for cross-country Championship and World Cup level. One of the lightest frames among the racing hardtails for cross-country.</span>
          <div className={styles.productButtons}>
            <div className={styles.productQuantityCont}>
              <span className={styles.productDecr}>-</span>
              <span className={styles.productQuantity}>0</span>
              <span className={styles.productIncr}>+</span>
            </div>
            <Button width='180px' text='To cart' />
          </div>
        </div>
      }

    </div>
  )
}

export default SectionMain
