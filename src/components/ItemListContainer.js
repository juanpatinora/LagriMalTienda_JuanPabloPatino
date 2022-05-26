import { useEffect, useState } from "react";
import customfetch from "../utils/CustomFetch";
const { products } = require('../utils/products');

const ItemListContainer = (props) => {

useEffect(() => {
  customfetch(2000, products)
    .then(result => setDatos(result));
    .catch(err => console.log(err))
}, []);

const onAdd = (qty) => {
  alert("Seleccionaste " + qty + " items.");
}

return <h1>{props.greeting}</h1>;
   (
   <>
      <ItemList items={datos} />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
   </>
   )

};
export default ItemListContainer;
