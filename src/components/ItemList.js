import React from "react";
import Item from "../components/Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <h3>Lista de Productos</h3>
      <div className="d-flex justify-content-between flex wrap">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
