import React from 'react';
// import styles from '../../pages/Home/Home.module.scss';
import styles from './CardProducts.module.scss';
import { addProduct, incrementQuantity, openModal, updateModal } from '../../redux/cartSlice';
import { Products } from '../../data/Products';
import { useDispatch, useSelector } from 'react-redux'; 



const CardProduct = ({ animationOptional = null ,id, title, price, talles, img, secondaryImg, stylesCard }) => {

  const dispatch = useDispatch()
  const { open, productsCart, subtotalCart } = useSelector((state) => state.cart); //cart es el nombre que definimos en el store

  const availableTalles = Object.entries(talles)
    .filter(([talle, cantidad]) => cantidad !== 0)
    .map(([talle]) => talle)
    .join('-');
  

  const buy = () => {
    dispatch(updateModal(id))
    dispatch(openModal())
  }
  
    return (
    <div className={`${stylesCard} ${animationOptional}`}>
      <div className={styles.containerImg}>
        <img className={styles.cardImgSecondary} onClick={buy} src={secondaryImg} alt={title} />
        <img className={styles.cardImgPrimary} src={img} alt={title} />
      </div>
      <p className={styles.cardTalles}>
      {availableTalles}
      </p>
      <p className={styles.cardTitle}>{title}</p>
      <h4 className={styles.cardPrice}>${price}</h4>
      <button onClick={buy} id={id} className={styles.cardButton}>Comprar</button>
    </div>
  );
};

export default CardProduct;