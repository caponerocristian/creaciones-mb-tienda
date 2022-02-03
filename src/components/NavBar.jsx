import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

export default function NavBar (){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><Link to={"/"}><img src="/img/LOGO.png" className="logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/categoria/Etiquetas"} className="link-menu">Etiquetas</Link>
                        <Link to={"/categoria/Caja"} className="link-menu">Cajas</Link>
                    </Nav>
                    <Nav>
                        <Link to={"/cart"}><CartWidget/></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}