import React from 'react'
import styles from '../styles/Footer.module.css';
import { BiAlarmAdd } from "react-icons/bi";
import { BiAnalyse } from "react-icons/bi";
import { BiAnchor } from "react-icons/bi";
import Card from './Card';
import { AiTwotoneStar } from "react-icons/ai"; ;

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 
import { FaPinterestP } from "react-icons/fa"; 

const Footer = () => {
  return (
      <div className={ styles.container}>
      <hr />
      <br /><br />
          <p className={ styles.headline}>WE  KEEP  IT  SIMPLE,</p>
          <p className={ styles.headline}>SO YOU CAN KEEP IT FOREVER</p>
          
          <div className={styles.icons}>
                <div> 
                  <BiAlarmAdd size={70} color="black" className={ styles.icon}/>
                    <h3>QUALITY MATERIALS</h3>
                </div>

                <div>
                    <BiAnalyse size={70} color="black" className={ styles.icon}/>
                    <h3>CAREFUL CRAFTSMANSHIP</h3>
                </div>
                <div>
                    <BiAnchor size={70} color="black" className={ styles.icon}/>
                    <h3>DIRECTLY FROM US</h3>
                </div>
          </div>
          
          <button className={styles.btn}>& MORE</button>

          <hr />

      <p className={styles.subHeadline}>Take it from them</p>

      <div className={styles.cards}>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
        <div className={styles.card}><Card /></div>
      </div>

      <p className={styles.reviewText}>Rated 4.6/5 based on 2020 reviews. Showing our favorites reviews.</p>
      <div className={styles.trust}>
          <div className={ styles.starTry}>
            <AiTwotoneStar style={{ fill: '#00b67a' }} size={18} className={ styles.icon} />
          </div>
        <h4>Trustpilot</h4>
      </div>

      <hr />
      <br /><br />

      <div className={styles.order}>
          <div className={styles.title}>
            <p>Get 10% off your first order</p>
          </div>
          <div className={styles.form}>
            <input type="text" placeholder='Email'/>
            <button>SUBMIT</button>
          </div>
      </div>
      
       <br /><br />
      <hr />

      <div className={styles.footerMenu}>

        {/* <div className={styles.menuText}> */}
              <div className={styles.div1}>
              <h2>MEET US</h2>
              <div className={styles.submenu}>
                <p>About Us</p>
                <p>Blog</p>
                <p>Fit Guide</p>
                <p>Collaboration</p>
                <p>Sustainability</p>
              </div>
            </div>
            <div className={styles.div2}>
              <h2>EXPERIENCE</h2>
              <div className={styles.submenu}>
                <p>Reviews</p>
                <p>Track My Order</p>
                <p>Terms & Condition</p>
                <p>Privacy Poloicy</p>
                <p>Sitemap</p>
              </div>
            </div>
            <div className={styles.div3}>
              <h2>CUSTOMER SUPPORT</h2>
              <div className={styles.submenu}>
                <p>Help Center</p>
                <p>Shipping Information</p>
                <p>Payment Ploicy</p>
                <p>Return Poloicy</p>
                <p>Jewellary Care</p>
                <p>Warranty</p>
              </div>
            </div>
        {/* </div> */}
        <div className={styles.div4}>
          <div className={styles.icons}>
            <FaFacebookF size={25} className={styles.iconnn}/>
            <FaTwitter size={25} className={styles.iconnn}/>
            <FaInstagram size={25} className={styles.iconnn}/>
            <FaPinterestP size={25}/>
          </div>
        </div>

      </div>

      <div className={styles.footerLast}>
          <div className={styles.text}>
              <p>Copyright &copy; since 2018 Exino Custom Jewelry</p>
              <p>All rights reserved.</p>
          </div>
        <div className={styles.footerImages}>
          <img src="./images/footer/amex.png" alt="" />
          <img src="./images/footer/apple_pay.png" alt="" />
          <img src="./images/footer/diners.jpg" alt="" />
          <img src="./images/footer/discover.jpg" alt="" />
          <img src="./images/footer/mastercard.jpg" alt="" />
          <img src="./images/footer/klarna.png" alt="" />
          <img src="./images/footer/paypal.png" alt="" />
          <img src="./images/footer/ssl.png" alt="" />
          <img src="./images/footer/visa.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer