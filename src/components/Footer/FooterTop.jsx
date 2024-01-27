import React, {useState, useEffect} from 'react'
import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import mas from '../../../assets/icons/mas.png'
import menos from '../../../assets/icons/menos.png'

const FooterTop = () => {

  const [info, setInfo] = useState(window.innerWidth > 768 ? true : false);
  const [menu, setMenu] = useState(window.innerWidth > 768 ? true : false);
  
  return (
    <div className={styles.footerTop}>

            <nav className={styles.navsFooter}>
              <div className={styles.containerMenuFooter}>
                <h4>Menú</h4>
                {<img src={!menu ? mas : menos} className={styles.menuFooter} onClick={() => {!menu ? setMenu(true) : setMenu(false)}}></img>}
              </div>
              <div style={{display: menu ? 'flex' : 'none' }} className={styles.containerNavLink}>
                <NavLink className={styles.NavLink}  to="/">Inicio</NavLink>
                <NavLink className={styles.NavLink}  to="/products/zapatillas">Zapatillas</NavLink>
                <NavLink className={styles.NavLink}  to="/products/remeras">Remeras</NavLink>
                <NavLink className={styles.NavLink}  to="/products/buzos">Buzos</NavLink>
                <NavLink className={styles.NavLink}  to="/products/shorts">Shorts</NavLink>
                <NavLink className={styles.NavLink}  to="/products/joggings">Joggings</NavLink>
                <NavLink className={styles.NavLink}  to="/Nosotros">Nosotros</NavLink>
                <NavLink className={styles.NavLink}  to="/contacto">Contacto</NavLink>
              </div>
              
            </nav>
  
            <nav className={styles.navsFooter}>
                <div className={styles.containerMenuFooter}>
                  <h4>Información</h4>
                  {<img src={!info ? mas : menos} className={styles.menuFooter} onClick={() => {!info ? setInfo(true) : setInfo(false)}}></img>}
                </div>
                <div style={{display: info ? 'flex' : 'none' }} className={styles.containerNavLink}>
                  <NavLink className={styles.NavLink} to="/">Inicio</NavLink>
                  <NavLink className={styles.NavLink} to="/">Locales</NavLink>
                  <NavLink className={styles.NavLink} to="/">Guía de talles</NavLink>
                  <NavLink className={styles.NavLink} to="/">Como comprar</NavLink>
                  <NavLink className={styles.NavLink} to="/">Medio de pago</NavLink>
                  <NavLink className={styles.NavLink} to="/">Cambios y Devoluciones</NavLink>
                  <NavLink className={styles.NavLink} to="/">Terminos y condiciones</NavLink>
                </div>
                
            </nav>

    </div>
  )
}

export default FooterTop