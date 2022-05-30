const products = [
  {
    id: 1,
    name: "Camiseta - Hoy es el Futuro",
    stock: 18,
    cost: 85000,
    description:
      "Camiseta negra 100% algodón peinado - Unisex - FIT regular. Estampado a 1 tinta en serigrafía adelante y atrás. Hoy es el futuro",
    image:
      "//d3ugyf2ht6aenh.cloudfront.net/stores/996/109/products/camiseta-pantera-futuro21-8e779e7173aaa917e016480729059193-320-0.jpg",
    sales: 2,
  },
  {
    id: 2,
    name: "Camiseta - El Dolor no es Permanente",
    stock: 20,
    cost: 85000,
    description:
      "Camiseta negra 100% algodón peinado - Unisex - FIT regular. Estampado a 1 tinta en serigrafía adelante y atrás. El Dolor no es Permanente",
    image: "https:", //d3ugyf2ht6aenh.cloudfront.net/stores/996/109/products/camiseta-el-dolor21-39195e4dbe5840003516480727852349-320-0.jpg'
    sales: 0,
  },
  {
    id: 3,
    name: "Camiseta - Mantente Fuerte",
    stock: 20,
    cost: 85000,
    description:
      "Camiseta negra 100% algodón peinado - Unisex - FIT regular. Estampado a 1 tinta en serigrafía adelante y atrás. El Dolor no es Permanente",
    image:
      "//d3ugyf2ht6aenh.cloudfront.net/stores/996/109/products/camiseta-mantente-fuerte21-ba607bc7fd9e0d195716449573602845-320-0.jpg",
    sales: 3,
  },
  {
    id: 3,
    name: "Camiseta - Mantente Fuerte",
    stock: 20,
    cost: 85000,
    description:
      "Camiseta negra 100% algodón peinado - Unisex - FIT regular. Estampado a 1 tinta en serigrafía adelante y atrás. El Dolor no es Permanente",
    image:
      "//d3ugyf2ht6aenh.cloudfront.net/stores/996/109/products/camiseta-mantente-fuerte21-ba607bc7fd9e0d195716449573602845-320-0.jpg",
    sales: 3,
  },
  {
    id: 4,
    name: "Camiseta - Escorpión",
    stock: 20,
    cost: 85000,
    description:
      "Camiseta negra 100% algodón peinado - Unisex - FIT regular. Estampado a 1 tinta en serigrafía adelante y atrás.",
    image:
      "[https://d3ugyf2ht6aenh.cloudfront.net/stores/996/109/products/camiseta-escorpion21-f3b09f14d1eddeb57516387937993850-320-0.jpg",
    sales: 0,
  },
  {
    id: 5,
    name: "Camiseta - Negra Básica",
    stock: 16,
    cost: 65000,
    description:
      "Camiseta negra 100% algodón peinado de 180 grs - Unisex - FIT regular. Estampado a 1 tinta en serigrafía adelante",
    image:
      "//d3ugyf2ht6aenh.cloudfront.net/stores/996/109/products/basica-negra1-213b0f8eff5a96ae4d16178933218791-320-0.jpg]",
    sales: 4,
  },
];

console.log(products.map((product) => product.id));
console.log(products.map((product) => product.id).join(","));
