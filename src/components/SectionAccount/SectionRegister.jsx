import React, {useState} from 'react'
import styles from './SectionAccount.module.scss'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { validationSchemaRegister } from '../../formik/validationSchema'
import { Formik } from 'formik'
import { FormStyled } from './FormsStyles'
import InputBox from './InputBox'
import { initialValuesRegister } from '../../formik/initialValues'
import ModalFormSent from '../ModalFormSent/ModalFormSent'



const SectionRegister = () => {

    const [ successfully, setSuccessfully ] = useState(false);
    const [ isExist, setIsExist ] = useState(false)

    const navigate = useNavigate()
    let userSession = JSON.parse(localStorage.getItem('user')) || []

    const userExist = (values) => {
        if(userSession.find((user) => user.email == values.email)){
               return false
        } else {
                return true
        }
    }
    


  return (
    <section className={styles.sectionRegister}>
            {successfully && <ModalFormSent message={"¡El registro se ha hecho de forma exitosa!"}/>}
            <nav className={styles.navLogin}>
                <NavLink to={'/home'} className={styles.navlink}>Inicio</NavLink>
                .<NavLink onClick={() => {setReset(false)}} to={'/account/login'} className={styles.navlink}>Mi Cuenta</NavLink>
                .<p>Crear Cuenta</p>
            </nav>
             <h1>Crear cuenta</h1>
             <p>Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!</p>
                <Formik
                 initialValues={initialValuesRegister}
                 validationSchema={validationSchemaRegister}
                 onSubmit={(values, {resetForm}) => {
                
                        if(userExist(values)){
                                localStorage.setItem('user', JSON.stringify([...userSession, {'email': values.email.toLowerCase(), 'number': values.number, 'password': values.password, 'name': values.name}]))
                                sessionStorage.setItem('user', JSON.stringify({'email': values.email.toLowerCase(), 'number': values.number, 'password': values.password, 'name': values.name}))
                                setSuccessfully(true)
                                resetForm();
                                setTimeout(() => {
                                    navigate('/home')
                                }, 2000);
                                return
                        }
                        setIsExist(true)
                 }}>
                    <FormStyled className={styles.formLogin} action="submit">
                        <InputBox
                                name="email"
                                label="email"
                                text="Email"
                                type="email"
                                placeholder="ej: tuemail@email.com"
                        />
                        {isExist && <span style={{color: 'red', opacity: '0.7'}}>Encontramos otra cuenta que ya usa este email. Intentá usando otro o iniciá sesión.</span>}
                        <InputBox
                                name="name"
                                label="nombre"
                                text="Nombre y Apellido"
                                type="text"
                                placeholder="ej: Marcelo Bielsa"
                        />
                        <InputBox
                                name="number"
                                label="number"
                                type="text"
                                text='Telefono (opcional)'
                                placeholder="ej: 3413127575"
                        />
                        <InputBox
                                name="password"
                                label="password"
                                type="password"
                                text='Contraseña'
                                placeholder="ej: Tucontraseña123!"
                        />
                        <InputBox
                                name="repeatPassword"
                                label="repeatPassword"
                                type="password"
                                text='Repita su contraseña'
                                placeholder="Tucontraseña123!"
                        />
                        <button type='submit' className={styles.btnAccount}> Crear cuenta </button>
                        <div className={styles.containerCreateAccount}>
                            <p className={styles.haveAccount}>¿Ya tienes cuenta? <NavLink className={styles.navlink} to={'/account/login'}>Iniciar Sesión</NavLink></p>
                        </div>
                    </FormStyled>
               </Formik>
    </section>
  )
}

export default SectionRegister