import React from 'react'
import styles from './Home.module.scss'
import SectionHero from '../../components/SectionHero/SectionHero'
import SectionCarrousel from '../../components/SectionCarrousel/SectionCarrousel'
import SectionZapatillas from '../../components/SectionZapatillas/SectionZapatillas'
import SectionCategory from '../../components/SectionCategory/SectionCategory'
import SectionVideo from '../../components/SectionVideo/SectionVideo'
import ModalDeslizante from '../../components/ModalDeslizante/ModalDeslizante'

const Home = () => {


  return (
    <>
    <SectionHero/>
    <ModalDeslizante/>
    <SectionCarrousel/>
    <SectionZapatillas/>
    <SectionVideo/>
    <SectionCategory/>
    </>
  )
}

export default Home