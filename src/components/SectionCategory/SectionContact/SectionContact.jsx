import React, {useState} from 'react'
import styles from './SectionContact.module.scss'
import { Formik } from 'formik'
import { initialValuesContact } from '../../../formik/initialValues'
import { validationSchemaContact } from '../../../formik/validationSchema'
import { NavLink } from 'react-router-dom'
import { FormContactStyled, InputStyled, ErrorStyled } from '../../SectionAccount/FormsStyles'
import InputBox from '../../SectionAccount/InputBox'
import  carta  from '../../../assets/icons/carta.png'
import  celular  from '../../../assets/icons/celular.png'
import  ubicacion from '../../../assets/icons/ubicacion.png'
import BoxTextarea from './BoxTextarea'
import success from '../../../assets/icons/success.png'
import ModalFormSent from '../../ModalFormSent/ModalFormSent'

const SectionContact = () => {

    const [sent, setSent] = useState(false);

  return (
    <section className={styles.sectionContact}>
        <div className={styles.containerInfo} >
            <nav className={styles.navContact}>
                <NavLink to={'/home'} className={styles.navlink}>Inicio</NavLink>
                <NavLink className={styles.navlinkDos}>. Contacto</NavLink>
            </nav>
            <div className={styles.containerIcons} >
                <h3>
                    Contacto
                </h3>
                <p>Contactanos, si tienes alguna consulta la responderemos un breve.</p>
                <div>
                    <img style={{height: '18px'}} src={carta} alt="iconCart" />
                    <p>
                        Lucasmpalu@gmail.com
                    </p>
                </div>
                <div>
                <img style={{height: '18px'}} src={celular} alt="iconCelular" />
                    <p>
                    +54-341-3127575
                    </p>
                </div>
                <div>
                <img style={{height: '18px'}} src={ubicacion} alt="iconUbicacion" />
                    <p>
                    Rio de Janeiro, Brasil.
                    </p>
                </div>
            </div>
        </div>

        {!sent && <Formik
                initialValues={initialValuesContact}
                //acá reciclo el del login
                validationSchema={validationSchemaContact}
                onSubmit={(values, {resetForm}) => {
                    resetForm()
                    setTimeout(() => {
                        setSent(true)

                        setTimeout(() => {
                            setSent(false)
                        }, 2000);
                    }, 1000);
                }}> 
            <FormContactStyled className={styles.formContact} action="submit">
                <InputBox
                       name="name"
                       label="name"
                       text="Nombre y Apellido"
                       type="text"
                       placeholder="ej: Marcelo Bielsa"
                        />
                <InputBox
                        name="email"
                        label="email"
                        type="email"
                        text="Email"
                        placeholder="ej: tuemail@email.com"
                />
                <InputBox
                        name="number"
                        label="number"
                        type="text"
                        text='Telefono (opcional)'
                        placeholder="ej: 3413127575"
                />
                <BoxTextarea
                    name="message"
                    label="message"
                    text="Mensaje"
                    placeholder='Deje aquí su mensaje...'
                />

            <button type='submit' className={styles.btnSend}>Enviar mensaje</button>
            </FormContactStyled>
            </Formik>} 
            {sent && <ModalFormSent message={'Su consulta fue enviada con exito y será respondida a la brevedad'}/>}
    </section>

  )
}

export default SectionContact