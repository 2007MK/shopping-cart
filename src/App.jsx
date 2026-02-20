import Nav from "./Components/Navigation/Nav.jsx";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import useCart from "./hooks/useCart.jsx";

function App() {
  const [cart, addToCart, removeFromCart, totalItems] = useCart();
  return (
    <>
      <Nav cartItems={totalItems}></Nav>
      <Outlet context={[cart, addToCart, removeFromCart]}></Outlet>
    </>
  );
}

export default App;
