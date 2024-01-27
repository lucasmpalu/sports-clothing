import styles from './Cart.module.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotal, closeCart, incrementQuantity, decrementQuantity, updateEnvio, updateSubtotal, removeProduct, confirmBuy } from '../../redux/cartSlice';
import { useEffect } from 'react';
import cruz from "../../../assets/icons/cruz.png"
import remove from "../../../assets/icons/eliminar.png"

const Cart = () => {
  const { open, productsCart, subtotal, envio, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

const [showSpan, setShowSpan] = useState(false);

useEffect(() => {
  let newSubtotal = productsCart.reduce((acumulador, currentValue) => acumulador + currentValue.price * currentValue.quantity, 0)
  dispatch(updateSubtotal(newSubtotal))
  localStorage.setItem('products', JSON.stringify(productsCart))
}, [productsCart]);

useEffect(() => {
  dispatch(updateTotal())
}, [subtotal]);

  const handleInputChange = (e) => {
    dispatch(updateEnvio(parseInt(e.target.value, 10)))
  };

  useEffect(() => {
  }, [subtotal]);
  
  useEffect(() => {
    dispatch(updateTotal())
  }, [envio]);







  return (
    <>
      {open && (
        <div className={`${styles.overlayCart} ${styles.displayBlock}`}>
          <div className={styles.containerCart}>
            <h3>Carrito de compras</h3>
            <div className={styles.containerProducts}>
              {productsCart.length
                ? productsCart.map((el) => (
                    <div key={el.id} className={styles.cardProduct}>
                      <div className={styles.containerImg}>
                        <img className={styles.imgProduct} src={el.img} alt="producto" />
                      </div>
                      <div className={styles.containerInfo}>
                        <div className={styles.containerInfoUp}>
                          <p className={styles.titleProduct}>{el.title} ({el.talles})</p>
                          <img src={remove} alt='eliminar' onClick={() => {
                            dispatch(removeProduct({id: el.id, talle: el.talles}))}}/>
                        </div>
                        <div className={styles.containerInfoDown}>
                          <div className={styles.containerQuantity}>
                            <button onClick={() => { dispatch(decrementQuantity(el.id)) }} style={{ opacity: el.quantity == 1 ?'0.1' : '1' }} className={styles.btnLess}>-</button>
                              <p className={styles.productQuantity}>{el.quantity}</p>
                            <button onClick={() => { dispatch(incrementQuantity(el.id)) }} className={styles.btnMore}>+</button>
                          </div>
                          <p><strong>$ {el.price * el.quantity},00</strong></p>
                        </div>
                      </div>
                    </div>
                  ))
                : <p className={styles.isEmpty}>El carrito de compras está vacío☹️</p>
              }
            </div>
            <div className={styles.containerTotalCart}>
              <p>Subtotal (sin envío):</p>
              <p><strong>${subtotal}</strong></p>
            </div>
            <hr />
            <form className={styles.containerEntrega}>

              <label htmlFor='entrega'>Forma de entrega</label>
              <input  onClick={handleInputChange} type="radio" id='retiro' name='entrega' value={0} onChange={handleInputChange} />
              <p>Retiro por nuestros
                <NavLink className={styles.navLink} to='/entregas-envios'>
                  locales
                </NavLink>
              </p>
              <br/>
              <input onClick={handleInputChange} type="radio" id='rosario' name='entrega' value={800} onChange={handleInputChange} />
              <p>Envíos dentro de Rosario</p>
              <br/>
              <input onClick={handleInputChange} type="radio" id='afuera'name='entrega' value={1900} onChange={handleInputChange} />
              <p>Envíos resto del país</p>
              {showSpan && <br/>}
              {showSpan && <span style={{color:'red'}}>Debe seleccionar un metodo de entrega</span>}
            </form>

            <div className={styles.containerStartBuy}>
              <div className={styles.containerTotalCart}>
                <h4>Total:</h4>
                <h4>${total}</h4>
              </div>
            </div>
            <button onClick={() => {
              if(envio == null && productsCart.length > 0){
                setShowSpan(true)
                return
              }
              if(productsCart.length > 0){
                dispatch(confirmBuy())
                dispatch(closeCart())
                setShowSpan(false)

              }
              
              }} className={productsCart.length == 0 ? styles.btnBlock : styles.btnBuy}>Iniciar Compra</button>
            <button onClick={() => {dispatch(closeCart())}} className={styles.btnLookMore}>Ver más productos</button>
            <img onClick={() => {dispatch(closeCart())}} className={styles.closeCart} src={cruz} alt="cruz" />
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
