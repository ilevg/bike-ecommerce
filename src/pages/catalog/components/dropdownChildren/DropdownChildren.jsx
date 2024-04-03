import styles from './DropdownChildren.module.scss'
import PriceRangeSlider from '../../../../components/priceRangeSlider/PriceRangeSlider'

const DropdownChildren = (item) => (
  item.value.map((child) => (
    child.value
      ?
      <li  className={styles.item} key={child.value}>
        <div className={styles.titleCont}>
          <input className={styles.input} type="checkbox" name={child.value} id={child.value} />
          <span>{child.value}</span>
        </div>
        <span>({child.count})</span>
      </li>
      : typeof child === 'number'
        ?
        <div key={child}>
          <PriceRangeSlider minPrice={0} maxPrice={child} />
        </div>

        :
        <li className={styles.titleCont} key={child}>
          <input className={styles.input} type="checkbox" name={child} id={child} />
          <span>{child}</span>
        </li>
  ))
)
export default DropdownChildren