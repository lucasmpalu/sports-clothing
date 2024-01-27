import React from 'react'
import styles from './SectionCategory.module.scss';

const CardCategory = ({img, title, getData}) => {

  return (
    <div onClick={() => {getData(title.toLowerCase())}} className={styles.cardCategory}>
        <img src={img} alt={{title}} />
        <div>
        <p>{title == 'Female' ? 'Mujeres' : null}</p>
        <p>{title == 'Male' ? 'Hombres' : null}</p>
        <p>{title == 'Jogging' || title == 'Short' || title ==  'Zapatilla' || title == 'Buzo' || title == 'Remera' || title == 'Todo' ? title+'s' : null}</p>
        </div>
    </div>
  )
}

export default CardCategory