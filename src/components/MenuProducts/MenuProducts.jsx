import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuProducts.module.scss'; 
import login from '../../../assets/icons/user.png';
import close from '../../../assets/icons/cruz.png';

const MenuProducts = ({showMenuProducts, setShowMenuProducts}) => {

  const isLoged = JSON.parse(sessionStorage.getItem('user'))



  return (
    <div className={styles.menuLabel} style={{display: showMenuProducts ? 'flex' :'none'}}>
      <div className={styles.boxTop}>
        <div className={styles.boxLogin}>
          <NavLink to={'/account/login'} onClick={() => { setShowMenuProducts(false) }}>
            <img src={login}  className={styles.iconLogin} alt="user"/>
          </NavLink>
          
          {/* verificar primero si no es null, me trababa la app si verificaba solo igLoged.name */}
          {isLoged && isLoged.name
           ? <p>Bienvenido, {isLoged.name}!</p>
           : <NavLink className={styles.NavLink} to="/account/login">
                <p onClick={() => { 
                  setTimeout(() => {
                    setShowMenuProducts(false) 
                  }, 1500);
                }}>
                  Iniciar Sesión
                </p>
              </NavLink>
           }

        </div>
        <img onClick={() => {setShowMenuProducts(false)}} src={close} className={styles.iconClose}alt="close" />
      </div>


      <NavLink className={styles.NavLink} to="/products/" onClick={() => {setShowMenuProducts(false)}}>Todos</NavLink>
      <hr className={styles.navHr} />
      <NavLink className={styles.NavLink} to="/products/zapatillas" onClick={() => {setShowMenuProducts(false)}}>Zapatillas</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/remeras" onClick={() => {setShowMenuProducts(false)}}>Remeras</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/buzos" onClick={() => {setShowMenuProducts(false)}}>Buzos</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/shorts" onClick={() => {setShowMenuProducts(false)}}>Shorts</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/joggings" onClick={() => {setShowMenuProducts(false)}}>Joggings</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/mujer" onClick={() => {setShowMenuProducts(false)}}>Mujeres</NavLink>
      <hr className={styles.navHr} />

      <NavLink className={styles.NavLink} to="/products/hombre" onClick={() => {setShowMenuProducts(false)}}>Hombres</NavLink>
    </div>
  );
};

export default MenuProducts;
