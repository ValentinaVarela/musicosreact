import { ServicioTOKEN } from "./ServicioTOKEN.js"

export async function serviciosSpotify(){

    const URI="https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=US"

    const TOKEN=await ServicioTOKEN()

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}