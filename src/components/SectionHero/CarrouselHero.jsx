import { useEffect, useState } from 'react';
import styles from './SectionHero.module.scss';
import { NavLink } from 'react-router-dom';
import nike1 from "../../../assets/hero/nike1.jpg"
import nike2 from "../../../assets/hero/nike2.jpg"
import nike3 from "../../../assets/hero/nike3.jpg"
import nike4 from "../../../assets/hero/nike4.jpg"
import nike5 from "../../../assets/hero/nike5.jpg"
import nike6 from "../../../assets/hero/nike6.png"
import nike7 from "../../../assets/hero/nike7.png"
import nike8 from "../../../assets/hero/nike8.png"
import nike9 from "../../../assets/hero/nike9.jpg"




const Carrousel = () => {
  const [index, setIndex ] = useState(0)
  const [showImg, setShowImg] = useState(window.innerWidth < 550 ? true : false);
  const [imgCuadrada, setImgCuadrada] = useState(false)
  
  window.addEventListener('resize', () => {
    if(window.innerWidth < 550){
      setShowImg(true)
      setImgCuadrada(false)

    } else if(window.innerWidth > 550 && window.innerWidth < 700) {
      setImgCuadrada(true)
    } else {
      setShowImg(false)
      setImgCuadrada(false)

    }
  })

  

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.containerCarrousel}>
      <div onClick={prevImage} className={styles.prevButton}></div>
      <NavLink className={styles.middleButton} to='/products'></NavLink>
        {!imgCuadrada && index === 0 && <img className={styles.imgHero} src={!showImg ? nike1 : nike4} alt="publicidad" />}
        {!imgCuadrada && index === 1 && <img className={styles.imgHero} src={!showImg ? nike2 : nike5} alt="publicidad" />}
        {!imgCuadrada && index === 2 && <img className={styles.imgHero}  src={!showImg ? nike3 : nike6} alt="publicidad"/>}
        {imgCuadrada && index === 0 && <img className={styles.imgHero} src={nike7} alt="publicidad" />}
        {imgCuadrada && index === 1 && <img className={styles.imgHero} src={nike8} alt="publicidad" />}
        {imgCuadrada && index === 2 && <img className={styles.imgHero}  src={nike9} alt="publicidad"/>}
      <div onClick={nextImage} className={styles.nextButton}></div>
    </div>
  );
};

export default Carrousel;