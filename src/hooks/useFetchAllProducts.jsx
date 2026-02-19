import { useState, useEffect } from "react";

function useFetchAllProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error " + res.status);
        return res.json();
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        setError(err);
        console.error("Error fetching products :", {
          message: err.message,
          name: err.message,
          stack: err.stack,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [products, error, loading];
}

export default useFetchAllProducts;
