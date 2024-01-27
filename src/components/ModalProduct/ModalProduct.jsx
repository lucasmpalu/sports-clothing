import React, { useState } from 'react'
import styles from './ModalProduct.module.scss'
import { useDispatch, useSelector } from 'react-redux'; 
import { closeModal, addProduct, incrementQuantity, openSuccess, closeSuccess, updateSuccess } from '../../redux/cartSlice';
import { Products } from '../../data/Products';
import cruz from "/assets/icons/cruz.png"

const ModalProduct = () => {
  const { actualModal, productsCart, isOpenModal, infoSuccess } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let newProduct = actualModal ? Products.find((product) => { return product.id == actualModal}) : Products[0]

  

  const [talle, setTalle] = useState(false)
  const [visible, setVisible] = useState(true);
  const [textLoading, setTextLoading] = useState(false)
  const [span, setSpan] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600 ? true : false)

  const addCart = (e) => {
    if(talle){
      if(productsCart.find((el) => { return el.id == e.target.id && el.talles == talle})){
      dispatch(incrementQuantity(e.target.id))
      setTextLoading('Agregando...')
      setTimeout(() => {
        dispatch(closeModal());
        setTextLoading(false);
        dispatch(openSuccess());
        setTalle(false)
        let productSuccess = productsCart.find((el) => { return el.id == e.target.id })
        dispatch(updateSuccess(productSuccess))
        // NO TENÍA EN CUENTA QUE SE PODÍAN ANIDAR SETTIMEOUTS
        setTimeout(() => {
          dispatch(closeSuccess());
        }, 2000);
        
      }, 1500);
      return
    } else {
      setTextLoading('Agregando...')
      setTimeout(() => {
        let newProductWithTalle = {...newProduct, talles: talle}
        dispatch(addProduct(newProductWithTalle));
        dispatch(closeModal());
        setTextLoading(false);
        setTalle(false)
        dispatch(updateSuccess(newProductWithTalle))
        dispatch(openSuccess());

        // NO TENÍA EN CUENTA QUE SE PODÍAN ANIDAR SETTIMEOUTS
        setTimeout(() => {
          dispatch(closeSuccess());
        }, 2000);
  
      }, 1500);
    }
    } else {
      setSpan(true)
    }
  }

  return (
    <div className={isOpenModal ? styles.overlay : styles.displayNone}>
      <div className={styles.containerModal}>
          {isMobile && <div className={styles.containerTitleMobile}>
            <h2>{newProduct.title}</h2>
            <img onClick={() => {dispatch(closeModal())}} className={styles.btnClose} src={cruz} alt="cerrar" />
          </div>}
        <div className={styles.containerImg}>
          <img src={newProduct.img} alt="product" />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.containerTitle}>
            <h2>{newProduct.title}</h2>
            <img onClick={() => {dispatch(closeModal())}} className={styles.btnClose} src={cruz} alt="cerrar" />
          </div>
          <h3>$ {newProduct.price}</h3>
          {isMobile && <p>{newProduct.desc}</p>}
          <p>Talle: <strong>{talle}</strong></p>
            <div className={styles.containerBtn}>
              {/* PRIMER CODIGO QUE LE PIDO A CHATGPT, ENTENDERLO DESPUÉS */}
            {Object.entries(newProduct.talles).map(([talleOption, cantidadDisponible]) => (
              <button
                key={talleOption}
                onClick={() => {
                  if (cantidadDisponible > 0) {
                    setTalle(talleOption);
                    setSpan(false)
                  }
                }}
                className={cantidadDisponible > 0 ? (talle === talleOption ? styles.selectedTalle : styles.btnTalle) : styles.disabledTalle}
              >
                {talleOption}
              </button>
            ))}
            </div>
            {span && <span style={{color: 'red', fontSize:'12px'}}>Seleccione un talle por favor.</span>}
          <button onClick={addCart} id={newProduct.id} className={styles.btnAdd}>
            {textLoading ? textLoading : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default ModalProduct