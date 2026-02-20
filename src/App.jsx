import Nav from "./Components/Navigation/Nav.jsx";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import useCart from "./hooks/useCart.jsx";

function App() {
  const [cart, addToCart] = useCart();
  return (
    <>
      <Nav cartItems={cart.length}></Nav>
      <Outlet context={[cart, addToCart]}></Outlet>
    </>
  );
}

export default App;
