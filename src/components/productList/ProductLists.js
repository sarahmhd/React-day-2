import { useEffect, useState } from "react";

import Loader from "../loader/Loader";
import ProductCard from "../productCard/ProductCard";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      });
  }, []);

  let data = products.map((product) => (
    <ProductCard key={product.key} product={product} />
  ));

  if (isLoading) {
    return <Loader />;
  }

  return <div className="row">{data}</div>;
};

export default ProductLists;
