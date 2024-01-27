import React from 'react'
import whatsapp from "../../../assets/icons/whatsapp.png";

const StickyWhatsapp = () => {

    const styleWhatsapp = {
        height:'24px',
        
    }

  return (
    <a href="https://wa.me/543413127575" ><img src={whatsapp} style={{height:'50px', zIndex: '1000', width:'50px', position: 'fixed', bottom: '40px', right: '50px'}} alt="whatsapp" />
    </a>)
    }

export default StickyWhatsapp