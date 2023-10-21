import React, { useEffect, useState } from "react";

import Loader from "../components/loader/Loader";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProduct(data);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row py-5">
        <div class="col-lg-4">
          <div class="product-img">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="info d-flex flex-column gap-3">
            <h2 class="title">{product.title}</h2>
            <ReactStars
              className="fs-1 stars"
              count={5}
              onChange={ratingChanged}
              value={product.rating?.rate}
              color2={"#ffd700"}
            />
            <span class="price text-muted"> {product.price}$ </span>
            <p class="desc">{product.description}</p>
            <p class="category">
              <span className="fw-bold">categories:</span>{" "}
              <span class="ctg">{product.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
