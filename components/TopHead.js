import React from 'react'
import styles from '../styles/TopHead.module.css'

const TopHead = () => {
  return (
          <marquee width="100%" direction="left" height="30px" className={styles.back}>
            This is a sample scrolling
        </marquee>
  )
}

export default TopHead