import { useState } from "react";
import { addItem, removeItem } from "../utils/cartUtils";

function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((cart) => addItem(cart, product));
  }

  function removeFromCart(product) {
    setCart((cart) => removeItem(cart, product));
  }

  return [cart, addToCart, removeFromCart];
}

export default useCart;
