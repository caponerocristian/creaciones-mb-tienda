import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";


export default function NavBar (){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Creaciones-MB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Etiquetas">Etiquetas</Nav.Link>
                        <Nav.Link href="#Cajas">Cajas</Nav.Link>
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