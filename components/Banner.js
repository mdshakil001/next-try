import React from 'react'
import styles from '../styles/Banner.module.css'

const Banner = () => {
  return (
      <div className={ styles.container}>
          <img className={styles.banner} src="./images/main_banner.jpg" alt="logo" />
          
      <div className={styles.subImg }>
          <img className={styles.banner} src="./images/box_1_paperclip.jpg" alt="logo" />
          <img className={styles.banner} src="./images/box_2_initials.jpg" alt="logo" />
          </div>
    </div>
  )
}

export default Banner