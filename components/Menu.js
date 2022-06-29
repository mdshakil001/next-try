import React from 'react'
import styles from '../styles/Menu.module.css'
import menuList from '../data/MenuItems';
import image from '../public/images/1_DD_Jewelry1234.jpg'
import Link from 'next/link'

const Menu = () => {
    const [subMenu, setSubmenu] = React.useState(false);

    const [neww, setNeww] = React.useState(false);
    const [shop, setShop] = React.useState(false);
    const [nameIni, setNameIni] = React.useState(false);
    const [gifts, setGifts] = React.useState(false);

    const handleMouse = (e) => {

        if (e.target.innerText === 'New') {
            setNeww(true);
        } else { 
            setNeww(false);
        }
        if (e.target.innerText === 'Shop') {
            setShop(true);
        }else  { 
            setShop(false);
        }
         if (e.target.innerText === 'Names & Initials') {
            setNameIni(true);
        }else  { 
            setNameIni(false);
         }
         if (e.target.innerText === 'Gifts') {
            setGifts(true);
        }else  { 
            setGifts(false);
        }


        if (e.target.innerText === 'Sale' || e.target.innerText === 'Blog') {
            setSubmenu(false);
        } else { 
            setSubmenu(true);
        }
    }
    const mouseLeave = () => { 
        setSubmenu(false);
    }

    return (
        <div className={styles.container} onMouseLeave={mouseLeave }>
            <ul className={styles.ulist} >
                {
                    menuList.map((k, indx) => { 
                        return <li key={indx} onMouseEnter={handleMouse}>{k}</li>
                    })
                }
            </ul>
            {/* <h2>hello</h2> */}
            
            {subMenu && <div className={styles.menubar}>
                {/* <hr /> */}
                {neww && <div>
                    <li>New Arivals</li>
                    <li>Marquise Collection</li>
                </div>}
                
                {shop && <div className={ styles.allrows}>

                    <div className={ styles.rows}>
                        <div className={styles.row}>
                            <h3>Trending</h3>
                            <Link href="/pearls">
                                <li onClick={mouseLeave }>Pearls</li>
                            </Link>
                            <li>Essentials</li>
                            <li>Fine Jewelry</li>
                            <li>Links & Chains</li>
                            <li>Best Sellers</li>
                        </div>
                        <div className={styles.row}>
                            <h3>Type</h3>
                            <li>Pearls</li>
                            <li>Essentials</li>
                            <li>Fine Jewelry</li>
                            <li>Links & Chains</li>
                            <li>Best Sellers</li>
                        </div>
                        <div className={styles.row}>
                            <h3>Materials</h3>
                            <li>Pearls</li>
                            <li>Essentials</li>
                            <li>Fine Jewelry</li>
                            <li>Links & Chains</li>
                            <li>Best Sellers</li>
                        </div>
                        <div className={styles.row}>
                            <h3>Collections</h3>
                            <li>Pearls</li>
                            <li>Essentials</li>
                            <li>Fine Jewelry</li>
                            <li>Links & Chains</li>
                            <li>Best Sellers</li>
                        </div>
                    </div>

                    <div className={styles.img}>
                        <img src='./images/1_DD_Jewelry1234.jpg' alt="image" />
                        <p>All Things Pretty</p>
                        <p>SHOP DIAMOND COLLECTION</p>
                    </div>

                </div>}
                
                {nameIni && <div>
                    <li>Name Necklaces</li>
                    <li>Initial Necklaces</li>
                    <li>Names Rings</li>
                    <li>Initial Rings</li>
                    <li>Initial Jewelary</li>
                </div>}
                
                { gifts && <h2>gifts</h2> }
            </div> }
        </div>
  )
}
export default Menu