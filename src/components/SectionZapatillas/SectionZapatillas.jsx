import React from 'react'
import styles from './SectionZapatillas.module.scss'
import { Products } from '../../data/Products'
import CardProduct from '../CardProduct/CardProduct'

const SectionZapatillas = () => {

  let product = Products.filter((product) => product.id === 13 || product.id === 14)

  return (
    <section className={styles.sectionZapatillas}>
        <h2>COMPRÁ AHORA LA COLECCIÓN JORDAN 2024</h2>
        <div className={styles.containerZapatillas}>
             <CardProduct
              key={product[0].id}
              id={product[0].id}
              title={product[0].title}
              price={product[0].price}
              talles={product[0].talles}
              img={product[0].img}
              secondaryImg={product[0].secondaryImg}
              stylesCard={styles.cardsZapatillas}
            />
             <CardProduct
              key={product[1].id}
              id={product[1].id}
              title={product[1].title}
              price={product[1].price}
              talles={product[1].talles}
              secondaryImg={product[1].secondaryImg}
              img={product[1].img}
              stylesCard={styles.cardsZapatillas}
            />
             
        </div>
        
    </section>
  )
}

export default SectionZapatillas