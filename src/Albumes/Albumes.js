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
                <div className="fondoAlbumes">
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    canciones.map((cancion) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-5 border-dark">
                                        <img src={cancion.album.images[0].url} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center  text-danger fs-3 mt-2">{cancion.name}</h1>
                                        <h1 className="text-center  fs-3 text-info">{cancion.popularity}</h1>
                                        <audio controls src={cancion.preview_url}></audio>
                                    </div>
                                </div>
                            </>

                        )

                    })
                }
            </div>
            </div>
            </>
        )

    }


    


}