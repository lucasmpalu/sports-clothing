import React, { useEffect } from 'react'
import styles from './SectionProducts.module.scss'
import { useState } from 'react';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { updateCategory, updateProducts } from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../CardProduct/CardProduct'
import { formateFirstLetter } from '../../utils/formateFirstLetter';
import menu from '../../../assets/icons/menu2.png'
import MenuProducts from '../MenuProducts/MenuProducts';





const SectionProducts = ({cat}) => {

  const [showMenuProducts, setShowMenuProducts] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentProducts, currentCategory } = useSelector((state) => state.products);

  
  const updateDispatchs = (category) => {
    dispatch(updateCategory(category))
    dispatch(updateProducts())
   }


  useEffect(() => {
    if (!cat) {
      dispatch(updateCategory('todo')); // o 'zapatilla' u otra categoría por defecto si lo deseas
      dispatch(updateProducts());
    } else if (cat == 'encontrado'){
      dispatch(updateCategory('encontrados'))
      return
    }else {
      dispatch(updateCategory(cat));
      dispatch(updateProducts());
    }
  }, [cat])

  const openMenuProducts = () => {
    setShowMenuProducts(true)
  }
  



  return (
    <section className={styles.sectionCategories}>
            <nav className={styles.navProducts}>
                <NavLink to={'/home'} className={styles.navlink}>Inicio</NavLink>
                <NavLink className={styles.navlink}>. {formateFirstLetter(currentCategory)}</NavLink>
            </nav>
            <h2 className={styles.titleCategory}>{formateFirstLetter(currentCategory) !== 'male' && formateFirstLetter(currentCategory) !== 'female' 
            ? formateFirstLetter(currentCategory) 
            : formateFirstLetter(currentCategory) == 'male' ? 'Mujer' : 'Hombre'
            }</h2>
            <div className={styles.containerGeneral}>
                <nav className={styles.sidebarCategories}>
                <ul className={styles.listCategories}>
                  <NavLink to='/products/' className={styles.navlink}><li>Todo</li></NavLink>
                  <NavLink to='/products/zapatillas' className={styles.navlink}><li>Zapatillas</li></NavLink>
                  <NavLink to='/products/remeras' className={styles.navlink}><li>Remeras</li></NavLink>
                  <NavLink to='/products/buzos' className={styles.navlink}><li>Buzos</li></NavLink>
                  <NavLink to='/products/shorts' className={styles.navlink}><li>Shorts</li></NavLink>
                  <NavLink to='/products/joggings' className={styles.navlink}><li>Joggings</li></NavLink>
                  <NavLink to='/products/hombre' onClick={() => updateDispatchs('male')} className={styles.navlink}><li>Hombre</li></NavLink>
                  <NavLink to='/products/mujer' onClick={() => updateDispatchs('female')} className={styles.navlink}><li>Mujer</li></NavLink>
                </ul>
                  <div onClick={openMenuProducts} className={styles.containerLabelProducts}>
                    <img className={styles.labelProducts} src={menu} alt="menu" />
                    <NavLink className={styles.navlink}>Menú de productos</NavLink>
                  </div>
                <MenuProducts setShowMenuProducts={setShowMenuProducts} showMenuProducts={showMenuProducts}/>

                </nav>
                
                <div className={styles.containerProducts}>
                {currentProducts.length == 0 && <p style={{width: '300%'}}>No hemos encontrado ningun producto para tu busqueda ☹️ <br/> 
                    Intenta buscarlo de otra forma o con otra palabra.</p>}
                  {currentProducts.map((product) => { return <CardProduct
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    talles={product.talles}
                                    img={product.img}
                                    secondaryImg={product.secondaryImg}
                                    stylesCard={styles.cardProduct}
                                ></CardProduct>
                    })
                  }

                </div>
            </div>
    </section>
  )
}

export default SectionProducts