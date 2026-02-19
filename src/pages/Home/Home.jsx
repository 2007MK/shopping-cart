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
          <Card name={"Sneakers"} price={699} img={sneak}></Card>
        </div>
      </div>
    </>
  );
}

export default Home;
