
import * as Yup from 'yup'

export const validationSchemaRegister = Yup.object({
 
    name: Yup.string()
    .trim()
    .matches(/^(\S+\s*){2,}$/, 'Debe tener al menos dos palabras')
    .max(30, 'Te pasaste de caracteres')
    .required('Campo requerido'),

    email: Yup.string()
           .email('Debes ingresar un email valido')
           .required('Campo requerido'),
     number: Yup.number('Solo numeros'),
     password: Yup.string()
     .required('La contraseña es obligatoria')
     .min(5, 'La contraseña debe tener al menos 5 caracteres')
     .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
     .matches(/\d/, 'La contraseña debe contener al menos un número')
     .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe contener al menos un carácter especial'),
     repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),
    })


export const validationSchemaLogin = Yup.object({
    email: Yup.string()
           .email('Debes ingresar un email valido')
           .required('Campo requerido'),
    password: Yup.string()
     .required('La contraseña es obligatoria')
     .min(5, 'La contraseña debe tener al menos 5 caracteres')
     .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
     .matches(/\d/, 'La contraseña debe contener al menos un número')
     .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe contener al menos un carácter especial'),
     repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),
})

export const validationSchemaContact = Yup.object({
    name: Yup.string()
    .trim()
    .matches(/^(\S+\s*){2,}$/, 'Debe tener al menos dos palabras')
    .max(30, 'Te pasaste de caracteres')
    .required('Campo requerido'),
    email: Yup.string()
           .email('Debes ingresar un email valido')
           .required('Campo requerido'),
     number: Yup.number('Solo numeros'),
     message: Yup.string().required('Este campo es requerido').max(300, 'Máximo 300 caracteres'),
    })