import React from 'react'
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import tienda from "../../../assets/icons/tienda.png"
import entrega from "../../../assets/icons/entrega.png"


const OptionalHeader = () => {
  return (
    <nav className={styles.optionalHeader}>
        <div style={{
        display:'flex',
        gap: '1.8rem',
        color: 'white'}}
        >
        <NavLink to='/locales' className={styles.NavLink} style={{color: 'white'}}>Locales</NavLink>
        <NavLink to='/guia-de-talles' className={styles.NavLink} style={{color: 'white'}}>Guía de Talles</NavLink>
      </div>
      <div style={{
        display:'flex',
        gap: '1.8rem',
        color: 'white'}}>
        <p style={{display:'flex', alignItems:'center', gap: '0.2rem'}}>
          <img className={styles.iconOptional} src={tienda} alt="tienda" />
          Retiro gratis en Locales
        </p>
        <p style={{display:'flex', alignItems:'center', gap: '0.2rem'}}>
          <img className={styles.iconOptional} src={entrega} alt="camion" />
          Envíos a Rosario y todo el país
          </p>
      </div>
      
    </nav>
  )
}

export default OptionalHeader