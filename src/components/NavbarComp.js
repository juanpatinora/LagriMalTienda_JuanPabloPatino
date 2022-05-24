import React, { Component } from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Lagri Mal Tienda</Navbar.Brand>
            <Row>
              <Nav className="me-auto">
                <Nav.Link href="#home">Ropa</Nav.Link>
                <Nav.Link href="#features">Accesorios</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                <Nav.Link href="#cartwidget">
                  <CartWidget />
                </Nav.Link>
              </Nav>
            </Row>
          </Container>
        </Navbar>
        <ItemListContainer greeting="Hello, React" />
        <ItemCount stock={20} initial={5}></ItemCount>
      </div>
    );
  }
}
