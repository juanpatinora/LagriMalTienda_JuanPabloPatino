import { BsCart } from "react-icons/bs";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
  return (
    <div>
      <BsCart></BsCart>
      <Badge bg="dark" text="light">
        4
      </Badge>
    </div>
  );
};

export default CartWidget;
