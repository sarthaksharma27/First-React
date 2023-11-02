import React from 'react';
import Product from './Product.jsx';

function ProductTab() {
  let styles = {
     display: "flex",
     flexwrap: "wrap",
     justifyContent: "center",
     alignItem: "center",
  }
  return (
    <div style={styles}>
      <Product title="Logitech MX Mater" idx={0}/>
      <Product title="Apple pencil" idx={1}/>
      <Product title="Zebronics" idx={2}/>
      <Product title="Petronics Toad 23" idx={3}/>
    </div>
  );
}

export default ProductTab;

