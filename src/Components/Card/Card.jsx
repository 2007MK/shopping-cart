import styles from "./Card.module.css";

function Card({ product, addToCart }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={`${product.image}`} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{`${product.title}`}</h4>
        <h3 className={styles.price}>{`${product.price}`}</h3>
        <button
          onClick={() => {
            addToCart(product);
            console.log(product);
          }}
          className={styles.btn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
