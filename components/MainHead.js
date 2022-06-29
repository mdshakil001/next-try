import styles from '../styles/MainHead.module.css';
import React from 'react'
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import Sidebar from './Sidebar';


const MainHead = () => {
  const [showSide, setShowSide] = React.useState(false);
  const sidebarHandler = () => { 
    setShowSide(true);
  }
  const closeSidebar = () => {
    setShowSide(false);
  }
  return (
    <div className={styles.nav}>
      <div className={styles.icon_logo}>
        <FaBars size={25} className={styles.barIcon} onClick={ sidebarHandler} />
          <Link href="/">
              <h1 className={ styles.logo}>Exino</h1>
          </Link>
      </div>
      {
        showSide && <div className={styles.sidebar}>
          <Sidebar />
        </div>
      }
      {showSide && 
        <FiX size={30} onClick={closeSidebar} className={ styles.closeSide} />
     }

          <div className={ styles.left}>
            <div className={ styles.search}>
          <input className={styles.input} type="text" placeholder='search' />
                <FiSearch size={22} style={{cursor:'pointer'}} />
            </div>
            <h4>Help</h4>
            <h4>Tracker</h4>
            <div className="profile"><FiUser size={25}/></div>
            <div className="bag"> <FiLock size={23}/> </div>
        <div className={ styles.number}>(0)</div>
          </div>
    </div>
  )
}

export default MainHead