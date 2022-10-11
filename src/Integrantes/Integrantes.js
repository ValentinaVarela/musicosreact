import './Integrantes.css'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'
export function Integrantes(){
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Bad Bunny.</h2>
                    <h3><i class="bi bi-file-earmark-music-fill"></i>Un Coco<i class="bi bi-file-earmark-music-fill"></i></h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/mar%20y%20bad.jpg?alt=media&token=bee939aa-8e3d-4408-90c2-ab6d546729c7"
                     alt="" className="img-fluid w-75 animated__animated animate__bounce" data-bs-toggle="collapse"
                     data-bs-target="#collapseExample"/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        Al igual que muchas de las canciones de Bad Bunny, 'Un Coco' es una melodía que habla de resignación y desamor, podemos encontrar oraciones que hablan acerca de cómo olvidar a un viejo amor, cuando se fracasa en el romance luego de haberlo dado todo por esa persona especial.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/bad2.webp?alt=media&token=8565c62e-1836-4269-ae47-8c52fc8716be"
                     alt="" className="img-fluid w-75 animated__animated animate__bounce wow" data-bs-toggle="collapse"
                     data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-end text-end'>
                    <h2>Bad Bunny.</h2>
                    <h3><i class="bi bi-file-earmark-music-fill"></i>Andrea<i class="bi bi-file-earmark-music-fill"></i></h3>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        La canción Andrea encierra quizá la mayor crítica social que ha hecho Bad Bunny, narrando la historia de una mujer puertorriqueña que busca hacerle frente al acoso y a la violencia que viven las mujeres en el mundo.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Bad Bunny.</h2>
                    <h3><i class="bi bi-file-earmark-music-fill"></i>Ojitos Lindos<i class="bi bi-file-earmark-music-fill"></i></h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/mar%20y%20bad.jpg?alt=media&token=bee939aa-8e3d-4408-90c2-ab6d546729c7"
                     alt="" className="img-fluid w-75 animated__animated animate__bounce wow" data-bs-toggle="collapse"
                     data-bs-target="#collapseExample"/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        Bad Bunny, contrario a lo que muchos creían, no escribió Ojitos Lindos pensando en una persona, ya que el tema fue inspirado en su mascota, una perrita Beagle llamada Sansa.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/bad2.webp?alt=media&token=8565c62e-1836-4269-ae47-8c52fc8716be"
                     alt="" className="img-fluid w-75 animated__animated animate__bounce wow" data-bs-toggle="collapse"
                     data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-end text-end'>
                    <h2>Bad Bunny.</h2>
                    <h3><i class="bi bi-file-earmark-music-fill"></i>Tití Me Pregunto<i class="bi bi-file-earmark-music-fill"></i></h3>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        Es un dembow rapeado en el que Bad Bunny presume de "tener muchas novias” en todas partes del mundo. En especial, la parte salsera no ha dejado escapar nada y se refiere en concreto a donde dice: "La de Barcelona que vino en avión / Y dice que mi bicho está cabrón".
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}