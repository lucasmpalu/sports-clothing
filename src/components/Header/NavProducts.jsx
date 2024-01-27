import React, { useState } from 'react'
import styles from './Header.module.scss'
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import { searchProducts } from '../../redux/productsSlice.js';
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import searchIcon from '../../../assets/icons/buscar.png'

const NavProducts = () => {


  const [input, setInput] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { open, productsCart, subtotalCart } = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    e.preventDefault()    
    dispatch(searchProducts(input))
    setTimeout(() => {
      navigate('/products/encontrados')
    }, 500);
    setInput('')
  }
  
  return (
    <>
          
          <nav className={styles.productsNav}>
          <div className={styles.containerInputSearchResponsive}>
            <form onSubmit={handleSubmit} action="submit">
              <input onChange={(e) => {
                setInput(e.target.value)
                }}type="text" value={input} className={styles.inputSearchResponsive} placeholder='Buscar' required/>
            </form>
            <img className={styles.iconSearch} src={searchIcon} alt="Lupa" />
          </div>

            <NavLink className={styles.NavLink} to="/">Inicio</NavLink>
            <NavLink className={styles.NavLink} to="/products/zapatillas">Zapatillas</NavLink>
            <NavLink className={styles.NavLink} to="/products/remeras">Remeras</NavLink>
            <NavLink className={styles.NavLink} to="/products/buzos">Buzos</NavLink>
            <NavLink className={styles.NavLink} to="/products/shorts">Shorts</NavLink>
            <NavLink className={styles.NavLink} to="/products/joggings">Joggings</NavLink>
            <NavLink className={styles.NavLink} to="/Nosotros">Nosotros</NavLink>
            <NavLink className={styles.NavLink} to="/contacto">Contacto</NavLink>
          </nav>
    </>
  )
}

export default NavProducts