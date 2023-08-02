"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    };

    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 mb-4">
      {products &&
        products.map((prod) => <ProductCard key={prod.id} {...prod} />)}
    </div>
  );
};

export default ProductList;
