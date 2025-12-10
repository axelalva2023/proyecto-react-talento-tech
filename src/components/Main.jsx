import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/App.css'

function Main() {
  const [contador, setContador] = useState(0);
  const texto = "Bienvenidos a mi carrito";
  const [contenido, setContenido] = useState("");
  const [i, setI] = useState(0);
  const [escribiendo, setEscribiendo] = useState(true);

  const speed = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (escribiendo) {
        if (i < texto.length) {
          setContenido(texto.substring(0, i + 1));
          setI(i + 1);
        } else {
          setEscribiendo(false);
        }
      } else {
        if (i > 0) {
          setContenido(texto.substring(0, i - 1));
          setI(i - 1);
        } else {
          setEscribiendo(true);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [i, escribiendo, texto]);
  

  return (
    <main>
      <section className="hero">
        <h1>{contenido}</h1>
      </section>
      {/* Esto es un comentario 
      <h2>Contenido Principal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores
        commodi labore minus consectetur adipisci, dicta voluptatibus accusantium
        neque delectus assumenda et error quae dolore eligendi ullam eveniet?
        Aliquid, quisquam.
      </p>
      <p>Total {contador}</p>
      <button onClick={() => setContador((i) => i + 1)}>Suma</button>
      <button onClick={() => setContador((i) => i - 1)}>Resta</button>
      <button onClick={() => setContador(0)}>Borrar</button>*/}
    </main>
  );
}

export default Main;
