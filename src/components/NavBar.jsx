import React from "react";
import CartWidget from "./CartWidget";


export default function NavBar (){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Creaciones MB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Etiquetas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cajas</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <CartWidget/>
                    </span>
                </div>
            </div>
        </nav>
        </>
    );
}