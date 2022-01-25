import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';


export default function NavBar (){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Creaciones-MB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/categoria/Etiquetas"}>Etiquetas</NavLink>
                        <NavLink to={"/categoria/Caja"}>Cajas</NavLink>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}