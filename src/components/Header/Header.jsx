import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './Header.module.scss';
import NavProducts from './NavProducts';
import OptionalHeader from './OptionalHeader';
import BoxHeaderTop from './BoxHeaderTop';
import { headerStyleFunction } from '../../utils/ScrollHeader';
import ModalSuccess from '../ModalSuccess/ModalSuccess';

const HeaderContainer = styled.header`
  transition: transform 0.3s ease-in-out;
`;

const Header = () => {

  // el scroll empieza en 0, con eso voy a ir comparando el current scroll
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  // cada vez que scrolleo me da la cantidad de scroll
  const currentScroll = window.scrollY;

 
  const changeScroll = () => {

    if (prevScroll > currentScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setPrevScroll(currentScroll);
  };


  window.addEventListener('scroll', changeScroll);


  // const [visible, setVisible] = useState(true);
  // const [prevScroll, setPrevScroll] = useState(0);
  
  // const currentScroll = window.scrollY
  
  // window.addEventListener('scroll', () => {
  //   if (prevScroll > currentScroll) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  //   setPrevScroll(currentScroll)

  // }
  // )


  return (
    <HeaderContainer 
    className={styles.boxHeader} style={{ transform: window.innerWidth > 992 ? (visible ? 'translateY(0)' : 'translateY(-5.4vh)') : null }}>
    <OptionalHeader />
      <BoxHeaderTop />
      <NavProducts />
    </HeaderContainer>
  );
}

export default Header;
