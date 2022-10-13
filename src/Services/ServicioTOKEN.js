export async function ServicioTOKEN(){
    //Uri
    const URI="https://accounts.spotify.com/api/token"

    //Datos
    const DATOS1="grant_type=client_credentials"
    const DATOS2="client_secret=365b75726d424645bcf09fa9a499f24b"
    const DATOS3="client_id=2713f18fefe94c96887d0248e0cf7989"

    //Petición
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATOS1+"&"+DATOS2+"&"+DATOS3
    }

    //Fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    return datos
}