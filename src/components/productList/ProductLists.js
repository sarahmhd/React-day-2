import { useEffect, useState } from "react";

import ProductCard from "../productCard/ProductCard";

const ProductLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let data = products.map((product) => (
    <ProductCard key={product.key} product={product} />
  ));

  return <div className="row">{data}</div>;
};

export default ProductLists;
