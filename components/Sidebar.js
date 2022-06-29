import React from 'react'
import styles from '../styles/Sidebar.module.css'; //BsPlus
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const Sidebar = () => {
    const [newPlus, setNewPlus] = React.useState(true);
    const [shopPlus, setShopPlus] = React.useState(true);
    const [namePlus, setNamePlus] = React.useState(true);
    const [giftsPlus, setGiftsPlus] = React.useState(true);

    const [newMinus, setNewMinus] = React.useState(false);
    const [shopMinus, setShopMinus] = React.useState(false);
    const [nameMinus, setNameMinus] = React.useState(false);
    const [giftsMinus, setGiftsMinus] = React.useState(false);

    const newPlusIconClick = () => { 
        setNewPlus(false);
        setNewMinus(true);
    }
    const shopPlusIconClick = () => { 
        setShopPlus(false);
        setShopMinus(true);
    }
    const namesPlusIconClick = () => { 
        setNamePlus(false);
        setNameMinus(true);
    }
    const giftsPlusIconClick = () => { 
        setGiftsPlus(false);
        setGiftsMinus(true);
    }

    const newMinusIconClick = () => { 
        setNewPlus(true);
        setNewMinus(false);
    }
    const shopMinusIconClick = () => { 
        setShopPlus(true);
        setShopMinus(false);
    }
    const namesMinusIconClick = () => { 
        setNamePlus(true);
        setNameMinus(false);
    }
    const giftsMinusIconClick = () => { 
        setGiftsPlus(true);
        setGiftsMinus(false);
    }
    
  return (
      <div className={styles.container}>
          
          <h1>Exino</h1>

          <div className={styles.menuItems}>
              
              <div className={styles.nested_item}>    
                <div className={styles.menu_icon}>    
                    <p className={styles.menuName}>NEW IN</p>
                   {newPlus && <BsPlus size={25} onClick={newPlusIconClick} className={styles.plusIcon}/>} 
                   {newMinus && <BiMinus size={25} onClick={newMinusIconClick} className={styles.plusIcon}/>} 
                  </div>

                  { newMinus && <div>this is nested</div> }
                  
              </div>

             <div className={styles.nested_item}>    
                <div className={styles.menu_icon}>    
                    <p className={styles.menuName}>SHOP</p>
                      {shopPlus && <BsPlus size={25} onClick={shopPlusIconClick} className={styles.plusIcon} />} 
                      {shopMinus && <BiMinus size={25} onClick={shopMinusIconClick} className={styles.plusIcon}/>}
                </div>
              </div>
              
              <div className={styles.nested_item}> 
                <div className={styles.menu_icon}>    
                    <p className={styles.menuName}>NAMES & INITIALS</p>
                      {namePlus && <BsPlus size={25} onClick={namesPlusIconClick} className={styles.plusIcon} />} 
                      {nameMinus && <BiMinus size={25} onClick={namesMinusIconClick} className={styles.plusIcon}/>}
                </div>
              </div>
              
                <div className={styles.nested_item}> 
                    <div className={styles.menu_icon}>    
                    <p className={styles.menuName}>GIFTS</p>
                      {giftsPlus && <BsPlus size={25} onClick={giftsPlusIconClick} className={styles.plusIcon} />} 
                      {giftsMinus && <BiMinus size={25} onClick={giftsMinusIconClick} className={styles.plusIcon}/>}
                    </div>
                </div>

                <p className={styles.sale}>SALE</p>
                <p className={styles.menuName}>BLOG</p>
         </div>

    </div>
  )
}

export default Sidebar