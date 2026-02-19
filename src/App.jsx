import Nav from "./Components/Navigation/Nav.jsx";
import styles from "./App.module.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
