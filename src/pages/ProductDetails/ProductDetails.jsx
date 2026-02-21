import useFetchSingleProduct from "../../hooks/useFetchSingleProduct";
import styles from "./ProductDetails.module.css";
import btnStyles from "../../Components/Card/Card.module.css";
import { useOutletContext, useParams } from "react-router";
import Counter from "../../Components/Counter/Counter";
import { getQuantityOfItem } from "../../utils/cartUtils";

function ProductDetails() {
  const { productId } = useParams();
  const [product, error, loading] = useFetchSingleProduct(productId);
  const [cart, addToCart, removeFromCart] = useOutletContext();

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>An Error Occured : {error}</h1>;

  const quantityOfItem = getQuantityOfItem(cart, product);

  return (
    <div className={styles.productDetails}>
      <div className={styles.preview}>
        <img src={product.image} alt="product image" />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <h4 className={styles.productDescription}>{product.description}</h4>
        <div className={styles.btnAndCounter}>
          {quantityOfItem === 0 ? (
            <button
              onClick={() => {
                addToCart(product);
                console.log(product);
              }}
              className={btnStyles.btn}
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
    </div>
  );
}

export default ProductDetails;
