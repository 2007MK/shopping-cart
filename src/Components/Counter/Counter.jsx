import styles from "./Counter.module.css";

function Counter({ quantity, addToCart, removeFromCart, product }) {
  return (
    <div className={styles.counter}>
      <button
        className={styles.leftBtn}
        onClick={() => removeFromCart(product)}
      >
        -
      </button>

      <p className={styles.quantity}>{quantity}</p>

      <button className={styles.rightBtn} onClick={() => addToCart(product)}>
        +
      </button>
    </div>
  );
}

export default Counter;
