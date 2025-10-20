import React from "react";
import { useState } from "react";

function ListaUsuarios(){

    const [nombre, setNombre] = useState("")

    const manejarCambio = (i) => {
        setNombre(i.target.value)
    }

     const usuarios = ["tego", "lucas", "pepito"]
     
    return(
        <>
        <ul>
            {usuarios.map(i =>(
                <li key={i}>{i}</li>
            ))}
        </ul>
        <form>
            <input type="text" onChange={manejarCambio} placeholder="Escribe tu nombre"/>
        </form>
        <p>Hola {nombre}</p>
        </>
    )
}

export default ListaUsuarios