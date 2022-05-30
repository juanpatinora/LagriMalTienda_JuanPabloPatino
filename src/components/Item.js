import React from "react";

const Item = ({ producto }) => {
  const { name, img, description, cost, stock } = producto;
  return (
    <div className="card" style={{ width: "25%", margin: "1px" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{cost}</p>
      </div>
    </div>
  );
};

export default Item;
