import React from 'react'
import styles from './SectionHero.module.scss'
import Carrousel from './CarrouselHero';
import { useState } from 'react';

const SectionHero = () => {
  return (
    <section className={styles.sectionHero}>
      <Carrousel/>
    </section>
  )
}

export default SectionHero