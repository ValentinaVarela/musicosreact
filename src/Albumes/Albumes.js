import { useState } from "react";
import { serviciosSpotify } from "../Services/ServiciosSpotify";

export function Albumes(){


    const[canciones,setCanciones]=useState(null)

    serviciosSpotify()
    .then(function(respuesta){
        setCanciones(respuesta)
    })

    console.log(canciones);

    return(
        <div>
            <h1>HOLA</h1>
        </div>
    )


}