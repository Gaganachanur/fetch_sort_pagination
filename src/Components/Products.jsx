import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { userContext } from "../Utils/userContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (e) {
        throw new Error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  console.log("Products", products);
  return (
    <>
    <userContext.Provider value="cards from product ">
      <h1>Products</h1>
      {loading ? <h2>Loading products .....</h2> : <Cards data={products} />}
      </userContext.Provider>
    </>
  );
}
