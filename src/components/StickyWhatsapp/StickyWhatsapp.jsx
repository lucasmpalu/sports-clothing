import React from 'react'
import whatsapp from "../../../assets/icons/whatsapp.png";
import styles from "./StickyWhatsapp.module.scss"

const StickyWhatsapp = () => {

    const styleWhatsapp = {
        height:'24px',
        
    }

  return (
    <a href="https://wa.me/543413127575" ><img src={whatsapp} className={styles.StickyWhatsapp}  alt="whatsapp" />
    </a>)
    }

export default StickyWhatsapp