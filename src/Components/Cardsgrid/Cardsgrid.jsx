import Card from "../Card/Card";
import styles from "./Cardsgrid.module.css";

function Cardsgrid({ products, addToCart }) {
  return (
    <div className={styles.cardsGrid}>
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Cardsgrid;
