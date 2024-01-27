import React from 'react'
import success from '../../../assets/icons/success.png'
import styles from "./ModalFormSent.module.scss"

const ModalFormSent = ({message}) => {
  return (
    <div className={styles.overlaySuccess}>
        <div className={styles.containerSuccess}>
            <h3>{message}</h3>
            <img className={styles.iconSuccess}src={success} alt="exito" />
        </div>
    </div>
  )
}

export default ModalFormSent