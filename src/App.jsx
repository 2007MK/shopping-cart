import Nav from "./Components/Navigation/Nav.jsx";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import useCart from "./hooks/useCart.jsx";

function App() {
  const { cart, addToCart, removeFromCart, totalItems, emptyCart } = useCart();
  return (
    <>
      <Nav cartItems={totalItems}></Nav>
      <Outlet
        context={[cart, addToCart, removeFromCart, totalItems, emptyCart]}
      ></Outlet>
    </>
  );
}

export default App;
