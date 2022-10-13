import { useState,useEffect } from "react";
import { serviciosSpotify } from "../Services/ServiciosSpotify";
import { ServicioTOKEN } from "../Services/ServicioTOKEN.js";

export function Albumes(){

    //Declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //Usando el useEffect
    useEffect(function(){

        serviciosSpotify()
    .then(function(respuesta){
        console.log(respuesta);
        setCanciones(respuesta.tracks)
        setCarga(false)
    })

    console.log(canciones);

    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy Cargando...</h1>
            </>
        )

    }else{

        return(
            <>
                <div className="row row-cols-1 row-cols-md-4 g-3 mt-3">
                    {
                    canciones.map(function(cancion){
                                <div className="col mt-3">
                                    <div className="card h-100 tarA">
                                        <img src={cancion.album.images[0].url} className="img-fluid w-100 h-100" alt="foto"/>  
                                        <audio src={cancion.preview_url} className="w-100" controls="controls"></audio>
                                        <h1 className="text-center">{cancion.album.nombre}</h1>                             
                                    </div>
                                </div>
                     })
                }
                </div>
            </>
        )

    }


    


}