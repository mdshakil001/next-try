import React from 'react'
import { BiAbacus } from "react-icons/bi";
import styles from '../styles/ProductsPage.module.css'
import Product from './Product';
import productsData from '../data/products'; 


const ProductsPage = ({ headline, description }) => {
    let allProducts = productsData[0].all;
    // console.log("productsData = ", productsData[0].all);

    const handleBox = (e) => {
        console.log(e.target.checked, e.target.name);
        if (e.target.checked === 'true', e.target.name === 'necklaces') { 
            allProducts = productsData[0].necklaces;
        }
    }
  return (
      <div>
          <h2>{headline}</h2>
          <p>{description}</p>
          <hr />

          <div className={styles.products}>
              
              <div className={styles.filters_section}>
                  <div className={styles.filters}>
                      <BiAbacus size={25} />
                  <h4>FILTERS</h4>
              </div>
              <hr />

                  <div className={styles.categories}>
                  <h5>Categories</h5>

                      <div className={styles.option}>
                        <input
                            // className={styles.checkbox}
                            type="checkbox"
                              onClick={handleBox}
                              name="necklaces"
                            />
                            <label htmlFor="spicy">Necklaces</label>
                    </div>
                    <div  className={styles.option}>
                        <input
                            className={styles.checkbox}
                              type="checkbox"
                              name="earrings"
                            />
                            <label htmlFor="spicy">Earrings</label>
                    </div>
                    <div  className={styles.option}>
                        <input
                            className={styles.checkbox}
                              type="checkbox"
                              name="=braceslets"
                            />
                            <label htmlFor="spicy">Braceslets</label>
                    </div>
              </div>
              <hr />
                  <div className={styles.material}>
                  <h5>Material</h5>

                    <div  className={styles.option}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            />
                            <label htmlFor="spicy">Gold Plated</label>
                    </div>
                    <div  className={styles.option}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            />
                            <label htmlFor="spicy">Sterling Silver</label>
                    </div>
                    <div  className={styles.option}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            />
                            <label htmlFor="spicy">Gold Vermeil</label>
                    </div>
              </div>
              </div>

                <div className={styles.gallary}>
                  {
                      allProducts.map((k, indx) => { 
                          return <Product price={k.price} desc={k.name} key={indx} />
                      })
                  }
              </div>
          </div>

    </div>
  )
}

export default ProductsPage