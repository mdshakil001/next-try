import React from 'react'
import ProductsPage from '../components/ProductsPage'
import SubBanner from '../components/SubBanner'
import { image } from '../public/images/1_DD_Jewelry1234.jpg'
import productsData from '../data/products'; 

const pearls = () => {
  // console.log("productsData = ", productsData[0].earrings.length);
  // console.log("productsData = ", productsData[0].necklaces.length);
  // console.log("productsData = ", productsData[0].bracelets.length);
  return (
    <div>
      <SubBanner img={`./images/1_DD_Jewelry1234.jpg`} />
      <ProductsPage />
    </div>
  )
}

export default pearls