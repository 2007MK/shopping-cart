import styles from "./Card.module.css";
import { getQuantityOfItem } from "../../utils/cartUtils";
import Counter from "../Counter/Counter";

function Card({ product, addToCart, removeFromCart, cart = [] }) {
  const quantityOfItem = getQuantityOfItem(cart, product);
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={`${product.image}`} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{`${product.title}`}</h4>
        <h3 className={styles.price}>{`${product.price}`}</h3>
      </div>
      <div className={styles.btnAndCounter}>
        {quantityOfItem === 0 ? (
          <button
            onClick={() => {
              addToCart(product);
              console.log(product);
            }}
            className={styles.btn}
          >
            Add to Cart
          </button>
        ) : (
          <Counter
            quantity={quantityOfItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            product={product}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
