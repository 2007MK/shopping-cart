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

  function emptyCart() {
    setCart([]);
  }

  return { cart, addToCart, removeFromCart, totalItems, emptyCart };
}

export default useCart;
