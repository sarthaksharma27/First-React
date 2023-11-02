import './Product.css';

function Product({ title, price, features }) {
    let isDiscount = price > 30000
    let styles = {backgroundColor : isDiscount ? "blue" : ""}
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      {isDiscount && <p>Discount of 5%</p> }
    </div>
  );
}

export default Product;
