import { useState } from "react";
import { addItem, removeItem, getTotalItems } from "../utils/cartUtils";

function useCart() {
  const [cart, setCart] = useState([]);
  const totalItems = getTotalItems(cart);

  function addToCart(product) {
    setCart((cart) => addItem(cart, product));
  }

  function removeFromCart(product) {
    setCart((cart) => removeItem(cart, product));
  }

  return [cart, addToCart, removeFromCart, totalItems];
}

export default useCart;
