import styles from "./Nav.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { Link } from "react-router";

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
          <Link className={styles.navItems} to="/">
            Home
          </Link>
          <Link className={styles.navItems} to="/shop">
            Shop
          </Link>
          <Link className={`${styles.navItems} ${styles.cart}`} to="/cart">
            Cart
            {cartItems === 0 ? "" : <div>{cartItems}</div>}
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
