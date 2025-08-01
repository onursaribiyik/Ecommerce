import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/Frontend_Assets/cart_cross_icon.png";

import styles from "./index.module.css";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  console.log(getTotalCartAmount());
  return (
    <div className={styles["cartitems"]}>
      <div className={styles["cartitems-format-main"]}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div
                  className={
                    styles[("cartitems-format", "cartitems-format-main")]
                  }
                >
                  <img
                    src={e.image}
                    alt=""
                    className={styles["cartitems-product-icon"]}
                  />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className={styles["cartitems-quantity"]}>
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className={styles["cartitems-remove-icon"]}
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
        <div className={styles["cartitems-down"]}>
          <div className={styles["cartitems-total"]}>
            <h1>Cart Totals</h1>
            <div>
              <div className={styles["cartitems-total-item"]}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className={styles["cartitems-total-item"]}>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className={styles["cartitems-total-item"]}>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className={styles["cartitems-promocode"]}>
            <p>If you have a promo code, Enter it here</p>
            <div className={styles["cartitems-promobox"]}>
              <input type="text" placeholder="Enter Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
