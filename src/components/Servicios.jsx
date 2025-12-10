import React from 'react'
import '../styles/App.css'
import hero from '../img/servicios.jpg';

export default function Servicios() {
  return (
    <section className='servicios'>
        <div>
            <h2>Servicios</h2>
            <p>En nuestra tienda online te ofrecemos una experiencia de compra rápida, segura y sencilla. Contamos con un catálogo actualizado, un carrito inteligente que guarda tus productos, múltiples métodos de pago y envíos a todo el país. Nuestro objetivo es brindarte un servicio confiable, con atención personalizada y soporte en cada paso de tu compra.</p>
        </div>
        <div className='contenedor-imagen'>
        <img src={hero} alt="" />
        <p className='texto-sobre-imagen'>Pizza lista para comer. Creditos: Axel Alva</p>
        </div>
                
            
    </section>
  )
}
