import styles from "./Shop.module.css";
import { useOutletContext, useParams } from "react-router";
import useFetchAllProducts from "../../hooks/useFetchAllProducts";
import Cardsgrid from "../../Components/Cardsgrid/Cardsgrid";

function Shop() {
  const [cart, addToCart, removeFromCart] = useOutletContext();

  const [products, error, loading] = useFetchAllProducts();
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>An Error Occured : {error}</h1>;

  return (
    <Cardsgrid
      products={products}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    ></Cardsgrid>
  );
}

export default Shop;
