import React from 'react';

function Footer() {
    return (
        <>
            <footer class="main-footer">
                <section class="container container--flex">
                    <div class="column column--33">
                        <p class="titulo-footer-1"><b>¿Por que visitarnos?</b></p>
                        <p class="column__txt parrafo-footer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum eveniet maxime in, fugiat pariatur ducimus</p>
                    </div>
                    <div class="column column--33">
                        <p class="titulo-footer-2"><b>Contactanos</b></p>
                        <p class="column__txt parrafo-footer">Las Lilas 123 - Mar del Plata, Argentina</p>
                        <p class="column__txt parrafo-footer">Telefono: 2235267501</p>
                        <p class="column__txt parrafo-footer">creacionesmb.mdp@gmail.com</p>
                    </div>
                    <div class="column column--33">
                        <p class="titulo-footer-3"><b>Seguinos en nuestras redes</b></p>
                        <p class="column__txt parrafo-footer"><a href="https://www.facebook.com/creacionesmb.mdp" target="_blank" class="icon-facebook"></a>Facebook</p>
                        <p class="column__txt parrafo-footer"><a href="https://www.instagram.com/crea.ciones.mb/" target="_blank" class="icon-instagram"></a>Siguenos en Instagram</p>
                    </div>
                </section>
                <p class="copy">2021 Creaciones MB | Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default Footer;
