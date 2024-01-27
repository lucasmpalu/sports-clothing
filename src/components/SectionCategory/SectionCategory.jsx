import React, { useEffect, useState } from 'react';
import styles from './SectionCategory.module.scss';

import CardCategory from './CardCategory';
import { helpHttp } from '../../utils/helpHttp';
import { Categories } from '../../data/Categories';
import { Products } from '../../data/Products';
import CardProduct from '../CardProduct/CardProduct';
import { chunkArray } from '../../utils/chunkArray';
import todo from "/assets/categorys/todos.jpg"
import zapatilla from "/assets/categorys/zapatillas.jpg"
import remera from "/assets/categorys/remeras.jpg"
import jogging from "/assets/categorys/joggings.jpg"
import short from "/assets/categorys/shorts.jpg"
import male from "/assets/categorys/male.jpg"
import female from "/assets/categorys/female.jpg"
import buzo from "/assets/categorys/buzos.jpg"

const products = Products;

const SectionCategory = () => {
  
  const [allData, setAllData] = useState([]); //Toda la categoría
  const [data, setData] = useState([]); //La parte de la categoría que renderizaré con el metodo slice
  const [quantity, setQuantity] = useState(1); //En el metodo slice iré actualizando de 0 a 1 es el inicial, me muestra el primer array, si apreto Ver más, me muestra de 0 a 2 (otro array más) y así
  const [cat, setCat] = useState('todo'); //el primer array que renderizaré, la función getData funciona pasandolé la categoría a renderizar, ahí dentro se hace el chunk y actualizo el allData y data
  const [more, setMore] = useState(true);


  useEffect(() => {
    getData(cat)
  }, []);


  const getData = (category) => {
    let newData = [];

    if (category === 'todo') {
      newData = products.map((product) => product);
      newData = chunkArray(newData, 4)
    } else if (category === 'male' || category === 'female') {
      newData = products.filter((product) => product.sex === category);
      newData = chunkArray(newData, 4)
    } else {
      newData = products.filter((product) => product.category === category);
      newData = chunkArray(newData, 4)
    }

    setCat(category)
    setData(newData[0])
    setAllData(newData);
    setMore(true)
  };

  const lookMore = () => {

    let newQuantity = quantity + 1
    setQuantity(newQuantity)
    let newArray = allData.slice(0,newQuantity)
    newArray = [].concat(...newArray)
    setData(newArray)


    //🚧ACÁ TENÍA UN PROBLEMA YO, POR MÁS QUE YA HAYA ACTUALIZADO MI ESTADO NO ME LO COMPARABA CON MI ESTADO ACTUAL
    //🚧if(data.length === [].concat(...allData).length)
    //SI MIS PRODUCTOS RENDERIZADOS, LLEGAN A LA MISMA CANTIDAD QUE -TODOS- LOS PRODUCTOS, QUE APAREZCA VER MENOS
    if (newArray.length === [].concat(...allData).length) { 
      setMore(false);
    } else {
      setMore(true);
    }

  }

  const lookLess = () => {
    // Si hay 8 o menos (osea 2 grupos de arrays de 4), dejo que reste el segundo grupo pero ya que aparezca el boton de Ver más, EL RETURN ACÁ DE DESPISTADO ME ESTABA ARRUINANDO EL CODIGO
    if(data.length <= 8){
      setMore(true)
    }

    //actualizo hasta donde voy a recortar del array de arrays
    let newQuantity =  quantity - 1
    setQuantity(newQuantity)

    //corto el array de arrays y lo convierto en un son solo array
    let newArray = allData.slice(0,newQuantity)
    newArray = [].concat(...newArray)
    setData(newArray)

  
  }



  return (
    <>
      <section className={styles.sectionCategory}>
        <div className={styles.containerCategory}>
          <CardCategory getData={getData} title={'Todo'} img={todo} />
          <CardCategory getData={getData} title={'Zapatilla'} img={zapatilla} />
          <CardCategory getData={getData} title={'Buzo'} img={buzo} />
          <CardCategory getData={getData} title={'Remera'} img={remera} />
          <CardCategory getData={getData} title={'Jogging'} img={jogging} />
          <CardCategory getData={getData} title={'Short'} img={short} />
          <CardCategory getData={getData} title={'Male'} img={male} />
          <CardCategory getData={getData} title={'Female'} img={female} />
        </div>
          <h2 className={styles.titleCategory}>
            {cat.toUpperCase()}
          </h2>
        <div className={styles.containerRender}>
        {data.map((product) => {
            return (
              <CardProduct
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                talles={product.talles}
                img={product.img}
                secondaryImg={product.secondaryImg}
                stylesCard={styles.cardsProduct}
                animationOptional={styles.scaleInVerBottom}
              />
            );
          })}

      
        </div>
        {more && 
        <button onClick={lookMore} className={styles.lookButton}>
          VER MÁS
        </button>
        }
        {!more && 
        <button onClick={lookLess} className={styles.lookButton}>
          VER MENOS
        </button>
        }
      </section>
    </>
  );
};

export default SectionCategory;