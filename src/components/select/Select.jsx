import React, { useState } from 'react'
import styles from './Select.module.scss'
const Select = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value)
    }
    return (
        <select className={styles.select} name="sort" id="sort" value={selectedValue} onChange={handleSelectChange}>
            <option className={styles.option} value="new">New products</option>
            <option className={styles.option} value="descPrice">Price: descending</option>
            <option className={styles.option} value="ascPrice">Price: ascending</option>
        </select>
    )
}

export default Select
