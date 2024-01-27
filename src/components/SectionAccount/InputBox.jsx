import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import styles from './SectionAccount.module.scss'
import { InputStyled, ErrorStyled } from './FormsStyles'

const InputBox = ({type, name, isError, label, placeholder, text}) => {
  return (
    <div className={styles.containerInputAccount}>
        <label htmlFor={label}>{text}</label>
        <Field
            name={name}
            type={type}
            error={isError}
            id={label}
            placeholder={placeholder}
            as={InputStyled}
        />
        <ErrorMessage name={name} component={ErrorStyled}/>
    </div>
  )
}

export default InputBox