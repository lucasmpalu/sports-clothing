import React, {useState} from 'react'
import styles from './Footer.module.scss'
import emailUsers from '../../data/emailUsers';

const FooterNewsletter = () => {

  const [newEmail, setNewEmail] = useState('');
  const [showSpan, setShowSpan] = useState(false)

  const saveEmail = (e) => {
    e.preventDefault()
    // ACA SIMULO QUE ESTOY MODIFICANDO LA BASE DE DATOS, ENVIANDO EL EMAIL
    emailUsers.push(newEmail)
    setTimeout(() => {
      setShowSpan(true)
      setTimeout(() => {
        setNewEmail('');
      }, 1000);
    }, 500);
  }

  const handleChange = (e) => {
    setNewEmail(e.target.value)
  }

  


  return (
    <div className={styles.footerNewsletter}>
        <div className={styles.newsletterLeft}>
            <h2>Newsletter</h2>
            <p>Registrate y recibí nuestra novedades</p>
        </div>
        <div className={styles.newsletterRight}>
            <form action="submit" onSubmit={saveEmail}  className={styles.newsletterForm}>
              <div className={styles.containerInput}>
                <input onChange={handleChange}type="email" value={newEmail} placeholder='Ingresá tu email...' className={styles.newsletterInput}/>
                <button className={styles.newsletterButtonSend} >Enviar</button>
              </div>
              {showSpan && <span>¡Gracias por suscribirte! A partir de ahora recibiras nuestras novedades</span>}
            </form>
        </div>
    </div>
  )
}

export default FooterNewsletter