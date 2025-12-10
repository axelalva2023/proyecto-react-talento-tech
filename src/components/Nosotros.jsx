import React from 'react'
import '../styles/App.css'
import hero from '../img/nosotros.jpg';

function Nosotros() {
  return (
    <section className='nosotros'>
        <div>
            <h2>Nosotros</h2>
            <p>Somos un equipo dedicado a ofrecer una experiencia de compra simple, confiable y accesible para todos. Creemos en la transparencia, la atención personalizada y la calidad de cada producto que ofrecemos. Nuestro compromiso es acompañarte en cada paso, brindándote un servicio cercano y soluciones pensadas para facilitar tu día a día.</p>
        </div>
        <div className='contenedor-imagen'>
        <img src={hero} alt=""/>
        <p className='texto-sobre-imagen'>Comida en preparación. Creditos: Axel Alva</p>
        </div>
    </section>
  )
}

export default Nosotros