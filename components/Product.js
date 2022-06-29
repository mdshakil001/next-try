import React from 'react'
import styles from '../styles/Product.module.css';
import Link from 'next/link';

const Product = ({ price, desc}) => {
  return (
    <div className={styles.card}>
      <Link href="/products/1">
        <div>
            <img src="./images/products/m_med_110-01-3235-09.jpg" alt="product" />
            <p>{ desc}</p>
            <h4>$ { price}</h4>
        </div>
      </Link>
     </div>
  )
}

export default Product