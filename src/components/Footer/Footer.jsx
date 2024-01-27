import React from 'react'
import styles from './Footer.module.scss'
import FooterTop from './FooterTop'
import FooterDown from './FooterDown'
import FooterMid from './FooterMid'
import FooterNewsletter from './FooterNewsletter'

const Footer = () => {
  return (
    <>
    <FooterNewsletter/>
    <footer>
      <FooterTop/>
      <FooterMid/>
      <FooterDown/>
    </footer>
    </>
  )
}

export default Footer