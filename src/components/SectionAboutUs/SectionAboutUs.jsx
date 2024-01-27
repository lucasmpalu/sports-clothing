import React from 'react'
import styles from './SectionAboutUs.module.scss'
import { NavLink } from 'react-router-dom'

const SectionAboutUs = () => {
  return (
    <section className={styles.sectionAboutUs}>
        <NavLink to='/' className={styles.navigateBack}>Volver</NavLink>
        <div className={styles.containerInfoAboutUs}>
            <h2>¿Que hacemos?</h2>
            <p>¡Bienvenido a Nike! Enamorados del deporte y el rendimiento, fusionamos ambos mundos para ofrecerte la mejor experiencia en ropa deportiva. Cada prenda está diseñada para destacar en el gimnasio y en la calle, combinando comodidad y un rendimiento excepcional. Únete a nosotros en este viaje y descubre la perfecta fusión de rendimiento y estilo con Nike.
            </p>
            <NavLink to={'/account/register'}>
                <button>Registrate!</button>
            </NavLink>
        </div>
    </section>
  )
}

export default SectionAboutUs