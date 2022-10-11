export async function serviciosSpotify(){
    const URI="https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=US"

    const TOKEN="Bearer BQBFlTotRrWxkWWuZ45GrgiBzoMqe9KoCaHA4a91ShdAGxRoNoEXc4QLE7nLSuM9fBRUaIhYUm1RCWIUhtNdw-gls5pYvCIJL3VHZsM1a6mDUCJI2X1KXABmW4Vzuy68PJDsZ8fm2Eo7KW2LbUgUZTMgzxtBFNg3pIedDIwyezlLKV4guv696G1bsQLomrCf-6w"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}