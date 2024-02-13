import React from 'react'
import styles from './Button.module.scss'

const Button = ({ width = '', text, imgUrl, alt }) => {
  const btnStyle = {
    width: width
  }
  return (
      <button className={styles.btn} style={btnStyle}>
        <img src={imgUrl} alt={alt} />
        <span>{text}</span>
      </button>
  )
}

export default Button
