import React from 'react'
import styles from './SectionCarrousel.module.scss'
// import styles from '../../Home/Home.module.scss'

import ContainerCarrousel from './ContainerCarrousel'

const SectionCarrousel = () => {
  return (
        <section className={styles.sectionCarrousel}>
            <h2>Novedades</h2>
            <ContainerCarrousel/>
        </section>
  )
}

export default SectionCarrousel