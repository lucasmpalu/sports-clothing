import React from 'react'
import { Field, ErrorMessage} from 'formik'
import styles from '../SectionAccount/SectionAccount.module.scss'
import { InputStyled, ErrorStyled, ContactTextarea } from '../SectionAccount/FormsStyles'

const BoxTextarea = ({ name, isError, label, placeholder, text}) => {
  return (
    <div className={styles.containerInputAccount}>
        <label htmlFor={label}>{text}</label>
        <Field
            style={{padding: '0.6rem'}}
            as={ContactTextarea}
            id={label}
            name={name}
            error={isError}
            placeholder={placeholder}
            rows="7" // Puedes ajustar el número de filas según tus necesidades
        />
        <ErrorMessage name={name} component={ErrorStyled}/>
    </div>
  )
}

export default BoxTextarea