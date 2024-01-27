import React, { useEffect, useState } from 'react'
import styles from './SectionVideo.module.scss'
import videoNike from "../../../assets/publicidadvideo/NikePublicidad.mp4"
import videoNikeResponsive from "../../../assets/publicidadvideo/publicidadresponsive.mp4"

const SectionVideo = () => {


  
  return (

  <section className={styles.sectionVideo}>

      <video className={styles.publicidadVideoDesktop} autoPlay loop muted>
        <source src={videoNike} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <video className={styles.publicidadVideoMobile} autoPlay loop muted>
        <source src={videoNikeResponsive} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
    
  )
}

export default SectionVideo