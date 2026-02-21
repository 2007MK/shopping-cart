import { useState, useEffect } from "react";

function useFetchSingleProduct(id) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error " + res.status);

        return res.json();
      })
      .then((result) => {
        setProduct(result);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return [product, error, loading];
}

export default useFetchSingleProduct;
