import "./Musicos.css"

export function Musicos(){

    //Un arreglo de objetos es formato como al consumir un api
    let musicos=[
        {
            nombre:"Oasis es un álbum de estudio colaborativo entre los raperos J Balvin y Bad Bunny. El álbum abarca desde el Reguetón al Latin Trap e incluye leves pinceladas de folclore latino y Jazz, presenta ocho canciones. Asimismo, es el primer álbum colaborativo entre J Balvin y Bad Bunny, siendo que ya antes trabajaron juntos en diversas canciones como: «Si tu novio te deja sola» y «I Like It» junto a Cardi Además, todos los videoclips del álbum fueron dirigidos por Colin Tilley. Dentro del álbum, se desprenden algunos sencillos como: «Qué pretendes», «La canción», «Un peso» y «Yo le llego» entre otros. En este álbum, están incluidas las participaciones de Marciano Cantero y Mr. Eazi.",
            rol:"28/Junio/2019",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/2019.jpg?alt=media&token=e75bf327-63f0-47ae-b9f1-482bf85ae40f"
        },
        {
            nombre:"YHLQMDLG (abreviación de Yo hago lo que me da la gana) es el álbum de estudio en solitario del rapero y cantante puertorriqueño Bad Bunny. Se lanzó el 29 de febrero de 2020 por Rimas Entertainment. Presenta apariciones especiales de Daddy Yankee, Arcángel, Myke Towers, Sech, Anuel AA, Yaviah, Kendo Kaponi, Jowell & Randy, Ñengo Flow, entre otras. El álbum fue lanzado solo dos días después de su anuncio. Alcanzó el número dos en el Billboard 200 de Estados Unidos.",
            rol:"29/Febrero/2020",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/2020.jpg?alt=media&token=513e4ff4-43fb-450f-ada8-4e8438a040f8"
        },
        {
            nombre:"El último tour del mundo es el álbum de estudio en solitario, del rapero y cantante puertorriqueño Bad Bunny. Se lanzó el 27 de noviembre de 2020 por Rimas Entertainment, solo nueve meses después de su trabajo discográfico anterior, YHLQMDLG. Está compuesto por dieciséis temas y cuenta con apariciones especiales de Jhay Cortez, Rosalía y Abra. Según la canción «<3» de Bad Bunny, este sería el último álbum del cantante antes de retirarse de la música por un período de tiempo indefinido. Se convirtió en el primer álbum en español en alcanzar el número uno en el Billboard 200 de Estados Unidos.",
            rol:"27/Noviembre/2020",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/bad%202021.jpg?alt=media&token=f4143c44-c08e-455e-993c-18158aef71a1"
        },
        {
            nombre:"Un verano sin ti es el álbum de estudio en solitario del rapero y cantante puertorriqueño Bad Bunny. Fue lanzado el 6 de mayo de 2022 por Rimas Entertainment, luego del lanzamiento de su disco anterior El último tour del mundo (2020). El álbum contiene veintitrés pistas. y cuenta con las colaboraciones de Chencho Corleone, Jhay Cortez, Tony Dize, Rauw Alejandro, Bomba Estéreo, The Marías y Buscabulla.Un verano sin ti, un éxito comercial y de crítica, debutó en la cima del Billboard 200 de Estados Unidos, marcando el segundo álbum número uno de Bad Bunny y el tercer álbum en español en encabezar la lista Recibió dos nominaciones en la 23.ª Entrega Anual de los Premios Grammy Latinos, por «Álbum del Año» y «Mejor Álbum de Música Urbana».",
            rol:"6/Mayo/2022",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/bad%2020222.png?alt=media&token=b31daa5f-6308-4dfb-aa20-cfd75abfc46d"
        }

    ]

    let conciertosMemorables=[
        {
            fecha:"05/Agosto/2022",
            pais:"Orlando",
            descripcion:"Un Verano Sin ti",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/Orlando.jpg?alt=media&token=21e1669d-7c9f-4ad1-ad7a-6834b7029c2e"
        },
        {
            fecha:"12/Agosto/2022",
            pais:"Miami/Florida",
            descripcion:"Un Verano Sin Ti",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/uvst.jpg?alt=media&token=a945e3d9-6d42-42a3-b809-0f32145253fc"
        },
        {
            fecha:"14/Septiembre/2022",
            pais:"Los Angeles",
            descripcion:"Un Verano Sin Ti",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/los%20angeles.jpg?alt=media&token=bc69f3dc-1686-48a8-a8f8-ce309b0d93dc"
        },
        {
            fecha:"28/Julio/2022",
            pais:"Puerto Rico",
            descripcion:"Un Verano Sin Ti",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/bad%203.jpg?alt=media&token=de145be5-30c7-45f1-bfcc-151579946dd6"
        }
    ]

    //mapeando un arreglo para hacer render
    return(
        <>
        <div className="row row-cols-1 row-cols-md-4 g-3 bg-black">
            {
                musicos.map(function(musico){
                    return(
                        <>
                            <div className="col">
                                <div className="card h-100 tarA">
                                    <img src={musico.url} className="" height="400" alt="foto"/>
                                    <h4 className="text-center mt-5">{musico.rol}</h4>
                                    <p className="text-center mt-5">{musico.nombre}</p>                                
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        <div className="musicos">
            <h1>Conciertos Memorables</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3 bg-black">
            {
                conciertosMemorables.map(function(conciertomemorable){
                    return(
                        <>
                            <div className="col">
                                <div className="card h-100 tarB">
                                    <img src={conciertomemorable.foto} className="" height="400" alt="foto"/>
                                    <h2 className="text-center mt-5">{conciertomemorable.pais}</h2>
                                    <h5 className="text-center">{conciertomemorable.fecha}</h5>
                                    <h5 className="text-center">{conciertomemorable.descripcion}</h5>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        </>
        
    )

}