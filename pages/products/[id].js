import React from 'react'
import styles from '../../styles/SingleProduct.module.css'
import Image from 'next/image'
// import product1 from '../public/images/single/product_1.jpg';
// import product1 from '../public/images/products/1_DD_Jewelry1234.jpg';

const SingleProduct = () => {
  return (
      <div className={styles.container}>
          <div className={styles.imageText}>    
                <div className={styles.imageDetails}>
                    <div className={styles.allImages}>
                        <img src="/images/single/product_1.jpg" alt="" />
                        <img src="/images/single/product_2.png" alt="" />
                        <img src="/images/single/product_3.png" alt="" />
                        <img src="/images/single/product_4.png" alt="" />
                    </div>
                    <div className={styles.mainImage}>
                        <img src="/images/single/product_1.jpg" alt="" />
                    </div>
              </div>
              <div className="onlyText">
                  <p>Home - Pearl Jewelry Collection</p>
                  <h3>ISLA BLACK PEARL NECKLACE WITH PAPERCLIP CHAIN - GOLD PLATED</h3>
                  <h4>$ 135</h4>
              </div>
          </div>
      </div>
  )
}

export default SingleProduct