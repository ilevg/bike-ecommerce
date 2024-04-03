import React from 'react'
import styles from './Button.module.scss'

const Button = ({ onClick, width = '', text, imgUrl, alt }) => {
  const btnStyle = {
    width: width
  }
  return (
      <button onClick={onClick} className={styles.btn} style={btnStyle}>
        <img src={imgUrl} alt={alt} />
        <span>{text}</span>
      </button>
  )
}

export default Button
