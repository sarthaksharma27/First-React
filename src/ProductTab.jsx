import React from 'react';
import Product from './Product.jsx';

function ProductTab() {
  let options = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li> ];
  // let options2 = { a: 'hi-tech', b: 'durable', c: 'fast' };

  return (
    <>
      <Product title="phone" price={30000} features={options}  />
      <Product title="laptop" price={40000} features={options}  />
      <Product title="pen" price={10} />
    </>
  );
}

export default ProductTab;
