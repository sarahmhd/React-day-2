import { useEffect, useState } from "react";

import Loader from "../loader/Loader";
import ProductCard from "../productCard/ProductCard";
import UseAxios from "../customHook/UseAxios";

const ProductLists = () => {
  const {
    data: products,
    isLoading,
    error,
  } = UseAxios(`https://fakestoreapi.com/products`, "get");

  let productData = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  if (isLoading) {
    return <Loader />;
  }

  return <div className="row">{productData}</div>;
};

export default ProductLists;
