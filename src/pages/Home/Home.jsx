import Card from "../../Components/Card/Card.jsx";
import styles from "./Home.module.css";
import sneak from "../../assets/sneak.png";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.heroTitle}>
            The Home of <span>Performance</span> Sports Gear.
          </h1>
          <h4 className={styles.heroSubtitle}>
            Shop premium equipment designed for <span>speed</span>,{" "}
            <span>strength</span>, and <span>precision.</span>
          </h4>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={sneak} />
            </div>
            <div className={styles.info}>
              <h3>Sneakers</h3>
              <h3 className={styles.price}>$699</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
