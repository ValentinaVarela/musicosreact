export function Carrusel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/2021.jpg?alt=media&token=c3b76279-2a57-408c-9875-af32e9e44261https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/2021.jpg?alt=media&token=c3b76279-2a57-408c-9875-af32e9e44261" class="d-block w-100" height="800" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/2020.webp?alt=media&token=2e34513f-6176-42af-9e9d-8267b58ecd6f" class="d-block w-100" height="800" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-d06a9.appspot.com/o/2022.jpeg?alt=media&token=4fb5e4fb-f728-4f50-898f-0aa0ec4c9a17" class="d-block w-100" height="800" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" 
                data-bs-target="#carouselExampleControls"data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}