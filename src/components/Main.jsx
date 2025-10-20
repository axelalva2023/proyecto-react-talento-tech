import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [contador, setContador] = useState(0);
  

  return (
    <main>
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
      <button onClick={() => setContador(0)}>Borrar</button>
    </main>
  );
}

export default Main;
