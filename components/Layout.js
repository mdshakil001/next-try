import React from 'react'
import Footer from './Footer'
import MainHead from './MainHead'
import Menu from './Menu'
import TopHead from './TopHead'
import styles from '../styles/Layout.module.css';

const Layout = ({ children}) => {
    return (
      <div>    
        <TopHead />
          <div className={ styles.rest}>
            <div className={ styles.fixed}>
              <MainHead />
              <Menu />
            </div>
            {children}
            <Footer />
        </div>
      </div>
  )
}

export default Layout