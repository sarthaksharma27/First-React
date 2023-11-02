import './Product.css';

function Product({ title, price, features }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      {price > 30000 ? <p>Discount of 5%</p> : null }
    </div>
  );
}

export default Product;
