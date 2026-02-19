import styles from "./Nav.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logoAndMenu}>
        <div className={styles.logo}>
          <h1 className={styles.heading}>NEOPLAY</h1>
        </div>
        <button className={styles.menuBtn} onClick={() => setNavOpen(!navOpen)}>
          <Icon className={styles.icon} path={mdiMenu} size={styles.icon} />
        </button>
      </div>
      <nav className={`${styles.nav} ${navOpen ? styles.navVisible : ""}`}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
