import "./Product.css";

function Product({title, price, features, features2}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{features}</p>
            {/* <p>{features2.b}</p> */}
        </div>
    );
}

export default Product;
