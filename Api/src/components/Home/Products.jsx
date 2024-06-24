import { Link } from "react-router-dom";
import "./index.css";

function Products(Props) {

  // it will show maximum character in card
  const truncateText = (text, maxChars) => {
    if (text.length > maxChars) {
      return text.slice(0, maxChars) + "...";
    }
    return text;
  };

  return (
    <div className="container">
      <div className="card-grp row row-cols-1 row-cols-md-3">
        {Props.products.map((product) => {
          console.log(product, "product");
          const { id, title, price, category, image } = product;
          return (
            <Link
              to={`/products/${id}`}
              className="card col border-1 mt-5 text-decoration-none"
              key={id}
            >
              <img
                className="card-img-top fixed-size"
                src={image}
                alt="Loading"
              />
              <div className="card-body">
                <h3>{category}</h3>
                <h2 className="card-title">{truncateText(title, 19)}</h2>
                <h4 className="card-price">Price: ${price}</h4>
                <a className="ordernowbtn mt-3">Order Now</a>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
