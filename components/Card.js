import React from 'react'
import styles from '../styles/Card.module.css'
import { AiTwotoneStar } from "react-icons/ai";

const Card = () => {
  return (
      <div className={ styles.card}>
          <div className={styles.header}>
        <div className={styles.stars}>
              <div className={ styles.starTry}>
                <AiTwotoneStar style={{ fill: '#fff' }} size={16} className={ styles.icon} />
              </div>
              <div className={ styles.starTry}>
                <AiTwotoneStar style={{ fill: '#fff' }} size={16} className={ styles.icon} />
              </div>
              <div className={ styles.starTry}>
                <AiTwotoneStar style={{ fill: '#fff' }} size={16} className={ styles.icon} />
              </div>
              <div className={ styles.starTry}>
                <AiTwotoneStar style={{ fill: '#fff' }} size={16} className={ styles.icon} />
              </div>
              <div className={ styles.starTry}>
                <AiTwotoneStar style={{ fill: '#fff' }} size={16} className={ styles.icon} />
              </div>
          </div>
          <p>2 days ago</p>
          </div>
          <h4 className={ styles.headline}>Best Gifts</h4>
          <p className={ styles.desc}>I have purchased two necklaces and love both. The quality, the details, everything about it.</p>
          <p className={ styles.name}>Rae Tillman</p>
    </div>
  )
}

export default Card