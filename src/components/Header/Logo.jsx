import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from "../../../assets/nike.png"
import menu from '../../../assets/icons/menu.png'
import MenuLabel  from "../MenuLabel/MenuLabel.jsx"

const Logo = () => {

  const [scroll, setScroll] = useState(false);
  const [prevScroll, setPrevScrollY]= useState(0);
  const [showMenuLabel, setShowMenuLabel] = useState(false)

  const currentScroll = window.scrollY 

  const changeScroll = () => {
    setPrevScrollY(currentScroll)
    currentScroll > prevScroll ? setScroll(true) : setScroll(false)
  };

    window.addEventListener('scroll', changeScroll);


  return (
    <>
    <NavLink className={styles.logoBoxResponsive} to="/">
      {<MenuLabel showMenuLabel={showMenuLabel} setShowMenuLabel={setShowMenuLabel}/>}
      <img onClick={() => {setShowMenuLabel(true)}} className={styles.iconMenu} src={menu} alt="menu" />
      <img
        className={styles.logoCompany}
        style={{transform: scroll ? 'scale(0.8)' : 'scale(1)'}}
        src={logo}
        alt="Logo Nike"
      />
    </NavLink>
    </>
  );
};

export default Logo;
