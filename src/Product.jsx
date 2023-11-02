import './Product.css';
import Price from "./Price.jsx";

function Product({ title, idx}) {
  let oldPrices = ["12,495", "5000", "2000", "3500"];
  let newPrices = ["8,999", "9,199", "999", "560"]
  let description = [ 
    ["8,000 DPI", "5 Programmable buttons"],
    ["intutive surfase", "designed of ipad pro"],
    ["intutive surfase", "intutive surfase"],
    ["intutive surfase", "intutive surfase"] 
  ]
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;
