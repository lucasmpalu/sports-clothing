import React from 'react'
import styles from './Footer.module.scss'
import amex from "../../../assets/medios/amex@2x.png"
import mastecard from "../../../assets/medios/mastercard@2x.png"
import visa from "../../../assets/medios/visa@2x.png"
import naranja from "../../../assets/medios/tarjeta-naranja@2x.png"
import shopping from "../../../assets/medios/tarjeta-shopping@2x.png"
import falabella from "../../../assets/medios/falabella@2x.png"
import nativa from "../../../assets/medios/nativa@2x.png"
import andreani from "../../../assets/medios/3336@2x.png"
import correo from "../../../assets/medios/2682@2x.png"

const FooterMid = () => {
    
  return (

    <div className={styles.footerMid}>
        <div className={styles.footerMidLeft}style={{display:'flex'}}>
            <p>Medio de Pago</p>
            <div className={styles.containerPagosyEnvios}>
              <img className={styles.payCard} src={amex} alt="amex" />
              <img className={styles.payCard} src={mastecard} alt="mastercard" />
              <img className={styles.payCard} src={visa} alt="visa" />
              <img className={styles.payCard} src={naranja} alt="naranja" />
              <img className={styles.payCard} src={shopping} alt="shopping" />
              <img className={styles.payCard} src={falabella} alt="falabella" />
              <img className={styles.payCard} src={nativa} alt="nativa" />
            </div>
            
        </div>
        <div className={styles.footerMidRight}style={{display:'flex'}}>
            <p>Medio de Envío</p>
            <div className={styles.containerPagosyEnvios}>
              <img className={styles.sendCard} src={andreani} alt="andreani" />
              <img className={styles.sendCard} src={correo} alt="correo" />
            </div>
           
        </div>
    </div>
  )
}

export default FooterMid