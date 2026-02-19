import Card from "../Card/Card";
import styles from "./Cardsgrid.module.css";

function Cardsgrid({ products }) {
  return (
    <div className={styles.cardsGrid}>
      {products.map((product) => (
        <Card title={product.title} price={product.price} img={product.image} />
      ))}
    </div>
  );
}

export default Cardsgrid;
