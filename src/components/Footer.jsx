import React from 'react';

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <section className="container container--flex">
                    <div className="column column--33">
                        <p className="titulo-footer-1"><b>¿Por que visitarnos?</b></p>
                        <p className="column__txt parrafo-footer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum eveniet maxime in, fugiat pariatur ducimus</p>
                    </div>
                    <div className="column column--33">
                        <p className="titulo-footer-2"><b>Contactanos</b></p>
                        <p className="column__txt parrafo-footer">Las Lilas 123 - Mar del Plata, Argentina</p>
                        <p className="column__txt parrafo-footer">Telefono: 2235267501</p>
                        <p className="column__txt parrafo-footer">creacionesmb.mdp@gmail.com</p>
                    </div>
                    <div className="column column--33">
                        <p className="titulo-footer-3"><b>Seguinos en nuestras redes</b></p>
                        <p className="column__txt parrafo-footer"><a href="https://www.facebook.com/creacionesmb.mdp" target="_blank" className="icon-facebook"></a>Facebook</p>
                        <p className="column__txt parrafo-footer"><a href="https://www.instagram.com/crea.ciones.mb/" target="_blank" className="icon-instagram"></a>Siguenos en Instagram</p>
                    </div>
                </section>
                <p className="copy">2021 Creaciones MB | Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default Footer;
