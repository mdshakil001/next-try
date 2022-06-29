import React from 'react'
import styles from '../styles/SubBanner.module.css'

const SubBanner = ({ img }) => {
  return (
      <div>
          <img src={img} alt="" className={ styles.subBanner} />
    </div>
  )
}

export default SubBanner