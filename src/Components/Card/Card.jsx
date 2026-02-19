import styles from "./Card.module.css";

function Card({ img, name, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={img} />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
