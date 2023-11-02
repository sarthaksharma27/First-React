import "./Product.css";

function Product({title, price}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>Price: {price}</p>
        </div>
    );
}

export default Product;