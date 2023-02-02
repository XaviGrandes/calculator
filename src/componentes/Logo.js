import React from "react";
import casioLogo from '../imagenes/logo-casio.png'
import '../hojas-de-estilo/Logo.css'

const Logo = () => (
    <div className='logo-contenedor'>
          <img 
          className='logo'
          src={casioLogo} 
          alt='Logo calculadora' />
    </div>
)

export default Logo