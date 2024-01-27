import React, {useState} from 'react'
import styles from './SectionAccount.module.scss'
import { Navigate, useNavigate } from 'react-router-dom'

const MiCuenta = ({name, email, numero}) => {

    const [closing, setClosing] = useState(false);

    let navigate = useNavigate()

  return (
    <div className={styles.containerMiCuenta}>
        <h3>Mis datos personales</h3>
        <p>➖ {name}</p>
        <p>➖ {email}</p>
        <p>➖ {numero}</p>
        <button onClick={() => {
            sessionStorage.setItem('user', JSON.stringify([]))
            setClosing(true)
            setTimeout(() => {
                navigate('/home')
            }, 1500);
        }} className={styles.btnAccount}>{!closing ? "Cerrar sesión" : "Cerrando sesión..."}</button>
    </div>
  )
}

export default MiCuenta