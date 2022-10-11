export function Footer(){
    return(
        <>
            <footer className="text-center container-fluid bg-dark text-white p-3 mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 text-end">
                        <h4>&copy; Valentina Varela</h4>
                        <h4>Medellín</h4>
                        <h4>Aprendíz Sura</h4>
                        <h4>2022</h4>
                    </div>
                    <div className="col-12 col-md-6 text-start border-start">
                        <a href="https://www.instagram.com/"><i class="bi bi-instagram fs-2"></i></a>
                        <div>
                            <a href="https://www.facebook.com/"><i class="bi bi-facebook fs-2"></i></a>
                        </div>
                        <div>
                            <a href="https://web.whatsapp.com/"><i class="bi bi-whatsapp fs-2"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}