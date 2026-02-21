import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import Counter from "../../Components/Counter/Counter";
import { getCartValue } from "../../utils/cartUtils";
import { useState } from "react";

function Cart() {
  const [finishedCheckout, setFinishedCheckout] = useState(false);

  const [cart, addToCart, removeFromCart, totalItems, emptyCart] =
    useOutletContext();
  const cartValue = getCartValue(cart);

  if (finishedCheckout)
    return <h1>Thank You For Shopping with us! Have an Amazing Day!</h1>;
  if (cart.length === 0) return <h1>Please add some items to the cart!</h1>;

  return (
    <div className={styles.cartInfo}>
      <div className={styles.cartItems}>
        {cart.map((item) => {
          return (
            <div className={styles.cartItem} key={item.id}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={item.image} alt="product" />
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.titleAndPrice}>
                  <h4>{item.title}</h4>
                  <h4>{item.price}</h4>
                </div>
                <Counter
                  quantity={item.quantity}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  product={item}
                ></Counter>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.checkoutInfo}>
        <h1>Total Cost : ${cartValue}</h1>
        <button
          className={styles.checkoutBtn}
          onClick={() => {
            emptyCart();
            setFinishedCheckout(true);
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
