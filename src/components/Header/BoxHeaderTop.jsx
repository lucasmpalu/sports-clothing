import React from 'react'
import styles from './Header.module.scss';
import NavCart from './NavCart';
import Logo from './Logo';
import { useState } from 'react';
import ModalSuccess from '../ModalSuccess/ModalSuccess';


const BoxHeaderTop = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600 ? true : false)
useState
  window.addEventListener('resize', () => {
    if(window.innerWidth > 600){
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
  })

  return (
      <div className={styles.boxHeaderTop}>
        <Logo/>
        <NavCart/>
        {isMobile && <ModalSuccess/>}
      </div>
  )
}

export default BoxHeaderTop