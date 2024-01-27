import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuLabel.module.scss'; 
import login from '../../../assets/icons/user.png';
import close from '../../../assets/icons/cruz.png';

const MenuLabel = ({showMenuLabel, setShowMenuLabel}) => {

  const isLoged = JSON.parse(sessionStorage.getItem('user'))



  return (
    <div className={styles.menuLabel} style={{display: showMenuLabel ? 'flex' :'none'}}>
      <div className={styles.boxTop}>
        <div className={styles.boxLogin}>
          <NavLink to={'/account/login'} onClick={() => { setShowMenuLabel(false) }}>
            <img src={login}  className={styles.iconLogin} alt="user"/>
          </NavLink>
          
          {/* verificar primero si no es null, me trababa la app si verificaba solo igLoged.name */}
          {isLoged && isLoged.name
           ? <p>Bienvenido, {isLoged.name}!</p>
           : <NavLink className={styles.NavLink} to="/account/login">
                <p onClick={() => { 
                  setTimeout(() => {
                    setShowMenuLabel(false) 
                  }, 1500);
                }}>
                  Iniciar Sesión
                </p>
              </NavLink>
           }

        </div>
        <img onClick={() => {setShowMenuLabel(false)}} src={close} className={styles.iconClose}alt="close" />
      </div>

      <hr className={styles.navHr} />
      <NavLink className={styles.NavLink} to="/" onClick={() => {setShowMenuLabel(false)}}>Inicio</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/zapatillas" onClick={() => {setShowMenuLabel(false)}}>Zapatillas</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/remeras" onClick={() => {setShowMenuLabel(false)}}>Remeras</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/buzos" onClick={() => {setShowMenuLabel(false)}}>Buzos</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/shorts" onClick={() => {setShowMenuLabel(false)}}>Shorts</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/joggings" onClick={() => {setShowMenuLabel(false)}}>Joggings</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/Nosotros" onClick={() => {setShowMenuLabel(false)}}>Nosotros</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/contacto" onClick={() => {setShowMenuLabel(false)}}>Contacto</NavLink>
    </div>
  );
};

export default MenuLabel;
