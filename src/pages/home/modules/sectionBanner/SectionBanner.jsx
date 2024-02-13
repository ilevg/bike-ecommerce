import React from 'react'
import Button from '../../../../UI/button/Button'
import classes from './SectionBanner.module.scss'

const SectionBanner = () => {
  return (
    <div className="container">
      <div className={classes.bannerBg}></div>
      <div className={classes.banner}>
        <h1 className={classes.bannerTitle}>ELECTRIC BICYCLES</h1>
        <p className={classes.bannerDesc}>The Cento10 Hybrid is a racing bike with an electric pedal assist that sets a new, very high standard for this category.</p>
        <Button width='180px' text='More details'></Button>
      </div>
    </div>
  )
}

export default SectionBanner
