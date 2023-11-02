import './Product.css';

function Product({ title, price, features }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
    </div>
  );
}

export default Product;
