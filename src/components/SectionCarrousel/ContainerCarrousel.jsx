import React, { useEffect } from 'react'
import styles from './SectionCarrousel.module.scss'
// import styles from '../../Home/Home.module.scss'


import { Products } from '../../data/Products.js'
import CardProduct from '../CardProduct/CardProduct.jsx'
import { useState } from 'react'
import prev from "../../../assets/icons/prev.png"
import next from "../../../assets/icons/next.png"

let arrayProducts = Products.filter((product) => product.id === 1 || product.id === 17 || product.id === 10 || product.id === 24 || product.id === 7 || product.id === 30 || product.id === 5 || product.id === 21 )


const ContainerCarrousel = () => {

  const [state, setState] = useState(arrayProducts);
  const [direction, setDirection] = useState('')

    useEffect(() => {
      setState(arrayProducts.slice(2,6))
    }, []);


    const nextImg = () => {
      let productPop = arrayProducts.pop()
      arrayProducts.unshift(productPop)
      setState(productPop)
      setDirection('next')
    }
    const prevImg = () => {
      let productPop = arrayProducts.shift()
      arrayProducts.push(productPop)
      setState(productPop)
      setDirection('prev')
    }

    const myStylesCard = (index) => {
      return ` ${styles.cardsCarrousel} 
      ${index === 0 || index === 1 || index === 7 || index === 6 ? styles.inactive : styles.active} 
      ${direction == 'prev' ? styles.translatePrev : styles.translateNext } `
    }

  return (


<>
    <img onClick={prevImg} src={prev} alt="prev" className={styles.buttonPrevCards}/>
    <img onClick={nextImg} src={next} alt="next"  className={styles.buttonNextCards} />

    <div className={`${styles.containerCarrouselCards}`}>
      {arrayProducts.map((product, index) => {
      return <CardProduct
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      talles={product.talles}
      img={product.img}
      secondaryImg={product.secondaryImg}
      stylesCard={myStylesCard(index)}
      />})}
    </div>

  </>
  )
}

export default ContainerCarrousel