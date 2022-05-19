import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import CartWidget from "./CartWidget";

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Lagri Mal Tienda</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Ropa</Nav.Link>
      <Nav.Link href="#features">Accesorios</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      <Nav.Link href="#cartwidget">Cartwidget /</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
            </>
            </div>
        )
    }
}