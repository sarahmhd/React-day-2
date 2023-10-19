// import "./card.css";

import "./productCard.css";

import { FaHeart, FaShoppingBag } from "react-icons/fa";

import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const Card = (props) => {
  const { product } = props;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="col-content card position-relative">
        <div className="heart-icon position-absolute">
          <FaHeart className="heart" />
        </div>
        <div className="card-img-top">
          <img src={product.image} alt={product.title} />
        </div>
        <ReactStars
          className="px-3 fs-1 stars"
          count={5}
          onChange={ratingChanged}
          value={product.rating.rate}
          color2={"#ffd700"}
        />
        <div className="card-body">
          <h3 className="card-title">
            <Link
              className="text-decoration-none text-black"
              to={`/products/${product.id}`}
            >
              {product.title.slice(0, 35)}
            </Link>
          </h3>
          <p className="card-text">{product.description.slice(0, 100)}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="p-price d-flex gap-1 align-items-center">
              <span className="price">{product.price}</span>
              <span>$</span>
            </p>
            <a href="#" className="btn add-cart">
              <FaShoppingBag />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
