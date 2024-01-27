import React, {useState} from 'react'
import styles from './Header.module.scss'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { openCart } from "../../redux/cartSlice.js"; 
import { Products } from '../../data/Products.js';
import ModalSuccess from '../../components/ModalSuccess/ModalSuccess.jsx';
import searchIcon from '../../../assets/icons/buscar.png'
import loginIcon from '../../../assets/icons/usuario.png'
import cart from '../../../assets/icons/cart.png'
import { searchProducts } from '../../redux/productsSlice.js';



const NavCart = () => {

  const [input, setInput] = useState('');
  const [modalDesktop, setModalDesktop] = useState(window.innerWidth > 600 ? true : false);
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

  window.addEventListener('resize', () => {
    if(window.innerWidth < 600){
      setModalDesktop(false)
    } else {
      setModalDesktop(true)
    }
  })


  
  return (
    <>
        <nav className={styles.NavCart}>
          <div className={styles.containerInput}>
          <form onSubmit={handleSubmit} action="submit">
            <input onChange={(e) => {
              setInput(e.target.value)
              }}type="text" value={input} className={styles.inputSearch} placeholder='Buscar' required/>
          </form>
          <img className={styles.iconSearch} src={searchIcon} alt="Lupa" />
          </div>
            <NavLink to='/account/login'>
              <img src={loginIcon} alt="login" className={styles.iconLogin}/>
            </NavLink>
          <div className={styles.containerIconCart}>
            {modalDesktop && <ModalSuccess/>}
            <img onClick={() => { dispatch(openCart()) }} src={cart} alt="cart" className={styles.iconCart}/>
            <div className={styles.productsQuantity}>{productsCart.reduce((acc, curr) => { return acc + curr.quantity}, 0)}</div>
          </div>
        </nav>
    </>
  )
}

export default NavCart