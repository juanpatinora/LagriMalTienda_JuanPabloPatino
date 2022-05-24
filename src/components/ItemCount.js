import { useState } from "react";
import { Container, Button, Row } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [contador, AsignarValor] = useState(initial);

  function incrementar() {
    if (contador < stock) AsignarValor(contador + 1);
  }
  function decrementar() {
    if (contador > 0) AsignarValor(contador - 1);
  }
  function validarStock() {
    if (stock > 0) onAdd();
  }

  return (
    <Container fluid="md">
      <Button variant="outline-dark" onClick={decrementar}>
        -
      </Button>
      <span>{contador}</span>
      <Button variant="outline-dark" onClick={incrementar}>
        +
      </Button>
      <Row>
        {" "}
        <Button variant="outline-dark" onClick={validarStock}>
          Agregar al carrito
        </Button>
      </Row>
    </Container>
  );
};

export default ItemCount;
