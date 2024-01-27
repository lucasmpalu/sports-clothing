import React, { Children } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './Layout.module.scss'
import Cart from '../components/Carrito/Cart'
import ModalProduct from '../components/ModalProduct/ModalProduct'
import StickyWhatsapp from '../components/StickyWhatsapp/StickyWhatsapp'
import MenuLabel from '../components/MenuLabel/MenuLabel'


const Layout = ({children}) => {
  return (
    <>

        <Header/>
          <main>
            {children}
          </main>
        <Footer/>
        <Cart/>
        <StickyWhatsapp/>
        <ModalProduct/>
    </>
  )
}

export default Layout