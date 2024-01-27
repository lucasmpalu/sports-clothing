import React, { useEffect } from 'react'
import { NavLink, useNavigate, Navigate} from 'react-router-dom'
import styles from './SectionAccount.module.scss'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import { FormStyled } from './FormsStyles.js'
import { validationSchemaLogin } from '../../formik/validationSchema.js'
import { initialValuesLogin } from '../../formik/initialValues.js'
import InputBox from './InputBox.jsx'
import MiCuenta from './MiCuenta.jsx'

const SectionLogin = () => {

    const [ reset, setReset ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false)
    const [ incorrect, setIncorrect ] = useState(false)
    
    let Navigate = useNavigate()
    let user = JSON.parse(sessionStorage.getItem('user')) || {};

    useEffect(() => {
        //Si existe un usuario en el SStorage
        if (user.email) {
            setIsLogin(true);
        }
    }, []);



  return (
        <section className={styles.sectionLogin}>
            <nav className={styles.navLogin}>
                <NavLink to={'/home'} className={styles.navlink}>Inicio</NavLink>
                <NavLink onClick={() => {setReset(false)}} to={'/account/login'} className={styles.navlink}>. Mi Cuenta</NavLink>
                <p>{!isLogin ? '. Login' : ''}</p>
            </nav>
            {isLogin && <MiCuenta name={user.name} email={user.email} numero={user.number}/>}
            {!isLogin && <h1>{!reset ? 'Iniciar sesión' : 'Cambiar contraseña'}</h1>}
            {reset && !isLogin && <span>Vamos a enviarte un email para que puedas reestablecer tu contraseña</span>}
            {!reset && !isLogin && 
             <Formik
             initialValues={initialValuesLogin}
             validationSchema={validationSchemaLogin}
             onSubmit={(values, {resetForm}) => {
                let users = JSON.parse(localStorage.getItem('user'))
                let success = users.find((user) => {
                    return user.email === values.email && user.password === values.password;
                });
                
                if(success.email){
                    resetForm();
                    setTimeout(() => {
                        setIncorrect(false)
                        sessionStorage.setItem('user', JSON.stringify(success))
                        Navigate('/home')
                    }, 1000);
                    return
                } else {
                    setIncorrect(true)
                } 
            
             }}> 
            <FormStyled className={styles.formLogin} action="submit">
                <InputBox
                        name="email"
                        label="email"
                        type="email"
                        text="Email"
                        placeholder="ej: tuemail@email.com"
                />
                <InputBox
                        name="password"
                        label="password"
                        text="Contraseña"
                        type="password"
                        placeholder="ej: tucontraseña1974"
                />
                {incorrect && <span style={{color: 'red', opacity: '0.7'}}>Usuario o contraseña incorrecto.</span>}
             
                <p onClick={() => {setReset(true)}} className={styles.forgotPassword}>¿Olvidaste tu contraseña?</p>
                <button type='submit' className={styles.btnAccount}> Iniciar Sesión </button>
                <p className={styles.dontHaveAccount}>¿No tienes cuenta aún? <NavLink className={styles.navlink} to={'/account/register'}>Crear cuenta</NavLink></p>
            </FormStyled>
            </Formik>}

            {reset && 
            <form className={styles.formLogin} action="">
                <div className={styles.containerInputAccount}>
                    <label htmlFor="email" >Email</label>
                    <input className={styles.inputAccount} type="email" id='email' placeholder='ej: tuemail@email.com'/>
                </div>
                <button className={styles.btnAccount}>
                    Enviar email
                </button>
            </form>}
            
        </section>
  )
}

export default SectionLogin