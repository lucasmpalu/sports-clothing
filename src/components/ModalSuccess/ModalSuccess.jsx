import React from 'react'
import styles from './ModalSucces.module.scss'
import { useSelector } from 'react-redux';
import cruz from "../../../assets/icons/cruz.png"

const ModalSuccess = () => {

  const { successCard, infoSuccess } = useSelector((state) => state.cart); //cart es el nombre que definimos en el store

  return (
    <>
    {successCard && 
      <div className={styles.containerSuccess}>
        <div className={styles.containerImg}>
          <img src={infoSuccess.img} alt="product" />
        </div>
        <div className={styles.containerInfo}>
          <p>{infoSuccess.title}</p>
          <p>1 x $ {infoSuccess.price},00</p>
          <h4>¡Agregado al carrito con exito!</h4>
        </div>
        <div className={styles.containerClose}>
          <img src={cruz} alt="cerrar" />
        </div>
    </div>}
    </>
  )
}

export default ModalSuccess