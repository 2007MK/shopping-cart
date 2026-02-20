import styles from "./Nav.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { Link } from "react-router";
import { getTotalItems } from "../../utils/cartUtils";

function Nav({ cartItems }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.logoAndMenu}>
        <div className={styles.logo}>
          <h1 className={styles.heading}>NEOPLAY</h1>
        </div>
        <button
          aria-expanded={navOpen}
          aria-label="Toggle Navigation"
          className={styles.menuBtn}
          onClick={() => setNavOpen(!navOpen)}
        >
          <Icon className={styles.icon} path={mdiMenu} size={styles.icon} />
        </button>
      </div>
      <nav className={`${styles.nav} ${navOpen ? styles.navVisible : ""}`}>
        <ul>
          <li className={styles.navItems}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItems}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={styles.navItems}>
            <Link className={styles.cart} to="/cart">
              Cart
              {cartItems === 0 ? "" : <div>{cartItems}</div>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
